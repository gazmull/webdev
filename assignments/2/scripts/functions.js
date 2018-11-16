// -- constants
const BLANK = '_____';

// -- internals
const getId = id => document.getElementById(id);

// -- display functions
const displayName = name => getId('nameLabel').innerText = name || BLANK;

const displayAge = date => {
  const age = Math.floor((new Date() - new Date(date)) / (1000 * 60 * 60 * 24 * 365.26));
  const ageString = `${age} year${age > 1 ? 's': ''} old` // xd

  getId('ageLabel').innerText = date ? ageString : BLANK;
};

const calculate = () => {
  const getValue = id => getId(id).value;
  const toInt = id => parseInt(getValue(id));
  const hasValue = id => getValue(id) ? toInt(id) : null;

  const price = hasValue('price');
  const quantity = hasValue('quantity');
  const cash = hasValue('cash');

  if (!(price || quantity || cash)) return;

  const totalPrice = price * quantity;
  const change = cash - totalPrice;

  getId('totalPriceLabel').innerText = totalPrice || BLANK;
  getId('changeLabel').innerText = totalPrice ? change : BLANK;
};
