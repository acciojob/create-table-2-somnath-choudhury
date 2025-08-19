function createTable() {
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  if (rn < 0 || cn < 0) {
    alert('Please enter positive values')
  }

  if (isNaN(rn) || isNaN(rn)) {
    return;
  }

  const table = document.getElementById("myTable");

  table.innerHTML = ''

  for (let i = 0; i < rn; i++) {
    const row = table.insertRow(i);

    for (let j = 0; j < cn; j++) {
      const cell = row.insertCell(j);

      cell.textContent = `Row-${i} Column-${j}`
    }
  }
}