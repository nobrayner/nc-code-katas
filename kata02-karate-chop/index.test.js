
function chop(needle, haystack, offset = 0) {
  // Empty array
  if (!haystack.length) {
    return -1
  }

  if (haystack.length === 1) {
    // Return index?

    if (haystack[0] === needle) {
      return 0
    } else {
      // We didn't find the needle
      return -1
    }
  }

  const midIndex = Math.floor(haystack.length / 2) // 2
  const midValue = haystack[midIndex] // 5

  if (needle < midValue) {
    // Check left
    const leftHaystack = haystack.slice(0, midIndex)

    return chop(needle, leftHaystack, offset)
  } else {
    // Check right
    const rightHaystack = haystack.slice(midIndex)

    return chop(needle, rightHaystack, offset + midIndex)
  }
} 

test('it works', () => {
  expect(chop(3, [])).toBe(-1)
  expect(chop(3, [1])).toBe(-1)
  expect(chop(1, [1])).toBe(0)

  //
  expect(chop(1, [1, 3, 5])).toBe(0)

  //
  expect(chop(1, [1, 3, 5, 7])).toBe(0)
  expect(chop(3, [1, 3, 5, 7])).toBe(1)
  expect(chop(5, [1, 3, 5, 7])).toBe(2)
  expect(chop(7, [1, 3, 5, 7])).toBe(3)
  expect(chop(0, [1, 3, 5, 7])).toBe(-1)
})

