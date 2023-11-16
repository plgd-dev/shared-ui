const fs = require('fs-extra')
const path = require('path')
const yargs = require('yargs')
const { promisify } = require('util')
const childProcess = require('child_process')

const exec = promisify(childProcess.exec)

async function run(argv) {
    const { themes, verbose } = argv

    const env = {
        NODE_ENV: 'production',
        BABEL_ENV: 'production',
    }

    const extensions = '--extensions .ts,.js,.tsx,.jsx'
    const cwd = path.resolve(__dirname, '../')

    // build theme babel
    const commandThemeBabel = `babel ./src/components/Atomic/_theme/ -d build/lib/theme ${extensions}`
    const { stderr, stdout } = await exec(commandThemeBabel, {
        env: { ...process.env, ...env },
        cwd,
    })

    if (stderr) {
        throw new Error(`'${commandThemeBabel}' failed with \n${stderr}`)
    }

    if (verbose && stdout) {
        console.log(stdout)
    }

    // build theme color
    const commandThemeColors = `babel ./src/components/Atomic/_utils/colors.ts --out-file build/lib/_utils/colors.js ${extensions}`
    const { stderrColor, stdoutColor } = await exec(commandThemeColors, {
        env: { ...process.env, ...env },
        cwd,
    })

    if (stderrColor) {
        throw new Error(`'${commandThemeColors}' failed with \n${stderrColor}`)
    }

    if (verbose && stdoutColor) {
        console.log(stdoutColor)
    }

    const buildPath = path.join(cwd, './build')

    const generalTheme = {
        defaultTheme: themes[0],
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

    if (verbose) {
        console.log('Theme generated!')
    }
}

yargs
    .command({
        command: '$0',
        description: 'build theme file',
        builder: (command) =>
            command
                .option('themes', {
                    description: 'Themes array of names.',
                    type: 'array',
                    default: ['plgd'],
                })
                .option('verbose', { type: 'boolean', default: true }),
        handler: run,
    })
    .help()
    .strict(true)
    .version(false)
    .parse()
