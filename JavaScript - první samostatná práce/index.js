function vytvoritTabulku() {
    let pocetRadku = document.getElementById("pocet-radku").value;
    let pocetSloupcu = document.getElementById("pocet-sloupcu").value;

    let table = document.createElement("table");

    for (let i = 0; i < pocetRadku; i++) {
        let row = table.insertRow();

        for (let j = 0; j < pocetSloupcu; j++) {
            let cell = row.insertCell();
            cell.textContent = (i * pocetSloupcu) + j + 1;
        }
    }

    document.body.appendChild(table);
}
