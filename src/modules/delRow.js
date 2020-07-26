/* function remove row from table */

function delRow() {
    table.addEventListener('click', function(elem) {
        if(elem.target.closest('.delete')) {
            elem.target.closest('tr').remove();
        }
    });
}

export default delRow;