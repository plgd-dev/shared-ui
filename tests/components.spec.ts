import { test, expect } from '@playwright/test'

const components = [
    { name: 'Alert' },
    { name: 'CaPool' },
    { name: 'CodeEditor' },
    { name: 'Editor' },
    { name: 'Headline' },
    { name: 'Link' },
    { name: 'StatusPill' },
    { name: 'StatusTag' },
    { name: 'Swiper' },
    { name: 'Tabs' },
    { name: 'Tag' },
    { name: 'TileExpand' },
    { name: 'TileToggle' },
    { name: 'Tooltip' },
    { name: 'VersionMark' },
]

components.forEach((component) => {
    test(`${component.name}`, async ({ page }) => {
        await page.goto(`http://localhost:6006/?path=/story/example-${component.name.toLowerCase()}--default`)

        await page.click("button[aria-label='Shortcuts']")
        await page.click('a#list-item-F')

        // secure interval for animations
        await page.waitForTimeout(5000)
        await page.locator('#storybook-preview-iframe').focus()

        await expect(page).toHaveScreenshot({ fullPage: true, omitBackground: true })
    })
})
