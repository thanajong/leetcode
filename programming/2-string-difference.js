var findTheDifference = function (s, t) {
    let a1 = s.split('');
    let a2 = t.split('');
    let sa1 = a1.sort();
    let sa2 = a2.sort();
    let ans, isAns;
    for (let i = 0; i < a1.length; i++) {
        if (sa1[i] != sa2[i]) {
            ans = sa2[i];
            isAns=true;
            break;
        }
    }
    if (!isAns) { ans = sa2[sa2.length-1]; }
    return ans
};

