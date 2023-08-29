const headerSlide = [
  {
    image: './assets/images/pexels-tima-miroshnichenko-5685765.jpg',
    title: 'Nós o ajudamos a elevar e manter o seu negócio ao mais alto nível tecnológico'
  },
  {
    image: './assets/images/pexels-thisisengineering-3861967.jpg',
    title: 'Interligamos Gerações'
  },
  {
    image: './assets/images/pexels-nick-kwan-2806518.jpg',
    title: 'Soluções Inovadoras'
  }
]
const imageHeader = document.querySelector('.header-cover-image');
const contentHeader = document.querySelector('.header-content-container--text')
let imageIndex = 0;

setInterval(() => {
  imageIndex += 1;
  if (imageIndex >= headerSlide.length) {
    imageIndex = 0;
  }

  imageHeader.src = headerSlide[imageIndex].image;
  contentHeader.innerHTML = headerSlide[imageIndex].title;

}, 5000);