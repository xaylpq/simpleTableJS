/* Create table from data string JSON */

function createTable(data) { // create table from array JSON obj
    data.forEach(({name, type, color}) => {
        function addRow() {
            const element = document.createElement('tr');

            element.innerHTML = `
                    <td class='name'>${name}</td>
                    <td class='type'>${type}</td>
                    <td class="no-edit"><input type="color" id="colorPiker" value="${color}"></td>
                    <td class="no-edit"><button class='delete'> X </button></td>
            `;
            document.querySelector('tbody').append(element);
        }
        addRow();
    });
}

export default createTable;