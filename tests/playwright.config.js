// @ts-check
const { defineConfig, devices } = require('@playwright/test');

// En entornos con un Chromium preinstalado (p. ej. CI o contenedores),
// PW_CHROMIUM_PATH apunta a su ejecutable. En local no hace falta.
const chromiumPath = process.env.PW_CHROMIUM_PATH;
// Firefox y WebKit solo se ejecutan si están instalados (npx playwright install).
const onlyChromium = process.env.PW_ONLY_CHROMIUM === '1';

module.exports = defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'retain-on-failure',
  },
  webServer: {
    command: 'node serve.mjs',
    url: 'http://localhost:4173',
    reuseExistingServer: true,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'], ...(chromiumPath ? { launchOptions: { executablePath: chromiumPath } } : {}) } },
    { name: 'mobile-chromium', use: { ...devices['Pixel 7'], ...(chromiumPath ? { launchOptions: { executablePath: chromiumPath } } : {}) } },
    ...(onlyChromium ? [] : [
      { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
      { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    ]),
  ],
});
