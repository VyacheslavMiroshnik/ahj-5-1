import puppeteer from "puppeteer";

describe("add tooltip", () => {
  let browser;
  let page;

  jest.setTimeout(30000);

  beforeAll(async () => {
    browser = await puppeteer.launch({
    });
    page = await browser.newPage();
  });

  test("tooltip should be showed", async () => {
    await page.goto("http://localhost:9001");

    await page.waitForSelector(".btn");
  });

  test("card should be valid", async () => {
    await page.goto("http://localhost:9001");

    await page.waitForSelector(".btn");

    const button = await page.$(".btn");

    await button.click();

    await page.waitForSelector(".tooltip-wrapper");
  }, 30000);

  afterAll(async () => {
    await browser.close();
  });
});
