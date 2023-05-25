# Pipe

## Description

Small library providing a `pipe` function to compose functions from left to right.

## Installation

### Using npm:

```
npm install @slicr97/pipe
```

### Using yarn:

```
yarn add @slicr97/pipe
```

## Usage

To give you an example of how this library works, look at the following code snippet:

```typescript
import { pipe } from '@slicr97/pipe'

const addOne = (x: number) => x + 1
const multiplyByTwo = (x: number) => x * 2

const addOneAndMultiplyByTwo = pipe(addOne, multiplyByTwo)

const result = addOneAndMultiplyByTwo(2) // 6
```
