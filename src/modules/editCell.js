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

export default editCell;