const fs = require("fs");
const puppeteer = require("puppeteer");

// IIFE: immediately invoked function expression
(async () => {
    try {
        // initialize puppeteer
        // launches chromium browser
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // specify page url
        await page.goto("https://www.arl-iowa.org/adopt/find-a-pet/pet-list/cat/");

        // tell puppeteer to convert images into an array
        // map each item and get the src attribute value
        const petSrcs = await page.evaluate(() => {
            const srcs = Array.from(document.querySelectorAll('img[class="item_image lazy"]')).map((image) => image.getAttribute("src"));
            return srcs;
        });

        console.log("Page has been evaluated!");

        // data goes into json file
        fs.writeFileSync("./data.json", JSON.stringify(petSrcs));
        console.log("File is created!");

        // close puppeteer
        await browser.close();

    } catch (error) {
        console.log(error);
    }
})();

const data = require("./data.json");
fs.readFile("./data.json", "utf8", (error, jsonString) => {
    if (error) {
        console.log("File read failed: ", error);
        return;
    }
    try {
        const catLinks = JSON.parse(jsonString);
        console.log(cat);
    } catch (error) {
        console.log("Error parsing JSON string: ", error);
    }
});

function getBase64Image(img) {
    var canvas = d
}

