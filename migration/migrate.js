const fs = require("fs/promises");
const path = require("path");
const got = require("got");
const { JSDOM } = require("jsdom");
const download = require("download");

(async () => {
  /*
  // Collect posts HTML
  const postAddresses = require("./posts.json");
  
  for (const postAddress of postAddresses)
    await fs.writeFile(
      `post/${postAddress.slice(
        "https://www.iddqdsound.com/post/".length
      )}.html`,
      (await got(postAddress)).body
    );
  */
  /*
  // Collect images from posts HTML
  const imageAddresses = new Set();
  for (const postFile of await fs.readdir("post")) {
    const postHTML = await fs.readFile(`post/${postFile}`, "utf-8");
    const postDocument = new JSDOM(postHTML).window.document;
    for (const element of postDocument.querySelectorAll("img"))
      imageAddresses.add(element.src);
  }
  await fs.writeFile("images.json", JSON.stringify([...imageAddresses]));
  */

  /*
  // Download images
  const images = require("./images.json");
  for (let index = 0; index < images.length; index++) {
    const image = images[index];
    const extension = path.extname(image);
    const file = `images/${index}${extension}`;
    await fs.writeFile(file, await download(image));
  }
  */

  const redirects = require("./redirects.json");

})();
