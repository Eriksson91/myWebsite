import './vendors/flickity.js';


const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

//const iconClose = document.querySelector('.icon-close');

const menuClose = document.querySelector('.close')
const menuOpen = document.querySelector('.icon-open');



const cartMenu = document.querySelector('.cart-menu');
const cartToggle = document.querySelector('.cart-toggle');
const cartNav = document.querySelector('.cart-primary-navigation');

const cartClose = document.querySelector('.cart-close');





/* Menu toggle */

navToggle.addEventListener('click', () => {

    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
    menuOpen.setAttribute('aria-hidden', true);

});


menuClose.addEventListener('click', () => {

    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
    menuOpen.setAttribute('aria-hidden', false);


});



/* Cart toggle */

cartToggle.addEventListener('click', () => {
    cartNav.hasAttribute('data-visible') ? cartToggle.setAttribute('aria-expanded', true) : cartToggle.setAttribute('aria-expanded', false);
    cartNav.toggleAttribute('data-visible');
    cartMenu.toggleAttribute('data-overlay');
    cartMenu.toggleAttribute('data-visible');
});



cartClose.addEventListener('click', () => {
    cartNav.hasAttribute('data-visible') ? cartToggle.setAttribute('aria-expanded', false) : cartToggle.setAttribute('aria-expanded', true);
    cartNav.toggleAttribute('data-visible');
    cartMenu.toggleAttribute('data-overlay');
    cartMenu.toggleAttribute('data-visible');
});





/* Popover sort filter */

const sort = document.querySelector('.shopAll-toolbar-item-sort');
const sortClose = document.querySelector('.popover-close');

const popoverBg = document.querySelector('.popover-bg');
const collectionSortPopover = document.querySelector('#shopAll-toolbar-sort-popover');
const toolbar = document.querySelector('.shopAll-toolbar-item-sort');



let sortIsOpen = false;

sort.addEventListener('click', () => {
  sortIsOpen = !sortIsOpen;
  
  if (sortIsOpen) {
    collectionSortPopover.setAttribute('aria-hidden', false);
    popoverBg.setAttribute('data-overlay', '');
    toolbar.setAttribute('aria-expanded', true);
    document.body.style.overflow = "hidden"; // Add this line
  } else {
    collectionSortPopover.setAttribute('aria-hidden', true);
    popoverBg.removeAttribute('data-overlay');
    toolbar.setAttribute('aria-expanded', false);
    document.body.style.overflow = "scroll"; // Add this line
  }
});

sortClose.addEventListener('click', () => {
  sortIsOpen = false;
  document.body.style.overflow = "scroll"; // Add this line
  if (popoverBg.hasAttribute('data-overlay')) {
    collectionSortPopover.setAttribute('aria-hidden', true);
    popoverBg.removeAttribute('data-overlay');
    toolbar.setAttribute('aria-expanded', false);
  }
});













//Shadow Root DOM//

