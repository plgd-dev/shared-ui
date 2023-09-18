import { colors, colorsSiemens, colorsVariants } from '../_utils/colors'

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
    Breadcrumb: {
        link: {
            color: colors.primary,
        },
    },
    Content: {
        background: '#fff',
    },
    CopyElement: {
        background: colors.neutral100,
        hover: {
            color: colors.primaryDarken,
        },
    },
    Checkbox: {
        borderColor: '#d7d8da',
        background: colors.primary,
        input: {
            borderColor: colors.primary,
        },
        error: {
            red: colors.red,
        },
    },
    DeleteModal: {
        red: colors.red,
        body: {
            background: '#f4f9fb',
        },
        title: {
            color: colors.primaryDarken,
        },
        val: {
            color: colors.neutral800,
        },
        item: {
            borderColor: colors.neutral200,
        },
    },
    Editor: {
        borderColor: '#e6e9ed',
        scroller: {
            background: '#f4f9fb',
        },
        gutter: {
            background: '#e6e9ed',
        },
        gutterActiveLine: {
            background: undefined,
        },
        indentGuide: {
            background: undefined,
        },
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
        footerMainLine: {
            background: undefined,
        },
    },
    FormInput: {
        borderColor: '#e6e9ed',
        background: undefined,
        color: '#252626',
        error: {
            red: colors.red,
        },
        focus: {
            borderColor: colors.primary,
        },
    },
    FormSelect: {
        input: {
            color: colors.neutral800,
        },
        control: {
            borderColor: colors.neutral300,
            background: undefined,
        },
        menu: {
            borderColor: colors.neutral200,
            background: undefined,
        },
        optionSelected: {
            color: colors.neutral800,
        },
        value: {
            color: colors.neutral800,
        },
        indicator: {
            color: colors.neutral500,
        },
        placeholder: {
            color: colors.neutral800,
        },
    },
    Header: {
        background: '#fff',
        borderBottom: '#e6e9ed',
    },
    Headline: {
        color: colors.neutral900,
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
            active: {
                color: '#0a2965',
            },
            disabled: {
                color: colors.neutral500,
            },
        },
        versionItem: {
            borderColor: colors.neutral200,
        },
        iconClose: {
            hover: {
                color: colors.primary,
            },
        },
    },
    Modal: {
        background: '#fff',
        header: {
            borderColor: '#e6e9ed',
            color: '#0a2965',
        },
        content: {
            background: '#fff',
        },
        footer: {
            background: '#fff',
        },
        close: {
            hover: {
                color: colors.primary,
            },
        },
    },
    ModalStrippedLine: {
        strippedLine: {
            borderColor: colors.neutral200,
        },
    },
    NotificationCenter: {
        floatingPanel: {
            background: '#fff',
            borderColor: '#e6e9ed',
        },
        Bell: {
            hasUnRead: {
                borderColor: '#fff',
            },
        },
        InnerToast: {
            unreadMark: {
                borderColor: '#fff',
            },
        },
    },
    PageLayout: {
        headline: {
            color: '#0a2965',
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
    ProvisionDeviceModal: {
        getCodeBox: {
            background: '#f4f9fb',
        },
        title: {
            color: colors.primaryDarken,
        },
        value: {
            color: colors.neutral800,
        },
    },
    ShareDeviceModal: {
        headline: {
            color: colors.primaryDarken,
        },
        sharedItem: {
            color: colors.neutral300,
        },
        removeBtn: {
            hover: {
                color: colors.primary,
                borderColor: colors.primary,
            },
        },
    },
    SimpleStripTable: {
        row: {
            background: '#fff',
            hover: {
                background: colors.tertiary,
            },
        },
        value: {
            color: colors.neutral800,
        },
        border: {
            background: colors.neutral200,
        },
    },
    SplitButton: {
        floatingMenu: {
            background: '#fff',
            borderColor: '#e6e9ed',
        },
    },
    StatusPill: {
        statusLine: {
            green: colors.green,
            red: colors.red,
        },
    },
    StatusTag: {
        success: {
            color: colors.green,
            background: 'rgba(82, 197, 162, 0.16)',
        },
        warning: {
            color: colors.yellow,
            background: 'rgba(254, 191, 64, 0.24)',
        },
        error: {
            color: colors.red,
            background: 'rgba(215, 78, 58, 0.16)',
        },
        normal: {
            color: colors.neutral500,
            background: '#f6f7f9',
        },
    },
    Switch: {
        background: '#ccc',
        label: {
            color: colors.neutral800,
        },
        input: {
            background: {
                disabled: colors.disabled,
                primary: colors.primary,
            },
        },
    },
    Table: {
        headerItem: {
            background: '#f6f7f9',
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
            link: {
                color: colors.primaryBonus,
            },
            a: {
                color: colors.neutral800,
            },
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
        item: {
            hover: {
                color: colors.primary,
            },
        },
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
        white: {
            background: '#fff',
            borderColor: 'transparent',
        },
        blue: {
            color: colors.primary,
            background: 'rgba(135, 206, 242, 0.2)',
            borderColor: 'transparent',
        },
    },
    TileToggle: {
        background: colors.neutral100,
        name: {
            color: colors.primaryDarken,
        },
    },
    Toast: {
        background: '#fff',
        borderColor: colors.neutral200,
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
