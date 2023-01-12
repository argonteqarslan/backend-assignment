exports.generateRandomNumber = ({ min } = { min: 1000 }) => {
  return Math.floor(min + Math.random() * (9 * min));
};
