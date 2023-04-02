'use strict'

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