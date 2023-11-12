// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Bad UX forms', async () => {
  test('1', async({page}) => {

    await page.goto('https://fun.mishasaidov.com/badux/');

    // await page.locator('select:nth-child(4)').selectOption('2');
    let number = '79045843590';
    
    for(let i=1; i<=11; i++){
      await page.selectOption(`select:nth-child(${i})`, `${number[i]}`);
    }
    await page.locator('button:nth-child(7)').click();

    await page.waitForTimeout(6000);
  })
})
