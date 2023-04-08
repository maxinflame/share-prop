'use strict'

const categories = [];

const financeShares = [
  {
    name: 'СБЕР',
    ticker: 'sber',
    lot: '10',
  },
]

const oilShares = [
  {
    name: 'Новатек',
    ticker: 'nvtk',
    lot: '1',
  },
  {
    name: 'Роснефть',
    ticker: 'rosn',
    lot: '1',
  }
]

const finance = new Category('Финансы');

financeShares.forEach(item => {
  const share = new Share(item.name, item.ticker, item.lot);
  finance.addShare(share)
})


const oil = new Category('Нефтегазовый сектор');

oilShares.forEach(item => {
  const share = new Share(item.name, item.ticker, item.lot);
  oil.addShare(share)
})

const createCategoryAddForm = () => {
  const openButton = document.querySelector('.add-category-button');
  const closeButton = document.querySelector('.category-add-popup__close');
  const popup = document.querySelector('.category-add-popup');
  const form = document.querySelector('.category-add-form');
  const input = document.querySelector('.category-add-input');

  const showPopup = () => {
    popup.classList.add('active');
  }

  const hidePopup = () => {
    popup.classList.remove('active');
    input.value = '';
  }

  const createCategory = () => {
    const category = new Category(input.value);
    categories.push(category);
  }

  openButton.addEventListener('click', showPopup)
  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    hidePopup()
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    createCategory();
    hidePopup();
  });
}

createCategoryAddForm()
