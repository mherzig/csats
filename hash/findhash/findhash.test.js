const findHash = require('.')

test('computes correct hash', () => {
  const result = findHash(677842960118n, 7)
  expect(result).toBe('gleeful')
})