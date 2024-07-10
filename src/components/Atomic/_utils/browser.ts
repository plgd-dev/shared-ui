import { BotInfo, BrowserInfo, NodeInfo, ReactNativeInfo, SearchBotDeviceInfo } from 'detect-browser'

export const isEdge = (browser: BrowserInfo | SearchBotDeviceInfo | BotInfo | NodeInfo | ReactNativeInfo | null) =>
    browser && ['edge', 'edge-chromium'].includes(browser.name)

export const isSafari = (browser: BrowserInfo | SearchBotDeviceInfo | BotInfo | NodeInfo | ReactNativeInfo | null) => browser && browser.name === 'safari'
