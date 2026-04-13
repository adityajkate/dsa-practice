function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      const h = heights[stack.pop()];
      const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, h * w);
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const h = heights[stack.pop()];
    const w =
      stack.length === 0
        ? heights.length
        : heights.length - stack[stack.length - 1] - 1;
    maxArea = Math.max(maxArea, h * w);
  }

  return maxArea;
}
