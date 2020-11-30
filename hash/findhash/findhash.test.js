const findHash = require('.')

test('computes correct hash', () => {
  const result = findHash(677842960118n, 7)
  expect(result).toBe('gleeful')
})

test('computes correct hash with `w`', () => {
  const result = findHash(35610759306800193n, 10)
  expect(result).toBe('waterworld')
})

test('throws if hash is incorrect', () => {
  expect(() => findHash(677842960110n, 7)).toThrow('Could not find valid input string for')
})

test('throws if hash is below minimum', () => {
  expect(() => findHash(6778n, 7)).toThrow('Could not find valid input string for')
})

test('throws if hash is above maximum', () => {
  expect(() => findHash(67784296011000n, 7)).toThrow('Could not find valid input string for')
})