import { chromium, expect } from '@playwright/test'

async function globalSetup() {
    const browser = await chromium.launch()
    const page = await browser.newPage()

    const response = await page.request.get('http://localhost:6006/')
    await expect(response).toBeOK()

    await page.waitForSelector('#preview-loader', { state: 'detached' })

    await page.context().storageState({ path: 'storageState.json' })
    await browser.close()
}

export default globalSetup
