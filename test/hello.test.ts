import { hello } from '../src/hello'
import { expect } from 'chai'

describe('hello', () => {
  describe('hello', () => {
    it('returns "Hello, World"', () => {
      expect(hello()).to.eq('Hello, World')
    })
  })
})
