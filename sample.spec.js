import { test, expect } from '@playwright/test';


test ('login demo', async ({page}) => {

    await page.goto('https://demo.applitools.com/')
    await page.pause()

    await page.locator('id=username').fill('User')
    await page.locator('id=password').fill('password')

    // await page.locator('input:has-text("Remember Me")').click()

    await page.getByRole('checkbox', { name: 'Remember Me' }).check();
    await page.getByRole('link', { name: 'Sign in' }).click();

    await page.locator('id="log-in"').click()


    

}); 