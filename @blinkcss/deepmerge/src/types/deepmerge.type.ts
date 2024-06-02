export type DeepMerge<T1 extends object, T2 extends object> = {
  [K in keyof T1 | keyof T2]: K extends keyof T2
    ? T2[K]
    : K extends keyof T1
      ? T1[K]
      : never;
};
