// 4kyu
// Complete the method so that it does the following:

// Removes any duplicate query string parameters from the url
// Removes any query string parameters specified within the 2nd argument (optional array)
// Examples:

// stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
// stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
// stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'

function stripUrlParams(url, paramsToStrip){
    paramsToStrip = paramsToStrip || [];
    var index = url.indexOf('?');
    if (index === -1) return url;
    var url2 = url.slice(0, index);
    var query = url.slice(index);
    var found = query.match(/(?:\?|&)([^=&#]+)=([^=&#]+)/g);
    var keys=[];
    found.forEach(function(pair){
        var key = pair.slice(1, pair.indexOf('='));
        //if unused key and the key is not one of the parameters to remove, add key/value to url2 and store key
        if (keys.indexOf(key) === -1 && paramsToStrip.indexOf(key) === -1) {
            keys.push(key);
            url2 += pair;
        }
    });
    return url2;
}