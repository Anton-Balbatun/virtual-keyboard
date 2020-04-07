const keys = [{
    '+192': ["`","~","ё","Ё"],
    "+49": ["1","!","1","!"],
    "+50": ["2","@","2",'"'],
    "+51": ["3","#","3","№"],
   "+52": ["4","$","4",";"],
    "+53": ["5","%","5","%"],
    "+54": ["6","^","6",":"],
    "+55": ["7","&","7","?"],
    "+56": ["8","","8",""],
    "+57": ["9","(","9","("],
    "+48": ["0",")","0",")"],
    "+189": ["-","","-",""],
    "+187": ["=","+","=","+"],
    "+8": ["Backspace"]},
    {
    "+9": ["Tab"],
    "+81": ["q","Q","й","Й"],
    "+87": ["w","W","e","E"],
    "+69": ["e","E","у","У"],
    "+82": ["r","R","к","К"],
    "+84": ["t","T","е","Е"],
    "+89": ["y","Y","н","Н"],
    "+85": ["u","U","г","Г"],
    "+73": ["i","I","ш","Ш"],
    "+79": ["o","O","з","З"],
    "+80": ["p","P","з","З"],
    "+219":["[","{","х","Х"],
    "+221":["]","}","ъ","Ъ"],
    "+46": ["Delete"]},
    {
    "+20": ["Caps lock"],
    "+65": ["a","A","ф","Ф"],
    "+83": ["s","S","ы","Ы"],
    "+68": ["d","D","в","В"],
    "+70": ["f","F","а","А"],
    "+71": ["g","G","п","П"],
    "+72": ["h","H","р","Р"],
    "+74": ["j","J","о","О"],
    "+75": ["k","K","л","Л"],
    "+76": ["l","L","д","Д"],
    "+186": [";",":","ж","Ж"],
    "+222": ["'",'"',"э","Э"],
    "+220": ["\\","|","\\","/"],
    "+13": ["Enter"],
    },
    {
    "+16": ["Shift"],
    "+90": ["z","Z","я","Я"],
    "+88": ["x","X","ч","Ч"],
    "+67": ["c","C","с","С"],
    "+86": ["v","V","м","М"],
    "+66": ["b","B","и","И"],
    "+78": ["n","N","т","Т"],
    "+77": ["m","M","ь","Ь"],
    "+188":[",","<","б","Б"],
    "+190": [".",">","ю","Ю"],
    "+191": ["/","?",".",","],
    "+38": ["▲"],
    "-16": ["Shift"],
    },
    {
    "+17": ["Ctrl"],
    "+91": ["Win"],
    "+18": ["Alt"],
    "+32": ["Space"],
    "-18": ["Alt"],
    "+37": ["◄"],
    "+40": ["▼"],
    "+39": ["►"],
    "-17": ["Ctrl"],
    }
    ]
    let j

    if (!localStorage.getItem("languageIterator"))
    j= 0
    else
    j = localStorage.getItem("languageIterator")
let container = document.createElement('div');
let keyboard_text_area = document.createElement('textarea');
let keyboard_container = document.createElement('div');
let switch_keyboard = document.createElement('p')
let textnode = document.createTextNode('Shift+Alt to switch language. Done on Windows OS')
switch_keyboard.appendChild(textnode)
function create_html_elements (){

  keyboard_text_area.className="keyboard_text_area";
  keyboard_container.className="keyboard_container";
  container.className="container";
  
  create_buttons();

  container.appendChild(keyboard_text_area);
  container.appendChild(keyboard_container);
  container.appendChild(switch_keyboard)
  document.querySelector('body').appendChild(container);

}
create_html_elements ()

