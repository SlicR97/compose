import '../src/globalize'
import { expect } from 'chai'

describe('globalize', () => {
  it('provides pipe as a global function', () => {
    expect(pipe).to.be.a('function')
  })

  it('provides compose as a global function', () => {
    expect(compose).to.be.a('function')
  })
})
