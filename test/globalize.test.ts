import '../src/globalize'
import { expect } from 'chai'

describe('globalize', () => {
  it('provides pipe as a global function', () => {
    expect(pipe).to.be.a('function')
  })
})
