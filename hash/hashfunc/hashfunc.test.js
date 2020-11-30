const hashFunc = require('.')

test('computes correct hash', () => {
  const result = hashFunc('gleeful')
  expect(result).toBe(677842960118n)
})