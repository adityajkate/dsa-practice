function longestSubarray(nums, limit) {
    const maxDeque = []; 
    const minDeque = [];
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {

        while (maxDeque.length > 0 && maxDeque[maxDeque.length - 1] < nums[right]) {
            maxDeque.pop();
        }
        maxDeque.push(nums[right]);
        while (minDeque.length > 0 && minDeque[minDeque.length - 1] > nums[right]) {
            minDeque.pop();
        }
        minDeque.push(nums[right]);

        while (maxDeque[0] - minDeque[0] > limit) {
            if (maxDeque[0] === nums[left]) {
                maxDeque.shift();
            }
            if (minDeque[0] === nums[left]) {
                minDeque.shift();
            }
            left++;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
