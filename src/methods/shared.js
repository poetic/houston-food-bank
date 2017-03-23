const toggle = function (elementName) {
  const elementStyle = this.styles[elementName] || {};
  const display = !elementStyle.display || elementStyle.display === 'none'
    ? 'block'
    : 'none';

  this.styles[elementName] = { display };
};

export default toggle;
