'use strict'

class Share {
  constructor(name, ticker, lot) {
    this.name = name;
    this.ticker = ticker.toUpperCase();
    this.lot = lot;
  }
  getPrice(callback) {
    async function moexTickerLast(ticker) {
      const json = await fetch('https://iss.moex.com/iss/engines/stock/markets/shares/securities/' + ticker + '.json').then(function(res) { return res.json()});
      return json.marketdata.data.filter(function(d) { return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1; })[0][12];
    }

    moexTickerLast(this.ticker).then((price) => {
      if (!price) {console.log('error')}
      this.price = price;
      this.lotPrice = price * this.lot;
      callback(this)
    });
  }
}