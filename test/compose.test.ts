import { compose } from '../src/compose'
import { expect } from 'chai'

describe('compose', () => {
  it('returns a function', () => {
    const addOne = (a: number) => a + 1
    const double = (a: number) => a * 2
    const addOneAndDouble = compose(double, addOne)

    expect(addOneAndDouble(2)).to.equal(6)
  })
})
