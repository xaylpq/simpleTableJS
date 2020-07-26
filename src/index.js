import editCell from './modules/editCell';
import sortCol from './modules/sortCol';
import delRow from './modules/delRow';
import createJSON from './modules/createJson';
import createTable from './modules/createTable';

window.addEventListener('DOMContentLoaded', function() {
    // get data from Local Storage
    createTable(JSON.parse(localStorage.getItem("table")));

    // parse input text value
    const text = document.querySelector('#text-input'),
        btnParse = document.querySelector('#btn-parse');
    btnParse.addEventListener('click', () => {
        try {
            let jsonStr = JSON.parse(text.value);
            createTable(jsonStr);
            text.value = '';
        } catch (e) {
            alert('Enter correct JSON string!');
        }
    });
    
    sortCol();
    delRow();
    editCell();

    // save data in Local Storage
    const saveBtn = document.querySelector('#save-btn');
    saveBtn.addEventListener('click', () => {
        createJSON();
        alert('Please! Enter correct JSON string!');
    });

    // .pattern(/^\[({(,?\s?"[\wа-яА-ЯёЁ]+"\s?:\s?"[^".?]*")+},?\s?)+\]$/ //если потребуется валидация JSON объектов
});


/*
[{"name":"apple","type":"fruit","color":"#0fff2b"},{"name":"orange","type":"color","color":"#f00800"},{"name":"car","type":"technics","color":"#000000"},{"name":"bowling","type":"sport","color":"#1d96d3"},{"name":"summ","type":"operation","color":"#00ffb3"},{"name":"John Doe","type":"persone","color":"#7d7d7d"}]
*/

