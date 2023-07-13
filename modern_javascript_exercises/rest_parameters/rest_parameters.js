// Instructions can be found in rest_parameters.md

export function add(a, b, ...otherNumbers) {

  let total = a + b;
  
  // for (let i=0; i<otherNumbers.length; i++){
  //   total += otherNumbers[i]
  // }

  for (let number of otherNumbers) {
    total += number;
  }


  return total;

}

add(1, 2, 3, 4, 5);

