let table;
let rows = 6;
let cols = 7;
let red = true;

makeTable();

function makeTable() {
    table = [[],[],[],[],[],[],[]]
    for (let column of table) {
        for (let i=0; i<rows; i++) {
            column.push("-");
        }
    }
}

function insert(pos) {
    let cont = 0;
    // cont = riga
    // pos = colonna
    while (table[pos][cont] != '-' && cont<rows){
        cont++;
    }
    table[pos][cont] = red ? "r" : "y";
    let coordinate = cont.toString() + pos.toString();
    let circle = document.getElementById(coordinate);
    circle.classList.add(red ? "text-danger" : "text-warning");
    red = !red;
    console.log(table);
}