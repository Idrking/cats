// asyncBreeds.js
const fs = require('fs');
const breedDetails = require('./syncBreeds');

const breedDetailsFromFile = function(breed, callback) {

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) callback(data); else callback(undefined);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

const logCat = (data) => {
  console.log(data);
};


module.exports = breedDetailsFromFile;