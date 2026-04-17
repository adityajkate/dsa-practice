function sumSubarrayMins(arr) {
  const MOD = 1000000007n;
  const n = arr.length;
  const stack = [];
  const left = new Array(n);
  const right = new Array(n);

  // Previous Less Element
  for (let i = 0; i < n; i++) {
    while (stack.length && arr[stack.at(-1)] >= arr[i]) stack.pop();
    left[i] = stack.length ? i - stack.at(-1) : i + 1;
    stack.push(i);
  }

  stack.length = 0;

  // Next Less or Equal Element
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack.at(-1)] > arr[i]) stack.pop();
    right[i] = stack.length ? stack.at(-1) - i : n - i;
    stack.push(i);
  }

  let answer = 0n;
  for (let i = 0; i < n; i++) {
    answer =
      (answer + BigInt(arr[i]) * BigInt(left[i]) * BigInt(right[i])) % MOD;
  }

  return Number(answer);
}
