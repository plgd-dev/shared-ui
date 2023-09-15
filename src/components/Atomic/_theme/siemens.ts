import { colors, colorsSiemens } from '../_utils/colors'
import { expanded, treeExpander } from '../TreeExpander/TreeExpander.styles'

const theme = {
    Button: {
        primary: {
            background: colorsSiemens.primary,
            borderColor: colorsSiemens.primary,
            color: '#23233C',
            hover: {
                background: '#00BEDC',
                borderColor: '#00BEDC',
                color: '#23233C',
            },
            disabled: {
                background: colors.disabled,
                borderColor: colors.disabled,
                color: colors.neutral000,
            },
        },
        secondary: {
            background: '#00af8e',
            borderColor: '#00ADB4',
            color: '#fff',
            hover: {
                background: '#00ADB4',
                borderColor: '#00ADB4',
                color: colors.neutral000,
            },
            disabled: {
                background: '#81868c',
                borderColor: '#81868c',
                color: colors.disabled,
            },
        },
        tertiary: {
            background: '#9999a9',
            borderColor: '#9999a9',
            color: colors.neutral900,
            hover: {
                background: colors.neutral300,
                borderColor: colors.neutral300,
                color: colors.neutral900,
            },
            disabled: {
                background: '#81868c',
                borderColor: colors.neutral100,
                color: colors.neutral300,
            },
        },
        filter: {
            background: '#23233c',
            borderColor: '#23233c',
            color: '#cacaca',
            hover: {
                background: '#23233c',
                borderColor: '#23233c',
                color: '#fff',
            },
            disabled: {
                background: '#81868c',
                borderColor: colors.tertiary,
                color: colors.disabled,
            },
        },
    },
    LeftPanel: {
        background: '#23233c',
        collapseToggle: {
            color: '#fff',
            hover: {
                color: colors.primary,
            },
        },
        logo: {
            background: '#23233c',
        },
        groupTitle: {
            color: 'rgba(255, 255, 255, 0.8)',
        },
        item: {
            color: '#F4F9FB',
            hover: {
                color: '#fff',
            },
        },
        versionItem: {
            borderColor: '#000028',
        },
    },
    Content: {
        background: '#000028',
    },
    Footer: {
        borderTop: '#23233c',
        background: '#000028',
        recentTasks: {
            color: colors.neutral500,
            hover: {
                color: colorsSiemens.primary,
            },
        },
    },
    Header: {
        background: '#23233c',
        borderBottom: '#23233c',
    },
    Layout: {
        background: '#000028',
    },
    Pagination: {
        item: {
            active: {
                hover: {
                    color: colors.neutral900,
                },
            },
            hover: {
                color: colorsSiemens.primary,
            },
        },
    },
    Table: {
        headerItem: {
            background: '#23233c',
            hover: {
                color: colorsSiemens.primary,
            },
        },
        sortActive: {
            color: colorsSiemens.primary,
        },
        cell: {
            before: {
                background: '#23233c',
            },
        },
        a: {
            color: '#fff',
        },
        link: {
            color: '#fff',
        },
        row: {
            background: '#26233c',
        },
        selected: {
            background: '#26233c',
        },
    },
    TableActions: {
        icon: {
            hover: {
                color: colorsSiemens.primary,
            },
        },
    },
    TableGlobalFilter: {
        searchInput: {
            background: 'transparent',
        },
    },
    TableSelectionPanel: {
        background: '#23233c',
        selectionInfo: {
            color: colorsSiemens.primary,
        },
    },
    Tabs: {
        list: {
            borderColor: '#81868c',
        },
        slider: {
            background: colorsSiemens.primary,
        },
        active: {
            color: '#00ADB4',
        },
    },
    Tag: {
        background: '#23233c',
    },
    TileToggle: {
        background: '#23233c',
    },
    TreeExpander: {
        hover: {
            expanderIcon: {
                color: '#fff',
            },
        },
        expanded: {
            color: '#fff',
        },
    },
    TreeTable: {
        row: {
            hover: {
                customTag: {
                    background: '#ccc',
                },
            },
        },
        removeBottomBorderRadius: {
            backgroundColor: '#23233c',
            customTag: {
                background: '#ccc',
            },
        },
        removeTopBorderRadius: {
            backgroundColor: '#23233c',
            customTag: {
                background: '#ccc',
            },
        },
        removeBorderRadius: {
            backgroundColor: '#23233c',
            customTag: {
                background: '#ccc',
            },
        },
    },
    UserWidget: {
        description: {
            color: '#00002d',
        },
        name: {
            color: colors.neutral500,
        },
        floatingMenu: {
            background: '#23233c',
            border: '#000028',
            item: {
                hover: {
                    color: colorsSiemens.primary,
                },
            },
        },
        image: {
            background: '#00002d',
        },
    },
    VersionMark: {
        link: {
            color: colorsSiemens.primary,
        },
    },
}

export default theme
