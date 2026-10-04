// @ts-check
const { test, expect } = require('@playwright/test');
const { dismissCookies } = require('./helpers');

const DEMO_MSG = /Modo demostración/;

test.beforeEach(async ({ page }) => {
  await dismissCookies(page);
  await page.goto('/contacto.html');
});

async function fillValid(page, overrides = {}) {
  const v = { nombre: 'Lucía Ferreyra', email: 'lucia@panaderialuna.com', asunto: 'pregunta', mensaje: '¿Tenéis un tutorial sobre facturación con IA?', ...overrides };
  await page.getByLabel('Nombre').fill(v.nombre);
  await page.getByLabel('Correo electrónico').fill(v.email);
  await page.getByLabel('Asunto').selectOption(v.asunto);
  await page.getByLabel('Mensaje').fill(v.mensaje);
}

test('envío vacío: marca todos los campos y enfoca el primero', async ({ page }) => {
  await page.getByRole('button', { name: 'Enviar mensaje' }).click();
  for (const label of ['Nombre', 'Correo electrónico', 'Asunto', 'Mensaje']) {
    await expect(page.getByLabel(label)).toHaveAttribute('aria-invalid', 'true');
  }
  await expect(page.getByText('Escribe tu nombre.')).toBeVisible();
  await expect(page.getByText('Elige un asunto.')).toBeVisible();
  await expect(page.getByLabel('Nombre')).toBeFocused();
  await expect(page.locator('[data-form-note]')).toBeEmpty();
});

test('email inválido: solo ese campo da error', async ({ page }) => {
  await fillValid(page, { email: 'lucia@panaderia' });
  await page.getByRole('button', { name: 'Enviar mensaje' }).click();
  await expect(page.getByLabel('Correo electrónico')).toHaveAttribute('aria-invalid', 'true');
  await expect(page.getByText('Escribe un correo válido.')).toBeVisible();
  await expect(page.getByLabel('Nombre')).toHaveAttribute('aria-invalid', 'false');
  await expect(page.getByLabel('Correo electrónico')).toBeFocused();
});

test('el error de un campo está enlazado para lectores de pantalla', async ({ page }) => {
  await page.getByRole('button', { name: 'Enviar mensaje' }).click();
  await expect(page.getByLabel('Correo electrónico')).toHaveAccessibleDescription('Escribe un correo válido.');
});

test('solo falta el asunto: el foco va al selector', async ({ page }) => {
  await fillValid(page);
  await page.getByLabel('Asunto').selectOption('');
  await page.getByRole('button', { name: 'Enviar mensaje' }).click();
  await expect(page.getByLabel('Asunto')).toBeFocused();
});

test('envío válido: muestra el aviso de modo demostración', async ({ page }) => {
  await fillValid(page);
  await page.getByRole('button', { name: 'Enviar mensaje' }).click();
  await expect(page.locator('[data-form-note]')).toHaveText(DEMO_MSG);
  await expect(page).toHaveURL(/contacto\.html$/);
});

test('doble envío: un solo mensaje, sin duplicados', async ({ page }) => {
  await fillValid(page);
  const btn = page.getByRole('button', { name: 'Enviar mensaje' });
  await btn.click();
  await btn.click();
  await expect(page.locator('.form-feedback')).toHaveCount(1);
  await expect(page.locator('[data-form-note]')).toHaveText(DEMO_MSG);
});

test('texto larguísimo: los límites del campo se respetan y la página no se desborda', async ({ page }) => {
  const long = 'x'.repeat(5000);
  await fillValid(page, { nombre: long, mensaje: long });
  await expect(page.getByLabel('Nombre')).toHaveValue('x'.repeat(80));
  await expect(page.getByLabel('Mensaje')).toHaveValue('x'.repeat(2000));
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(0);
  await page.getByRole('button', { name: 'Enviar mensaje' }).click();
  await expect(page.locator('[data-form-note]')).toHaveText(DEMO_MSG);
});

test('solo con teclado: se rellena y se envía sin ratón', async ({ page }) => {
  await page.getByLabel('Nombre').focus();
  await page.keyboard.type('Lucía Ferreyra');
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('Correo electrónico')).toBeFocused();
  await page.keyboard.type('lucia@panaderialuna.com');
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('Asunto')).toBeFocused();
  await page.getByLabel('Asunto').selectOption('sugerencia'); // equivalente a elegir con flechas
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('Mensaje')).toBeFocused();
  await page.keyboard.type('Me gustaría un tutorial de facturación.');
  // Tab hasta el botón de envío (pasa por el enlace de privacidad)
  for (let i = 0; i < 5; i++) {
    await page.keyboard.press('Tab');
    if (await page.getByRole('button', { name: 'Enviar mensaje' }).evaluate((el) => el === document.activeElement)) break;
  }
  await expect(page.getByRole('button', { name: 'Enviar mensaje' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('[data-form-note]')).toHaveText(DEMO_MSG);
});

test('honeypot: un bot que rellena el campo oculto no recibe error', async ({ page }) => {
  await page.locator('input[name="empresa_fax"]').fill('spam', { force: true });
  await page.getByRole('button', { name: 'Enviar mensaje' }).click();
  await expect(page.locator('[data-form-note]')).toHaveText(/Gracias/);
});
