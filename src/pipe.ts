type Fn<T0, T1> = (t0: T0) => T1

export function pipe<T0, T1, T2>(fn0: Fn<T0, T1>, fn1: Fn<T1, T2>): Fn<T0, T2>
export function pipe<T0, T1, T2, T3>(
  fn0: Fn<T0, T1>,
  fn1: Fn<T1, T2>,
  fn2: Fn<T2, T3>,
): Fn<T0, T3>
export function pipe<T0, T1, T2, T3, T4>(
  fn0: Fn<T0, T1>,
  fn1: Fn<T1, T2>,
  fn2: Fn<T2, T3>,
  fn3: Fn<T3, T4>,
): Fn<T0, T4>
export function pipe<T0, T1, T2, T3, T4, T5>(
  fn0: Fn<T0, T1>,
  fn1: Fn<T1, T2>,
  fn2: Fn<T2, T3>,
  fn3: Fn<T3, T4>,
  fn4: Fn<T4, T5>,
): Fn<T0, T5>
export function pipe<T0, T1, T2, T3, T4, T5, T6>(
  fn0: Fn<T0, T1>,
  fn1: Fn<T1, T2>,
  fn2: Fn<T2, T3>,
  fn3: Fn<T3, T4>,
  fn4: Fn<T4, T5>,
  fn5: Fn<T5, T6>,
): Fn<T0, T6>
export function pipe<T0, T1, T2, T3, T4, T5, T6, T7>(
  fn0: Fn<T0, T1>,
  fn1: Fn<T1, T2>,
  fn2: Fn<T2, T3>,
  fn3: Fn<T3, T4>,
  fn4: Fn<T4, T5>,
  fn5: Fn<T5, T6>,
  fn6: Fn<T6, T7>,
): Fn<T0, T7>
export function pipe<T0, T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: Fn<T0, T1>,
  fn1: Fn<T1, T2>,
  fn2: Fn<T2, T3>,
  fn3: Fn<T3, T4>,
  fn4: Fn<T4, T5>,
  fn5: Fn<T5, T6>,
  fn6: Fn<T6, T7>,
  fn7: Fn<T7, T8>,
): Fn<T0, T8>
export function pipe<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: Fn<T0, T1>,
  fn1: Fn<T1, T2>,
  fn2: Fn<T2, T3>,
  fn3: Fn<T3, T4>,
  fn4: Fn<T4, T5>,
  fn5: Fn<T5, T6>,
  fn6: Fn<T6, T7>,
  fn7: Fn<T7, T8>,
  fn8: Fn<T8, T9>,
): Fn<T0, T9>
export function pipe<T0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
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
):
  | Fn<T0, T2>
  | Fn<T0, T3>
  | Fn<T0, T4>
  | Fn<T0, T5>
  | Fn<T0, T6>
  | Fn<T0, T7>
  | Fn<T0, T8>
  | Fn<T0, T9>
  | Fn<T0, T10> {
  if (!fn2) {
    return (t0: T0) => fn1(fn0(t0))
  }

  if (!fn3) {
    return (t0: T0) => fn2(fn1(fn0(t0)))
  }

  if (!fn4) {
    return (t0: T0) => fn3(fn2(fn1(fn0(t0))))
  }

  if (!fn5) {
    return (t0: T0) => fn4(fn3(fn2(fn1(fn0(t0)))))
  }

  if (!fn6) {
    return (t0: T0) => fn5(fn4(fn3(fn2(fn1(fn0(t0))))))
  }

  if (!fn7) {
    return (t0: T0) => fn6(fn5(fn4(fn3(fn2(fn1(fn0(t0)))))))
  }

  if (!fn8) {
    return (t0: T0) => fn7(fn6(fn5(fn4(fn3(fn2(fn1(fn0(t0))))))))
  }

  if (!fn9) {
    return (t0: T0) => fn8(fn7(fn6(fn5(fn4(fn3(fn2(fn1(fn0(t0)))))))))
  }

  return (t0: T0) => fn9(fn8(fn7(fn6(fn5(fn4(fn3(fn2(fn1(fn0(t0))))))))))
}