/*
const shadowHost = document.querySelector('#placement-123')
const shadowRoot = shadowHost.attachShadow({mode: 'open'});


const shadowStyle = document.createElement('style');
shadowStyle.textContent = `


:host {
    display: block;
    margin-block-start: 16px;
    margin-block-start: var(--messaging-margin-block-start, 16px);
    margin-block-end: 16px;
    margin-block-end: var(--messaging-margin-block-end, 16px);
    white-space: normal;
  }
  .afterpay-paragraph {
    font-size: 14px;
    margin: 0px;
    line-height: 1.5;
    line-height: var(--messaging-line-height, 1.8);
  }
  .payment-amount + span{ padding-right: 2px;}

  .afterpay-main-text { padding-right: 0px;}
  .afterpay-logo.brand-afterpay, .afterpay-logo.brand-afterpay svg {
    width: 96px;
    width: var( --logo-badge-width, 96px);
    min-width: 50px;
    min-height: 20px;
  }


  .afterpay-logo {
    display:inline-block;
    vertical-align: middle;
    cursor: pointer;
    border: transparent;
    background: none;
    padding: 0;
  }

  .afterpay-logo.type-badge { margin: 1px 0 }


  .afterpay-logo.compact-badge { padding-bottom: 2px; }
  .afterpay-logo.compact-badge, .afterpay-logo.compact-badge svg {
    margin: initial;
    margin-left: 0px;
    width: var(--logo-badge-width, 92px);
  }

  .afterpay-logo.type-badge svg, .afterpay-logo.type-badge{
    height: calc(32/96*var(--logo-badge-width,96px));
  }

  .lockup-black, .lockup-black svg, .lockup-white, .lockup-white svg, .lockup-mint, .lockup-mint svg{
    height: calc(0.23*var(--logo-badge-width,96px));
  }
  .afterpay-logo.compact-badge svg, .afterpay-logo.compact-badge{
     height: calc(0.19*var(--logo-badge-width,92px) + 10px);
  }
  .afterpay-logo.black-on-mint .afterpay-logo-badge-background { fill: #b2fce4; }

  .afterpay-logo.black-on-white .afterpay-logo-badge-background { fill: white; }

  .afterpay-logo.white-on-black .afterpay-logo-badge-lockup { fill: white; }
  .afterpay-logo.white-on-black .afterpay-logo-badge-background { fill: black; }

  .afterpay-logo.mint-on-black .afterpay-logo-badge-lockup { fill: #b2fce4; }
  .afterpay-logo.mint-on-black .afterpay-logo-badge-background { fill: black; }

  .afterpay-logo.lockup-black .afterpay-logo-badge-lockup { fill: #000000; }
  .afterpay-logo.lockup-white .afterpay-logo-badge-lockup { fill: #ffffff; }
  .afterpay-logo.lockup-mint .afterpay-logo-badge-lockup { fill: #b2fce4; }

  .afterpay-logo.lockup-black .afterpay-logo-badge-background,
  .afterpay-logo.lockup-white .afterpay-logo-badge-background,
  .afterpay-logo.lockup-mint .afterpay-logo-badge-background
  { fill: transparent; }

  .afterpay-logo-link { white-space: nowrap; display: initial;}
  .afterpay-logo-link.afterpay-link-is-text { white-space: unset; }
  #logo-link{
    line-height: normal;
    display: inline-block;
    border: none;
    padding:0;
    margin: 0;
    color: inherit;
    text-decoration: none;
    background: transparent;
    font-family: sans-serif;
    font-size: smaller;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  .afterpay-promo {
    padding-right: 2px;
  }
  .afterpay-promo, .afterpay-min-spend {
    margin: 0;
  }
  .afterpay-promo .promo-badge {
    padding: 2px 5px;
    border-radius: 64px;
  }
  .afterpay-promo .promo-badge.black-on-mint {
    background-color: #b2fce4;
    color: #000000;
  }
  .afterpay-promo .promo-badge.mint-on-black {
    background-color: #000000;
    color: #b2fce4;
  }
  .afterpay-promo .promo-badge.black-on-white {
    background-color: #ffffff;
    color: #000000;
  }
  .afterpay-promo .promo-badge.white-on-black {
    background-color: #000000;
    color: #ffffff;
  }
  .afterpay-promo .promo-lockup.mint {
    color: #b2fce4;
  }
  .afterpay-promo .promo-lockup.black {
    color: #000000;
  }
  .afterpay-promo .promo-lockup.white {
    color: #ffffff;
  }
  .afterpay-promo .promo-badge.blink strong {
    animation: blinkAnimation 1.2s linear infinite;
  }
  .afterpay-promo .promo-lockup.blink strong {
    animation: blinkAnimation 1.2s linear infinite;
  }
  @keyframes blinkAnimation {
    0% {
      opacity: 1;
    }
    49% {
      opacity: 1;
    }
    60% {
      opacity: 0
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .afterpay-promo .promo-badge.toggle {
    animation: toggleAnimation 1.8s linear infinite;
  }
  .afterpay-promo .promo-lockup.toggle {
    animation: toggleAnimation 1.8s linear infinite;
  }
  @keyframes toggleAnimation {
    0% {
      background-color: #b2fce4;
      color: #000000;
    }
    10% {
      background-color: #000000;
      color: #b2fce4;
    }
    25% {
      background-color: #b2fce4;
      color: #000000;
    }
    40% {
      background-color: #000000;
      color: #b2fce4;
    }
    55% {
      background-color: #b2fce4;
      color: #000000;
    }
  }

  .afterpay-promo .promo-badge.alternate-diagonals {
    animation: alternateDiagonalsAnimation 1.4s linear infinite;
    display: inline-block;
    line-height: initial; 
  }
  .afterpay-promo .promo-lockup.alternate-diagonals {
    animation: alternateDiagonalsAnimation 1.4s linear infinite;
    display: inline-block;
    line-height: initial;
  }
  @keyframes alternateDiagonalsAnimation {
    0% {
      transform: rotate(0deg);
    }
    12% {
      transform: rotate(-8deg);
    }
    26% {
      transform: rotate(8deg);
    }
    50% {
      transform: rotate(-3deg);
    }
    62% {
      transform: rotate(3deg);
    }
    86% {
      transform: rotate(0deg);
    }
  }

  @media (prefers-reduced-motion) {
    .afterpay-promo .promo-badge.blink strong,
    .afterpay-promo .promo-badge.toggle,
    .afterpay-promo .promo-badge.alternate-diagonals,
    .afterpay-promo .promo-lockup.blink strong,
    .afterpay-promo .promo-lockup.toggle,
    .afterpay-promo .promo-lockup.alternate-diagonals {
      animation: none;
    }

  }

  .afterpay-promo-terms-link {
    text-decoration: underline;
    cursor: pointer;
    background: transparent;
    border: none;
    margin: 0;
    padding: 0;
    font-size: smaller;
  }

`;


const shadowP = document.createElement('p');




shadowRoot.appendChild(shadowStyle);
shadowRoot.appendChild(shadowP);*/





