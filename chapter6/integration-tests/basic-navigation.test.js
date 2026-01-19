const portfinder = require('portfinder');
const puppeteer = require('puppeteer');
const app = require('../meadowlark.js');

let server = null;
let port = null;

beforeEach(async () => {
    port = await portfinder.getPortPromise();
    server = app.listen(port);
})

afterEach(() => { //After each test case (test) is completed, this callback function is executed automatically, calling server.close() to shut down your Express service.
    server.close();
})

test('home page links to about page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}`);
    await Promise.all([
        page.waitForNavigation(),
        page.click('[data-test-id="about"]')
    ])
    expect(page.url()).toBe(`http://localhost:${port}/about`);
    await browser.close();
})