var repeatedSubstringPattern = function(s) {
    let ds=s+s;
    ds = ds.slice(1,-1);
    return ds.includes(s);
};