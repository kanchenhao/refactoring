const { statement } = require('../../src/chapter01/statement');
const invoices = require('./invoices.json');
const plays = require('./plays.json');

describe('statement', () => {
  it('打印账单详情', () => {
    const received = statement(invoices[0], plays);
    const expected = `Statement for BigCo\n`
      + ` Hamlet: $650.00 (55 seats)\n`
      + ` As You Like It: $580.00 (35 seats)\n`
      + ` Othello: $500.00 (40 seats)\n`
      + `Amount owed is $1,730.00\n`
      + `You earned 47 credits\n`;
    expect(received).toEqual(expected);
  });
})
