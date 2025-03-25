const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

function totalReturnValue(boughtAt, marketPrice, quantity) {
  let result = (marketPrice - boughtAt) * quantity;
  return result;
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);

  res.send(totalReturnValue(boughtAt, marketPrice, quantity).toString());
});

function totalStocks(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(totalStocks(stock1, stock2, stock3, stock4).toString());
});

function totalPercentage(boughtAt, returns) {
  let result = (returns / boughtAt) * 100;
  return result;
}

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);

  res.send(totalPercentage(boughtAt, returns).toString());
});

function sumOfAllStocks(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}
app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);

  res.send(sumOfAllStocks(stock1, stock2, stock3, stock4).toString());
});

function stockPercentage(returnPercentage) {
  if (returnPercentage > 0) {
    return 'profit';
  } else {
    return 'loss';
  }
}

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);

  res.send(stockPercentage(returnPercentage).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


