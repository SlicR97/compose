import { Fn } from './fn.type'

export type ComposeFunction = <T0, T1, T2>(
  fn0: Fn<T1, T2>,
  fn1: Fn<T0, T1>,
) => Fn<T0, T2>
