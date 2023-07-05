#! /usr/bin/env node

const puppeteer = require("puppeteer");
const key = require("./keys");
async function loginToEmail() {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });

  const page = await browser.newPage();

  await page.goto("https://www.kristujayantiexamlms.com/login/index.php");

  await page.type("#username", key.USERNAME);
  await page.type("#password", key.PASSWORD);
  await page.click(".sign-up-btn button");

  // Wait for the login process to complete
  await page.waitForNavigation();

  await new Promise(() => {});

  // Close the browser instance
  await browser.close();
}

// Example usage
// const username = "your-email@example.com";
// const password = "your-password";

loginToEmail();