function create_buttons(){

  keys.forEach((element,index) => {
    let row = document.createElement('div');
    row.className = `row${index+1}`; 
    row.classList.add('line');
    
    for (var key in element) {

      let number_of_key = +key; 
      let button =  document.createElement("div");
      button.id = number_of_key
      button.dataset.row = index
     ;

      if(element[key].length === 1){    
      button.className = "button_special";
      button.innerHTML = element[key][0];
      }else{
        button.className = "button_default";
        button.innerHTML = element[key][+j]
      }
      if(key=='+32'){
        button.classList.add('space_button');
      }
      if(key=='+20'){
        button.classList.add('capslock_button');
      }  
      if(key=='+16'){
        button.classList.add('shift_button');
      }
      if(key=='+13'){
        button.classList.add('enter_button');
      }
      if(key=='+18'){
        button.classList.add('alt_button');
      }
      if(key=='+39'){
        button.classList.add('ArrowRight');
      }
      if(key=='+38'){
        button.classList.add('ArrowUp');
      }
      if(key=='+40'){
        button.classList.add('ArrowDown');
      }
      if(key=='+37'){
        button.classList.add('ArrowLeft');
      }

      if(key=='+16'||key=='-16'|| key=='+8'|| key =='+20' || key =='+13' || key =='+46' || key =='+9' ){
        button.classList.add('medium_button');
      }
      button.classList.add('button');
      row.appendChild(button);          
    }

    keyboard_container.appendChild(row);
    
  })

  }

  document.querySelector('.keyboard_container').addEventListener('click',type_letter)
  document.querySelector('.keyboard_container').addEventListener('mousedown',add_animation_letter)
  document.querySelector('.keyboard_container').addEventListener('mouseup',remove_letter)
  document.addEventListener('keydown',type_letter_keydown) 
  document.addEventListener('keyup',remove_hilighting)
  document.addEventListener('keydown',letter_uppercase)
  document.addEventListener('keydown',switch_language)
  document.addEventListener('keydown',tab_space)
  document.addEventListener('keydown',enter_line)
  document.querySelector('.keyboard_container').addEventListener('click',tab_space_onClick)
  document.querySelector('.keyboard_container').addEventListener('click',enter_line_onclick)
  let isShiftPressed
  let isEng = true


  function remove_letter(){
    let element = document.getElementById(`${event.target.id}`)
    if(element){
      element.classList.remove('pressed')
    }
  }

  function add_animation_letter(){
    let element = document.getElementById(`${event.target.id}`)
    if(element){
    element.classList.add('pressed')
    }
  }

  function type_letter(event){
    console.log(event.target)
   
    if (event.target.classList.contains('ArrowRight') ) {

      document.querySelector('.keyboard_text_area').innerHTML += '►'

    }

    if (event.target.classList.contains('ArrowLeft') ) {

      document.querySelector('.keyboard_text_area').innerHTML += '◄'

    } 

    if (event.target.classList.contains('ArrowUp') ) {

      document.querySelector('.keyboard_text_area').innerHTML += '▲'

    } 

    if (event.target.classList.contains('ArrowDown') ) {

      document.querySelector('.keyboard_text_area').innerHTML += '▼'

    } 

    if (event.target.classList.contains('space_button')) {

      let space = document.createTextNode(` `)
      document.querySelector('.keyboard_text_area').appendChild(space)

    }
    
    if (event.target.classList.contains('button_default')) {
     
      let letter = document.createTextNode(`${event.target.innerHTML}`)
      console.log(letter)
      document.querySelector('.keyboard_text_area').appendChild(letter)
      
    }
  }

  function type_letter_keydown(event){
    console.log(event)
    event.preventDefault();
    document.querySelector(`[id="${event.keyCode}"]`).classList.add('pressed') 
    if (event.key === 'ArrowRight' ) {
      document.querySelector('.keyboard_text_area').innerHTML += '►'
    }else if (event.key === 'ArrowLeft' ) {
      document.querySelector('.keyboard_text_area').innerHTML += '◄'
    }else if (event.key === 'ArrowUp' ) {
      document.querySelector('.keyboard_text_area').innerHTML += '▲'
    }else if (event.key === 'ArrowDown' ) {
      document.querySelector('.keyboard_text_area').innerHTML += '▼'
    }else if(event.key !== 'Tab' && event.key !=='Enter' && event.key !=='Backspace' && event.key !=='CapsLock' && event.key !=='Control' && event.key !=='Alt' && event.key !=='Shift' && event.key !=='Delete' && event.key !=='Meta'){
      
      let letter = document.createTextNode(`${event.key}`)
      document.querySelector('.keyboard_text_area').appendChild(letter)
    }

  }

  function remove_hilighting(){
    if(event.key == 'Shift'){
      isShiftPressed = false
    }
    document.getElementById(`${event.keyCode}`).classList.remove('pressed') 
  }

let isUpperCase = false
    
function letter_uppercase(event){
  if(event.key == 'CapsLock'){
    if(isUpperCase == false){
      document.querySelectorAll(".button_default").forEach(element=>{element.innerHTML = element.innerHTML.toUpperCase()})
      isUpperCase = true;
    }else if(isUpperCase == true){
      document.querySelectorAll(".button_default").forEach(element=>{element.innerHTML = element.innerHTML.toLowerCase()})
      isUpperCase = false;
    }
  } 
}



function switch_language(event){
  if(event.key == 'Shift'){
     isShiftPressed = true
  }
  if(isShiftPressed == true && event.key == 'Alt'){
    
    if(j==0 || j==1){

      j=j+2
      document.querySelectorAll(".button_default").forEach(element=>{
      element.innerHTML = keys[element.dataset.row]["+" + element.id][+j]})
      localStorage.setItem("languageIterator", j.toString())

    }
    else if (j==2 || j==3) {
      j=j-2
      document.querySelectorAll(".button_default").forEach(element=>{element.innerHTML = keys[element.dataset.row]["+" + element.id][+j]})
      localStorage.setItem("languageIterator", j.toString())
    }
  }
}

function enter_line(){
  if (event.key=='Enter'){
   
    let enter = document.createTextNode('\n')
    document.querySelector('.keyboard_text_area').appendChild(enter)
}
}
function enter_line_onclick(){
  if (event.target.id == 13){
   
    let enter = document.createTextNode('\n')
    document.querySelector('.keyboard_text_area').appendChild(enter)
}
}
function tab_space(){
  if (event.key=='Tab') {

    let tab = document.createTextNode(`  `)
    document.querySelector('.keyboard_text_area').appendChild(tab)

  }
}

function tab_space_onClick(){
  if (event.target.id =='9') {

    let tab = document.createTextNode(`  `)
    document.querySelector('.keyboard_text_area').appendChild(tab)
  }
}
