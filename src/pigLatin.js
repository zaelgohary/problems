// Intro
// To solve this challenge, feel free to use any and all resources available to you. Once you start the exercise, you’ll have two hours to complete and submit your solution.

// Challenge - Pig Latin
// Pig Latin is a farcical “language” used to entertain children, but also to teach them some valuable language concepts along the way. Translating English to Pig Latin is simple:

// Take the first consonant (or cluster of consonants) of a word, move it to the end of the word, and add a suffix of “ay”
// If a word begins with a vowel, just add “way” at the end
// For the sake of readability, separate the Pig Latin-ized parts of the word with a dash -
// Your challenge is to implement the method pigLatinize that takes a string phrase and translates it to Pig Latin. You’re free to add additional classes, variables, and methods if you would like.

// The input phrase could be as short as a single word, or as long as multiple sentences or paragraphs. Whitespace, capitalization, and punctuation should be honored and maintained in your final answer.

// Examples
// “pig” => “ig-pay”
// “pig latin” => “ig-pay atin-lay”
// “Pig Latin” => “ig-Pay atin-Lay”

class Solution {

  // check first char if vowel, remove it from the start then add "-way" to the end
  // if consonant, remove from the start then add "-$char+ay" to the end
  // should be done to every single word
  
  static isVowel(char){
    return 'aeiouAEIOU'.includes(char)
  }
  
  static pigLatinize(phrase) {
    if(typeof phrase !== 'string' || phrase.trim().length === 0) {
      return ''
    }
    const words = phrase.split(/\s+/).map(word => {
      const firstChar = word[0]
      if (!firstChar) return word;
      word = word.slice(1)
      word += this.isVowel(firstChar) ? '-way' : `-${firstChar}ay`
      return word
    });
    return words.join(' ');
  }

  static main() {
    console.log(Solution.pigLatinize("iipig yay 3aaaa")); // should print out "ig-pay"
  }
}

// Run the main method to execute the code
Solution.main();