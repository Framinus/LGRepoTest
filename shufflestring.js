function james(str) {
  // where the final output lives.
  const strArray = str.toLowerCase().split(''); // changing initial string to an array
  const a = strArray.length; // storing the length of the array

  // this loop generates a random number and turns it into the index of strArray
  // so that we can cycle through and shuffle.
  for (let i = a - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = strArray[i];
    strArray[i] = strArray[randomIndex];
    strArray[randomIndex] = temp;
  }

  const shuffledStr = strArray.join('');
  return shuffledStr;
}

james('james');
