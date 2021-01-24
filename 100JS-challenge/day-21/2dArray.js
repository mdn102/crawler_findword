function sumArr(matrix){
    
      // sums of rows
      var rowSum = matrix.map(r => r.reduce((a, b) => a + b));
      // sums of columns
      var colSum = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));
      // diagonal sum
      var diagonal1=0; var diagonal2=0;

      for(let i=0; i<matrix.length; i++){
          diagonal1+=matrix[i][i]
          diagonal2+=matrix[i][matrix.length-i-1]
      }
      let totalSum=[...rowSum, ...colSum,diagonal1, diagonal2]
      
    return Math.max(...totalSum)
}


console.log(sumArr([[10,20,30], [40,50,60], [70,-80,90]]))
//180