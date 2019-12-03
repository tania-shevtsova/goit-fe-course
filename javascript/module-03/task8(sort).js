'use strict';

const arr = [6, 7, 8, 3, 4, 5];
const my_sort = (arr) => {
   let isSorted;
   

    do{
        isSorted=true;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]) {
                let sortVar=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=sortVar;
                isSorted=false;
        }
    }
    } while(!isSorted);
    return [...arr];
}
const newArray = my_sort(arr);
newArray[0] = "!!!";
console.log(arr); //должен вывести 3 4 5 6 7 8
console.log(newArray); // должен !!!, 4 5 6 7 8