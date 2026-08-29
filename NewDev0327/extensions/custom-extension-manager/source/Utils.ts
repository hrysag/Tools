import packageJSON from '../package.json';

export function showLog(message: string): void {
    console.log(`[${packageJSON.name}]: ${message}`);
}

export function showWarn(message: string): void {
    console.warn(`[${packageJSON.name}]: ${message}`);
}

export function showError(message: string, error?: any): void {
    console.error(`[${packageJSON.name}]: ${message}`, ...(error ? [error] : []));
}

export function waitTime(time: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, time * 1000));
}