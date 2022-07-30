import puppeteer from 'puppeteer';


(async () => {
	const browser = await puppeteer.launch({
  		executablePath: '/usr/bin/google-chrome',
		headless: true,
    		args: [
        		"--disable-gpu",
        		"--disable-dev-shm-usage",
        		"--disable-setuid-sandbox",
        		"--no-sandbox",
    		]
	});
	const page = await browser.newPage();
	await page.goto('https://www.freecodecamp.org/');

	await browser.close();
})();
