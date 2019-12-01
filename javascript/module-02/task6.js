'use strict';

let input=null;
let total=0;

do{
    input=prompt('Please, enter a number:');
    let numbers;
    if(isNaN(input) || input===null){
    if(isNaN(input)){
            alert('Please, try again!');
            continue;
        }
        else {
            break;
        }
    }
    
    else {
        numbers=[Number(input)];
        
        for(let i=0;i<numbers.length;i++){
            if(numbers[i]!=0){
                total+=numbers[i];
            }
        }
       
    }

}while(true);

console.log(`Total sum: ${total}`);