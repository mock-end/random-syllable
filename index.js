'use strict';

var clamp         = require('clamp');
var toInteger     = require('to-integer');
var randomChar    = require('random-char');
var randomNatural = require('random-natural');

module.exports = function (length) {

  var count;

  if (length) {
    count = toInteger(length);
    count = clamp(count, 2, 3);
  } else {
    count = randomNatural(2, 3);
  }


  var consonants = 'bcdfghjklmnprstvwz'; // consonants except hard to speak ones
  var vowels = 'aeiou'; // vowels
  var all = consonants + vowels; // all
  var text = '';
  var char;

  for (var i = 0; i < count; i++) {
    if (i === 0) {
      // First character can be anything
      char = randomChar(all);
    } else if (consonants.indexOf(char) === -1) {
      // Last character was a vowel, now we want a consonant
      char = randomChar(consonants);
    } else {
      // Last character was a consonant, now we want a vowel
      char = randomChar(vowels);
    }

    text += char;
  }

  return text;
};
