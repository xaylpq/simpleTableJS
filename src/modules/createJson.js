/* Create JSON string and set in Local Storage key = table */
function createJSON() {
    const dataRows = document.querySelectorAll('#table tr:nth-child(n+1)');
    const jsonStruct = [];

    dataRows.forEach(row => {
        let fields = row.querySelectorAll("td");
        if (fields.length !== 4) return;
        jsonStruct.push({
            name: fields[0].innerHTML,
            type: fields[1].innerHTML,
            color: fields[2].querySelector('#colorPiker').value
        });
    });

    localStorage.clear('table');
    localStorage.setItem('table', JSON.stringify(jsonStruct));
}

export default createJSON;