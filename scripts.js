const container = document.querySelector(".container");


let row_num = 16;
let col_nums = 16;
for (let i = 0; i < row_num; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < col_nums; j++) {
        const col = document.createElement("div");
        col.style.border = "2px solid black";
        // col.style.display = "flex";
        col.style.flex="1";
        // col.style.justifyContent = "space-around";
        col.textContent = (i * row_num) + (j + 1);
        row.appendChild(col);
    }
    row.style.display = "flex";
    //row.style.flex="1";
    row.style.justifyContent = "space-around";
    container.appendChild(row);
}
