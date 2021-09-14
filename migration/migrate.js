const fs = require("fs/promises");
const got = require("got");
const { JSDOM } = require("jsdom");

(async () => {
  /*
  const postAddresses = require("./posts.json");
  
  for (const postAddress of postAddresses)
    await fs.writeFile(
      `post/${postAddress.slice(
        "https://www.iddqdsound.com/post/".length
      )}.html`,
      (await got(postAddress)).body
    );
  */

  const imageAddresses = new Set();
  for (const postFile of await fs.readdir("post")) {
    const postHTML = await fs.readFile(`post/${postFile}`, "utf-8");
    const postDocument = new JSDOM(postHTML).window.document;
    for (const element of postDocument.querySelectorAll("img"))
      imageAddresses.add(element.src);
  }
  await fs.writeFile("images.json", JSON.stringify([...imageAddresses]));
})();
