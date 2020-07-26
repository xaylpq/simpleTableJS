/* function sorting colons in table */
function sortCol() {
    const sNames = document.querySelector('.sort-names'),
    sType = document.querySelector('.sort-type');

    // sorting by type
    sType.addEventListener('click', ()=> {
        let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
        table.tBodies[0].append(...sortedRows);
    });

    // sorting by name
    sNames.addEventListener('click', ()=> {
        let sortedRows = Array.from(table.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[1].innerHTML > rowB.cells[1].innerHTML ? 1 : -1);
        table.tBodies[0].append(...sortedRows);
    });
}

export default sortCol;