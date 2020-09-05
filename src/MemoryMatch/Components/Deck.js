function shuffle(array) {
    const arrayCopy = array.slice(0);
    for (let i=0; i<array.length-1; i++) {
        let randomIndex = Math.floor(Math.random() * (i+1));
        [arrayCopy[i], arrayCopy[randomIndex]] = [arrayCopy[randomIndex], arrayCopy[i]];
    }

    return arrayCopy;
}

export default function Deck () {
    let id = 0;
    const cards = ['react', 'bootstrap', 'redux', 'vue', 'angular', 'electron', 'html', 'css']
        .reduce((accumulator, currentValue) => {
            accumulator.push({
                id: id++,
                type: currentValue
            })
            accumulator.push({
                id: id++,
                type: currentValue
            })
            return accumulator;
        }, []);

    return shuffle(cards);
}