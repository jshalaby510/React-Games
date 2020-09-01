export function calculateWinner(squares) {
    //every possible winning combination
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        //assign a, b, and c to an entire row in lines
        const [a, b, c] = lines[i];
        //if a row is filled, a winning combination happened. return that they won
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    //if nobody won, return null
    return null;
}