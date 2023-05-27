import { Fn } from './types/fn.type'

export const compose = <T0, T1, T2>(
  fn0: Fn<T1, T2>,
  fn1: Fn<T0, T1>,
): Fn<T0, T2> => {
  return (t0: T0) => fn0(fn1(t0))
}
