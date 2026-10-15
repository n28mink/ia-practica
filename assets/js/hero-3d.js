/* Hero 3D — IA Práctica
 * Un momento 3D suave en el hero: una forma redondeada (toro) en el
 * verde esmeralda de la marca, flotando con rotación lenta y un leve
 * parallax con el mouse. Liviano: sin sombras, sin post-procesado,
 * pixelRatio limitado, y la animación se pausa cuando la pestaña no
 * está visible o el hero sale del viewport. Respeta
 * prefers-reduced-motion (deja un frame estático).
 *
 * Para ajustar la velocidad edita VELOCIDAD abajo:
 *   1   = velocidad actual (lenta)
 *   0.5 = la mitad de rápido
 *   2   = el doble de rápido
 */
(function () {
  'use strict';

  var VELOCIDAD = 1;

  var hero = document.querySelector('.hero');
  var canvas = document.getElementById('hero3d');
  if (!hero || !canvas || !window.THREE) return;

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  } catch (e) {
    return; /* Sin WebGL: el hero queda como estaba, sin 3D. */
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setClearColor(0x000000, 0);

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
  camera.position.set(0, 0, 7);

  /* Iluminación suave */
  scene.add(new THREE.AmbientLight(0xffffff, 0.8));
  var key = new THREE.DirectionalLight(0xffffff, 0.85);
  key.position.set(4, 6, 6);
  scene.add(key);
  var rim = new THREE.PointLight(0x8b7cf6, 0.5, 40); /* violeta sutil de la paleta */
  rim.position.set(-5, -2, 4);
  scene.add(rim);

  /* La forma: toro redondeado en el esmeralda de la marca */
  var group = new THREE.Group();
  scene.add(group);
  var shape = new THREE.Mesh(
    new THREE.TorusGeometry(1.15, 0.44, 40, 100),
    new THREE.MeshStandardMaterial({ color: 0x0d9488, roughness: 0.32, metalness: 0.15 })
  );
  group.add(shape);
  group.rotation.set(0.45, 0, 0.22);

  /* Parallax suave con el mouse (lerp para que no sea brusco) */
  var tx = 0, ty = 0, mx = 0, my = 0;
  window.addEventListener('pointermove', function (e) {
    tx = e.clientX / window.innerWidth - 0.5;
    ty = e.clientY / window.innerHeight - 0.5;
  }, { passive: true });

  var baseY = 0;
  function layout() {
    var w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    /* En móvil la forma va centrada y más pequeña; en escritorio a la derecha. */
    if (w < 760) {
      group.position.set(0, 0.55, 0);
      baseY = 0.55;
      shape.scale.setScalar(0.72);
    } else {
      group.position.set(2.35, 0.15, 0);
      baseY = 0.15;
      shape.scale.setScalar(1);
    }
  }
  layout();
  window.addEventListener('resize', layout);

  /* Pausa: pestaña oculta o hero fuera del viewport */
  var tabVisible = !document.hidden;
  var heroVisible = true;
  document.addEventListener('visibilitychange', function () {
    tabVisible = !document.hidden;
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      heroVisible = entries[0].isIntersecting;
    }, { threshold: 0 }).observe(hero);
  }

  function render(t) {
    /* Flotación suave */
    group.position.y = baseY + Math.sin(t * 0.55) * 0.12;
    /* Parallax: el grupo se inclina un poco hacia el mouse */
    mx += (tx - mx) * 0.04;
    my += (ty - my) * 0.04;
    group.rotation.y = mx * 0.35;
    group.rotation.x = 0.45 - my * 0.25;
    renderer.render(scene, camera);
  }

  if (reduceMotion) {
    /* Un solo frame estático: la forma queda, sin animación. */
    shape.rotation.set(0.4, 0.7, 0);
    render(1.2);
    return;
  }

  var clock = new THREE.Clock();
  (function tick() {
    requestAnimationFrame(tick);
    if (!tabVisible || !heroVisible) return;
    var dt = Math.min(clock.getDelta(), 0.05);
    var t = clock.elapsedTime;
    /* Rotación lenta de la forma */
    shape.rotation.x += dt * 0.14 * VELOCIDAD;
    shape.rotation.y += dt * 0.2 * VELOCIDAD;
    render(t);
  })();
})();
