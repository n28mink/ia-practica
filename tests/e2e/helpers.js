// Guarda una decisión de cookies para que el banner no tape la página.
async function dismissCookies(page) {
  await page.addInitScript(() => {
    try { localStorage.setItem('iap_consent_v1', JSON.stringify({ necessary: true, analytics: false, marketing: false })); } catch (e) {}
  });
}
module.exports = { dismissCookies };
