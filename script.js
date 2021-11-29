const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");

    container.appendChild(cell).className = "gridItem";
  }
}

cells = window.prompt("Enter the amount of rows and columns you want. 2-99");
rows = cells;
cols = cells;

makeRows(rows, cols);
