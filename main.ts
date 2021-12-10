const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  // const browser = await puppeteer.launch({devtools: true});
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://cam-loa.com/comment");
  await page.waitForTimeout(2000);
  const camloaComment = await page.evaluate(()=>{
    let list = [];
    const commentList = document.querySelector('.MuiList-root').children;
    for (let i = 0; i < commentList.length; i += 2) {
      const comment = commentList[i].children[0].children[1].children[1].innerHTML;
      list.push(comment);
    }
    return list;
  })
  // console.log(camloaComment)

  fs.writeFile("./json/cam-loa-comment.json",
  JSON.stringify(camloaComment, null, 2),
  err =>
    err ? console.error("error", err)
       : console.log("Success")
);
  // await page.screenshot({ path: "./img/cam-loa-comment.png" });

  // await browser.close();
})();