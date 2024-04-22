export const isValidGuid = (guid: string) =>
    /^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$/i.test(guid) &&
    ((guid.charAt(0) === '{' && guid.charAt(guid.length - 1) === '}') || guid.charAt(0) !== '{')
