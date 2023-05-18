"use strict";

let list = [];

let addInput = document.querySelectorAll('.td_row'),
    table = document.getElementById('myTable'),
    saveInput = table.rows.innerText,
    aRow = table.rows;

console.log(addInput.value)


list.push(saveInput)


console.log(list)


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      let currentRow = document.getElementById('myTable').getElementsByTagName('tbody')[0].lastElementChild;
      if (isRowFilled(currentRow)) {
        addRow();
      }
    }
  });
  
  function isRowFilled(row) {
    let cells = row.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].innerText.trim() === '') {
        alert('Заполните все поля')
        return false;
      }
    }
    return true;
  }
  
  function addRow() {
    let newRow = document.createElement('tr'),
        newRowList = [];
    
    for (let i = 0; i < 3; i++) {
      let cell = document.createElement('td');
      cell.contentEditable = true;
      cell.className = "td_row";
      newRow.appendChild(cell);
      newRowList.push(cell.innerText.trim());
    }
    
    table.getElementsByTagName('tbody')[0].appendChild(newRow);
    list.push(newRowList);
    console.log(list);
  }

