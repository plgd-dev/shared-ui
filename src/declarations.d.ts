/// <reference types="@emotion/react/types/css-prop" />
/// <reference types="react-scripts" />
declare module '*.css' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames
    export = classNames
}
declare module '*.png'
declare module '*.jpg'
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
}
declare module '*.jpeg'
declare module '*.gif'
