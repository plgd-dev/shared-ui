import { MenuGroup, MenuItem } from './LeftPanel.types'

export const parseActiveItem = (pathname: string, menuItems: MenuGroup[], matcher: any) => {
    let ret = '-1'

    menuItems.forEach((group) => {
        let subItem = undefined
        const menuItem = group.items?.find((item) => {
            if (item.children && item.children.length) {
                const f = item.children.find((subItem) => subItem.paths?.find((p) => matcher(pathname, p)))
                if (f) {
                    subItem = f.id
                }
            }

            return item.visibility === true && item.paths?.find((j) => matcher(pathname, j))
        })

        if (subItem) {
            ret = subItem
        } else if (menuItem) {
            ret = menuItem.id
        }
    })

    return ret
}

export const getFirstActiveItemFromMenu = (menu: MenuGroup[]) => {
    let firstActivePage: any = undefined

    menu?.forEach((group) => {
        if (!firstActivePage) {
            firstActivePage = group.items?.find((item) => item.visibility === true) as MenuItem
        }
    })

    return firstActivePage
}
