const name = 'Krishna ';
const repoCount = 2;
console.log(name + repoCount + ' of mine'); // This syntax is outdated
// We use backticks in strings `
console.log(`My name is ${name} my repo count is ${repoCount}`); // Use this type of concatenation nowadays; it is not worth it to write code written above

// Another method to declare the string
let gameName = new String('GOD OF WAR');
console.log(gameName);
// Accessing the string
// Methods in string

console.log(gameName[0]); // By conventional method using index
console.log(gameName.__proto__); // Type of variable

// Checking the length of the string using function length
console.log(gameName.length);

// Accessing the char or knowing what char is at what index
// Function used is charAt()
console.log(gameName.charAt(2));
// Know the index of a given char
// Function used is indexOf()
console.log(gameName.indexOf(' '));
console.log(gameName.indexOf('2'));

// String Templates
// Templates are strings enclosed in backticks `string is a collection of chars`
// Templates allow single and double quotes inside a string:

let text = `Hello 'Hitesh' sir,
Nice to have you as a teacher`; // We can write multiline string and use '', ""

// String methods
/* length, charAt(), charCodeAt(), at(), slice(), substring(), substr(), toUpperCase(), toLowerCase(), concat(), trim(), trimStart(), trimEnd(), padStart(), padEnd(), repeat(), replace(), replaceAll(), split() */

// charAt() - Returns character at a specified index
let text1 = `Hello world`;
let char = text1.charAt(3);
console.log(char);

// at() - Used to get letter at a given index
const text2 = `Sakshi`;
let letter = text2.at(0);
console.log(letter);

// charCodeAt() - Gives the ASCII value of the char at a given index

// Extracting String parts
// slice(start, end) - Extracts a part from the string and returns the extracted part to another string

let text3 = `Apple,Banana,Kiwi`;
let part = text3.slice(6, 12); // Returns Banana
console.log(part);

// If we don't write the end index, it will extract the whole string from the given starting index

// If we write index in negative, then the positions are counted from the back of the string
let text4 = `Apple,Banana,orange`;
let part2 = text4.slice(-15, -1); // First char has an index number which is negative of length of string
console.log(part2);

// substring() - Substring is similar to slice. Difference is that we can't have negative indexes in substring; if we do, it will be treated as 0
let text5 = `Apple,Banana,orange`;
let part3 = text5.substring(7, 18);
console.log(part3); // 13th index char is not printed

// substr() is similar to slice but the end number specifies how many chars to slice from the starting index
let text6 = `Apple,Banana,orange`;
let part4 = text6.substr(3, 10);
console.log(part4);
// All the same rules as slice apply for negative indexing and omitting end index

// Conversion to lower case and upper case
let text7 = `Apple,Banana,orange`;
let part5 = text7.toUpperCase();
console.log(part5);

let text8 = `Apple,Banana,orange`;
let part6 = text8.toLowerCase();
console.log(part6);
// There are also other types: toLocaleUpperCase() and toLocaleLowerCase()

// concat() joins two strings
let text9 = `Apple,Banana,orange`;
let part7 = `Kiwi`;

console.log(text9.concat(" ", part7));

// trim() - Trim is used to remove extra spaces before and after the string
let text10 = `  Apple,Banana,orange  `;
let part8 = text10.trim();
console.table([part8], [text10]);
// To trim the space at the start of the string, use trimStart()
// To remove space from the end of the string, use trimEnd()

// padStart(), padEnd() - Pads a string with another string (multiple times) until it reaches a given length.
let text11 = "5";
let padded = text11.padStart(4, "0");
console.log(padded);

// repeat(count) - Returns a string with a number of copies of a string
// Does not change the original string
let result = text10.repeat(2); // Repeat string 2 times
console.log(result); // count is the number of copies required

// replace("word which we have to remove", "word where we have to replace the removed word")
let replacing = text10.replace("Apple", "Coconut");
console.log(replacing); // Apple is replaced by Coconut, like "you are replaced by your ex"

// If you have to replace all instances, use replaceAll()
let text12 = "I love playing and, I can't live without playing";
let replacedStr = text12.replaceAll("playing", "coding");
console.log(replacedStr);

// split() - Converts a string to an array using a separator
