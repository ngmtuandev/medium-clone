const getRandomImage = () => {
  const imageUrls = [
    "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/9304667/pexels-photo-9304667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7679640/pexels-photo-7679640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  const randomImageUrl =
    imageUrls[Math.floor(Math.random() * imageUrls.length)];

  return randomImageUrl;
};

export default getRandomImage;
