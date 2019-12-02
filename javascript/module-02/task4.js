'use strict';

const formatString=function(string) {
    let stringArr=string.split('');
    let formattedString;

 
        if(stringArr.length<=40) {
            return string;
        }
        else {
            string=stringArr.slice(0, 41);
            string.push(' ...');
            formattedString=string.join('');
           return formattedString;
        }
   
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка