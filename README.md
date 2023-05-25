# Compose

## Description

Small library providing a `compose` function to compose functions from left to right.

## Installation

### Using npm:

```
npm install @slicr97/compose
```

### Using yarn:

```
yarn add @slicr97/compose
```

## Usage

To give you an example of how this library works, look at the following code snippet:

```typescript
import { compose } from '@slicr97/compose'

const addOne = (x: number) => x + 1
const multiplyByTwo = (x: number) => x * 2

const addOneAndMultiplyByTwo = compose(addOne, multiplyByTwo)

const result = addOneAndMultiplyByTwo(2) // 6
```
