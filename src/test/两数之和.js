var twoSum = function(nums, target) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        let value = target - nums[i]
        for (let j = i+1; j < nums.length; j++) {
            if (value === nums[j]) {
                console.log(i, j);
                result = [i,j]
                break
            }
        }
    }
    console.log(result);
    return result
};

twoSum([2,7,11,33], 9)