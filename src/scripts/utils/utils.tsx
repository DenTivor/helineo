export function trim(text: string) {
    return text.replace(/^\s+|\s+$/g, "");
};


export function toCamel(text: string) {
    return text.replace(/(\-[a-z])/g, function ($1) {return $1.toUpperCase().replace('-', '');});
};


export function toDash(text: string) {
    return text.replace(/([A-Z])/g, function ($1) {return "-" + $1.toLowerCase();});
};


export function toUnderscore(text: string) {
    return text.replace(/([A-Z])/g, function ($1) {return "_" + $1.toLowerCase();});
};

export function toClassName(text: string) {
    var camelized = toCamel(text);
    return camelized.charAt(0).toUpperCase() + camelized.slice(1);
}