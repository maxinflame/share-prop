'use strict'
const table = document.querySelector('#table')

class Category {
  constructor(name) {
    this.name = name;
    this.shares = [];
    this.display();
  }
  addShare(share) {
    this.shares.push(share);
    this.addNewShareNode(share);
  }
  display() {
    const headerNode = document.createElement('tr');
    table.appendChild(headerNode);
    headerNode.innerHTML = `<th class="category-header" colspan="5">${this.name}</th>`;
    this.lastNode = headerNode;
    this.createAddShareForm();
  }
  addNewShareNode(share) {
    const shareRow = document.createElement('tr')

    const nameNode = document.createElement('td');
    nameNode.innerHTML = share.name
    shareRow.appendChild(nameNode);

    const tickerNode = document.createElement('td');
    tickerNode.innerHTML = share.ticker
    shareRow.appendChild(tickerNode);

    const lotNode = document.createElement('td');
    lotNode.innerHTML = share.lot
    shareRow.appendChild(lotNode);

    share.getPrice((item) => {
      const priceNode = document.createElement('td');
      priceNode.innerHTML = item.price
      shareRow.appendChild(priceNode)

      const lotPriceNode = document.createElement('td');
      lotPriceNode.innerHTML = item.lotPrice;
      shareRow.appendChild(lotPriceNode);
      this.addNewnode(shareRow);
    })
  } 
  addNewnode(node) {
    this.lastNode.parentNode.insertBefore(node, this.lastNode.nextSibling);
    this.lastNode = node;
  }
  createAddShareForm() {
    const tr = document.createElement('tr');
    const template = document.querySelector('#share-add-form-template');
    const formWrapper = template.content.cloneNode(true);
    tr.appendChild(formWrapper);
    table.appendChild(tr)

    const form = tr.querySelector('form');
    const nameInput = form.querySelector('[name="name"]');
    const tickerInput = form.querySelector('[name="ticker"]');
    const lotInput = form.querySelector('[name="lot"]');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const share = new Share(nameInput.value, tickerInput.value, lotInput.value);
      this.addShare(share)     
    })
  }
}