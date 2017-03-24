import numeral from 'numeral';

export const decimal = number => numeral(number).format('0,0[.]00');

export const currency = number => numeral(number).format('$0,0[.]00');

export const toggle = function (elementName) {
  const elementStyle = this.styles[elementName] || {};
  const display = !elementStyle.display || elementStyle.display === 'none'
    ? 'block'
    : 'none';

  this.styles[elementName] = { display };
};
