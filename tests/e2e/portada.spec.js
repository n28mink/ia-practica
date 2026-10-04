// @ts-check
const { test, expect } = require('@playwright/test');
const { dismissCookies } = require('./helpers');

test.beforeEach(async ({ page }) => {
  await dismissCookies(page);
  await page.goto('/');
});

test('boletín: email vacío e inválido muestran el error en línea', async ({ page }) => {
  const input = page.getByLabel('Tu correo electrónico');
  const send = page.getByRole('button', { name: 'Quiero recibirlo' });
  await send.click();
  await expect(input).toHaveAttribute('aria-invalid', 'true');
  await expect(input).toHaveAccessibleDescription(/correo válido/);
  await input.fill('nombre@');
  await send.click();
  await expect(input).toHaveAttribute('aria-invalid', 'true');
  await input.fill('nombre@empresa.com');
  await send.click();
  await expect(input).toHaveAttribute('aria-invalid', 'false');
  await expect(page.locator('.newsletter [role="status"]')).toHaveText(/Modo demostración/);
});

test('compositor: cada chip cambia el ejemplo y el enlace al tutorial', async ({ page }) => {
  const cases = [
    ['Atención al cliente', '/tutoriales/atencion-cliente-ia.html', /tienda online/],
    ['Ventas', '/tutoriales/analizar-ventas-ia-excel.html', /trimestre/],
    ['Equipo', '/tutoriales/capacitar-equipo-ia-30-dias.html', /plan de 30 días/],
    ['Marketing', '/tutoriales/chatgpt-marketing-pyme.html', /panadería/],
  ];
  for (const [chip, href, prompt] of cases) {
    await page.getByRole('link', { name: chip, exact: true }).click();
    await expect(page.getByRole('link', { name: chip, exact: true })).toHaveAttribute('aria-pressed', 'true');
    await expect(page.locator('#pd-text')).toHaveText(prompt);
    await expect(page.locator('#pd-send')).toHaveAttribute('href', href);
    await expect(page.locator('#pd-link')).toHaveAttribute('href', href);
    await expect(page.locator('#pd-chips [aria-pressed="true"]')).toHaveCount(1);
  }
});

test('los chips funcionan con teclado', async ({ page }) => {
  await page.getByRole('link', { name: 'Ventas', exact: true }).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#pd-send')).toHaveAttribute('href', '/tutoriales/analizar-ventas-ia-excel.html');
  await expect(page).toHaveURL(/\/$/);
});

test('enlace "Saltar al contenido" es lo primero al tabular', async ({ page }) => {
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Saltar al contenido' });
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();
});

test('todos los enlaces internos de la portada responden', async ({ page, request }) => {
  const hrefs = await page.$$eval('a[href^="/"]', (as) => [...new Set(as.map((a) => a.getAttribute('href').split('#')[0]))]);
  for (const href of hrefs) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
  }
});

test('sin rayas (—) en el texto visible fuera del aviso de cookies', async ({ page }) => {
  const text = await page.evaluate(() => {
    const clone = document.body.cloneNode(true);
    clone.querySelectorAll('#cookie-banner, #cookie-modal, script').forEach((n) => n.remove());
    return clone.innerText;
  });
  expect(text).not.toMatch(/[—–]/);
});
