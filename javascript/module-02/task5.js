'use strict';

const checkForSpam=function(str){
    str=str.toLowerCase();
    let array=str.split(",");

    for(let word of array){
    if(word.includes('spam') || word.includes('sale')){
        return true;
    }
        return false;
    }
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best SALE offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true