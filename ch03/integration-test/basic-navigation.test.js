const portfinder = require('portfinder');
const puppeteer = require('puppeteer');

const app = require('../meadowlark');

let host = null;
let server = null;
let port = null;

beforeEach(async () => {
    port = await portfinder.getPortPromise();
    server = app.listen(port);
    host = `http://localhost:${port}`;
});

afterEach(() => {
    server.close();
});

test('home page links to about page', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(host);
    await Promise.all([
        page.waitForNavigation(),
        page.click('[data-test-id="about"]'),
    ]);
    expect(page.url()).toBe(`${host}/about`);
    await browser.close();
});
