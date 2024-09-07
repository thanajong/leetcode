var arraySign = function (nums) {
    let ans = 1;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]==0) return 0;
        ans *= nums[i];
    }
    return ans>0 ? 1:-1;
};
