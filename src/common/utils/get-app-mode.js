/**
 * Returns the current mode of the app.
 */
export const getAppMode = () => {
    try {
        return process?.env?.NODE_ENV || 'production'
    } catch (e) {
        return 'production'
    }
}
