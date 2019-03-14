let ul = document.querySelector('ul');

//add note
document.getElementById('add-btn').addEventListener('click',
function(e) {
  e.preventDefault();


  let addInput = document.getElementById('add-input');

  if (addInput.value === '') {
    alert('Add a note')
  } else {
    let li = document.createElement('li'),
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
    ul.appendChild(li);
    addInput.value = '';
  }
})

//Edit and delete
ul.addEventListener('click', function(e){
  if (e.target.classList[1]=== 'fa-pencil-square-o') {
    let parentPar = e.target.parentNode;
    parentPar.style.display = 'none';

    let note = parentPar.previousElementSibling;
    let input = parentPar.nextElementSibling;

    input.style.display= 'block';
    input.value = note.textContent;
  }

})



































