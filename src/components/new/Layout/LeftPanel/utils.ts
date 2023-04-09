import { MenuGroup } from './LeftPanel.types'

export const parseActiveItem = (pathname: string, menuItems: MenuGroup[], matcher: any) => {
    let ret = '0'

    menuItems.forEach((item) => {
        const id = item.items?.find((i) => matcher(pathname, i))?.id
        if (id) {
            ret = id
        }
    })

    return ret
}
