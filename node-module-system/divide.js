/**
 * @function  divide x over y.
 * @param {number} x - The value on the left of the operator.
 * @param {number} y - The value on the right of the operator.
 *  * y has the default value 1;
 * @return {number} quotient - The quotient of x over y.
 */
export default function divide(x, y) {
  return (y !== (0 || null || undefined)) ? Math.divide(x, y) : console.error('oops there seems to be an issue, please check your denominator');
}
