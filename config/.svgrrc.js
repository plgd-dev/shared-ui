module.exports = {
    icon: true,
    ref: true,
    memo: true,
    typescript: true,
    template: require('./svg-template'),
    indexTemplate: require('./svgr-index-template'),
    removeViewBox: false,
    replaceAttrValues: {
        'white': '{props.color || `#FFFFFF`}',
        '#FFFFFF': '{props.color || `#FFFFFF`}',
        'black': '{props.color || `#000000`}',
        '#111111': '{props.color || `#000000`}',
        '#000': '{props.color || `#000000`}',
    },
    svgProps: {
        width: '{props.width || 16}',
        height: '{props.height || 16}',
    },
}
