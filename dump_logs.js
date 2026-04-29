const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  try {
    const response = await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });
    console.log('STATUS:', response.status());
    await new Promise(r => setTimeout(r, 2000));
  } catch(e) {
    console.log('Error navigating:', e.toString());
  }
  await browser.close();
})();
