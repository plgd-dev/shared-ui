import { test, expect, Page } from '@playwright/test'

const components = [
    {
        group: 'Example',
        items: [
            { name: 'Alert' },
            { name: 'CodeEditor' },
            { name: 'Editor' },
            { name: 'Headline' },
            { name: 'Link' },
            { name: 'StatusPill' },
            { name: 'StatusTag' },
            { name: 'Swiper', views: ['feature', 'testimonial'] },
            { name: 'Tabs' },
            { name: 'Tag' },
            { name: 'TileExpand' },
            { name: 'TileToggle' },
            { name: 'Tooltip' },
            { name: 'VersionMark' },
        ],
    },
    {
        group: 'Assets',
        items: [{ name: 'CopyIcon' }, { name: 'Icon' }],
    },
    {
        group: 'Form',
        items: [
            { name: 'ActionButton', views: ['variants'] },
            { name: 'Button' },
            { name: 'Checkbox' },
            { name: 'ColorPicker' },
            { name: 'ConfirmButton' },
            { name: 'DatePicker' },
            { name: 'Dropzone' },
            { name: 'FormGroup' },
            { name: 'FormInput' },
            { name: 'FormSelect' },
            { name: 'FormTextarea' },
            { name: 'Radio' },
            { name: 'SplitButton' },
            { name: 'Switch' },
            { name: 'TimeoutControl' },
        ],
    },
    {
        group: 'Organism',
        items: [{ name: 'CaList' }, { name: 'CaPool' }, { name: 'CaPoolModal' }, { name: 'ConditionFilter' }, { name: 'ResourceToggleCreator' }],
    },
    {
        group: 'Pages',
        items: [{ name: 'InitializedByDifferentUser' }, { name: 'NotFoundPage' }],
    },
    {
        group: 'Keycloak',
        items: [
            { name: 'KeycloakTemplate', views: ['default', 'swiper-testimonials', 'swiper-feature', 'sign-in', 'update-password'] },
            { name: 'Popup', views: ['default', 'right'] },
            { name: 'SignInForm', views: ['default', 'social', 'registration-step-1', 'registration-step-2', 'reset-password'] },
            { name: 'Step' },
        ],
    },
    {
        group: 'Layout',
        items: [
            { name: 'BottomPanel' },
            { name: 'Content', views: ['default', 'headline-status-tag'] },
            { name: 'ContentMenu' },
            { name: 'Footer' },
            { name: 'FullPageWizard', views: ['default', 'active-step'] },
            { name: 'Header', views: ['default', 'breadcrumb'] },
            { name: 'Layout' },
            { name: 'LeftPanel', views: ['default', 'active-item', 'new-feature', 'collapsed'] },
            { name: 'PageLayout' },
        ],
    },
    {
        group: 'Loader',
        items: [{ name: 'IconLoader' }],
    },
    {
        group: 'Modals',
        items: [{ name: 'AddClientModal' }, { name: 'DeleteModal' }, { name: 'ProvisionDeviceModal' }, { name: 'ShareDeviceModal' }],
    },
    {
        group: 'Notification',
        items: [{ name: 'Notification' }, { name: 'NotificationCenter' }, { name: 'NotificationMessage' }],
    },
    {
        group: 'Table',
        items: [{ name: 'Table' }, { name: 'TreeTable' }],
    },
]

const testMethod = async (page: Page, group: string, name: string, view: string) => {
    await page.goto(`http://localhost:6006/?path=/story/${group}-${name.toLowerCase()}--${view}`)

    await page.waitForSelector('#preview-loader', { state: 'detached', timeout: 90000 })

    // use fullscreen mode for storybook
    await page.click("button[aria-label='Shortcuts']")
    await page.click('a#list-item-F')

    // close Storybook notification on bottom left side
    const button = await page.$('a[href="/?path=/settings/whats-new"] button')
    if (button) {
        await button.click()
    }

    // secure interval for animations
    await page.waitForTimeout(5000)
    await page.locator('#storybook-preview-iframe').focus()

    await expect(page).toHaveScreenshot({ fullPage: true, omitBackground: true })
}

components.forEach((group) => {
    test.describe(group.group, () => {
        group.items.forEach((component) => {
            const views = component.views || ['default']

            views.forEach((view) => {
                test(`${component.name} | ${view}`, async ({ page }) => {
                    await testMethod(page, group.group.toLowerCase(), component.name, view)
                })
            })
        })
    })
})
