import { FC, SVGProps, useCallback, useEffect, useRef, useState } from 'react'
import { Props, defaultProps, UseDynamicSVGImportOptions } from './Icon.types'

function useDynamicSVGImport(name: string, options: UseDynamicSVGImportOptions = {}) {
    const { onCompleted, onError } = options
    const ImportedIconRef = useRef<FC<SVGProps<SVGSVGElement>> | undefined>(undefined)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | undefined>(undefined)

    useEffect(() => {
        setLoading(true)
        const importIcon = async (): Promise<void> => {
            try {
                await import(`./assets/${name}.svg`).then((svg) => {
                    ImportedIconRef.current = svg.default
                    return svg.default
                })
                onCompleted?.(name, ImportedIconRef.current)
            } catch (err: any) {
                onError?.(err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        importIcon()
    }, [name, onCompleted, onError])

    return { error, loading, SvgIcon: ImportedIconRef.current }
}

export const Icon: FC<Props> = (props) => {
    const { className, icon, id, size } = { ...defaultProps, ...props }

    const handleOnCompleted = useCallback((iconName: string, b: any) => console.log(`${iconName} successfully loaded`, b), [])
    const { error, loading, SvgIcon } = useDynamicSVGImport(icon, { onCompleted: handleOnCompleted })
    const IconComponent = SvgIcon ? SvgIcon : () => null

    if (error) {
        console.error(error)
        return null
    }

    return (
        <div
            className={className}
            id={id}
            style={{
                width: size,
                height: size,
            }}
        >
            {loading ? null : <IconComponent height={size} width={size} />}
        </div>
    )
}

Icon.displayName = 'Icon'
Icon.defaultProps = defaultProps

export default Icon
