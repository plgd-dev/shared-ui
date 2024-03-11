import { hexToRgbA } from '../_utils/commonStyles'

type LogoType = {
    height: number
    source: string
    width: number
}

export const getThemeTemplate = (colors: any, logoProps: LogoType) => ({
    colorPalette: colors,
    colors: {
        ActionButton: {
            floatingMenu: {
                background: colors.neutral000,
                borderColor: colors.neutral200,
            },
            item: {
                borderColor: colors.neutral200,
                color: colors.neutral500,
                hover: {
                    color: colors.primary,
                },
            },
            icon: {
                color: colors.neutral500,
                hover: {
                    color: colors.primaryBonus,
                },
                active: {
                    color: colors.primaryBonus,
                },
            },
        },
        Alert: {
            background: colors.neutral000,
            borderColor: colors.neutral200,
            close: {
                color: colors.neutral500,
                hover: {
                    color: colors.primary,
                },
            },
            icon: {
                color: colors.primaryDarken,
            },
            label: {
                color: colors.neutral600,
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
        BottomPanel: {
            background: colors.neutral000,
            attribute: {
                color: colors.neutral500,
            },
            value: {
                color: colors.primaryDarken,
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
                background: colors.secondary,
                borderColor: colors.primaryDarken,
                color: colors.primaryDarken,
                hover: {
                    background: colors.primaryDarken,
                    borderColor: colors.primaryDarken,
                    color: colors.neutral000,
                },
                disabled: {
                    background: colors.secondary,
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
                background: colors.neutral000,
                borderColor: colors.neutral300,
                color: colors.neutral900,
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
        ButtonBox: {
            background: colors.light,
        },
        CaList: {
            item: {
                color: colors.neutral800,
                boxShadow: '0 -5px 0 -4px #e6e9ed inset',
            },
        },
        Checkbox: {
            borderColor: colors.neutral300,
            background: colors.primary,
            input: {
                borderColor: colors.primary,
            },
            label: {
                color: colors.neutral500,
            },
            error: {
                red: colors.red,
            },
        },
        CodeEditor: {
            background: colors.light,
            borderColor: colors.neutral200,
            color: colors.neutral600,
            gutters: {
                background: colors.neutral200,
                color: colors.neutral600,
            },
            lineHighlight: 'rgba(37, 88, 151, 0.1)',
            placeholder: {
                color: colors.neutral500,
            },
            selection: colors.neutral200,
        },
        ColorPicker: {
            background: colors.neutral000,
            borderColor: colors.neutral200,
            label: {
                color: colors.neutral500,
            },
            floatingMenu: {
                borderColor: colors.neutral200,
            },
        },
        Content: {
            background: colors.neutral000,
        },
        ContentMenu: {
            background: colors.neutral000,
            borderColor: colors.neutral200,
            item: {
                active: {
                    background: colors.light,
                    color: colors.primaryDarken,
                    icon: {
                        color: colors.primaryBonus,
                    },
                },
                color: colors.neutral500,
                hover: {
                    color: colors.primaryDarken,
                    icon: {
                        color: colors.primaryBonus,
                    },
                },
            },
            search: {
                background: colors.light,
                color: colors.neutral500,
            },
            subItem: {
                active: {
                    color: colors.neutral900,
                },
                color: colors.neutral500,
                hover: {
                    color: colors.neutral900,
                },
            },
            title: {
                color: colors.neutral500,
            },
        },
        CopyElement: {
            background: colors.neutral100,
            copied: {
                color: colors.neutral000,
                hover: {
                    color: colors.neutral000,
                },
            },
            hover: {
                color: colors.primaryDarken,
            },
        },
        DeleteModal: {
            red: colors.red,
            body: {
                background: colors.light,
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
                color: colors.neutral000,
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
                    color: colors.neutral500,
                },
                progressBar: {
                    background: colors.primary,
                },
                size: {
                    color: colors.neutral500,
                },
            },
            rejectedFile: {
                color: colors.red,
            },
        },
        Editor: {
            borderColor: colors.neutral200,
            constant: {
                boolean: {
                    color: colors.yellow,
                },
                numeric: {
                    color: colors.red,
                },
                string: {
                    color: colors.green,
                },
            },
            fullSizeBtn: {
                background: colors.neutral000,
                color: colors.neutral500,
                hover: {
                    color: colors.primary,
                },
            },
            gutter: {
                background: colors.neutral200,
                color: colors.neutral600,
            },
            gutterActiveLine: {
                background: undefined,
            },
            indentGuide: {
                background: undefined,
            },
            selection: {
                background: undefined,
            },
            scroller: {
                background: colors.light,
            },
            variable: {
                color: colors.neutral600,
            },
        },
        FloatingPanel: {
            Content: {
                background: colors.neutral000,
                borderColor: colors.neutral200,
                Headline: {
                    borderColor: colors.neutral200,
                    color: colors.primaryDarken,
                },
            },
            Icon: {
                color: colors.neutral500,
                hover: {
                    color: colors.primary,
                },
            },
        },
        Footer: {
            borderTop: colors.neutral200,
            background: colors.neutral000,
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
        FormGroup: {
            error: {
                color: colors.red,
            },
        },
        FormInput: {
            background: undefined,
            borderColor: colors.neutral300,
            color: colors.neutral800,
            disabled: {
                background: colors.neutral100,
                color: colors.neutral600,
                borderColor: colors.neutral300,
            },
            error: {
                red: colors.red,
            },
            focus: {
                borderColor: colors.primary,
            },
            icon: {
                color: colors.neutral500,
                hover: {
                    color: colors.primaryBonus,
                },
            },
            passwordIcon: {
                background: colors.neutral000,
            },
            placeholder: {
                color: colors.neutral500,
            },
            readonly: {
                color: colors.neutral600,
            },
        },
        FormLabel: {
            color: colors.neutral500,
            required: {
                color: colors.primary,
            },
        },
        FormSelect: {
            control: {
                borderColor: colors.neutral300,
                background: undefined,
                hover: {
                    borderColor: colors.primaryBonus,
                },
            },
            disabled: {
                color: colors.neutral500,
            },
            error: {
                color: colors.red,
            },
            indicator: {
                color: colors.neutral500,
            },
            input: {
                color: colors.neutral800,
            },
            menu: {
                borderColor: colors.neutral200,
                background: colors.neutral000,
                footer: {
                    link: {
                        color: colors.primary,
                    },
                },
                open: {
                    borderColor: colors.primaryBonus,
                },
            },
            option: {
                color: colors.neutral500,
                hover: {
                    color: colors.primary,
                },
            },
            optionSelected: {
                color: colors.neutral800,
            },
            placeholder: {
                color: colors.neutral800,
            },
            value: {
                color: colors.neutral800,
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
                color: colors.red,
            },
            focus: {
                borderColor: colors.primary,
            },
            placeholder: {
                color: colors.neutral500,
            },
            readOnly: {
                color: colors.neutral600,
            },
        },
        FullPageWizard: {
            background: colors.neutral000,
            close: {
                color: colors.neutral500,
            },
            leftCol: {
                background: colors.light,
            },
            navigation: {
                link: {
                    color: colors.primaryDarken,
                },
                line: {
                    background: colors.neutral300,
                    visited: {
                        background: colors.primary,
                    },
                },
                description: {
                    color: colors.neutral500,
                },
            },
        },
        Header: {
            background: colors.neutral000,
            borderBottom: colors.neutral200,
        },
        Headline: {
            color: colors.primaryDarken,
            sizes: {
                h6: {
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: 700,
                },
            },
        },
        IncompleteOnboardingDataModal: {
            row: {
                background: colors.neutral000,
            },
        },
        Layout: {
            background: colors.neutral000,
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
                color: hexToRgbA(colors.neutral500, 0.8),
            },
            item: {
                color: colors.neutral500,
                hover: {
                    color: colors.neutral800,
                },
                active: {
                    color: colors.primaryDarken,
                },
                disabled: {
                    color: colors.neutral300,
                },
            },
            subItem: {
                active: {
                    color: colors.neutral800,
                },
                hover: {
                    color: colors.neutral800,
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
        Link: {
            big: {
                color: colors.primary,
            },
            normal: {
                color: colors.neutral500,
            },
        },
        LinkExpander: {
            background: colors.light,
        },
        Modal: {
            background: colors.neutral000,
            header: {
                borderColor: colors.neutral200,
                color: colors.primaryDarken,
                subtitle: {
                    color: colors.neutral500,
                },
            },
            content: {
                background: colors.neutral000,
            },
            footer: {
                background: colors.neutral000,
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
                color: colors.primaryDarken,
            },
        },
        NotificationCenter: {
            floatingPanel: {
                background: colors.neutral000,
                borderColor: colors.neutral200,
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
                color: colors.neutral500,
                hover: {
                    color: colors.primary,
                },
                hasUnRead: {
                    borderColor: colors.neutral000,
                    background: colors.red,
                },
            },
            InnerToast: {
                borderColor: colors.neutral200,
                headline: {
                    color: colors.primaryDarken,
                },
                unreadMark: {
                    borderColor: colors.neutral000,
                },
            },
            info: colors.primary,
            green: colors.green,
            yellow: colors.yellow,
            red: colors.red,
        },
        PageLayout: {
            headline: {
                color: colors.primaryDarken,
                border: {
                    color: colors.neutral200,
                },
            },
        },
        PageLoader: {
            bar: {
                background: colors.primary,
            },
        },
        Pagination: {
            item: {
                active: {
                    background: colors.neutral100,
                    color: colors.neutral900,
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
                background: colors.light,
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
            border: {
                background: colors.neutral200,
            },
            row: {
                background: colors.neutral000,
                hover: {
                    background: colors.tertiary,
                },
            },
            value: {
                color: colors.neutral800,
                copy: {
                    color: colors.neutral500,
                    hover: {
                        color: colors.primary,
                    },
                },
            },
        },
        SplitButton: {
            floatingMenu: {
                background: colors.neutral000,
                borderColor: colors.neutral200,
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
                occupied: colors.yellow,
            },
        },
        StatusTag: {
            success: {
                color: colors.green,
                background: hexToRgbA(colors.green, 0.16),
            },
            warning: {
                color: colors.yellow,
                background: hexToRgbA(colors.yellow, 0.24),
            },
            error: {
                color: colors.red,
                background: hexToRgbA(colors.red, 0.16),
            },
            info: {
                color: colors.primary,
                background: hexToRgbA(colors.primary, 0.16),
            },
            normal: {
                color: colors.neutral500,
                background: colors.neutral100,
            },
        },
        Switch: {
            background: colors.neutral300,
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
                background: colors.neutral100,
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
                    color: colors.primaryBonus,
                },
            },
        },
        TableGlobalFilter: {
            searchInput: {
                background: undefined,
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
            icon: {
                success: {
                    color: colors.green,
                },
                error: {
                    color: colors.red,
                },
            },
        },
        Tag: {
            background: colors.neutral100,
            white: {
                background: colors.neutral000,
                borderColor: 'transparent',
            },
            blue: {
                color: colors.primary,
                background: hexToRgbA(colors.primaryBright, 0.2),
                borderColor: 'transparent',
            },
        },
        TileExpand: {
            border: colors.neutral200,
            header: {
                background: colors.neutral000,
                hover: {
                    background: colors.neutral100,
                    expander: {
                        color: colors.primary,
                    },
                },
            },
            error: {
                background: colors.redBackground,
                message: {
                    color: colors.red,
                },
                title: {
                    color: colors.red,
                },
            },
            expander: {
                color: colors.neutral900,
                background: colors.neutral100,
            },
            info: {
                background: colors.neutral100,
                attribute: {
                    color: colors.neutral500,
                },
                value: {
                    color: colors.neutral800,
                    icon: {
                        color: colors.neutral500,
                        hover: {
                            color: colors.primary,
                        },
                    },
                },
            },
            title: {
                color: colors.primaryDarken,
            },
            time: {
                color: colors.neutral800,
            },
        },
        TileToggle: {
            background: colors.neutral100,
            name: {
                color: colors.primaryDarken,
            },
        },
        Toast: {
            background: colors.neutral000,
            borderColor: colors.neutral200,
        },
        Tooltip: {
            icon: {
                color: colors.neutral500,
                hover: {
                    color: colors.primary,
                },
            },
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
                        background: colors.neutral000,
                        color: colors.neutral900,
                    },
                },
            },
            cell: {
                color: colors.primary,
            },
            removeBottomBorderRadius: {
                backgroundColor: colors.neutral100,
                customTag: {
                    background: colors.neutral000,
                    color: colors.neutral500,
                },
            },
            removeTopBorderRadius: {
                backgroundColor: colors.neutral100,
                customTag: {
                    background: colors.neutral000,
                    color: colors.neutral500,
                },
            },
            removeBorderRadius: {
                backgroundColor: colors.neutral100,
                customTag: {
                    background: colors.neutral000,
                    color: colors.neutral500,
                },
            },
        },
        UserWidget: {
            description: {
                color: colors.neutral900,
            },
            name: {
                color: colors.primaryDarken,
            },
            floatingMenu: {
                background: colors.neutral000,
                border: colors.neutral200,
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
    Global: {
        fontPrimary: "'Poppins', sans-serif",
        fontSecondary: "'Circular Pro', sans-serif",
        iconColor: colors.neutral500,
        fontSize: '14px',
        lineHeight: '22px',
    },
    logo: {
        ...logoProps,
        height: `${logoProps.height}px`,
        width: `${logoProps.width}px`,
    },
})
