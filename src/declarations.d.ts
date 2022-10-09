/// <reference types="@emotion/react/types/css-prop" />
declare module '*.css' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames
    export = classNames
}
declare module '*.png'
declare module '*.jpg'
declare module '*.svg'
declare module '*.jpeg'
declare module '*.gif'
