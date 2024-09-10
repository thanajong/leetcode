/**
 * @param {string} s
 * @return {number}
 */
var ans = 0;
const roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
var romanToInt = function (s) {
    for (let i = 0; i < s.length; i++) {
        const current = roman[s[i]];
        const next = roman[s[i + 1]];
        if (next && current < next) {
            ans -= current;
        } else {
            ans += current;
        }
    }
    return ans;
};

s = 'LVIII';
result = romanToInt(s);
console.log(result);