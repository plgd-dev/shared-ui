import { colors, colorsSiemens } from '../_utils/colors'
import { hexToRgbA } from '../_utils/commonStyles'

const theme = {
    colorPalette: colorsSiemens,
    colors: {
        ActionButton: {
            floatingMenu: {
                background: colorsSiemens.neutral900,
                borderColor: colorsSiemens.neutral800,
            },
            item: {
                borderColor: colorsSiemens.neutral800,
                color: colors.neutral500,
                hover: {
                    color: colorsSiemens.primary,
                },
            },
            icon: {
                color: colors.neutral500,
                hover: {
                    color: colorsSiemens.primary,
                },
                active: {
                    color: colorsSiemens.primary,
                },
            },
        },
        Alert: {
            background: colorsSiemens.neutral800,
            borderColor: colorsSiemens.neutral900,
            close: {
                color: colors.neutral500,
                close: {
                    color: colorsSiemens.primary,
                },
            },
            icon: {
                color: colorsSiemens.primary,
            },
            label: {
                color: colors.neutral600,
            },
            line: {
                background: colorsSiemens.primary,
            },
            error: {
                background: colorsSiemens.red,
                icon: {
                    color: colorsSiemens.red,
                },
                line: {
                    background: colorsSiemens.red,
                },
            },
            success: {
                background: colorsSiemens.green,
                icon: {
                    color: colorsSiemens.green,
                },
                line: {
                    background: colorsSiemens.green,
                },
            },
            warning: {
                background: colorsSiemens.yellow,
                icon: {
                    color: colorsSiemens.yellow,
                },
                line: {
                    background: colorsSiemens.yellow,
                },
            },
        },
        BottomPanel: {
            background: colorsSiemens.neutral800,
            attribute: {
                color: colorsSiemens.neutral500,
            },
            value: {
                color: colorsSiemens.primary,
            },
        },
        Breadcrumb: {
            link: {
                color: colorsSiemens.primary,
                hover: {
                    color: colorsSiemens.primary,
                },
            },
        },
        Button: {
            primary: {
                background: colorsSiemens.primary,
                borderColor: colorsSiemens.primary,
                color: colorsSiemens.neutral000,
                hover: {
                    background: colorsSiemens.primaryBonus,
                    borderColor: colorsSiemens.primaryBonus,
                    color: colorsSiemens.neutral000,
                },
                disabled: {
                    background: colorsSiemens.neutral500,
                    borderColor: colorsSiemens.neutral800,
                    color: colors.neutral000,
                },
            },
            secondary: {
                background: 'rgba(82, 197, 162, 0.16)',
                borderColor: colorsSiemens.primary,
                color: colorsSiemens.neutral000,
                hover: {
                    background: colorsSiemens.primary,
                    borderColor: colorsSiemens.primary,
                    color: colors.neutral000,
                },
                disabled: {
                    background: '#81868c',
                    borderColor: colorsSiemens.neutral800,
                    color: colors.disabled,
                },
            },
            tertiary: {
                background: colorsSiemens.neutral800,
                borderColor: colors.neutral500,
                color: colors.neutral500,
                hover: {
                    background: '#9999a9',
                    borderColor: '#9999a9',
                    color: colors.neutral900,
                },
                disabled: {
                    background: '#81868c',
                    borderColor: colorsSiemens.neutral800,
                    color: colors.neutral300,
                },
            },
            filter: {
                background: colorsSiemens.neutral800,
                borderColor: colorsSiemens.neutral800,
                color: '#cacaca',
                hover: {
                    background: colorsSiemens.neutral800,
                    borderColor: colorsSiemens.neutral800,
                    color: colorsSiemens.neutral000,
                },
                disabled: {
                    background: '#81868c',
                    borderColor: colorsSiemens.neutral800,
                    color: colors.disabled,
                },
            },
        },
        Checkbox: {
            borderColor: colorsSiemens.neutral500,
            background: colorsSiemens.primary,
            input: {
                borderColor: colorsSiemens.primary,
            },
            label: {
                color: colors.neutral500,
            },
            error: {
                red: colorsSiemens.red,
            },
        },
        ColorPicker: {
            background: colorsSiemens.neutral900,
            borderColor: colorsSiemens.neutral800,
            label: {
                color: colorsSiemens.neutral500,
            },
            floatingMenu: {
                borderColor: colorsSiemens.neutral800,
            },
        },
        Content: {
            background: colorsSiemens.neutral900,
        },
        CopyElement: {
            background: colorsSiemens.neutral900,
            copied: {
                color: colorsSiemens.neutral000,
                hover: {
                    color: colorsSiemens.neutral000,
                },
            },
            hover: {
                color: colorsSiemens.primary,
            },
        },
        DeleteModal: {
            red: colorsSiemens.red,
            title: {
                color: colorsSiemens.primary,
            },
            body: {
                background: colorsSiemens.neutral900,
            },
            val: {
                color: colors.neutral500,
            },
            item: {
                borderColor: colors.neutral500,
            },
            deleteIconInner: {
                color: colorsSiemens.neutral000,
            },
            subTitle: {
                color: colors.neutral500,
            },
            emptyDeleteInformation: {
                background: colors.neutral700,
            },
        },
        DetailHeadline: {
            color: colorsSiemens.primary,
        },
        Dropzone: {
            container: {
                borderColor: colors.neutral300,
            },
            placeholder: {
                color: colors.neutral500,
                text: {
                    color: colors.neutral800,
                },
                highlight: {
                    color: colors.neutral800,
                },
                description: {
                    color: colors.neutral500,
                },
            },
            file: {
                color: colors.neutral800,
                close: {
                    color: colorsSiemens.neutral500,
                },
                progressBar: {
                    background: colorsSiemens.primary,
                },
                size: {
                    color: colorsSiemens.neutral500,
                },
            },
        },
        Editor: {
            borderColor: colorsSiemens.neutral900,
            constant: {
                boolean: {
                    color: colorsSiemens.yellow,
                },
                numeric: {
                    color: colorsSiemens.red,
                },
                string: {
                    color: colorsSiemens.green,
                },
            },
            fullSizeBtn: {
                background: colorsSiemens.neutral800,
                color: colors.neutral500,
                hover: {
                    color: colorsSiemens.primary,
                },
            },
            gutter: {
                background: colorsSiemens.neutral900,
                color: colors.neutral600,
            },
            gutterActiveLine: {
                background: colorsSiemens.neutral900,
            },
            indentGuide: {
                background: 'none',
            },
            selection: {
                background: hexToRgbA(colorsSiemens.neutral800, 0.8),
            },
            scroller: {
                background: colorsSiemens.neutral900,
            },
            variable: {
                color: colors.neutral600,
            },
        },
        FloatingPanel: {
            Content: {
                background: colorsSiemens.neutral900,
                borderColor: colorsSiemens.neutral800,
                Headline: {
                    borderColor: colors.neutral700,
                    color: colorsSiemens.primary,
                },
            },
            Icon: {
                color: colors.neutral500,
                hover: {
                    color: colorsSiemens.primary,
                },
            },
        },
        Footer: {
            borderTop: colorsSiemens.neutral800,
            background: colorsSiemens.neutral900,
            recentTasks: {
                color: colors.neutral500,
                hover: {
                    color: colorsSiemens.primary,
                },
            },
            footerMainLine: {
                background: colorsSiemens.neutral800,
            },
        },
        FormGroup: {
            error: {
                color: colorsSiemens.red,
            },
        },
        FormInput: {
            background: colorsSiemens.neutral900,
            borderColor: colorsSiemens.neutral800,
            color: colorsSiemens.neutral000,
            disabled: {
                background: colorsSiemens.neutral900,
                color: colorsSiemens.neutral500,
                borderColor: colorsSiemens.neutral900,
            },
            error: {
                red: colorsSiemens.red,
            },
            focus: {
                borderColor: colorsSiemens.primary,
            },
            icon: {
                color: colors.neutral500,
                hover: {
                    color: colorsSiemens.primaryBonus,
                },
            },
            passwordIcon: {
                background: colors.neutral000,
            },
            placeholder: {
                color: colors.neutral500,
            },
            readonly: {
                color: colorsSiemens.neutral000,
            },
        },
        FormLabel: {
            color: colors.neutral500,
            required: {
                color: colorsSiemens.primary,
            },
        },
        FormSelect: {
            input: {
                color: colorsSiemens.neutral000,
            },
            control: {
                borderColor: colorsSiemens.neutral800,
                background: colorsSiemens.neutral900,
                hover: {
                    borderColor: colorsSiemens.primary,
                },
            },
            disabled: {
                color: colors.neutral500,
            },
            menu: {
                borderColor: colorsSiemens.neutral800,
                background: colorsSiemens.neutral900,
                footer: {
                    link: {
                        color: colorsSiemens.primary,
                    },
                },
                open: {
                    borderColor: colorsSiemens.primary,
                },
            },
            optionSelected: {
                color: colorsSiemens.primary,
            },
            value: {
                color: colorsSiemens.neutral000,
            },
            indicator: {
                color: colorsSiemens.neutral000,
            },
            placeholder: {
                color: colorsSiemens.neutral000,
            },
            option: {
                color: colorsSiemens.neutral000,
                hover: {
                    color: colorsSiemens.primary,
                },
            },
            error: {
                color: colorsSiemens.red,
            },
        },
        FormTextarea: {
            borderColor: colors.neutral200,
            color: colors.neutral800,
            disabled: {
                background: colors.neutral100,
                color: colors.neutral600,
            },
            error: {
                color: colorsSiemens.red,
            },
            focus: {
                borderColor: colorsSiemens.primary,
            },
            placeholder: {
                color: colorsSiemens.neutral500,
            },
            readOnly: {
                color: colors.neutral600,
            },
        },
        Header: {
            background: colorsSiemens.neutral800,
            borderBottom: colorsSiemens.neutral800,
        },
        Headline: {
            color: colorsSiemens.primary,
        },
        IncompleteOnboardingDataModal: {
            row: {
                background: colorsSiemens.neutral800,
            },
        },
        Layout: {
            background: colorsSiemens.neutral900,
        },
        LeftPanel: {
            background: colorsSiemens.neutral800,
            collapseToggle: {
                color: colorsSiemens.neutral000,
                hover: {
                    color: colorsSiemens.primary,
                },
            },
            logo: {
                background: colorsSiemens.neutral800,
            },
            groupTitle: {
                color: 'rgba(255, 255, 255, 0.8)',
            },
            item: {
                color: colors.light,
                hover: {
                    color: colorsSiemens.neutral000,
                },
                active: {
                    color: colorsSiemens.primary,
                },
                disabled: {
                    color: colors.neutral600,
                },
            },
            subItem: {
                active: {
                    color: colorsSiemens.neutral000,
                },
                hover: {
                    color: colorsSiemens.neutral000,
                },
            },
            versionItem: {
                borderColor: colorsSiemens.neutral900,
            },
            iconClose: {
                hover: {
                    color: colorsSiemens.primary,
                },
            },
        },
        Link: {
            big: {
                color: colorsSiemens.primary,
            },
            normal: {
                color: colorsSiemens.neutral500,
            },
        },
        LinkExpander: {
            background: colorsSiemens.tertiary,
        },
        Modal: {
            background: colorsSiemens.neutral800,
            header: {
                borderColor: colorsSiemens.neutral900,
                color: colorsSiemens.primary,
                subtitle: {
                    color: colorsSiemens.neutral500,
                },
            },
            content: {
                background: colorsSiemens.neutral800,
            },
            footer: {
                background: colorsSiemens.neutral800,
            },
            close: {
                hover: {
                    color: colorsSiemens.primary,
                },
            },
        },
        ModalStrippedLine: {
            strippedLine: {
                borderColor: colorsSiemens.neutral700,
            },
            value: {
                color: colors.neutral500,
            },
        },
        NotFound: {
            title: {
                color: colorsSiemens.primary,
            },
        },
        NotificationCenter: {
            floatingPanel: {
                background: colorsSiemens.neutral900,
                borderColor: colorsSiemens.neutral800,
            },
            Headline: {
                borderColor: colors.neutral700,
                color: colorsSiemens.primary,
            },
            ClearAll: {
                color: colorsSiemens.primary,
            },
            Bell: {
                color: colors.neutral500,
                hover: {
                    color: colorsSiemens.primary,
                },
                hasUnRead: {
                    borderColor: colorsSiemens.neutral800,
                    background: colorsSiemens.red,
                },
            },
            InnerToast: {
                borderColor: colors.neutral700,
                headline: {
                    color: colorsSiemens.neutral000,
                },
                unreadMark: {
                    borderColor: colorsSiemens.neutral800,
                },
            },
            info: colorsSiemens.info,
            green: colorsSiemens.green,
            yellow: colorsSiemens.yellow,
            red: colorsSiemens.red,
        },
        PageLayout: {
            headline: {
                color: colorsSiemens.primary,
                border: {
                    color: colorsSiemens.neutral800,
                },
            },
        },
        PageLoader: {
            bar: {
                background: colorsSiemens.primary,
            },
        },
        Pagination: {
            item: {
                active: {
                    background: colorsSiemens.neutral900,
                    color: colorsSiemens.neutral000,
                    hover: {
                        color: colorsSiemens.neutral000,
                    },
                },
                hover: {
                    color: colorsSiemens.primary,
                },
            },
        },
        ProvisionDeviceModal: {
            getCodeBox: {
                background: colorsSiemens.neutral900,
            },
            title: {
                color: colorsSiemens.primary,
            },
            value: {
                color: colors.neutral500,
            },
        },
        Scrollbar: {
            color: colorsSiemens.primary,
        },
        ShareDeviceModal: {
            headline: {
                color: colorsSiemens.primary,
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
                background: colorsSiemens.neutral900,
                hover: {
                    background: '#23233d',
                },
            },
            value: {
                color: '#81868c',
            },
            border: {
                background: colorsSiemens.neutral800,
            },
        },
        SplitButton: {
            floatingMenu: {
                background: colorsSiemens.neutral800,
                borderColor: colorsSiemens.neutral900,
            },
            item: {
                hover: {
                    color: colorsSiemens.primary,
                },
            },
        },
        StatusPill: {
            statusLine: {
                green: colorsSiemens.green,
                red: colorsSiemens.red,
                occupied: colorsSiemens.yellow,
            },
        },
        StatusTag: {
            success: {
                color: colorsSiemens.green,
                background: 'rgba(82, 197, 162, 0.16)',
            },
            warning: {
                color: colorsSiemens.yellow,
                background: 'rgba(254, 191, 64, 0.24)',
            },
            error: {
                color: colorsSiemens.red,
                background: 'rgba(215, 78, 58, 0.16)',
            },
            normal: {
                color: colors.neutral500,
                background: colorsSiemens.neutral800,
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
                background: colorsSiemens.neutral800,
                hover: {
                    color: colorsSiemens.primary,
                },
            },
            sortActive: {
                color: colorsSiemens.primary,
            },
            cell: {
                before: {
                    background: colorsSiemens.neutral800,
                },
                link: {
                    color: colorsSiemens.neutral000,
                },
                a: {
                    color: colorsSiemens.neutral000,
                },
            },
            row: {
                background: '#26233c',
                selected: {
                    cell: {
                        before: {
                            background: colors.neutral700,
                        },
                    },
                },
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
        Tabs: {
            item: {
                hover: {
                    color: colorsSiemens.primary,
                },
            },
            list: {
                borderColor: colorsSiemens.neutral800,
            },
            slider: {
                background: colorsSiemens.primary,
            },
            active: {
                color: colorsSiemens.primary,
            },
            disabled: {
                color: colorsSiemens.neutral700,
            },
        },
        Tag: {
            background: colorsSiemens.neutral800,
            white: {
                background: colorsSiemens.neutral900,
                borderColor: colorsSiemens.neutral900,
            },
            blue: {
                color: colorsSiemens.primary,
                background: colorsSiemens.neutral800,
                borderColor: colorsSiemens.neutral900,
            },
        },
        TileExpand: {
            border: colorsSiemens.neutral700,
            header: {
                background: colorsSiemens.neutral900,
                hover: {
                    background: colorsSiemens.neutral800,
                    expander: {
                        color: colorsSiemens.primary,
                    },
                },
            },
            error: {
                background: colors.redBackground,
                message: {
                    color: colorsSiemens.red,
                },
                title: {
                    color: colorsSiemens.red,
                },
            },
            expander: {
                color: colors.neutral900,
                background: colorsSiemens.neutral700,
            },
            info: {
                background: colorsSiemens.neutral800,
                attribute: {
                    color: colors.neutral500,
                },
                value: {
                    color: colors.neutral500,
                    icon: {
                        color: colors.neutral500,
                        hover: {
                            color: colorsSiemens.primary,
                        },
                    },
                },
            },
            title: {
                color: colorsSiemens.primary,
            },
            time: {
                color: colors.neutral500,
            },
        },
        TileToggle: {
            background: colorsSiemens.neutral800,
            name: {
                color: colorsSiemens.primary,
            },
        },
        Toast: {
            background: colorsSiemens.neutral900,
            borderColor: colorsSiemens.neutral800,
        },
        Tooltip: {
            icon: {
                color: colorsSiemens.neutral500,
                hover: {
                    color: colorsSiemens.primary,
                },
            },
        },
        TreeExpander: {
            hover: {
                expanderIcon: {
                    color: colorsSiemens.neutral000,
                },
            },
            expanded: {
                color: colorsSiemens.neutral000,
            },
        },
        TreeTable: {
            row: {
                hover: {
                    customTag: {
                        background: '#ccc',
                        color: '#1a1a1a',
                    },
                },
            },
            cell: {
                color: colorsSiemens.neutral000,
            },
            removeBottomBorderRadius: {
                backgroundColor: colorsSiemens.neutral800,
                customTag: {
                    background: colorsSiemens.neutral800,
                    color: colorsSiemens.neutral500,
                },
            },
            removeTopBorderRadius: {
                backgroundColor: colorsSiemens.neutral800,
                customTag: {
                    background: colorsSiemens.neutral800,
                    color: colorsSiemens.neutral500,
                },
            },
            removeBorderRadius: {
                backgroundColor: colorsSiemens.neutral800,
                customTag: {
                    background: colorsSiemens.neutral800,
                    color: colorsSiemens.neutral500,
                },
            },
        },
        UserWidget: {
            description: {
                color: colorsSiemens.neutral900,
            },
            name: {
                color: colors.neutral500,
            },
            floatingMenu: {
                background: colorsSiemens.neutral800,
                border: colorsSiemens.neutral900,
                item: {
                    hover: {
                        color: colorsSiemens.primary,
                    },
                },
            },
            image: {
                background: colorsSiemens.neutral900,
            },
            logout: {
                color: colors.neutral600,
                hover: {
                    color: colorsSiemens.primary,
                },
            },
        },
        VersionMark: {
            link: {
                color: colorsSiemens.primary,
            },
        },
    },
    logo: {
        height: '48px',
        source: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIGJhc2VQcm9maWxlPSJ0aW55LXBzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTAxIDI0MCIgd2lkdGg9IjE1MDEiIGhlaWdodD0iMjQwIj48dGl0bGU+U2llbWVucy1sb2dvLXN2ZzwvdGl0bGU+PHN0eWxlPnRzcGFuIHsgd2hpdGUtc3BhY2U6cHJlIH0uc2hwMCB7IGZpbGw6ICNmZmZmZmYgfSA8L3N0eWxlPjxnIGlkPSJFYmVuZV94MDAyMF8xIj48cGF0aCBpZD0iTGF5ZXIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xhc3M9InNocDAiIGQ9Ik0xNDgzLjI2IDUzLjlDMTQ2MC4xMSA0NS4xNyAxNDM5LjUgNDAuNzYgMTQyMS40NiA0MC43NkMxNDEwLjc3IDQwLjc2IDE0MDIuMjYgNDIuNzMgMTM5NS44NiA0Ni41NkMxMzg5LjQ2IDUwLjQxIDEzODYuMiA1NS4xNiAxMzg2LjIgNjAuNzZDMTM4Ni4yIDY4LjIxIDEzOTMuNDIgNzQuODMgMTQwNy45NyA4MC43NkwxNDQ5Ljk4IDEwMS4xOUMxNDgzLjk1IDExNy4zNyAxNTAwLjgxIDEzOC44NSAxNTAwLjgxIDE2NS44NEMxNTAwLjgxIDE4OC4yOCAxNDkxLjg3IDIwNi4xNyAxNDczLjgzIDIxOS40MkMxNDU1LjkyIDIzMi44IDE0MzEuODEgMjM5LjQyIDE0MDEuOCAyMzkuNDJDMTM4Ny45NSAyMzkuNDIgMTM3NS41MSAyMzguODMgMTM2NC40NyAyMzcuNThDMTM1My40MiAyMzYuMzkgMTM0MC43MiAyMzMuOTUgMTMyNi42NCAyMzAuNDZMMTMyNi42NCAxODMuNzNDMTM1Mi40NiAxOTIuNDcgMTM3NS45OCAxOTYuODggMTM5Ny4xNSAxOTYuODhDMTQyMi40MSAxOTYuODggMTQzNC45OCAxODkuNTcgMTQzNC45OCAxNzQuOEMxNDM0Ljk4IDE2Ny40NiAxNDI5LjgzIDE2MS41MyAxNDE5LjM4IDE1Ni44OEwxMzcyLjcxIDEzNy4wMUMxMzU1LjUgMTI5LjIzIDEzNDIuNyAxMTkuODEgMTMzNC4zMiAxMDguNjRDMTMyNi4wOCA5Ny4zNyAxMzIxLjg5IDg0LjQ1IDEzMjEuODkgNjkuNjlDMTMyMS44OSA0OS4wMyAxMzMwLjU5IDMyLjM5IDEzNDcuODEgMTkuNzNDMTM2NS4xNiA3LjE4IDEzODguMTggMC44OCAxNDE2LjgxIDAuODhDMTQyNi4xMSAwLjg4IDE0MzYuODIgMS43MSAxNDQ4LjcgMy4yMkMxNDYwLjY3IDQuODQgMTQ3Mi4xOCA2LjgyIDE0ODMuMjYgOS4yNUwxNDgzLjI2IDUzLjlaTTE2MS41NCA1My45QzEzOC4zOCA0NS4xNyAxMTcuOCA0MC43NiA5OS43NiA0MC43NkM4OS4wNSA0MC43NiA4MC41NyA0Mi43MyA3NC4xNyA0Ni41NkM2Ny43NyA1MC40MSA2NC41MSA1NS4xNiA2NC41MSA2MC43NkM2NC41MSA2OC4yMSA3MS44MyA3NC44MyA4Ni4zNyA4MC43NkwxMjguMzkgMTAxLjE5QzE2Mi4yMyAxMTcuMzcgMTc5LjEyIDEzOC44NSAxNzkuMTIgMTY1Ljg0QzE3OS4xMiAxODguMjggMTcwLjE1IDIwNi4xNyAxNTIuMjQgMjE5LjQyQzEzNC4yIDIzMi44IDExMC4yMiAyMzkuNDIgODAuMTEgMjM5LjQyQzY2LjI2IDIzOS40MiA1My43OSAyMzguODMgNDIuNzQgMjM3LjU4QzMxLjY5IDIzNi4zOSAxOS4xMyAyMzMuOTUgNC45NSAyMzAuNDZMNC45NSAxODMuNzNDMzAuODcgMTkyLjQ3IDU0LjM4IDE5Ni44OCA3NS40MiAxOTYuODhDMTAwLjY5IDE5Ni44OCAxMTMuMjUgMTg5LjU3IDExMy4yNSAxNzQuOEMxMTMuMjUgMTY3LjQ2IDEwOC4xNCAxNjEuNTMgOTcuNzkgMTU2Ljg4TDUxLjEyIDEzNy4wMUMzMy43NyAxMjkuMjMgMjAuOTcgMTE5LjgxIDEyLjczIDEwOC42NEM0LjM1IDk3LjM3IDAuMjYgODQuNDUgMC4yNiA2OS42OUMwLjI2IDQ5LjAzIDguOSAzMi4zOSAyNi4yMiAxOS43M0M0My40MyA3LjE4IDY2LjQ5IDAuODggOTUuMTEgMC44OEMxMDQuNTEgMC44OCAxMTUuMSAxLjcxIDEyNy4xMSAzLjIyQzEzOC45OCA0Ljg0IDE1MC40OSA2LjgyIDE2MS41NCA5LjI1TDE2MS41NCA1My45Wk0yMDkuNjkgNS4wN0wyNzguMTIgNS4wN0wyNzguMTIgMjM1LjI0TDIwOS42OSAyMzUuMjRMMjA5LjY5IDUuMDdaTTQ5OC42IDUuMDdMNDk4LjYgNDcuNjFMMzk2LjkyIDQ3LjYxTDM5Ni45MiA5OC42NUw0ODUuMTEgOTguNjVMNDg1LjExIDEzNy4wMUwzOTYuOTIgMTM3LjAxTDM5Ni45MiAxOTAuNTlMNTAwLjY3IDE5MC41OUw1MDAuNjcgMjM1LjI0TDMzMS4wNiAyMzUuMjRMMzMxLjA2IDUuMDdMNDk4LjYgNS4wN1pNODE4LjA4IDUuMDdMODE4LjA4IDIzNS4yNEw3NTQuMTkgMjM1LjI0TDc1NC4xOSA4My40M0w2ODcuOSAyMzcuMzVMNjQ4LjQ2IDIzNy4zNUw1ODQuNzEgODMuNDNMNTg0LjcxIDIzNS4yNEw1MzguNSAyMzUuMjRMNTM4LjUgNS4wN0w2MjIuMDQgNS4wN0w2NzkuMDcgMTQ1Ljk3TDczOC43MyA1LjA3TDgxOC4wOCA1LjA3Wk0xMDM4LjQ2IDUuMDdMMTAzOC40NiA0Ny42MUw5MzcuMzMgNDcuNjFMOTM3LjMzIDk4LjY1TDEwMjUuNTIgOTguNjVMMTAyNS41MiAxMzcuMDFMOTM3LjMzIDEzNy4wMUw5MzcuMzMgMTkwLjU5TDEwNDAuNTMgMTkwLjU5TDEwNDAuNTMgMjM1LjI0TDg3MC45MiAyMzUuMjRMODcwLjkyIDUuMDdMMTAzOC40NiA1LjA3Wk0xMjc4LjU4IDUuMDdMMTI3OC41OCAyMzUuMjRMMTIwNiAyMzUuMjRMMTEyNC41NCA4Ny42MUwxMTI0LjU0IDIzNS4yNEwxMDc4LjM2IDIzNS4yNEwxMDc4LjM2IDUuMDdMMTE1My4wNyA1LjA3TDEyMzIuNDIgMTUwLjE2TDEyMzIuNDIgNS4wN0wxMjc4LjU4IDUuMDdaIiAvPjwvZz48L3N2Zz4=',
        width: '180px',
    },
}

export default theme
