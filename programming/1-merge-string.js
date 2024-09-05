var mergeAlternately = function (word1, word2) {
    let a1 = word1.split('');
    let a2 = word2.split('');
    for (let i = 1; i < word1.length * 2; i += 2) { a1.splice(i, 0, ''); }
    for (let i = 0; i < word2.length * 2; i += 2) { a2.splice(i, 0, ''); }
    let base = Math.min(word1.length, word2.length)
    let a3 = [];
    function custompush(array1, array2, array3) {
        if (array1.length > 0) {
            if (array1[0] != '') {
                array3.push(array1.shift())
            }
            else array1.shift();
        }
        if (array2.length > 0) {
            if (array2[0] != '') {
                array3.push(array2.shift())
            }
            else array2.shift();
        }
    }
    for (let i = 0; i < base * 2; i++) { custompush(a1, a2, a3) }
    do { custompush(a1, a2, a3) } while (a1.length != 0 || a2.length != 0)
    let ans=a3.join('');
    return ans;
}