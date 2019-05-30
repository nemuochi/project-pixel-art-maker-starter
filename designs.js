// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const sizePicker = document.getElementById('sizePicker');

// function makeGrid makes a table and coloring a cell clicked
function makeGrid() {
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  const canvas = document.getElementById('pixelCanvas');
  for (let n=1; n<=width; n++){
    const row = document.createElement('tr');
    canvas.appendChild(row);
    for (let m=1; m<=height; m++){
      const column = document.createElement('td');
      row.appendChild(column);
      // fill a cell with the selected color
      row.addEventListener('click', function(event){
        const color = colorPicker.value;
        event.target.style.backgroundColor= color;
      });
    }
  }
}
// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});
