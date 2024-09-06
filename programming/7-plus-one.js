var plusOne = function (digits) {
    let concated = digits.join('');
    var plus_one = BigInt(concated)+BigInt(1);
    return Array.from(String(plus_one), Number);
};  