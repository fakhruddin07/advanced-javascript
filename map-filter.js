// old method
const numbers = [3, 5, 7, 9];
const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

console.log(output);


// MAP :
const evenNumbers = [2, 4, 6, 8, 10];
const result = evenNumbers.map(function(element){
    return element * element;
})
console.log(result);
/*NOTE : map er vitore kono akti function k pass korle sha tinti parameter nite pare. (i)element; (ii)index; (iii)array;*/

// shortcut system
const total = evenNumbers.map( x => x * x );
console.log(total);

// FILTER :
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const bigger = number.filter(x => x > 5);

console.log(bigger);


// FIND :
const naturalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const findThat = naturalNumber.find(x => x > 5);

console.log(findThat);


/* map holo array er moddhe looping kore prottek ta element niye kisu akta kora & kora ses hoar pore prottek element niye jeta pabe sheta k result hishabe r akta array diye dibe.*/

/*NOTE : 
(i) map & filter array diye dibe.
(ii) find akta element dibe.*/ 