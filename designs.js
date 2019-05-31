// <Reference>
// - Knowlege from udacity.com (https://knowledge.udacity.com/)
// - MDN web Docs; EventTarget.addEventListener
// (https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const sizePicker = document.getElementById('sizePicker');
// Changed to global valuables and use them here to access there val.
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const canvas = document.getElementById('pixelCanvas');
// function makeGrid makes a table and coloring a cell that is clicked
function makeGrid() {
  const wInput = width.value;
  const hInput = height.value;
  for (let n=1; n<=wInput; n++){
    const row = document.createElement('tr');
    canvas.appendChild(row);
    for (let m=1; m<=hInput; m++){
      const column = document.createElement('td');
      row.appendChild(column);
    }
  }
}
// function canvasArt fills a cell with the picked color and
// undo(erase) the color when you click the target again.
function drawCanvas() {
  canvas.addEventListener('click', function(event){
    const color = colorPicker.value;
    const cell_color = event.target.style;
    if (cell_color.backgroundColor === ''){
      cell_color.backgroundColor = color;
    }else{
      cell_color.backgroundColor = '';
    }
  });
}
// When size is submitted by the user, call makeGrid()
// And when clicked submit button again, it resets the screen.
sizePicker.addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
  drawCanvas();
}, {once:true});
