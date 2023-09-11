import puppeteer from "puppeteer";

describe("page start", () => {
  let browser;
  let page;

  jest.setTimeout(30000);

  beforeAll(async () => {
    browser = await puppeteer.launch({
    });

    page = await browser.newPage();
  });

  //тесты
  test("page rendering", async () => {
    await page.goto("http://localhost:9001");

    await page.waitForSelector("body");
  });

  afterAll(async () => {
    await browser.close();
  });
});
