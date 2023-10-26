const fs = require('fs-extra')
const path = require('path')
const themes = ['light', 'siemens']

const packagePath = process.cwd()
const buildPath = path.join(packagePath, './build')

themes.forEach((theme) => {
    const buildThemeSourcePath = path.join(buildPath, 'lib', 'theme', theme)
    const buildColorsSourcePath = path.join(buildPath, 'lib', '_utils', 'colors.js')

    const d = require(buildThemeSourcePath)
    const colors = require(buildColorsSourcePath)

    const buildThemePath = path.join(buildPath, 'theme')

    fs.ensureDirSync(buildThemePath)

    fs.writeJsonSync(path.join(buildThemePath, `${theme}.json`), { ...d.default, colorPalette: colors.uiColorMap[theme] })
})
