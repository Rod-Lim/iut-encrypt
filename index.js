'use strict';

const bcrypt = require('bcrypt');

exports.hash = function(string) {
  const salt = 10;
  return bcrypt.hash(string, salt)
}

exports.compare = function(enteredString, encryptedString) {
  return bcrypt.compare(enteredString, encryptedString);
}