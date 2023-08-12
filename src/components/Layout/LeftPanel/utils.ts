import { MenuGroup } from './LeftPanel.types'

export const parseActiveItem = (pathname: string, menuItems: MenuGroup[], matcher: any) => {
    let ret = '-1'

    menuItems.forEach((item) => {
        const menuItem = item.items?.find((i) => {
            if (Array.isArray(i.paths)) {
                return i.paths.find((j) => matcher(pathname, j))
            } else {
                return matcher(pathname, i)
            }
        })

        if (menuItem) {
            ret = menuItem.id
        }
    })

    return ret
}
