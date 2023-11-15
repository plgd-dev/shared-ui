const fs = require('fs-extra')
const path = require('path')
const themes = ['plgd']

if (process.env.NODE_ENV !== 'production') {
    themes.push('siemens')
}

const packagePath = process.cwd()
const buildPath = path.join(packagePath, './build')

const generalTheme = {
    defaultTheme: 'plgd',
    themes: [],
}

const buildThemePath = path.join(buildPath, 'theme')
const publicThemePath = path.join(buildPath, '..', '..', '..', 'public', 'theme')

fs.ensureDirSync(buildThemePath)
fs.ensureDirSync(publicThemePath)

themes.forEach((theme) => {
    const buildThemeSourcePath = path.join(buildPath, 'lib', 'theme', theme)
    const buildColorsSourcePath = path.join(buildPath, 'lib', '_utils', 'colors.js')

    const d = require(buildThemeSourcePath)
    const colors = require(buildColorsSourcePath)

    fs.writeJsonSync(path.join(buildThemePath, `${theme}.json`), { ...d.default, colorPalette: colors.uiColorMap[theme] })

    generalTheme.themes.push({
        [theme]: { ...d.default, colorPalette: colors.uiColorMap[theme] },
    })
})

fs.writeJsonSync(path.join(publicThemePath, `theme.json`), generalTheme)
