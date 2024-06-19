//10.06.24
document.addEventListener("DOMContentLoaded", function () {
    var selectedRowsList=document.querySelector("#my-tbody").children;
    for(let i=0; i<selectedRowsList.length; i++){
        if (Number(selectedRowsList[i].querySelector(".rating").textContent) < 2)
        selectedRowsList[i].classList.add("red");
        if (Number(selectedRowsList[i].querySelector(".rating").textContent) >= 4)
        selectedRowsList[i].classList.add("green");
    }
});

// function checkRating() {
//     const row = document.querySelector(".first-row");
//     const rating = Number(document.querySelector(".rating1").textContent);
//     if (rating > 2) {
//         row.classList.add("green");
//     }
// }

// // קריאה לפונקציה מיד לאחר שהשורה נטענת
// document.addEventListener("DOMContentLoaded", checkRating);

document.querySelector("#buy-1").addEventListener("click", function () {
    createPurchaseTable(document.querySelector(".first-row"));
});

document.querySelector("#buy-2").addEventListener("click", function () {
    createPurchaseTable(document.querySelector(".second-row"));
});
document.querySelector("#buy-3").addEventListener("click", function () {
    createPurchaseTable(document.querySelector(".third-row"));
});
document.querySelector("#buy-4").addEventListener("click", function () {
    createPurchaseTable(document.querySelector(".fourth-row"));
});

function createPurchaseTable(selectedRow) {
    updateTableRow(selectedRow);
    document.querySelector(".order-table").classList.remove("not-display-element");
}

function updateTableRow(selectedRow) {
    var selectedNewRow = document.querySelector(".row-name");
    var selectedStoreName = document.createElement("td");
    selectedStoreName.textContent = selectedRow.querySelector(".storeName").textContent;
    selectedNewRow.appendChild(selectedStoreName);

    var selectedNewRow2 = document.querySelector(".row-price");
    var selectedPrice = document.createElement("td");
    selectedPrice.textContent = selectedRow.querySelector(".price").textContent + "$";
    selectedNewRow2.appendChild(selectedPrice);
}

//מחיקה
document.querySelector("#delete-1").addEventListener("click", function () {
    document.querySelector(".first-row").remove();
});

document.querySelector("#delete-2").addEventListener("click", function () {
document.querySelector(".second-row").remove();
});
document.querySelector("#delete-3").addEventListener("click", function () {
    document.querySelector(".third-row").remove();
});
document.querySelector("#delete-4").addEventListener("click", function () {
    document.querySelector(".fourth-row").remove();
});

