export const print = console.log;
export const printError = console.error;
export const printWarn = console.warn;
export const printInfo = console.info;
export const printDebug = console.debug;
export const printTrace = console.trace;
export const printGroup = console.group;
export const printGroupEnd = console.groupEnd;
export const printTable = console.table;
export const printCount = console.count;
export const printClear = console.clear;
export const printTime = console.time;
export const printTimeEnd = console.timeEnd;
export const Print = {
    print,
    error: printError,
    warn: printWarn,
    info: printInfo,
    debug: printDebug,
    trace: printTrace,
    group: printGroup,
    groupEnd: printGroupEnd,
    table: printTable,
    count: printCount,
    clear: printClear,
    time: printTime,
    timeEnd: printTimeEnd,
    log: print,
    err: printError,
}