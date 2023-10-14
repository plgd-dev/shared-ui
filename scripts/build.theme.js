const fs = require('fs-extra')
const path = require('path')
const themes = ['light', 'siemens']

const packagePath = process.cwd()
const buildPath = path.join(packagePath, './build')

themes.forEach((theme) => {
    const buildThemeSourcePath = path.join(buildPath, 'lib', 'theme', theme)
    const d = require(buildThemeSourcePath)

    const buildThemePath = path.join(buildPath, 'theme')

    fs.ensureDirSync(buildThemePath)

    fs.writeJsonSync(path.join(buildThemePath, `${theme}.json`), d.default)
})
