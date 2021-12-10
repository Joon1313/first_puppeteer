// 설치된 puppeteer 모듈
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://cam-loa.com/comment");
  await page.waitForTimeout(5000);
  await page.screenshot({ path: "./img/cam-loa-comment.png" });

  await browser.close();
})();