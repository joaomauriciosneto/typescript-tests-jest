import { add, mult, div } from '../src/calc'

describe('Test Calc - add', () => {
  it('should return 15 for add(10, 5)', () => {
    expect(add(10, 5)).toBe(15)
  })
})

describe('Test Calc - mult', () => {
  it('should return 20 for mult(10,2)', () => {
    expect(mult(10, 2)).toBe(20)
  })
})

describe('Test Calc - div', () => {
  it('should be error for div(10, 0)', () => {
    expect(div(10, 0)).not.toBeNull()
  })
})

describe('Test Calc - div', () => {
  it('should return 7 for div(14, 2)', () => {
    expect(div(14, 2)).toBe(7)
  })
})
