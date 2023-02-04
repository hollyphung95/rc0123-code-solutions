/* exported capitalize */

// Parameters
// word - A single word as a JavaScript String
// Return Value
// The original word, but with its first character uppercased and the rest of its characters lowercased.

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
