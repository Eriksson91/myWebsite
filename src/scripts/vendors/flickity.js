/* If the document has a flickity carousel: */

if (document.querySelector('.carousel')) {

  var elem = document.querySelector('.carousel');
  var flkty = new Flickity( elem, {
    // options
      prevNextButtons: false,
      pageDots: false,
      adaptiveHeight: true,
      watchCSS: true,
      dragThreshold: 8,
      initialIndex: 0,
      arrowShape: {"x0": 20, "x1": 60, "y1": 40, "x2": 60, "y2": 35, "x3": 25},

      draggable: false,
      lazyLoad: true,
      });



  /* ************************* */
  // Tab index on carousel div //
  /* ************************* */

  var ppss = document.querySelector('#productPage-slideShow');    

  // Add an event listener for the 'resize' event
  window.addEventListener('resize', function() {
    // Check the window width
    if (window.innerWidth < 1008) {
      // Set the tabindex attribute on the div element
      ppss.setAttribute('tabindex', '0');
    } else {
      // Remove the tabindex attribute from the div element
      ppss.removeAttribute('tabindex');
    }
  });




  /* ************************* */
  // Slidshow nav desktop view //
  /* ************************* */

    // Get a reference to the buttons
    const desktopDots = document.querySelectorAll('.productPage-slideShowNavDot');

    //Add a click event listener to each button
    desktopDots.forEach(button => {

      button.addEventListener('click', () => {

        //Remove the "is-selected" class from all buttons
        desktopDots.forEach(button => button.classList.remove('is-selected'));

        //Add the "is-selected" class to the button that was clicked
        button.classList.add('is-selected');

      });
    });




  /* *************************** */
  // Mobile nav slider page dots //
  /* *************************** */


  const dots = document.querySelectorAll('.dot');
  const images = document.querySelectorAll('.carousel-cell');
  const arrowLeft = document.querySelector('.productPage-slideShowNavArrow-previous');
  const arrowRight = document.querySelector('.productPage-slideShowNavArrow-next');
  const mobileNav = document.querySelector('.flickity-slider');

  let currentIndex = 0;

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('is-selected');
          images[i].classList.add('is-selected');
          images[i].removeAttribute('aria-hidden');
        } else {
          dot.classList.remove('is-selected');
          images[i].classList.remove('is-selected');
          images[i].setAttribute('aria-hidden', 'true');
        }
      });
      mobileNav.style.transform = `translateX(${currentIndex * -100}%)`;
    });
  });


  arrowLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add('is-selected');
          images[i].classList.add('is-selected');
          images[i].removeAttribute('aria-hidden');
        } else {
          dot.classList.remove('is-selected');
          images[i].classList.remove('is-selected');
          images[i].setAttribute('aria-hidden', 'true');
        }
      });
      mobileNav.style.transform = `translateX(${currentIndex * -100}%)`;
    }
  });

  arrowRight.addEventListener('click', () => {
    if (currentIndex < dots.length - 1) {
      currentIndex++;
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add('is-selected');
          images[i].classList.add('is-selected');
          images[i].removeAttribute('aria-hidden');
        } else {
          dot.classList.remove('is-selected');
          images[i].classList.remove('is-selected');
          images[i].setAttribute('aria-hidden', 'true');
        }
      });
      mobileNav.style.transform = `translateX(${currentIndex * -100}%)`;
    }
  });



  /* ***************************************** */
  // Arrow keys on keyboard selects active dot //
  /* ***************************************** */

  document.addEventListener('keydown', event => {

    if (currentIndex > 0 && event.key === 'ArrowLeft') {
      currentIndex--;
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add('is-selected');
          images[i].classList.add('is-selected');
          images[i].removeAttribute('aria-hidden');
        } else {
          dot.classList.remove('is-selected');
          images[i].classList.remove('is-selected');
          images[i].setAttribute('aria-hidden', 'true');
        }
      });
      mobileNav.style.transform = `translateX(${currentIndex * -100}%)`;
    }
  });


  document.addEventListener('keydown', event => {

    if (currentIndex < dots.length - 1 && event.key === 'ArrowRight') {
      currentIndex++;
      dots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add('is-selected');
          images[i].classList.add('is-selected');
          images[i].removeAttribute('aria-hidden');
        } else {
          dot.classList.remove('is-selected');
          images[i].classList.remove('is-selected');
          images[i].setAttribute('aria-hidden', 'true');
        }
      });
      mobileNav.style.transform = `translateX(${currentIndex * -100}%)`;
    }
  });

}




// Touch arrow on mobile selects active dot //
/*

document.addEventListener('click', event => {
    const selectedDot = document.querySelector('.dot.is-selected');
    if (!selectedDot) return;
    
    if (event.target.classList.contains('productPage-slideShowNavArrow-previous')){
        const prevDot = selectedDot.previousElementSibling;
        if (prevDot) {
          selectedDot.classList.remove('is-selected');
          prevDot.classList.add('is-selected');
        }



      } else if (event.target.classList.contains('productPage-slideShowNavArrow-next')) {
        const nextDot = selectedDot.nextElementSibling;
        if (nextDot) {
          selectedDot.classList.remove('is-selected');
          nextDot.classList.add('is-selected');
        }
      }
    });





/* Desktop nav slider page dots */
//funkar ej
/*
const links = document.querySelectorAll('.productPage-slideShowNavScroller .productPage-slideShowNavDot');

for (const link of links) {
  link.addEventListener('click', (event) => {
    for (const otherLink of links) {
      otherLink.classList.remove('is-selected');
    }
    event.target.classList.add('is-selected');
  });
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const link = Array.from(links).find((link) => link.href === `#${entry.target.id}`);
      for (const otherLink of links) {
        otherLink.classList.remove('is-selected');
      }
      link.classList.add('is-selected');
    }
  }
});

for (const link of links) {
  const target = document.getElementById(link.href.substring(1));
  observer.observe(target);
}*/




/*
const gallary = document.querySelector('.productPage-gallary');
const links = document.querySelectorAll('.productPage-slideShowNavScroller .productPage-slideShowNavDot');
const images1 = document.querySelectorAll('.productPage-slideShow .carousel-cell');

// Set the first dot to active at start
const firstLink = document.querySelector('.productPage-slideShowNavScroller .productPage-slideShowNavDot');
firstLink.classList.add('is-selected');

for (const link of links) {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // prevent default link behavior
    for (const otherLink of links) {
      otherLink.classList.remove('is-selected');
    }
    event.target.classList.add('is-selected');
    // Scroll to the linked image
    const image = document.querySelector(event.target.hash);
    image.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      // Find the link element
      const link = Array.from(links).find((link) => link.hash === entry.target.id);
      if (link) { // check if the link element exists
        for (const otherLink of links) {
          otherLink.classList.remove('is-selected');
        }
        link.classList.add('is-selected');
      }
    } else {
      // If the image is not in view, remove the "is-selected" class from the linked dot
      const link = Array.from(links).find((link) => link.hash === entry.target.id);
      if (link) { // check if the link element exists
        link.classList.remove('is-selected');
      }
    }
  }
});

for (const image1 of images1) {
  observer.observe(image1);
}
*/