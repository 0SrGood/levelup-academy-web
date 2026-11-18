/*
 * Mascotes animados da Level Up Academy — controlador sem dependências.
 * Funciona em HTML puro e em React (veja README.md).
 *
 *   LuMascotes.montar(elemento, { mascote: 'roblox-studio', reacao: 'espera' })
 *   LuMascotes.reagir('acerto')                       // todos os mascotes na tela
 *   LuMascotes.reagir('erro', { mascote: 'ui-design' }) // só um
 *   window.dispatchEvent(new CustomEvent('lu-mascote', { detail: { reacao: 'conclusao' } }))
 */
(function () {
  'use strict'

  var script = document.currentScript
  var BASE = script && script.src ? new URL('.', script.src).href : '/brand/mascotes/animacoes/'

  var MASCOTES = {
    nivo: { nome: 'Nivo', imagem: '../../mascote-nivo.webp' },
    'roblox-studio': { nome: 'Pino', trilha: 'Roblox Studio' },
    'programacao-luau': { nome: 'Chavi', trilha: 'Programação Luau' },
    'criacao-modelagem-3d': { nome: 'Bisel', trilha: 'Criação + Modelagem 3D' },
    'ui-design': { nome: 'Mosa', trilha: 'UI Design' },
    'animacao': { nome: 'Flipa', trilha: 'Animação' },
  }
  var APELIDOS = { pino: 'roblox-studio', chavi: 'programacao-luau', bisel: 'criacao-modelagem-3d', mosa: 'ui-design', flipa: 'animacao' }

  /* Reações contínuas ficam até a próxima; as outras tocam uma vez e voltam à anterior. */
  var REACOES = {
    espera: { duracao: 0, texto: '%s está esperando' },
    estudo: { duracao: 0, texto: '%s está estudando com você' },
    acerto: { duracao: 1250, texto: '%s comemora o acerto' },
    erro: { duracao: 1800, texto: '%s diz: tudo bem, tente de novo' },
    conclusao: { duracao: 2600, texto: '%s comemora a conclusão' },
    // Ações extras
    ola: { duracao: 1800, texto: '%s dá oi' },
    animado: { duracao: 1600, texto: '%s está animado' },
    carinho: { duracao: 2000, texto: '%s manda carinho' },
    danca: { duracao: 2400, texto: '%s está dançando' },
    pensar: { duracao: 2600, texto: '%s está pensando' },
    surpresa: { duracao: 1200, texto: '%s ficou surpreso' },
    determinado: { duracao: 1800, texto: '%s está determinado' },
    triste: { duracao: 2400, texto: '%s ficou tristinho' },
    sono: { duracao: 3200, texto: '%s está com sono' },
  }
  var SINONIMOS = {
    idle: 'espera', study: 'estudo', estudar: 'estudo', correct: 'acerto', success: 'acerto', certo: 'acerto',
    wrong: 'erro', errado: 'erro', complete: 'conclusao', conclusão: 'conclusao', concluir: 'conclusao', celebrate: 'conclusao',
    hello: 'ola', oi: 'ola', olá: 'ola', welcome: 'ola', excited: 'animado', love: 'carinho', like: 'carinho', amor: 'carinho', dance: 'danca', dança: 'danca',
    think: 'pensar', pensando: 'pensar', surprise: 'surpresa', focus: 'determinado', foco: 'determinado', sad: 'triste', sleep: 'sono', dormir: 'sono',
  }

  var reduzido = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false }
  var montados = new Set()

  function nomeReacao(nome) {
    var n = String(nome || '').toLowerCase()
    n = SINONIMOS[n] || n
    return REACOES[n] ? n : 'espera'
  }
  function nomeMascote(nome) {
    var n = String(nome || '').toLowerCase()
    return MASCOTES[n] ? n : APELIDOS[n] || 'roblox-studio'
  }
  function semMovimento(el) {
    return reduzido.matches || el.classList.contains('lu-mascote--estatico') || el.classList.contains('lu-mascote--sem-movimento')
  }
  function sorte(min, max) { return min + Math.random() * (max - min) }

  function simbolos(fx, lista, extra) {
    lista.forEach(function (s, i) {
      var p = document.createElement('span')
      p.className = 'lu-fx-simbolo' + (extra || '')
      p.textContent = s.t
      p.style.cssText = '--px:' + s.px + '%;--py:' + (s.py || 18) + '%;--x:' + (s.x || 0) + '%;--y:' + (s.y || -160) + '%;--r:' + (s.r || 0) + 'deg;--s:' + (s.s || 1) +
        ';--lu-atraso:' + (s.d || 0) + 's;--dur:' + (s.dur || 1.4) + 's' + (s.c ? ';--lu-cor-fx:' + s.c : '')
      fx.appendChild(p)
    })
  }

  /* Efeitos (brilhos, confete, balão, bolhas) com posições sorteadas a cada vez. */
  function efeitos(fx, reacao) {
    fx.textContent = ''
    var i, p
    if (reacao === 'estudo') {
      p = document.createElement('span'); p.className = 'lu-fx-balao'
      p.innerHTML = '<i></i><i></i><i></i>'
      fx.appendChild(p)
    } else if (reacao === 'acerto') {
      for (i = 0; i < 8; i++) {
        var a = (i / 8) * Math.PI * 2 + sorte(-.25, .25), d = sorte(48, 66)
        p = document.createElement('span'); p.className = 'lu-fx-brilho'
        p.style.cssText = '--x:' + (Math.cos(a) * d * 6).toFixed(1) + '%;--y:' + (Math.sin(a) * d * 6 - 120).toFixed(1) + '%;--s:' + sorte(.7, 1.2).toFixed(2) +
          ';--lu-atraso:' + (i % 3) * .04 + 's' + (i % 2 ? ';--lu-cor-fx:var(--lu-cor)' : '')
        fx.appendChild(p)
      }
    } else if (reacao === 'erro') {
      p = document.createElement('span'); p.className = 'lu-fx-abraco'; fx.appendChild(p)
      for (i = 0; i < 3; i++) {
        p = document.createElement('span'); p.className = 'lu-fx-bolha'
        p.style.cssText = '--x:' + ((i - 1) * 260 + sorte(-60, 60)).toFixed(0) + '%;--y:' + sorte(-620, -480).toFixed(0) + '%;--lu-atraso:' + i * .12 + 's'
        fx.appendChild(p)
      }
    } else if (reacao === 'animado') {
      for (i = 0; i < 6; i++) {
        var ang = sorte(-2.6, -.5)
        p = document.createElement('span'); p.className = 'lu-fx-brilho'
        p.style.cssText = '--x:' + (Math.cos(ang) * 330).toFixed(0) + '%;--y:' + (Math.sin(ang) * 330 - 40).toFixed(0) + '%;--s:' + sorte(.5, .9).toFixed(2) + ';--lu-atraso:' + (i * .17 - .3).toFixed(2) + 's' + (i % 2 ? ';--lu-cor-fx:var(--lu-cor)' : '')
        fx.appendChild(p)
      }
    } else if (reacao === 'carinho') {
      simbolos(fx, [
        { t: '♥', px: 22, py: 22, x: -40, r: -15, d: .15, c: '#ff5a7a' },
        { t: '♥', px: 80, py: 14, x: 30, r: 12, s: .75, d: .45, c: '#ff5a7a' },
        { t: '♥', px: 50, py: 4, x: 0, r: 0, s: .6, d: .8, c: '#ff8fa6' },
      ])
    } else if (reacao === 'danca') {
      simbolos(fx, [
        { t: '♪', px: 84, py: 12, x: 40, r: 20, d: .1, dur: 1.2 },
        { t: '♫', px: 16, py: 16, x: -40, r: -20, d: .7, dur: 1.2, c: 'var(--lu-cor2)' },
        { t: '♪', px: 82, py: 18, x: 30, r: 15, s: .8, d: 1.3, dur: 1.1 },
      ])
    } else if (reacao === 'pensar') {
      simbolos(fx, [{ t: '?', px: 82, py: 6, x: 10, y: -40, r: 12, d: .25, dur: 2.2 }], ' lu-fx-simbolo--pop')
    } else if (reacao === 'surpresa') {
      simbolos(fx, [{ t: '!', px: 78, py: 2, s: 1.2, d: .15, dur: 1 }], ' lu-fx-simbolo--pop')
    } else if (reacao === 'determinado') {
      for (i = 0; i < 4; i++) {
        p = document.createElement('span'); p.className = 'lu-fx-fumaca'
        p.style.cssText = '--px:' + (40 + (i % 2) * 20) + '%;--x:' + ((i % 2 ? 1 : -1) * sorte(20, 60)).toFixed(0) + '%;--lu-atraso:' + (.25 + i * .22).toFixed(2) + 's'
        fx.appendChild(p)
      }
    } else if (reacao === 'triste') {
      for (i = 0; i < 4; i++) {
        p = document.createElement('span'); p.className = 'lu-fx-gota'
        p.style.cssText = '--px:' + (i % 2 ? 66 : 30) + '%;--x:' + (i % 2 ? 140 : -140) + '%;--lu-atraso:' + (.35 + i * .35).toFixed(2) + 's'
        fx.appendChild(p)
      }
    } else if (reacao === 'sono') {
      simbolos(fx, [
        { t: 'Z', px: 74, py: 12, x: 40, y: -120, s: .7, d: .3, dur: 1.6, c: '#64748b' },
        { t: 'Z', px: 76, py: 10, x: 55, y: -140, s: .9, d: 1, dur: 1.6, c: '#64748b' },
        { t: 'Z', px: 78, py: 8, x: 70, y: -160, s: 1.1, d: 1.7, dur: 1.4, c: '#64748b' },
      ])
    } else if (reacao === 'conclusao') {
      var cores = ['var(--lu-cor)', 'var(--lu-cor2)', '#ffffff', '#facc15']
      for (i = 0; i < 16; i++) {
        var lado = i % 2 ? 1 : -1
        p = document.createElement('span'); p.className = 'lu-fx-confete'
        p.style.cssText = '--x:' + (lado * sorte(250, 850)).toFixed(0) + '%;--y:' + sorte(-380, -180).toFixed(0) + '%;--r:' + (lado * sorte(120, 360)).toFixed(0) + 'deg' +
          ';--lu-atraso:' + sorte(0, .25).toFixed(2) + 's;--lu-cor-fx:' + cores[i % cores.length]
        fx.appendChild(p)
      }
    }
  }

  /* Rig: o mascote recortado em peças (mascotes-rig.js + rig/<mascote>/*.webp).
   * Corpo, braços e pernas são o desenho original; olhos fechados e boca aberta são formas simples na cor do traço. */
  function montarRig(el, corpo, slug) {
    var R = window.LuMascotesRig && window.LuMascotesRig[slug]
    if (!R || el.classList.contains('lu-mascote--estatico')) return
    var rig = document.createElement('span')
    rig.className = 'lu-rig'
    rig.style.width = (R.w >= R.h ? 100 : 100 * R.w / R.h) + '%'
    rig.style.aspectRatio = R.w + ' / ' + R.h
    rig.style.setProperty('--lu-escuro', R.escuro)
    var imagens = []
    function caixa(alvo, nome, rel) {
      var p = R.pecas[nome], b = rel ? R.pecas[rel] : { x: 0, y: 0, w: 100, h: 100 }
      alvo.style.left = ((p.x - b.x) / b.w * 100) + '%'
      alvo.style.top = ((p.y - b.y) / b.h * 100) + '%'
      alvo.style.width = (p.w / b.w * 100) + '%'
      alvo.style.height = (p.h / b.h * 100) + '%'
      alvo.style.transformOrigin = (p.ox == null ? 50 : p.ox) + '% ' + (p.oy == null ? 50 : p.oy) + '%'
    }
    function imagem(nome) {
      var im = new Image(); im.alt = ''; im.draggable = false; im.decoding = 'async'
      im.src = BASE + 'rig/' + slug + '/' + nome + '.webp'
      imagens.push(im); return im
    }
    function peca(nome, classe, pai, rel) {
      var s = document.createElement('span'); s.className = 'lu-p ' + classe
      if (/-e$/.test(nome)) s.style.setProperty('--s', 1)
      if (/-d$/.test(nome)) s.style.setProperty('--s', -1)
      caixa(s, nome, rel); s.appendChild(imagem(nome)); pai.appendChild(s); return s
    }
    var ordem = R.frente ? ['perna-e', 'perna-d', 'corpo', 'braco-e', 'braco-d'] : ['braco-e', 'braco-d', 'perna-e', 'perna-d', 'corpo']
    ordem.forEach(function (n) { peca(n, 'lu-p-' + n.replace(/-[ed]$/, '') + ' lu-p-' + n, rig) })
    var rosto = document.createElement('span'); rosto.className = 'lu-rosto'; rig.appendChild(rosto)
    ;['e', 'd'].forEach(function (l) {
      var olho = document.createElement('span'); olho.className = 'lu-p lu-olho lu-olho-' + l; olho.style.setProperty('--s', l === 'e' ? 1 : -1); caixa(olho, 'olho-' + l)
      var aberto = document.createElement('span'); aberto.className = 'lu-olho__aberto'
      aberto.appendChild(imagem('olho-' + l))
      var pup = document.createElement('span'); pup.className = 'lu-pupila'; caixa(pup, 'pupila-' + l, 'olho-' + l); pup.appendChild(imagem('pupila-' + l))
      aberto.appendChild(pup)
      olho.appendChild(aberto)
      olho.insertAdjacentHTML('beforeend', '<i class="lu-olho__fechado"></i><i class="lu-olho__feliz"></i>')
      rosto.appendChild(olho)
    })
    peca('sobrancelha-e', 'lu-p-sobrancelha lu-p-sobrancelha-e', rosto)
    peca('sobrancelha-d', 'lu-p-sobrancelha lu-p-sobrancelha-d', rosto)
    var boca = peca('boca', 'lu-p-boca', rosto)
    boca.insertAdjacentHTML('beforeend', '<i class="lu-boca__aberta"></i>')
    corpo.appendChild(rig)
    // Só troca a imagem inteira pelo rig quando todas as peças carregaram (sem piscar).
    Promise.all(imagens.map(function (im) { return im.decode ? im.decode() : Promise.resolve() })).then(function () {
      if (!el.classList.contains('lu-mascote--estatico')) el.classList.add('lu-mascote--rig')
    }, function () { rig.remove() })
  }

  function montar(el, opcoes) {
    if (typeof el === 'string') el = document.querySelector(el)
    if (!el) return null
    if (el.__luMascote) return el.__luMascote
    opcoes = opcoes || {}
    var slug = nomeMascote(opcoes.mascote || el.getAttribute('data-mascote') || el.getAttribute('data-lu-mascote'))
    var info = MASCOTES[slug]
    el.classList.add('lu-mascote')
    el.setAttribute('data-mascote', slug)
    if (opcoes.tamanho) el.style.setProperty('--lu-tamanho', typeof opcoes.tamanho === 'number' ? opcoes.tamanho + 'px' : opcoes.tamanho)
    if (opcoes.estatico) el.classList.add('lu-mascote--estatico')

    /* Mantém um <img> já existente (fallback estático do HTML); senão cria um. */
    var img = el.querySelector('img')
    if (!img) {
      img = document.createElement('img')
      img.src = BASE + (info.imagem || slug + '.webp')
      img.onerror = function () { img.onerror = null; img.src = BASE + '../' + slug + '.png' }
    }
    img.alt = ''
    img.decoding = 'async'
    img.draggable = false
    var corpo = el.querySelector('.lu-mascote__corpo')
    if (!corpo) { corpo = document.createElement('span'); corpo.className = 'lu-mascote__corpo'; corpo.appendChild(img) }
    var sombra = el.querySelector('.lu-mascote__sombra') || document.createElement('span')
    sombra.className = 'lu-mascote__sombra'
    var fx = el.querySelector('.lu-mascote__fx') || document.createElement('span')
    fx.className = 'lu-mascote__fx'
    el.textContent = ''
    el.append(sombra, corpo, fx)
    if (opcoes.rig !== false) montarRig(el, corpo, slug)
    el.setAttribute('role', 'img')

    var base = 'espera'      // reação contínua atual (espera ou estudo)
    var atual = 'espera'
    var voltar = 0, gesto = 0, limpaGesto = 0
    var visivel = true

    function rotular(r) { el.setAttribute('aria-label', REACOES[r].texto.replace('%s', info.nome) + (info.trilha ? ' (mascote da trilha ' + info.trilha + ')' : ' (mascote da Level Up)')) }

    function aplicar(r) {
      clearTimeout(voltar); clearTimeout(limpaGesto)
      el.removeAttribute('data-gesto')
      atual = r
      // Reinicia a animação mesmo se a reação for a mesma (ex.: dois acertos seguidos).
      el.removeAttribute('data-reacao')
      void el.offsetWidth
      el.setAttribute('data-reacao', r)
      rotular(r)
      if (semMovimento(el)) { fx.textContent = '' } else { efeitos(fx, r) }
      var dur = REACOES[r].duracao
      if (dur) {
        var ritmo = parseFloat(getComputedStyle(el).getPropertyValue('--lu-ritmo')) || 1
        voltar = setTimeout(function () { aplicar(base) }, semMovimento(el) ? 900 : dur * ritmo + 120)
      }
      agendarGesto()
      el.dispatchEvent(new CustomEvent('lu-mascote-reagiu', { bubbles: true, detail: { mascote: slug, reacao: r } }))
    }

    /* Na espera, um gesto pequeno a cada 8–14 s mantém o mascote vivo (como na UTI). */
    function agendarGesto() {
      clearTimeout(gesto)
      if (atual !== 'espera' || opcoes.gestos === false) return
      gesto = setTimeout(function () {
        if (atual === 'espera' && visivel && !document.hidden && !semMovimento(el)) {
          el.setAttribute('data-gesto', ['olhar', 'olhar', 'piscar', 'pulinho'][Math.floor(Math.random() * 4)])
          limpaGesto = setTimeout(function () { el.removeAttribute('data-gesto') }, 1500)
        }
        agendarGesto()
      }, sorte(8000, 14000))
    }

    var observador = 'IntersectionObserver' in window ? new IntersectionObserver(function (e) { visivel = !!(e[0] && e[0].isIntersecting) }, { threshold: .3 }) : null
    if (observador) observador.observe(el)

    var TOQUES = ['ola', 'animado', 'carinho', 'danca', 'surpresa', 'acerto']
    function tocar() { reagir(TOQUES[Math.floor(Math.random() * TOQUES.length)]) }
    if (opcoes.tocavel || el.hasAttribute('data-tocavel')) {
      el.setAttribute('data-tocavel', '')
      el.tabIndex = 0
      el.addEventListener('click', tocar)
      el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); tocar() } })
    }

    function reagir(nome) {
      var r = nomeReacao(nome)
      if (!REACOES[r].duracao) base = r
      aplicar(r)
    }

    var api = {
      elemento: el,
      mascote: slug,
      reagir: reagir,
      get reacao() { return atual },
      destruir: function () {
        clearTimeout(voltar); clearTimeout(gesto); clearTimeout(limpaGesto)
        if (observador) observador.disconnect()
        montados.delete(api); delete el.__luMascote
      },
    }
    el.__luMascote = api
    montados.add(api)
    reagir(opcoes.reacao || el.getAttribute('data-reacao') || 'espera')
    return api
  }

  function reagir(nome, filtro) {
    var alvo = filtro && filtro.mascote ? nomeMascote(filtro.mascote) : null
    montados.forEach(function (m) {
      if (!m.elemento.isConnected) return m.destruir()
      if (!alvo || m.mascote === alvo) m.reagir(nome)
    })
  }

  function iniciar(raiz) {
    (raiz || document).querySelectorAll('[data-lu-mascote]').forEach(function (el) { montar(el) })
  }

  window.addEventListener('lu-mascote', function (e) {
    var d = e.detail || {}
    reagir(typeof d === 'string' ? d : d.reacao, d)
  })

  window.LuMascotes = { montar: montar, reagir: reagir, iniciar: iniciar, mascotes: MASCOTES, reacoes: Object.keys(REACOES), base: BASE }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { iniciar() })
  else iniciar()
})()
