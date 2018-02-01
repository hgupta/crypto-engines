const test = require('ava').test

const ranf = require('./index')

test('crypto-engine', t => {
  let r = ranf()
  t.true(Number(r) == r, 'empty argument (len) must generate a number')
  t.true(r >= 0, 'empty argument (len) must be greater than or equal to 0')
  t.true(r < 1, 'empty argument (len) must be less than 1')

  r = ranf(16)
  t.true(Number(r) == r, 'argument: 16 must generate a number')
  t.true(r >= 0, 'argument: 16 must be greater than or equal to 0')
  t.true(r < 1, 'argument: 16 must be less than 1')

  r = ranf(0)
  t.true(r === 0, 'argument: 5 must generate only 0')

  r = ranf(-1)
  t.true(Number(r) == r, 'argument less than 0 must generate a number')
  t.true(r >= 0, 'argument less than 0 must be greater than or equal to 0')
  t.true(r < 1, 'argument less than 0 must be less than 1')

  r = ranf(17)
  t.true(Number(r) == r, 'argument more than 16 must generate a number')
  t.true(r >= 0, 'argument more than 16 must be greater than or equal to 0')
  t.true(r < 1, 'argument more than 16 must be less than 1')
})
