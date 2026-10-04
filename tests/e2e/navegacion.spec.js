// @ts-check
const { test, expect } = require('@playwright/test');
const { dismissCookies } = require('./helpers');

test.beforeEach(async ({ page }) => { await dismissCookies(page); });

test('menú móvil: abre, cierra y no deja enlaces enfocables ocultos', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'solo en móvil');
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Abrir menú de navegación' });
  const nav = page.locator('#site-nav');
  await expect(nav).toBeHidden();
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(nav.getByRole('link', { name: 'Tutoriales' })).toBeVisible();
  await nav.getByRole('link', { name: 'Contacto' }).click();
  await expect(page).toHaveURL(/contacto\.html$/);
});

test('filtros del índice: cada categoría muestra solo sus tutoriales', async ({ page }) => {
  await page.goto('/tutoriales/');
  const counts = { 'Marketing y ventas': 2, 'Atención al cliente': 2, 'Gestión y finanzas': 1, 'Equipo y cultura': 1, 'Todos': 6 };
  for (const [name, n] of Object.entries(counts)) {
    await page.getByRole('button', { name, exact: true }).click();
    await expect(page.locator('#tutorial-grid .card:visible')).toHaveCount(n);
  }
});

test('las tarjetas de categoría de la portada activan el filtro real', async ({ page }) => {
  await page.goto('/tutoriales/#gestion');
  await expect(page.locator('#tutorial-grid .card:visible')).toHaveCount(1);
  await expect(page.getByRole('button', { name: 'Gestión y finanzas' })).toHaveClass(/is-active/);
});

test('página 404 sin errores de consola ni de CSP', async ({ page }) => {
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto('/404.html');
  await expect(page.getByRole('heading', { name: 'Página no encontrada' })).toBeVisible();
  expect(errors).toEqual([]);
});

for (const path of ['/', '/tutoriales/', '/tutoriales/chatgpt-marketing-pyme.html', '/contacto.html']) {
  test(`sin desbordamiento horizontal en ${path}`, async ({ page }) => {
    await page.goto(path);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
}
