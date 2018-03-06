module.exports = function solveSudoku(matrix) {
    let uniqueRow = [], uniqueCol = [], uniqueCube = [], uniqueCand = [];
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (matrix[row][col] === 0) {

                let [r, c] = [Math.floor(row / 3) * 3, Math.floor(col / 3) * 3];

                uniqueRow = Array.from(matrix[row].reduce((s,v)=>s.add(v),new Set()));
                uniqueCol = Array.from(matrix.reduce((s,v)=>s.add(v[col]),new Set()));
                uniqueCube = Array.from(matrix.slice(r,r+3).reduce((s,v)=>v.slice(c,c+3).reduce((s,v)=>s.add(v),s),new Set()));

                uniqueCand = uniqueRow.concat(uniqueCol).concat(uniqueCube);



                let arrsud = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((uniq) => !uniqueCand.includes(uniq));

                for (let i = 0; i < arrsud.length; i++) {
                    matrix[row][col] = arrsud[i];

                    let result = solveSudoku(matrix);
                    if (result) return result;
                }
                matrix[row][col] = 0;
                return false;


            }
        }
    }
    return matrix;


};
