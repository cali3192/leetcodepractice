export function arrayOfProducts(array: number[]) {
  // Write your code here.

  // define result array
  const result: number[] = [];

  // storage array for forwards and backwards

  // populate first elem in forward
  const forward = [1];

  // create an array of same length ending in 1
  const backward = new Array(array.length).fill(1);

  console.log({ backward });

  // loop through from 0 - length - 2
  for (let i = 0; i < array.length - 1; i++) {
    const elem = array[i];
    const lastProduct = forward[i];

    // multiply with prev sum
    const newProduct = elem * lastProduct;

    // append to forward
    forward.push(newProduct);
  }

  // console.log(`here`, backward[array.length])

  // loop backward from length - 1 to 1
  for (let i = array.length - 1; i > 0; i--) {
    const elem = array[i];
    const lastProduct = backward[i];

    // multiply by prev sum
    const newProduct = lastProduct * elem;

    console.log({ elem, lastProduct, newProduct });

    // update val in backward
    backward[i - 1] = newProduct;
  }

  console.log({ forward, backward });

  // loop through forward
  for (let i = 0; i < forward.length; i++) {
    // multiply each elem in backward with forward
    const product = forward[i] * backward[i];

    result.push(product);
  }

  // return result array
  return result;
  // return array;
}
