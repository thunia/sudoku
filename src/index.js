module.exports = function solveSudoku(matrix) {
  if(isSolveSudoku(matrix)){
    return matrix;
  }
  return false;

  function isInRow(matrix, row, number){
    var matrixSize = matrix.length;
    for(var col = 0; col < matrixSize; col++){
      if(matrix[row][col] == number){
        return true;
      }        
    }
    return false;
  }
  
  function isInColumn(matrix, col, number){
    var matrixSize = matrix.length;
    for(var row = 0; row < matrixSize; row++){
      if(matrix[row][col] == number){
        return true;
      }        
    }
    return false;
  }
  
  function isInBlock(matrix, startRow, startCol, number){
    for(var row = 0; row < 3; row++){
      for(var col = 0; col < 3; col++){
        if(matrix[row + startRow][col + startCol] == number){
          return true;    
        }            
      }
    }
    return false;
  }
  
  function isSafeCell(matrix, row, col, number){
    return !isInRow(matrix, row, number) &&
           !isInColumn(matrix, col, number) &&
           !isInBlock(matrix, row - row % 3, col - col % 3, number) && 
           matrix[row][col] == 0;
  }
  
  function isSolveSudoku(matrix){ 
    var row, col;
  
    function findEmptyCell(matrix){
      var matrixSize = matrix.length;   
  
      for(var i = 0; i < matrixSize; i++){
        for(var j = 0; j < matrixSize; j++){
          if(matrix[i][j] == 0){
            row = i, col = j;
  
            return true;
          }
        }
      } 
      return false;
    }
  
    if(!findEmptyCell(matrix)){
      return true; 
    }         
  
    for(var num = 1; num <= 9; num++){    
      if(isSafeCell(matrix, row, col, num)){
        matrix[row][col] = num; 
        if(isSolveSudoku(matrix)){        
          return true;
        }
        matrix[row][col] = 0;
      }      
    }  
    return false;
  }
}
