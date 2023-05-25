import { pipe } from '../src/pipe'
import { expect } from 'chai'

describe('pipe', () => {
  describe('pipe/2', () => {
    it('pipes one function into another', () => {
      const add1 = (n: number) => n + 1

      const add2 = pipe(add1, add1)
      expect(add2(1)).to.equal(3)
    })
  })

  describe('pipe/3', () => {
    it('pipes two functions into another', () => {
      const add1 = (n: number) => n + 1

      const add3 = pipe(add1, add1, add1)
      expect(add3(1)).to.equal(4)
    })
  })

  describe('pipe/4', () => {
    it('pipes three functions into another', () => {
      const add1 = (n: number) => n + 1

      const add4 = pipe(add1, add1, add1, add1)
      expect(add4(1)).to.equal(5)
    })
  })

  describe('pipe/5', () => {
    it('pipes four functions into another', () => {
      const add1 = (n: number) => n + 1

      const add5 = pipe(add1, add1, add1, add1, add1)
      expect(add5(1)).to.equal(6)
    })
  })

  describe('pipe/6', () => {
    it('pipes five functions into another', () => {
      const add1 = (n: number) => n + 1

      const add6 = pipe(add1, add1, add1, add1, add1, add1)
      expect(add6(1)).to.equal(7)
    })
  })

  describe('pipe/7', () => {
    it('pipes six functions into another', () => {
      const add1 = (n: number) => n + 1

      const add7 = pipe(add1, add1, add1, add1, add1, add1, add1)
      expect(add7(1)).to.equal(8)
    })
  })

  describe('pipe/8', () => {
    it('pipes seven functions into another', () => {
      const add1 = (n: number) => n + 1

      const add8 = pipe(add1, add1, add1, add1, add1, add1, add1, add1)
      expect(add8(1)).to.equal(9)
    })
  })

  describe('pipe/9', () => {
    it('pipes eight functions into another', () => {
      const add1 = (n: number) => n + 1

      const add9 = pipe(add1, add1, add1, add1, add1, add1, add1, add1, add1)
      expect(add9(1)).to.equal(10)
    })
  })
})
