(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    portfolio:document.querySelector('[data-menu-portfolio]'),
    menuList: document.querySelector('.menu-mobile__menu'),
    blockPortfolio: document.querySelector('.portfolio'),
    mainBlock: document.querySelector('.main_block'),


    firstLink:document.querySelector('[first]'),
    secondLink:document.querySelector('[second]')

  };
  refs.secondLink.addEventListener('click', getSecondLink) 
  refs.firstLink.addEventListener('click', getFirstLink) 
  refs.portfolio.addEventListener('click', getPortfolio)
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function getFirstLink(){
  refs.secondLink.classList.remove('current')
  }
  function getSecondLink(){
    refs.secondLink.classList.add('current')
    refs.firstLink.classList.remove('current')
  
    }
function getPortfolio(){
  refs.blockPortfolio.classList.toggle('portfolio_open')
  refs.mainBlock.classList.toggle('main_block_hidden')
}

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();