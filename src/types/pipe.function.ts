import { Fn } from './fn.type'

export type PipeFunction = <T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: Fn<T0, T1>,
  fn1: Fn<T1, T2>,
  fn2?: Fn<T2, T3>,
  fn3?: Fn<T3, T4>,
  fn4?: Fn<T4, T5>,
  fn5?: Fn<T5, T6>,
  fn6?: Fn<T6, T7>,
  fn7?: Fn<T7, T8>,
  fn8?: Fn<T8, T9>,
  fn9?: Fn<T9, T10>,
) =>
  | Fn<T0, T2>
  | Fn<T0, T3>
  | Fn<T0, T4>
  | Fn<T0, T5>
  | Fn<T0, T6>
  | Fn<T0, T7>
  | Fn<T0, T8>
  | Fn<T0, T9>
  | Fn<T0, T10>
