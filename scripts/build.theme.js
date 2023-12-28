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
    const commandThemeBabel = `npx babel ./src/components/Atomic/_theme/ -d build/lib/theme ${extensions}`
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
    const commandThemeUtils = `npx babel ./src/components/Atomic/_utils/ -d build/lib/_utils ${extensions}`
    const { stderrUtils, stdoutUtils } = await exec(commandThemeUtils, {
        env: { ...process.env, ...env },
        cwd,
    })

    if (stderrUtils) {
        throw new Error(`'${commandThemeUtils}' failed with \n${stderrUtils}`)
    }

    if (verbose && stdoutUtils) {
        console.log(stdoutUtils)
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

        const d = require(buildThemeSourcePath)

        fs.writeJsonSync(path.join(buildThemePath, `${theme}.json`), { ...d.default })

        generalTheme.themes.push({
            [theme]: { ...d.default },
        })
    })

    fs.writeJsonSync(path.join(publicThemePath, `theme.json`), generalTheme)

    if (verbose) {
        console.log('Themes generated!')
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
