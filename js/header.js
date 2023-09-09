const headerSlide = [
  {
    image: './assets/images/pexels-carlos-césar-2767923.jpg',
    title: 'Nós o ajudamos a elevar e manter o seu negócio ao mais alto nível tecnológico'
  },
  {
    image: './assets/images/pexels-tomás-sanimbo-3277188.jpg',
    title: 'Interligamos Gerações'
  },
  {
    image: './assets/images/pexels-nick-kwan-2806518.jpg',
    title: 'Soluções Inovadoras'
  }
]
const contentHeader = document.querySelector('.header-content-container--text')
const header = document.querySelector('.image-header-container')
let imageIndex = 0;

setInterval(() => {
  imageIndex += 1;
  if (imageIndex >= headerSlide.length) {
    imageIndex = 0;
  }

  //header.style.backgroundImage = `url('${headerSlide[imageIndex].image}')`;
  contentHeader.innerHTML = headerSlide[imageIndex].title;

}, 6000);