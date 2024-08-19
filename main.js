const whereIsWaldo = (matrix) => {
  const counts = {};
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Count occurrences of each element
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const char = matrix[r][c];
      counts[char] = (counts[char] || 0) + 1;
    }
  }

  // Identify the unique element
  let uniqueChar;
  for (const key in counts) {
    if (counts[key] === 1) {
      uniqueChar = key;
      break;
    }
  }

  // Find the coordinates of the unique element
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === uniqueChar) {
        return [r + 1, c + 1]; // Returning 1-indexed coordinates
      }
    }
  }

  return null; // In case there is no unique element
};

// Example usage:
console.log(
  whereIsWaldo([
    ["A", "A", "A"],
    ["A", "A", "A"],
    ["A", "B", "A"],
  ])
); // ➞ [3, 2]

console.log(
  whereIsWaldo([
    ["c", "c", "c", "c"],
    ["c", "c", "c", "d"],
  ])
); // ➞ [2, 4]

console.log(
  whereIsWaldo([
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["O", "O", "O", "O"],
    ["P", "O", "O", "O"],
    ["O", "O", "O", "O"],
  ])
); // ➞ [5, 1]
