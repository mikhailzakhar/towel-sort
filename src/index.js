
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  let arr2 = [];

  if (arguments.length === 0)
    return [];
    
  for(let i=0; i<matrix.length; i+=2)
    arr[i] = matrix[i];
  for(let i=1; i<matrix.length; i+=2)
    arr[i] = matrix[i].reverse();
  for(let i=0; i<matrix.length; i++) 
    for (let j=0; j<matrix[i].length; j++)
      arr2.push(matrix[i][j]);   
  
  return arr2;
}
