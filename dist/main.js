/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_editCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/editCell */ "./src/modules/editCell.js");
/* harmony import */ var _modules_sortCol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sortCol */ "./src/modules/sortCol.js");
/* harmony import */ var _modules_delRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/delRow */ "./src/modules/delRow.js");
/* harmony import */ var _modules_createJson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createJson */ "./src/modules/createJson.js");
/* harmony import */ var _modules_createTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/createTable */ "./src/modules/createTable.js");






window.addEventListener('DOMContentLoaded', function() {
    // get data from Local Storage
    Object(_modules_createTable__WEBPACK_IMPORTED_MODULE_4__["default"])(JSON.parse(localStorage.getItem("table")));

    // parse input text value
    const text = document.querySelector('#text-input'),
        btnParse = document.querySelector('#btn-parse');
    btnParse.addEventListener('click', () => {
        try {
            let jsonStr = JSON.parse(text.value);
            Object(_modules_createTable__WEBPACK_IMPORTED_MODULE_4__["default"])(jsonStr);
            text.value = '';
        } catch (e) {
            alert('Enter correct JSON string!');
        }
    });
    
    Object(_modules_sortCol__WEBPACK_IMPORTED_MODULE_1__["default"])();
    Object(_modules_delRow__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_modules_editCell__WEBPACK_IMPORTED_MODULE_0__["default"])();

    // save data in Local Storage
    const saveBtn = document.querySelector('#save-btn');
    saveBtn.addEventListener('click', () => {
        Object(_modules_createJson__WEBPACK_IMPORTED_MODULE_3__["default"])();
        alert('Please! Enter correct JSON string!');
    });

    // .pattern(/^\[({(,?\s?"[\wа-яА-ЯёЁ]+"\s?:\s?"[^".?]*")+},?\s?)+\]$/ //если потребуется валидация JSON объектов
});


/*
[{"name":"apple","type":"fruit","color":"#0fff2b"},{"name":"orange","type":"color","color":"#f00800"},{"name":"car","type":"technics","color":"#000000"},{"name":"bowling","type":"sport","color":"#1d96d3"},{"name":"summ","type":"operation","color":"#00ffb3"},{"name":"John Doe","type":"persone","color":"#7d7d7d"}]
*/



/***/ }),

/***/ "./src/modules/createJson.js":
/*!***********************************!*\
  !*** ./src/modules/createJson.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (createJSON);

/***/ }),

/***/ "./src/modules/createTable.js":
/*!************************************!*\
  !*** ./src/modules/createTable.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (createTable);

/***/ }),

/***/ "./src/modules/delRow.js":
/*!*******************************!*\
  !*** ./src/modules/delRow.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* function remove row from table */

function delRow() {
    table.addEventListener('click', function(elem) {
        if(elem.target.closest('.delete')) {
            elem.target.closest('tr').remove();
        }
    });
}

/* harmony default export */ __webpack_exports__["default"] = (delRow);

/***/ }),

/***/ "./src/modules/editCell.js":
/*!*********************************!*\
  !*** ./src/modules/editCell.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* function make edit cells in table */
function editCell() {
  let tableEd = document.getElementById('table');

  let editingTd;
  
  tableEd.onclick = function (event) {
    let target = event.target.closest('.edit-cancel,.edit-ok,td');

    if (!tableEd.contains(target)) return;

    if (target.className == 'edit-cancel') {
      finishTdEdit(editingTd.elem, false);
    } else if (target.className == 'edit-ok') {
      finishTdEdit(editingTd.elem, true);
    } else if (target.className == 'no-edit') {
      return;
    } else if (target.nodeName == 'TD') {
      if (editingTd) return;
      makeTdEditable(target);
    }
  };

  function makeTdEditable(td) {
    editingTd = {
      elem: td,
      data: td.innerHTML
    };

    td.classList.add('edit-td');

    let textArea = document.createElement('textarea');
    textArea.style.width = td.clientWidth + 'px';
    textArea.style.height = td.clientHeight + 'px';
    textArea.className = 'edit-area';

    textArea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textArea);
    textArea.focus();

    td.insertAdjacentHTML("beforeEnd",
      `<div class="edit-controls">
        <button class="edit-ok">OK</button>
        <button class="edit-cancel">CANCEL</button>
      </div>`
    );
  }

  function finishTdEdit(td, isOk) {
    if (isOk) {
      td.innerHTML = td.firstChild.value;
    } else {
      td.innerHTML = editingTd.data;
    }
    td.classList.remove('edit-td');
    editingTd = null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (editCell);

/***/ }),

/***/ "./src/modules/sortCol.js":
/*!********************************!*\
  !*** ./src/modules/sortCol.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (sortCol);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map