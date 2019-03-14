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

//Edit and delete note
ul.addEventListener('click', function(e){
  if (e.target.classList[1]=== 'fa-pencil-square-o') {
    let parentPar = e.target.parentNode;
    parentPar.style.display = 'none';

    let note = parentPar.previousElementSibling;
    let input = parentPar.nextElementSibling;

    input.style.display= 'block';
    input.value = note.textContent;
    
    input.addEventListener('keypress', function(e){
      
      if(e.keyCode === 13){
        if(input.value!== ''){
          note.textContent = input.value;
          parentPar.style.display = 'block';
          input.style.display = 'none';
        } else {
          var li = input.parentNode;
          li.parentNode.removeChild(li);
        } 
      }     
    })
  } else if (e.target.classList[1] === 'fa-times'){
    var list = e.target.parentNode.parentNode
    list.parentNode.removeChild(list);
  }
})

//Hide notes

var hideItem = document.getElementById('hide');

hideItem.addEventListener('click', function(){
  if(hideItem.checked){
    ul.style.display = 'none';
    hideItem.previousElementSibling.textContent = "Unhide Notes"
  } else {
    ul.style.display = 'block';
    hideItem.previousElementSibling.textContent = "Hide Notes"
  }
})


//Search filter

var SearchInput = document.querySelector('#search-note input')

SearchInput.addEventListener('keyup', function(e){

  let searchChar = e.target.value.toUpperCase();

  var notes = ul.getElementsByTagName('li');
  Array.from(notes).forEach(function(note){
    var parText = note.firstElementChild.textContent;
    if (parText.toUpperCase().indexOf(searchChar) !== -1){
      note.style.display = 'block';
    } else {
      note.style.display = 'none';
    }
  })
})


function digitalClock() {
  var date = new Date();
  var hours = date.getHours() + '';
  var minutes = date.getMinutes() + '';
  var seconds = date.getSeconds() + '';
  var day = date.getDay();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds
  }
  var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  var clock = weekDays[day] + ' ' + hours + ':' + minutes + ':' + seconds;
  document.getElementById('clock').innerHTML = clock;

}

digitalClock();
setInterval(digitalClock, 1000);