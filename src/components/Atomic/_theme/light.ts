import { colors, colorsVariants } from '../_utils/colors'

const theme = {
    colors: {
        ActionButton: {
            floatingMenu: {
                background: '#fff',
                borderColor: colors.neutral200,
            },
            item: {
                borderColor: colors.neutral200,
                hover: {
                    color: colors.primary,
                },
            },
            icon: {
                hover: {
                    color: colors.primaryBonus,
                },
                active: {
                    color: colors.primaryBonus,
                },
            },
        },
        Alert: {
            background: '#fff',
            borderColor: '#e6e9ed',
            close: {
                color: colors.neutral500,
            },
            icon: {
                color: colors.primaryDarken,
            },
            line: {
                background: colors.primaryDarken,
            },
            error: {
                background: colors.red,
                icon: {
                    color: colors.red,
                },
                line: {
                    background: colors.red,
                },
            },
            success: {
                background: colors.green,
                icon: {
                    color: colors.green,
                },
                line: {
                    background: colors.green,
                },
            },
            warning: {
                background: colors.yellow,
                icon: {
                    color: colors.yellow,
                },
                line: {
                    background: colors.yellow,
                },
            },
        },
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
                hover: {
                    color: colors.primary,
                },
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
            deleteIconInner: {
                color: '#fff',
            },
            subTitle: {
                color: colors.neutral800,
            },
            emptyDeleteInformation: {
                background: colors.neutral200,
            },
        },
        DetailHeadline: {
            color: colors.primaryDarken,
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
            fullSizeBtn: {
                background: '#fff',
            },
            hover: {
                color: colors.primary,
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
            disabled: {
                background: '#f6f7f9',
                color: '#757676',
                borderColor: '#e6e9ed',
            },
            readonly: {
                color: '#757676',
            },
        },
        FormSelect: {
            input: {
                color: colors.neutral800,
            },
            control: {
                borderColor: colors.neutral300,
                background: undefined,
                hover: {
                    borderColor: colors.primaryBonus,
                },
            },
            menu: {
                borderColor: colors.neutral200,
                background: undefined,
                open: {
                    borderColor: colors.primaryBonus,
                },
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
            option: {
                hover: {
                    color: colors.primary,
                },
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
                    color: '#d0d0d0',
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
            value: {
                color: colors.neutral800,
            },
        },
        NotFound: {
            title: {
                color: '#0a2965',
            },
        },
        NotificationCenter: {
            floatingPanel: {
                background: '#fff',
                borderColor: '#e6e9ed',
            },
            Headline: {
                borderColor: colors.neutral200,
                color: colors.primaryDarken,
            },
            ClearAll: {
                borderColor: colors.neutral200,
                color: colors.primary,
            },
            Bell: {
                hasUnRead: {
                    borderColor: '#fff',
                },
            },
            InnerToast: {
                borderColor: colors.neutral200,
                headline: {
                    color: colors.primaryDarken,
                },
                unreadMark: {
                    borderColor: '#fff',
                },
            },
            info: colors.primary,
            green: colors.green,
            yellow: colors.yellow,
            red: colors.red,
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
        Scrollbar: {
            color: colors.neutral500,
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
            item: {
                hover: {
                    color: colors.primary,
                },
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
                selected: {
                    cell: {
                        before: {
                            background: colors.neutral200,
                        },
                    },
                },
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
            disabled: {
                color: colors.disabled,
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
                    color: colors.primary,
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
                        color: '#1a1a1a',
                    },
                },
            },
            cell: {
                color: colors.primary,
            },
            removeBottomBorderRadius: {
                backgroundColor: colors.neutral100,
                customTag: {
                    background: '#fff',
                    color: '#81868D',
                },
            },
            removeTopBorderRadius: {
                backgroundColor: colors.neutral100,
                customTag: {
                    background: '#fff',
                    color: '#81868D',
                },
            },
            removeBorderRadius: {
                backgroundColor: colors.neutral100,
                customTag: {
                    background: '#fff',
                    color: '#81868D',
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
            logout: {
                color: colors.neutral500,
                hover: {
                    color: colors.primary,
                },
            },
        },
        VersionMark: {
            link: {
                color: colors.primary,
            },
        },
    },
    logo: {
        height: '32px',
        source: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ3IiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTQ3IDMyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgY2xhc3M9ImNzcy1qbHBlb3UiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODUuMTA2IDExLjgzNWMxLjQ5NCAwIDIuNjMuNDg1IDMuNDA4IDEuNDU3di0xLjMwNWgyLjgzNnY4LjQ4M2MwIDEuODY3LS40OTMgMy4yNTgtMS40NzYgNC4xNjgtLjk4NC45MDctMi40MiAxLjM2Mi00LjMwOCAxLjM2Mi0uOTk2IDAtMS45NDItLjEyLTIuODM0LS4zNi0uODk1LS4yNC0xLjYzNi0uNTg4LTIuMjIyLTEuMDQyLjExOS0uMjEgMS4wNy0xLjkwNyAxLjE4OC0yLjEyLjQzMi4zNTUuOTguNjM1IDEuNjQ2Ljg0Mi42NjUuMjEgMS4zMjcuMzEyIDEuOTkyLjMxMiAxLjAzNCAwIDEuNzk3LS4yMjkgMi4yODgtLjY5LjQ5My0uNDYyLjczOC0xLjE2LjczOC0yLjA5NXYtLjQzNGMtLjc3OS44NDctMS44NjYgMS4yNy0zLjI1NiAxLjI3YTUuNTMgNS41MyAwIDAgMS0yLjU5Ni0uNjE1IDQuNzUzIDQuNzUzIDAgMCAxLTEuODY2LTEuNzM2Yy0uNDYtLjc0Mi0uNjktMS42MDItLjY5LTIuNTc0IDAtLjk3My4yMy0xLjgzLjY5LTIuNTc1YTQuNzI1IDQuNzI1IDAgMCAxIDEuODY2LTEuNzMzYy43ODYtLjQxIDEuNjUtLjYxNSAyLjU5Ni0uNjE1Wm0tMTkuMDE2LS4wMDNjLjk1OCAwIDEuODMuMjE4IDIuNjE3LjY1NWE0LjcxIDQuNzEgMCAwIDEgMS44NDUgMS44MzVjLjQ0Ny43OS42NzIgMS43MDguNjcyIDIuNzU4IDAgMS4wNDctLjIyNSAxLjk2NS0uNjcyIDIuNzU1YTQuNzE5IDQuNzE5IDAgMCAxLTEuODQ1IDEuODM4Yy0uNzg3LjQzNS0xLjY1OS42NTItMi42MTcuNjUyLTEuMzE0IDAtMi4zNDktLjQxLTMuMTAyLTEuMjMzdjQuNzU2SDYwVjExLjk4M2gyLjg1NHYxLjE3NWMuNzQtLjg4MyAxLjgyLTEuMzI1IDMuMjM2LTEuMzI1Wm02My44NzEgMGMuOTgzIDAgMS44NzYuMjA1IDIuNjguNjE1YTQuNzgzIDQuNzgzIDAgMCAxIDEuOTI2IDEuNzgzYy40NzguNzc1LjcxOCAxLjY5NS43MTggMi43NTVsLTcuNjIyIDEuNDU4Yy4yMTcuNTA1LjU1OS44ODQgMS4wMjQgMS4xMzcuNDY1LjI1MyAxLjAzNy4zNzggMS43MTQuMzc4LjUzNiAwIDEuMDExLS4wNzggMS40MjgtLjIzNWEzLjQ4IDMuNDggMCAwIDAgMS4xNTgtLjc1bDEuNTkgMS43MDVjLS45NzEgMS4wOTctMi4zODkgMS42NDctNC4yNTIgMS42NDctMS4xNjMgMC0yLjE5MS0uMjIyLTMuMDg0LS42Ny0uODk1LS40NS0xLjU4My0xLjA3My0yLjA2OC0xLjg2Ny0uNDg1LS43OTYtLjcyOC0xLjY5OC0uNzI4LTIuNzA4IDAtLjk5OC4yNC0xLjg5Ny43MTgtMi43YTUuMDA0IDUuMDA0IDAgMCAxIDEuOTcyLTEuODc1Yy44MzctLjQ0OCAxLjc3OS0uNjczIDIuODI2LS42NzNabS03LjQyMi0zLjcxMnYxNC4wNTVoLTIuODU0VjIxYy0uNzQxLjg4NS0xLjgxNiAxLjMyNS0zLjIxOSAxLjMyNS0uOTcxIDAtMS44NDgtLjIxNS0yLjYzNC0uNjQyYTQuNjU3IDQuNjU3IDAgMCAxLTEuODQ4LTEuODM4Yy0uNDQ3LS43OTUtLjY3LTEuNzE4LS42Ny0yLjc2NSAwLTEuMDQ3LjIyNS0xLjk3LjY3LTIuNzY1YTQuNjU4IDQuNjU4IDAgMCAxIDEuODQ4LTEuODM3Yy43ODYtLjQzIDEuNjYzLS42NDYgMi42MzQtLjY0NiAxLjMxNSAwIDIuMzQ0LjQxMyAzLjA4NSAxLjIzM1Y4LjEyaDIuOTg4Wm0tMTQuMjk3IDEwLjUzYy41MjQgMCAuOTY0LjE3IDEuMzIzLjUwMy4zNTYuMzM0LjUzNi43NzUuNTM2IDEuMzE3IDAgLjUzLS4xOC45NzMtLjUzNiAxLjMyNi0uMzU5LjM1NC0uNzk5LjUzLTEuMzIzLjUzLS41MjMgMC0uOTY1LS4xNzYtMS4zMjItLjUzLS4zNTYtLjM1NC0uNTM2LS43OTYtLjUzNi0xLjMyNiAwLS41NDIuMTgtLjk4My41MzYtMS4zMTcuMzU3LS4zMzMuNzk5LS41MDMgMS4zMjItLjUwM1pNNzYuMjAyIDguMTJ2MTAuNTEyYzAgLjQzLjExNC43Ni4zMzcuOTk2LjIyMi4yMzIuNTM4LjM1Ljk0Ny4zNS4xNTQgMCAuMzA5LS4wMi40Ny0uMDU4LjE2LS4wMzcuMjg0LS4wODMuMzcyLS4xMzMuMDE1LjIzLjEyMiAyLjA2My4xMzQgMi4yOTNhNC45NiA0Ljk2IDAgMCAxLTEuNTUuMjQ1Yy0xLjE2MiAwLTIuMDctLjMwNS0yLjcyLS45MTctLjY1Mi0uNjEzLS45NzUtMS40OC0uOTc1LTIuNjA1VjguMTJoMi45ODVaTTEwNC40NzEgOHYxNC4wNTVoLTIuODU0VjIwLjg4Yy0uNzQxLjg4NS0xLjgxMyAxLjMyNS0zLjIxOSAxLjMyNS0uOTY4IDAtMS44NDgtLjIxMi0yLjYzMi0uNjQyYTQuNjUzIDQuNjUzIDAgMCAxLTEuODQ4LTEuODM4Yy0uNDQ3LS43OTUtLjY3LTEuNzE4LS42Ny0yLjc2NSAwLTEuMDQ3LjIyMy0xLjk3LjY3LTIuNzY1YTQuNjQ2IDQuNjQ2IDAgMCAxIDEuODQ4LTEuODM4Yy43ODQtLjQzIDEuNjY0LS42NDIgMi42MzItLjY0MiAxLjMxNyAwIDIuMzQ0LjQxIDMuMDg1IDEuMjNWOGgyLjk4OFptMzQuMDg4IDMuOTQzIDIuNzMgNy42NzcgMi43My03LjY3N0gxNDdsLTQuMDk4IDEwLjIyNWgtMy4yODRsLTQuMDk4LTEwLjIyNWgzLjAzOVptLTIxLjU3NyAyLjMxNWMtLjc2NiAwLTEuMzk4LjI1NS0xLjg5Ni43NjctLjQ5OC41MS0uNzQ2IDEuMTk1LS43NDYgMi4wNTUgMCAuODU4LjI0OCAxLjU0Mi43NDYgMi4wNTUuNS41MSAxLjEzLjc2NSAxLjg5Ni43NjUuNzU2IDAgMS4zOC0uMjU1IDEuODc4LS43NjUuNDk5LS41MTMuNzQ2LTEuMTk3Ljc0Ni0yLjA1NSAwLS44Ni0uMjQ3LTEuNTQ1LS43NDYtMi4wNTUtLjQ5OC0uNTEyLTEuMTI1LS43NjctMS44NzgtLjc2N1ptLTUxLjQwOCAwYy0uNzY2IDAtMS4zOTUuMjU1LTEuODg2Ljc2Ny0uNDkzLjUxLS43MzggMS4xOTUtLjczOCAyLjA1NSAwIC44NTguMjQ1IDEuNTQyLjczOCAyLjA1NS40OS41MSAxLjEyLjc2NSAxLjg4Ni43NjUuNzY3IDAgMS4zOTYtLjI1NSAxLjg4Ni0uNzY1LjQ5LS41MTMuNzM5LTEuMTk3LjczOS0yLjA1NSAwLS44Ni0uMjQ4LTEuNTQ1LS43NC0yLjA1NS0uNDktLjUxMi0xLjExOC0uNzY3LTEuODg1LS43NjdabTMzLjM0My0uMTJjLS43NjYgMC0xLjM5OC4yNTUtMS44OTYuNzY3LS40OTguNTEtLjc0OSAxLjE5NS0uNzQ5IDIuMDU1IDAgLjg1OC4yNSAxLjU0My43NDkgMi4wNTUuNDk4LjUxIDEuMTMuNzY1IDEuODk1Ljc2NS43NTQuMDAzIDEuMzgxLS4yNTUgMS44NzYtLjc2NS40OTktLjUxMi43NDktMS4xOTcuNzQ5LTIuMDU1IDAtLjg2LS4yNS0xLjU0NS0uNzQ5LTIuMDU1LS40OTgtLjUxMi0xLjEyMi0uNzY4LTEuODc2LS43NjhabS0xMy4yMTcuMTJjLS43OTEgMC0xLjQ0My4yMy0xLjk1NC42OTItLjUwOC40Ni0uNzYzIDEuMDYzLS43NjMgMS44MDggMCAuNzQ0LjI1NSAxLjM0Ny43NjMgMS44MS41MS40NiAxLjE2My42OSAxLjk1NC42OS43OTEgMCAxLjQzOC0uMjMgMS45NDQtLjY5LjUwNi0uNDYzLjc1Ni0xLjA2Ni43NTYtMS44MSAwLS43NDUtLjI1LTEuMzQ4LS43NTYtMS44MDgtLjUwNi0uNDYzLTEuMTUzLS42OTItMS45NDQtLjY5MlptNDQuMjYxLS4xOWMtLjc1MyAwLTEuMzY4LjI0LTEuODM4LjcyLS40NzMuNDgtLjcyMyAxLjE0Mi0uNzQ4IDEuOTkuNTAxLS4wOTggNC41MTUtLjg3IDUuMDE4LS45NjhhMi4yMjYgMi4yMjYgMCAwIDAtLjg2Mi0xLjI2OGMtLjQzNS0uMzE3LS45NTgtLjQ3NC0xLjU3LS40NzRaIiBmaWxsPSIjMTkxQTFBIj48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny40MDUgMjcuMDA5QTEyLjY4IDEyLjY4IDAgMCAwIDUwIDE5LjMwMmMwLTcuMDA3LTUuNjQ2LTEyLjY4OC0xMi42MS0xMi42ODgtLjU2NiAwLTEuMTIyLjA0Mi0xLjY2OS4xMTUtLjQ1LS43MjMtLjgwNi0xLjI2NS0xLjAyNC0xLjU0NEMzMi4yMzMgMi4wMjcgMjguNDA1IDAgMjQuMTA2IDBjLTYuMzcgMC0xMS43MDQgNC40NTYtMTMuMDk4IDEwLjQzOCAwLS4wMDgtLjAwOC0uMDE4LS4wMDYtLjAyNS0uMS0uMDAzLS4xOTktLjAxLS4zLS4wMUM0Ljc5MyAxMC40MDMgMCAxNS4yMjYgMCAyMS4xNzMgMCAyNy4xMTggNC43OTIgMzEuOTQgMTAuNzAzIDMxLjk0YzMuOTM2IDAgOS4yOC4wNDcgMTIuOTguMDQ3IDIuMjA3IDAgMy40MDItLjAyNiAxMi41MTMgMGwuMjItLjAwMmMxLjE4NC4wNTYgMy43MjkuMDExIDYuMTQ3LTEuMTA5LjM4OC0uMTg0IDIuNzQ1LTEuMTc2IDQuODQzLTMuODY2bC0uMDAxLS4wMDFaIiBmaWxsPSIjRkVCRjQwIj48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ny40MDUgMjcuMDA5QTEyLjY4IDEyLjY4IDAgMCAwIDUwIDE5LjMwMmMwLTcuMDA3LTUuNjQ2LTEyLjY4OC0xMi42MS0xMi42ODgtLjU2NiAwLTEuMTIyLjA0Mi0xLjY2OC4xMTUtLjQ1LS43MjMtLjgwNi0xLjI2NS0xLjAyNS0xLjU0NEMzMi4yMzMgMi4wMjcgMjguNDA2IDAgMjQuMTA2IDBjLTcuNDMgMC0xMy40NTcgNi4wNjEtMTMuNDU3IDEzLjU0IDAgNy40NzggNS42MDIgMTguNDQ3IDEzLjAzNCAxOC40NDcgMi4yMDcgMCAzLjQwMy0uMDI2IDEyLjUxMyAwbC4yMjEtLjAwMmMxLjE4My4wNTYgMy43MjguMDExIDYuMTQ3LTEuMTA5LjM4OC0uMTg0IDIuNzQ0LTEuMTc2IDQuODQyLTMuODY2bC0uMDAxLS4wMDFaIiBmaWxsPSIjODdDRUYyIj48L3BhdGg+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00Ni45MyAyNi4yOTZDNDQuODgyIDIyLjYyMiAzNi4yNzggNy4yMSAzNC42OTYgNS4xODQgMzIuMjMzIDIuMDI3IDI4LjQwNCAwIDI0LjEwNSAwYy03LjQzIDAtMTMuNDU3IDYuMDYxLTEzLjQ1NyAxMy41NCAwIDcuNDc4IDUuNjAyIDE4LjQ0NyAxMy4wMzQgMTguNDQ3IDIuMjA4IDAgMy40MDMtLjAyNiAxMi41MTMgMGwuMjIxLS4wMDJjMS4xODQuMDU2IDMuNzI5LjAxMiA2LjE0Ny0xLjEwOS4zODgtLjE4NCAyLjc0NS0xLjE3NiA0Ljg0Mi0zLjg2NmwtLjQ3Ni0uNzE0WiIgZmlsbD0iIzIyNjFBRSI+PC9wYXRoPjwvc3ZnPgo=',
        width: '147px',
    },
}

export default theme
