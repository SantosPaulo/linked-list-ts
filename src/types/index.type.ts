export type Nullable<T extends unknown> = T | null;
export type PrinterFn = <T = void>(data: unknown) => T;
