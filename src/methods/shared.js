const toggle = function (elementName) {
  const elementStyle = this.styles[elementName] || {};
  const display = elementStyle.display === 'block' ? 'none' : 'block';

  this.styles[elementName] = { display };
};

export default toggle;
