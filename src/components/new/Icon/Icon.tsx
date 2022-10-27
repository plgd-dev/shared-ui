import { FC, SVGProps, useEffect, useRef, useState } from 'react'
import { Props, defaultProps } from './Icon.types'

export const Icon: FC<Props> = (props) => {
    const { className, icon, id, size, onError, onCompleted, ...rest } = { ...defaultProps, ...props }

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | undefined>(undefined)
    const ImportedIconRef = useRef<FC<SVGProps<SVGSVGElement>> | undefined>(undefined)

    const IconComponent = ImportedIconRef.current ? ImportedIconRef.current : () => null

    const parseComponentName = (string: string) =>
        string
            .split('-')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join('')

    useEffect(() => {
        setLoading(true)
        const componentName = parseComponentName(icon)
        const importIcon = async (): Promise<void> => {
            try {
                await import(`./components/${componentName}.tsx`).then((IconComponent) => {
                    ImportedIconRef.current = IconComponent.default
                    return IconComponent.default
                })
                onCompleted?.(icon, ImportedIconRef.current)
            } catch (err: any) {
                onError?.(err)
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        importIcon().then()
    }, [icon, onCompleted, onError])

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
            {loading ? null : <IconComponent {...rest} height={size} width={size} />}
        </div>
    )
}

Icon.displayName = 'Icon'
Icon.defaultProps = defaultProps

export default Icon
