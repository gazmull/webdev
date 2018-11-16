// -- constants
const BLANK = '_____';

// -- internals
const getId = id => document.getElementById(id);

// -- display functions

/**
 * Displays the name of the customer.
 * @param {string} name Name of the customer.
 */
const displayName = name => getId('nameLabel').innerText = name || BLANK;

/**
 * Parses provided customer's birth date to age and then displays it.
 * @param {Date|string} date The date to parse.
 */
const displayAge = date => {
  // -- one-liner but "doesn't work well" on birthDate == nowDate— or does it?
  // -- general consus has "if birthDate == nowDate then age + 1"; this code has the otherwise
  // -- longer code solves this current internal war lul
  // const age = Math.floor((new Date() - new Date(date)) / (1000 * 60 * 60 * 24 * 365.26));

  date = new Date(date);
  const birthYear = date.getFullYear();
  const birthMonth = date.getMonth() + 1;
  const birthDate = date.getDate();
  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowDate = now.getDate();

  const monthDiff = nowMonth - birthMonth;
  const dateDiff = nowDate - birthDate;
  let age = nowYear - birthYear;

  if (monthDiff <= 0 && dateDiff < 0)
    age--;

  const ageString = isNaN(age) ? null : `${age} year${age > 1 ? 's': ''} old`

  getId('ageLabel').innerText = age ? ageString : BLANK;
};

/**
 * Displays total price and change of the transaction.
 */
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
