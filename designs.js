// <Reference>
// - Knowlege from udacity.com (https://knowledge.udacity.com/)
// - MDN web Docs (https://developer.mozilla.org/en-US/docs/Web/API/)

// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const sizePicker = document.getElementById('sizePicker');
// Changed to global valuables and use them here to access there val.
const canvas = document.getElementById('pixelCanvas');
const width = document.getElementById('inputWidth');
const height = document.getElementById('inputHeight');

// function makeGrid makes a table and coloring a cell that is clicked
function makeGrid() {
  let wInput = width.value;
  let hInput = height.value;
  for (let n=1; n<=hInput; n++){
    let column = document.createElement('tr');
    canvas.appendChild(column);
    for (let m=1; m<=wInput; m++){
      let row = document.createElement('td');
      column.appendChild(row);
      row.addEventListener('click', function(event){
        let color = colorPicker.value;
        let cell_color = event.target.style;
        // click once, fill a single square with the picked color,
        // click twice, remove the color of the square
        if (cell_color.backgroundColor === ''){
          cell_color.backgroundColor = color;
        }else{
          cell_color.backgroundColor = '';
        }
      });
    }
  }
}
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function(e){
  e.preventDefault();
  // If there are already colored squares in the grid,
  // clicking the Submit button clears them out.
  canvas.innerHTML = null;
  makeGrid();
});
