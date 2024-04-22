import { getFormContextDefault } from './FormContext'
import { inputAligns, inputSizes } from '../../components/Atomic/FormInput'

describe('getFormContextDefault', () => {
    it('returns default form context with provided i18nDefault', () => {
        const i18nDefault = 'test'
        const context = getFormContextDefault(i18nDefault)

        expect(context.commonTimeoutControlProps.i18n.default).toBe(i18nDefault)
        expect(context.updateData).toBeInstanceOf(Function)
        expect(context.commonFormGroupProps).toEqual({
            errorTooltip: true,
            fullSize: true,
            marginBottom: false,
        })
        expect(context.commonInputProps).toEqual({
            align: inputAligns.RIGHT,
            inlineStyle: true,
            size: inputSizes.SMALL,
        })
        expect(context.compactFormComponentsView).toBe(false)
    })

    it('returns default form context with empty i18nDefault when no argument is provided', () => {
        const context = getFormContextDefault()

        expect(context.commonTimeoutControlProps.i18n.default).toBe('')
    })
})
