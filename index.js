import math from 'mathjs';

/* Matrices and Vectors */

var matA = math.matrix([[0, 1], [2, 3], [4, 5]]);
var matB = math.matrix([[0], [1], [2]]);

console.log(`Matrix A Dimension: ${matA.size()[0]}x${matA.size()[1]}`);
console.log(`Is vector: ${matA.size()[1] === 1}`);

console.log(`Matrix B Dimension: ${matB.size()[0]}x${matB.size()[1]}`);
console.log(`Is vector: ${matB.size()[1] === 1}`);
console.log('\n');

/* Matrix Addition */

matA = math.matrix([[0, 1], [2, 3], [4, -5]]);
matB = math.matrix([[1, -1], [-2, 4], [-7, 4]]);

const matAdd = math.add(matA, matB);

console.log('Matrix Addition of A + B:');
console.log(matAdd.valueOf());
console.log('\n');

/* Matrix Subtraction */

matA = math.matrix([[0, 1], [2, 3], [4, -5]]);
matB = math.matrix([[1, -1], [-2, 4], [-7, 4]]);

const matSub = math.subtract(matA, matB);

console.log('Matrix Subtraction of A - B');
console.log(matSub.valueOf());
console.log('\n');

/* Matrix Multiplication - Commutative */
matA = math.matrix([[0, 1], [2, 3]]);
matB = math.matrix([[2, 4], [6, 2]]);
 
const matAxB = math.multiply(matA, matB);
const matBxA = math.multiply(matB, matA);
 
console.log('Is matrix multiplication commutative?');
console.log(math.equal(matAxB.valueOf(), matBxA.valueOf()));
// false

/* Matrix Multiplication - Associative */

matA = math.matrix([[0, 1], [2, 3], [4, 5]]);
matB = math.matrix([[2, 4], [6, 2]]);
const matC = math.matrix([[5, 2], [2, -2]]);

const matAxB_C = math.multiply(math.multiply(matA, matB), matC);
const matA_BxC = math.multiply(matA, math.multiply(matB, matC));

console.log('Is matrix multiplication associative?');
console.log(math.equal(matAxB_C.valueOf(), matA_BxC.valueOf()));
console.log('\n');

/* Matrix-Scalar Multiplication */
matA = math.matrix([[0, 1], [2, 3], [4, -5]]);
const scalar = 3;
const matAx3 = math.multiply(matA, scalar);

console.log('Matrix Scalar Multiplication:');
console.log(matAx3.valueOf());
console.log('\n');

/* Matrix-Vector Multiplication */
matA = math.matrix([[0, 1], [2, 3], [4, 5]]);
matB = math.matrix([[2], [1]]);

const matAxvB = math.multiply(matA, matB);

console.log('Matrix-Vector Multiplication:');
console.log(matAxvB.valueOf());
console.log('\n');

/* Matrix Division */
matA = math.matrix([[0, 2], [2, 4], [4, 6]]);
matB = math.matrix([[2, 1], [2, 2]]);

const matAB = math.divide(matA, matB);

console.log('Matrix Division:');
console.log(matAB.valueOf());
console.log('\n')

/* Identity (I) Matrix */

const matI_3 = math.eye(3);

console.log('Identity Matrix:');
console.log(matI_3.valueOf());
console.log('\n');

/* Transpose Matrix */

const matV = math.matrix([[0], [1], [2]]);

const matV_T = math.transpose(matV);

console.log('Transpose Matrix:');
console.log(matV_T.valueOf());
console.log('\n');

/* Inverse Matrix */

matA = math.matrix([[0, 1], [2, 3]]);

const matA_1 = math.inv(matA);

console.log('Inverse Matrix:');
console.log(matA_1.valueOf());
console.log('\n');
