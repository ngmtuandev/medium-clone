const getRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * (20 - 5 + 1) + 5);
  return randomNumber;
};

export default getRandomNumber;
