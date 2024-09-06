var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[j] == 0) {
            nums.splice(j, 1);
            nums.push(0);
            if (nums[j]!=0) j++;
        }else j++;
    }
};