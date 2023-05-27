/* eslint-disable no-var */
// noinspection JSConstantReassignment,ES6ConvertVarToLetConst

import { pipe } from './pipe'
import { compose } from './compose'
import { PipeFunction } from './types/pipe.function'
import { ComposeFunction } from './types/compose-function.type'

declare global {
  var pipe: PipeFunction
  var compose: ComposeFunction
}

globalThis.pipe = pipe
globalThis.compose = compose
