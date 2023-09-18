import { colors, colorsSiemens } from '../_utils/colors'

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
                background: '#81868c',
                borderColor: '#23233c',
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
                borderColor: '#23233c',
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
                borderColor: '#23233c',
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
                borderColor: '#23233c',
                color: colors.disabled,
            },
        },
    },
    Breadcrumb: {
        link: {
            color: colorsSiemens.primary,
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
        iconClose: {
            hover: {
                color: colorsSiemens.primary,
            },
        },
    },
    Content: {
        background: '#000028',
    },
    Checkbox: {
        borderColor: '#81868c',
        background: colorsSiemens.primary,
        input: {
            borderColor: colorsSiemens.primary,
        },
        error: {
            red: colorsSiemens.red,
        },
    },
    DeleteModal: {
        red: colorsSiemens.red,
        body: {
            background: '#f4f9fb',
        },
        val: {
            color: colors.neutral500,
        },
    },
    Editor: {
        borderColor: '#000028',
        scroller: {
            background: '#000028',
        },
        gutter: {
            background: '#000028',
        },
        gutterActiveLine: {
            background: '#000028',
        },
        indentGuide: {
            background: 'none',
        },
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
        footerMainLine: {
            background: '#23233c',
        },
    },
    FormInput: {
        borderColor: '#23233c',
        background: '#000028',
        color: '#ffffff',
        error: {
            red: colorsSiemens.red,
        },
        focus: {
            borderColor: colorsSiemens.primary,
        },
    },
    FormSelect: {
        input: {
            color: '#fff',
        },
        control: {
            borderColor: '#23233c',
            background: '#000028',
        },
        menu: {
            borderColor: '#23233c',
            background: '#000028',
        },
        optionSelected: {
            color: colorsSiemens.primary,
        },
        value: {
            color: '#fff',
        },
        indicator: {
            color: '#fff',
        },
        placeholder: {
            color: '#fff',
        },
    },
    Header: {
        background: '#23233c',
        borderBottom: '#23233c',
    },
    Headline: {
        color: '#00c5c7',
    },
    Layout: {
        background: '#000028',
    },
    Modal: {
        background: '#23233c',
        header: {
            borderColor: '#81868c',
            color: colorsSiemens.primary,
        },
        content: {
            background: '#23233c',
        },
        footer: {
            background: '#23233c',
        },
        close: {
            hover: {
                color: colorsSiemens.primary,
            },
        },
    },
    ModalStrippedLine: {
        strippedLine: {
            borderColor: '#81868c',
        },
    },
    NotificationCenter: {
        floatingPanel: {
            background: '#000028',
            borderColor: '#23233c',
        },
        Bell: {
            hasUnRead: {
                borderColor: '#23233c',
            },
        },
        InnerToast: {
            unreadMark: {
                borderColor: '#23233c',
            },
        },
    },
    PageLayout: {
        headline: {
            color: '#00c5c7',
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
                color: colorsSiemens.primary,
            },
        },
    },
    ProvisionDeviceModal: {
        getCodeBox: {
            background: '#000028',
        },
        title: {
            color: '#00ADB4',
        },
    },
    ShareDeviceModal: {
        headline: {
            color: '#00ADB4',
        },
        sharedItem: {
            color: '#1a1a1a',
        },
        removeBtn: {
            hover: {
                color: colorsSiemens.primary,
                borderColor: colorsSiemens.primary,
            },
        },
    },
    SimpleStripTable: {
        row: {
            background: '#000028',
            hover: {
                background: '#23233d',
            },
        },
        value: {
            color: '#81868c',
        },
        border: {
            background: '#23233c',
        },
    },
    SplitButton: {
        floatingMenu: {
            background: '#23233c',
            borderColor: '#000028',
        },
    },
    StatusPill: {
        statusLine: {
            green: colorsSiemens.green,
            red: colorsSiemens.red,
        },
    },
    Switch: {
        background: '#6c6c6c',
        label: {
            color: '#81868c',
        },
        input: {
            background: {
                disabled: colors.disabled,
                primary: colorsSiemens.primary,
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
            link: {
                color: '#fff',
            },
            a: {
                color: '#fff',
            },
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
        item: {
            hover: {
                color: colorsSiemens.primary,
            },
        },
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
    Toast: {
        background: '#000028',
        borderColor: '#23233c',
    },
    TileToggle: {
        background: '#23233c',
        name: {
            color: colorsSiemens.primary,
        },
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
