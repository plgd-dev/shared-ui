import { colors, colorsSiemens, colorsVariants } from '../_utils/colors'
import { removeBorderRadius, removeTopBorderRadius } from '../TreeTable/TreeTable.styles'
import { selectionInfo } from '../TableNew/TableSelectionPanel/TableSelectionPanel.styles'
import { headerItem } from '../TableNew/Table.styles'

const theme = {
    Button: {
        primary: {
            background: colors.primary,
            borderColor: colors.primary,
            color: colors.neutral000,
            hover: {
                background: colors.primaryHover,
                borderColor: colors.primaryHover,
                color: colors.neutral000,
            },
            disabled: {
                background: colors.disabled,
                borderColor: colors.disabled,
                color: colors.neutral000,
            },
        },
        secondary: {
            background: colorsVariants.secondary.background,
            borderColor: colors.primaryDarken,
            color: colors.primaryDarken,
            hover: {
                background: colors.primaryDarken,
                borderColor: colors.primaryDarken,
                color: colors.neutral000,
            },
            disabled: {
                background: colorsVariants.secondary.background,
                borderColor: colors.disabled,
                color: colors.disabled,
            },
        },
        tertiary: {
            background: colors.neutral100,
            borderColor: colors.neutral100,
            color: colors.neutral900,
            hover: {
                background: colors.neutral300,
                borderColor: colors.neutral300,
                color: colors.neutral900,
            },
            disabled: {
                background: colors.neutral100,
                borderColor: colors.neutral100,
                color: colors.neutral300,
            },
        },
        filter: {
            background: colorsVariants.tertiary.background,
            borderColor: colors.neutral300,
            color: colorsVariants.tertiary.text,
            hover: {
                background: colors.neutral000,
                borderColor: colors.primary,
                color: colors.primary,
            },
            disabled: {
                background: colors.tertiary,
                borderColor: colors.tertiary,
                color: colors.disabled,
            },
        },
    },
    Content: {
        background: '#fff',
    },
    Footer: {
        borderTop: '#e6e9ed',
        background: '#fff',
        recentTasks: {
            color: colors.neutral900,
            hover: {
                color: colors.primary,
            },
        },
    },
    Header: {
        background: '#fff',
        borderBottom: '#e6e9ed',
    },
    Layout: {
        background: '#fff',
    },
    LeftPanel: {
        background: colors.light,
        collapseToggle: {
            color: colors.neutral500,
            hover: {
                color: colors.primary,
            },
        },
        logo: {
            background: colors.light,
        },
        groupTitle: {
            color: 'rgba(129, 134, 140, 0.8)',
        },
        item: {
            color: colors.neutral500,
            hover: {
                color: colors.neutral800,
            },
        },
        versionItem: {
            borderColor: colors.neutral200,
        },
    },
    Pagination: {
        item: {
            active: {
                hover: {
                    color: colors.neutral900,
                },
            },
            hover: {
                color: colors.primary,
            },
        },
    },
    Table: {
        headerItem: {
            background: colors.neutral800,
            hover: {
                color: colors.neutral800,
            },
        },
        sortActive: {
            color: colors.primaryBonus,
        },
        cell: {
            before: {
                background: colors.neutral200,
            },
        },
        a: {
            color: colors.neutral800,
        },
        link: {
            color: colors.primaryBonus,
        },
        row: {
            background: colors.neutral100,
        },
        selected: {
            background: colors.neutral100,
        },
    },
    TableActions: {
        icon: {
            hover: {
                color: '#007bbf',
            },
        },
    },
    TableGlobalFilter: {
        searchInput: {
            background: undefined,
        },
    },
    TableSelectionPanel: {
        background: '#fff',
        selectionInfo: {
            color: '#0a2965',
        },
    },
    Tabs: {
        list: {
            borderColor: colors.neutral200,
        },
        slider: {
            background: colors.primaryBonus,
        },
        active: {
            color: colors.primaryDarken,
        },
    },
    Tag: {
        background: colors.neutral100,
    },
    TileToggle: {
        background: colors.neutral100,
    },
    TreeExpander: {
        hover: {
            expanderIcon: {
                color: colorsSiemens.primary,
            },
        },
        expanded: {
            color: colors.primary,
        },
    },
    TreeTable: {
        row: {
            hover: {
                customTag: {
                    background: '#fff',
                },
            },
        },
        removeBottomBorderRadius: {
            backgroundColor: colors.neutral100,
            customTag: {
                background: '#fff',
            },
        },
        removeTopBorderRadius: {
            backgroundColor: colors.neutral100,
            customTag: {
                background: '#fff',
            },
        },
        removeBorderRadius: {
            backgroundColor: colors.neutral100,
            customTag: {
                background: '#fff',
            },
        },
    },
    UserWidget: {
        description: {
            color: '#00002d',
        },
        name: {
            color: '#0a2965',
        },
        floatingMenu: {
            background: '#fff',
            border: '#e6e9ed',
            item: {
                hover: {
                    color: colors.primary,
                },
            },
        },
        image: {
            background: colors.primary,
        },
    },
    VersionMark: {
        link: {
            color: colors.primary,
        },
    },
}

export default theme
