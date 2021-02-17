export function twoNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  const sums = new Map();

  for (let i = 0; i < array.length; i++) {
    // get element
    const element = array[i];

    // const difference
    const diff = targetSum - element;
    if (!sums.has(element)) {
      return [element, diff];
    } else {
      // set the diff with elem
      sums.set(diff, element);
    }

    console.log({ sums });
  }

  return [];
}





const twoSumInput = [3, 5, -4, 8, 11, 1, -1, 6];
const twoSumTargetInput = 10;
const twoSumActual = twoNumberSum(twoSumInput, twoSumTargetInput);

console.log("LOG ~ file: index.ts ~ line 8 ~ twoSumActual", twoSumActual);


// 
function calcDroneMinEnergy(route) {
  // your code goes here
  // only interested in z
  
  // define energy starting at 0
  let energy = 0
  // let largestEnergyDeficit = 0 
  // track the current direction, calculating the delta
  let largestEnergyDeficit = 0;
  
  /*
  /* input:  route = [ [0,   2, 10],
                      [3,   5,  0],
                      [9,  20,  6],
                      [10, 12, 15],
                     [10, 10,  8] ]  -10 + 6 +15 - 8 = 


                     [ [0,   2, 10],
                      [3,   5,  0],  -10

                  
                  
*/
  // loop through
  for(let i = 1; i < route.length; i++) {
    const zIndex = route[i][2]; // 15
    const lastZIndex = route[i - 1][2] // 6
    
    // 6 - 20
    let difference = lastZIndex - zIndex; // -9
    
    energy += difference //
    
    // -10
    largestEnergyDeficit =  Math.min(energy, largestEnergyDeficit) === energy ?  
    // e: -10, -10
    // if your delta is negative, then you -kw  else + kw
    // energy += difference < 0 ? -difference : difference;
     
    
    //if energy < largestEnergyDeficit
      // largest = energy 
  }
 
 // [0,2,10]
 // [10,10,8] 

  
  // [0,2,6] 
  // [10,10,20] -14 
  
  console.log({energy}) 
  
  // return energy
  // -1 * ()
  return energy > 0 ? 0 : energy
}