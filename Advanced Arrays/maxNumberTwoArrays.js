const maxNumber = function(nums1, nums2, k) {
    const getMaxSubsequence = (nums, length) => {
        const stack = [];
        let drop = nums.length - length;
        
        for (const num of nums) {
            while (drop > 0 && stack.length > 0 && stack[stack.length - 1] < num) {
                stack.pop();
                drop--;
            }
            stack.push(num);
        }
        
        return stack.slice(0, length);
    };

    const compare = (arr1, i, arr2, j) => {
        while (i < arr1.length && j < arr2.length && arr1[i] === arr2[j]) {
            i++;
            j++;
        }
        return j === arr2.length || (i < arr1.length && arr1[i] > arr2[j]);
    };

    const merge = (arr1, arr2) => {
        const result = [];
        let i = 0, j = 0;
        
        while (i < arr1.length || j < arr2.length) {
            if (compare(arr1, i, arr2, j)) {
                result.push(arr1[i++]);
            } else {
                result.push(arr2[j++]);
            }
        }
        
        return result;
    };

    let maxRes = Array(k).fill(-1);
    const start = Math.max(0, k - nums2.length);
    const end = Math.min(k, nums1.length);

    for (let i = start; i <= end; i++) {
        const sub1 = getMaxSubsequence(nums1, i);
        const sub2 = getMaxSubsequence(nums2, k - i);
        const merged = merge(sub1, sub2);
        
        if (compare(merged, 0, maxRes, 0)) {
            maxRes = merged;
        }
    }

    return maxRes;
};
