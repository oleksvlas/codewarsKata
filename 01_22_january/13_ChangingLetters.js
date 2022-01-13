/*
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.
*/

function swap(string) {
  let arr = ["a", "e", "i", "o", "u"];
  return string
    .split("")
    .map((el) => {
      arr.forEach((elArr) => (el === elArr ? (el = el.toUpperCase()) : el));
      return el;
    })
    .join("");
}
