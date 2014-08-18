#Diacritic

A small library to replace diacritic characters to alternatives.

## Installation

npm install diacritic --save

## Usage

  var diacritic = require('diacritic')
      remove = diacritic.removeDiacritics;

  var accented = "Â é ç è ñ",
      escaped = remove(accented);

  console.log('accented', accented);

## Tests

  npm test