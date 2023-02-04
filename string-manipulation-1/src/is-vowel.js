/* exported isVowel */
/* Define function isVowel with one parameter, char.
char is a single JavaScript String character. */
/* Check whether char is a vowel ( a e i o u)
Instead of using an checking if (char === 'a' || char === 'A') || ... */
/* This would be a good chance to use a regular expression literal,
which consists of a pattern enclosed between slashes, as follows: */
/* /[aeiouAEIOU]/ */
/* Notice the brackets inside the pattern.  this is a character class,
which matches any one of the enclosed characters. */
/* This function should Return A Boolean indicating whether or not char is a vowel. */
/* isVowel should handle both uppercase and lowercase characters. */
function isVowel(char) {
  return /[aeiouAEIOU]/.test(char);
}
