/* ============================================================
   IA PRÁCTICA — main.js v1.0
   JS propio, sin librerías externas. Todo es progresivo:
   el sitio funciona sin JS; el JS añade mejoras.
   ============================================================ */
(function () {
  'use strict';

  /* ============ CONFIGURACIÓN — EDITA ESTOS VALORES ============ */
  var CONFIG = {
    // Pega tu ID de editor de AdSense cuando lo tengas: 'ca-pub-XXXXXXXXXXXXXXXX'
    // Mientras esté vacío, los espacios publicitarios permanecen ocultos.
    ADSENSE_CLIENT_ID: '',

    // ID de Google Analytics 4 (opcional): 'G-XXXXXXXXXX'
    ANALYTICS_ID: ''
  };
  /* ============================================================= */

  var CONSENT_KEY = 'iap_consent_v1';

  /* ---------- Utilidades ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------- Año dinámico ---------- */
  $all('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Navegación móvil ---------- */
  var navToggle = $('.nav-toggle');
  var nav = $('#site-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navToggle.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Cerrar al pulsar un enlace
    $all('a', nav).forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Botones "Copiar" en bloques de prompt ---------- */
  $all('.prompt').forEach(function (block) {
    var pre = $('pre', block);
    if (!pre) return;
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'prompt-copy';
    btn.textContent = 'Copiar';
    btn.setAttribute('aria-label', 'Copiar el texto del ejemplo');
    btn.addEventListener('click', function () {
      var text = pre.textContent;
      function done() {
        btn.textContent = '¡Copiado!';
        setTimeout(function () { btn.textContent = 'Copiar'; }, 1800);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallback(); });
      } else { fallback(); }
      function fallback() {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); done(); } catch (e) { /* sin portapapeles */ }
        document.body.removeChild(ta);
      }
    });
    block.appendChild(btn);
  });

  /* ============================================================
     CONSENTIMIENTO DE COOKIES (estilo Google Consent Mode)
     - necessary: siempre activas (no se pueden desactivar)
     - analytics:  medición (GA4)
     - marketing:  publicidad personalizada (AdSense)
     ============================================================ */
  var banner = $('#cookie-banner');
  var modal = $('#cookie-modal');

  // Consent Mode: por defecto todo denegado hasta que el usuario elija
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied'
  });

  function getConsent() {
    try {
      var raw = localStorage.getItem(CONSENT_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function saveConsent(consent) {
    consent.necessary = true;
    consent.savedAt = new Date().toISOString();
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify(consent)); } catch (e) { /* almacenamiento no disponible */ }
    applyConsent(consent);
    hideBanner();
    hideModal();
  }

  function applyConsent(consent) {
    gtag('consent', 'update', {
      ad_storage: consent.marketing ? 'granted' : 'denied',
      ad_user_data: consent.marketing ? 'granted' : 'denied',
      ad_personalization: consent.marketing ? 'granted' : 'denied',
      analytics_storage: consent.analytics ? 'granted' : 'denied'
    });
    if (consent.marketing) loadAds();
    if (consent.analytics) loadAnalytics();
  }

  function showBanner() { if (banner) banner.classList.add('show'); }
  function hideBanner() { if (banner) banner.classList.remove('show'); }
  function showModal() {
    if (!modal) return;
    syncModalWithConsent();
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function hideModal() {
    if (!modal) return;
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  function syncModalWithConsent() {
    var c = getConsent() || { analytics: false, marketing: false };
    var a = $('#consent-analytics');
    var m = $('#consent-marketing');
    if (a) a.checked = !!c.analytics;
    if (m) m.checked = !!c.marketing;
  }

  // Botones del banner
  var btnAccept = $('#cookie-accept');
  var btnReject = $('#cookie-reject');
  var btnCustomize = $('#cookie-customize');
  if (btnAccept) btnAccept.addEventListener('click', function () {
    saveConsent({ analytics: true, marketing: true });
  });
  if (btnReject) btnReject.addEventListener('click', function () {
    saveConsent({ analytics: false, marketing: false });
  });
  if (btnCustomize) btnCustomize.addEventListener('click', showModal);

  // Botones del modal
  var btnSave = $('#cookie-save');
  var btnClose = $('#cookie-close');
  if (btnSave) btnSave.addEventListener('click', function () {
    saveConsent({
      analytics: $('#consent-analytics') ? $('#consent-analytics').checked : false,
      marketing: $('#consent-marketing') ? $('#consent-marketing').checked : false
    });
  });
  if (btnClose) btnClose.addEventListener('click', hideModal);
  if (modal) modal.addEventListener('click', function (e) {
    if (e.target === modal) hideModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('show')) hideModal();
  });

  // Enlace "Preferencias de cookies" del footer
  $all('[data-open-cookie-settings]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      showModal();
    });
  });

  // Mostrar banner solo si no hay decisión guardada
  if (!getConsent()) {
    // Pequeño retardo para no tapar el primer pantallazo
    setTimeout(showBanner, 900);
  } else {
    applyConsent(getConsent());
  }

  /* ============================================================
     PUBLICIDAD (Google AdSense)
     Solo se carga si: hay ID configurado + el usuario aceptó
     cookies de marketing. Los espacios son responsivos.
     ============================================================ */
  var adsLoaded = false;
  function loadAds() {
    if (adsLoaded) return;
    if (!CONFIG.ADSENSE_CLIENT_ID) return; // sin configurar: no se muestra nada
    adsLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(CONFIG.ADSENSE_CLIENT_ID);
    s.setAttribute('crossorigin', 'anonymous');
    s.onload = insertAdUnits;
    s.onerror = function () { /* el bloqueador de anuncios u otro error: se ignora en silencio */ };
    document.head.appendChild(s);
  }

  function insertAdUnits() {
    $all('.ad-slot').forEach(function (slot) {
      if (slot.dataset.filled) return;
      slot.dataset.filled = 'true';
      var ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.display = 'block';
      ins.setAttribute('data-ad-client', CONFIG.ADSENSE_CLIENT_ID);
      ins.setAttribute('data-ad-format', slot.dataset.adFormat || 'auto');
      ins.setAttribute('data-full-width-responsive', 'true');
      if (slot.dataset.adSlot) ins.setAttribute('data-ad-slot', slot.dataset.adSlot);
      var label = document.createElement('span');
      label.className = 'ad-label';
      label.textContent = 'Publicidad';
      slot.innerHTML = '';
      slot.removeAttribute('aria-hidden');
      slot.appendChild(label);
      slot.appendChild(ins);
      slot.classList.add('ad-visible');
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { /* noop */ }
    });
  }

  // Modo demostración: ?demo-ads muestra los espacios etiquetados
  if (/[?&#]demo-ads/.test(window.location.href)) {
    document.body.classList.add('demo-ads');
  }

  /* ============================================================
     ANALÍTICA (Google Analytics 4) — opcional
     ============================================================ */
  var analyticsLoaded = false;
  function loadAnalytics() {
    if (analyticsLoaded || !CONFIG.ANALYTICS_ID) return;
    analyticsLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(CONFIG.ANALYTICS_ID);
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', CONFIG.ANALYTICS_ID, { anonymize_ip: true });
  }

  /* ============================================================
     FORMULARIOS: validación + honeypot anti-spam
     ============================================================ */
  $all('form[data-validate]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var valid = true;

      // Honeypot: si un bot lo rellenó, fingimos éxito y no enviamos nada
      var hp = form.querySelector('[name="empresa_fax"]');
      if (hp && hp.value) {
        e.preventDefault();
        showFormMessage(form, '¡Gracias! Te contactaremos pronto.', true);
        return;
      }

      $all('[required]', form).forEach(function (field) {
        var wrapper = field.closest('.field');
        var value = (field.value || '').trim();
        var fieldValid = value.length > 0;
        if (fieldValid && field.type === 'email') {
          fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
        }
        if (wrapper) wrapper.classList.toggle('invalid', !fieldValid);
        field.setAttribute('aria-invalid', fieldValid ? 'false' : 'true');
        if (!fieldValid) valid = false;
      });

      if (!valid) {
        e.preventDefault();
        var firstInvalid = form.querySelector('.field.invalid input, .field.invalid textarea, .field.invalid select');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Si el endpoint aún es el marcador de posición, no enviamos nada real
      var action = form.getAttribute('action') || '';
      if (action.indexOf('TU_CODIGO') !== -1 || action === '#') {
        e.preventDefault();
        showFormMessage(form, 'Modo demostración: configura tu endpoint de formulario (ver README) para recibir mensajes reales.', false);
      }
      // Si hay un endpoint real configurado, el envío continúa normalmente.
    });
  });

  function showFormMessage(form, text, ok) {
    // Reutiliza el contenedor accesible (role="status") si la página lo trae;
    // si no existe, lo crea para que el mensaje siempre se anuncie a lectores de pantalla.
    var box = form.querySelector('[data-form-note]') || form.querySelector('.form-feedback');
    if (!box) {
      box = document.createElement('p');
      box.setAttribute('role', 'status');
      form.appendChild(box);
    }
    box.textContent = text;
    box.classList.add('form-feedback');
    box.classList.toggle('form-feedback--ok', !!ok);
    box.classList.toggle('form-feedback--warn', !ok);
  }

  // ---- Filter buttons (tutorials index) ----
  var filterBtns = $all('.filter-btn');
  var grid = $('#tutorial-grid');
  if (filterBtns.length && grid) {
    var cards = $all('.card[data-category]', grid);
    var noResults = $('#no-results');
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) {
          b.classList.remove('is-active');
          b.classList.add('btn--ghost');
        });
        btn.classList.add('is-active');
        btn.classList.remove('btn--ghost');
        var f = btn.getAttribute('data-filter');
        var visible = 0;
        cards.forEach(function (card) {
          var show = f === 'all' || card.getAttribute('data-category') === f;
          card.hidden = !show;
          if (show) visible++;
        });
        if (noResults) noResults.hidden = visible !== 0;
      });
    });
    // Activar filtro desde el hash (ej. /tutoriales/#marketing desde la portada)
    (function () {
      var h = (location.hash || '').replace('#', '');
      if (!h || h === 'all') return;
      filterBtns.forEach(function (btn) {
        if (btn.getAttribute('data-filter') === h) btn.click();
      });
    })();
  }

  /* ============================================================
     MOTION (criterio Emil: poco, con propósito, respeta
     prefers-reduced-motion)
     1. Hero: el prompt de ejemplo se "escribe" solo una vez;
        cambiar de ejemplo con los chips es instantáneo.
     2. Reveal sutil al hacer scroll en tarjetas y pasos.
     ============================================================ */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- 1. Compositor del hero: el prompt se "escribe" solo una vez; ----
  //         los chips cambian de ejemplo al instante (acción repetible: sin tipeo).
  var pdText = $('#pd-text');
  var pdResponse = $('#pd-response');
  var pdCaret = $('#pd-caret');
  var pdReply = $('#pd-reply');
  var pdLink = $('#pd-link');
  var pdSend = $('#pd-send');
  var pdChips = $all('#pd-chips .chip');
  if (pdText && pdResponse) {
    var fullText = pdText.textContent;
    var demoStarted = false;
    var typingTimer = null;
    var respTimer = null;

    function stopTyping() {
      clearInterval(typingTimer);
      clearTimeout(respTimer);
      if (pdCaret) pdCaret.style.display = 'none';
    }

    function runDemo() {
      if (demoStarted) return;
      demoStarted = true;
      if (reduceMotion) {
        if (pdCaret) pdCaret.style.display = 'none';
        pdResponse.classList.add('show');
        return;
      }
      pdText.textContent = '';
      var i = 0;
      typingTimer = setInterval(function () {
        i += 1;
        pdText.textContent = fullText.slice(0, i);
        if (i >= fullText.length) {
          stopTyping();
          respTimer = setTimeout(function () { pdResponse.classList.add('show'); }, 450);
        }
      }, 22);
    }

    // Chips: sin JS son enlaces a la categoría; con JS cambian el ejemplo
    pdChips.forEach(function (chip) {
      chip.addEventListener('click', function (e) {
        e.preventDefault();
        stopTyping();
        demoStarted = true;
        pdChips.forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
        pdResponse.classList.remove('show');
        pdText.textContent = chip.getAttribute('data-prompt');
        pdReply.textContent = chip.getAttribute('data-reply');
        pdLink.setAttribute('href', chip.getAttribute('data-href'));
        if (pdSend) pdSend.setAttribute('href', chip.getAttribute('data-href'));
        // Doble rAF: asegura que el estado oculto se pinte y la transición se dispare
        requestAnimationFrame(function () {
          requestAnimationFrame(function () { pdResponse.classList.add('show'); });
        });
      });
    });

    var demoBox = pdText.closest('.composer');
    if ('IntersectionObserver' in window && demoBox) {
      var dio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { runDemo(); dio.disconnect(); }
        });
      }, { threshold: 0.35 });
      dio.observe(demoBox);
    } else {
      runDemo();
    }
  }

  // ---- 2. Reveal sutil en tarjetas, categorías y pasos ----
  /* Los elementos son visibles por defecto (CSS). La clase .revealed solo
     dispara la animación de entrada (.5s) cuando el elemento entra al
     viewport por primera vez: el contenido nunca puede quedar invisible. */
  var revealEls = $all('.card, .cat-card, .step, .lesson, .proof-item');
  if (revealEls.length && 'IntersectionObserver' in window && !reduceMotion) {
    revealEls.forEach(function (el) { el.setAttribute('data-reveal', ''); });
    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('revealed');
          rio.unobserve(en.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    /* Lo que ya está en la pantalla inicial se deja visible tal cual;
       solo lo que está más abajo se anima al entrar al viewport. */
    var vh = window.innerHeight || 800;
    revealEls.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (!(r.top < vh * 0.94 && r.bottom > 0)) rio.observe(el);
    });
  }

})();
