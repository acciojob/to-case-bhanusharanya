function toCase(text) {
  // write your code here
 if (input === '') {
        return '-';
    }
    
    // Convert the input string to lowercase and uppercase
    const lowerCase = input.toLowerCase();
    const upperCase = input.toUpperCase();
    
    // Return the concatenated result with '-' as the delimiter
    return `${lowerCase}-${upperCase}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
