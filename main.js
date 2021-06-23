// Navbar
const navMenu = document.querySelector('.nav__menu')
const navLinks = document.querySelector('.nav__links')
let openMenu = false

navMenu.addEventListener('click', () => {
  openMenu = !openMenu
  const menuIcon = navMenu.querySelector('img')

  if(openMenu) {
    menuIcon.src = './images/icon-close.svg'
    navLinks.classList.add('open')
  } else {
    menuIcon.src = './images/icon-hamburger.svg'
    navLinks.classList.remove('open')
  }
})

// Carousel
const carouselItems = [
  {
    id: "0",
    imgDesktop: "./images/desktop-image-hero-1.jpg",
    imgMobile: "./images/mobile-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    body: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
  },
  {
    id: "1",
    imgDesktop: "./images/desktop-image-hero-2.jpg",
    imgMobile: "./images/mobile-image-hero-2.jpg",
    title: "We are available all across the globe",
    body: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    id: "2",
    imgDesktop: "./images/desktop-image-hero-3.jpg",
    imgMobile: "./images/mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    body: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  }
]

const btnCarouselRight = document.querySelector('.controls .btn[data-direction=right]')
const btnCarouselLeft = document.querySelector('.controls .btn[data-direction=left]')
const carouselTitle = document.querySelector('.grid--hero h1')
const carouselBody = document.querySelector('.grid--hero p')
const carouselImgDesktop = document.querySelector('.grid--hero picture source')
const carouselImgMobile = document.querySelector('.grid--hero picture img')

// position
let position = 0

function nextSlide() {
  position++
  showSlides()
}

function prevSlide() {
  position--
  showSlides()
}

function showSlides () {
  if (position === carouselItems.length) position = 0
  if (position < 0) position = carouselItems.length - 1

  const itemToShow = carouselItems.find(item => item.id == position)
  updateCarousel(itemToShow)
}

function updateCarousel(itemToShow) {
  carouselImgDesktop.srcset = itemToShow.imgDesktop
  carouselImgMobile.src = itemToShow.imgMobile
  carouselTitle.innerText = itemToShow.title
  carouselBody.innerText = itemToShow.body
}

// Change slide using the buttons
btnCarouselRight.addEventListener('click', nextSlide)
btnCarouselLeft.addEventListener('click', prevSlide)

// Change slide using the keyboard
document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') prevSlide()
  else if (event.code === 'ArrowRight') nextSlide()
});

// Show a slide on initial load
showSlides()
