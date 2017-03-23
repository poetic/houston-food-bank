const convertToNumber = (value) => {
  const stringValue = value || '';
  const numericString = stringValue.replace(/[^\d.-]/g, '');

  return isNaN(numericString) ? 0 : Number(numericString);
};

export default convertToNumber;
