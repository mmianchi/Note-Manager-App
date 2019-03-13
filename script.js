var ul = document.querySelector('ul');

document.getElementById('add-btn').addEventListener('click',
function(e) {
  e.preventDefault();


  var addInput = document.getElementById('add-input');
  var li = document.createElement('li'),
      firstPar = document.createElement('p'),
      SecondPar = document.createElement('p'),
      firstIcon = document.createElement('i'),
      SecondIcon = document.createElement('i'),
      input = document.createElement('input');

  firstIcon.className = 'fa fa-pencil-square-o';
  SecondIcon.className = 'fa fa-times';

  input.className = 'edit-note'
  input.setAttribute('type', 'text');
  firstPar.textContent = addInput.value;


  SecondPar.appendChild(firstIcon);
  SecondPar.appendChild(SecondIcon);

  li.appendChild(firstPar);
  li.appendChild(SecondPar);
  li.appendChild(input);

  
console.log(li)


})







