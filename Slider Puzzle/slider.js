
let start = document.getElementById("Frontpage");
start.style.display="none";
let setTime=setTimeout(function(){
  let sliderGif=document.getElementById("sliderGif");
  sliderGif.style.display="none";
  start.style.display="flex";

},3000)
pmove.innerText=0;


let WholeContainer=document.getElementById("whole-container");
let Top=document.getElementById("top");



let level = document.getElementById("level");
level.style.display = "none";
let board = document.getElementById("board");
let back1=document.getElementById("back1");
back1.style.display="none";
let back2=document.getElementById("back2");
back2.style.display="none";
let Time=document.getElementById("Time");
let Moves=document.getElementById("moves");
let Display=document.getElementById("display");
Display.style.display="none";

let NormalDisplay=document.getElementById("normalDisplay");

let box=document.getElementsByClassName("box");
let stats=document.getElementById("stats");
stats.style.display="none";

let statBox=document.getElementById("statBox");
statBox.style.display="none";

let userInput=document.getElementById("userInput");
userInput.style.display="none";

let userInput2=document.getElementById("userInput2");
userInput2.style.display="none";

let userInput3=document.getElementById("userInput3");
userInput3.style.display="none";

let WholeDisplay=document.getElementById("whole-Display");
WholeDisplay.style.display="none";
let temporaryMin=0;
let temporarySec=0;
let easy=0;
let medium=0;
let hard=0;


//This start function is used to display the front page 
function Start() {
  level.style.display = "flex";
  start.style.display = "none";
  back1.style.display="flex";
  stats.style.display="block";
  statBox.style.display="none";
  inputFile1.style.display="flex";
  userInput.style.display="flex";
   Custom1.style.display="none";
   userInput.style.display="none";
Custom2.style.display="none";
// Custom3.style.display="none";

}
let row;
let column;
let arr;
let quality;
let result;
var array;
let crossWin;
//This back Function used to go to the front page from the level page
function Back1(){
  WholeDisplay.style.display="none";
  stats.style.display="none";
  level.style.display = "none";
  back1.style.display="none";
  back2.style.display="none";
  level.style.display = "none";
  start.style.display = "flex";
}
//This back2 function go to the level page to the game page
function Back2(){
  WholeDisplay.style.display="none";
  stats.style.display="block";
  level.style.display = "flex";
  back1.style.display="flex";
  back2.style.display="none";
  Display.style.display="none";
  board.style.display="none"
  Time.style.display = "none";
Moves.style.display = "none";
statBox.style.display="none";
inputFile1.style.display="flex";
userInput.style.display="none";
   Custom1.style.display="none";
Custom2.style.display="none";
// Custom3.style.display="none";
  move=0;
  pmove.innerText=0;
board.innerHTML="";
sec=0;
min=0;
clearInterval(num);
  
}

let Height;
let Width;

let num;

//when easy is clicked level1 of the game is started
function Level1() {
  stats.style.display="none";
  back1.style.display="none";
  back2.style.display="flex";
  Display.style.display="flex";
  Display.style.backgroundImage="url('smile.png')";
  Display.style.backgroundSize="400px 400px";
  Display.style.backgroundRepeat="no-repeat";
  WholeDisplay.style.display="flex";
  userInput.style.display="flex";
  Custom1.style.display="none";
  Custom2.style.display="none";
  Custom3.style.display="none";
  userInput2.style.display="none";
  userInput3.style.display="none";

//whenever I enter the easy mode it increase the number of games played in easy by 1;
easy++;
let Easy=localStorage.getItem("Easy");
if(Easy!==null){
  
    localStorage.setItem("Easy",Number(Easy)+1);
  
}
else{
  localStorage.setItem("Easy",easy);
}


    min=0;
    sec=0;
     num=setInterval(function() {
    Time.innerText=min+":"+sec++;
      temporaryMin=min;
      temporarySec=sec;
      
    
      if(sec==60){
        sec=0;
        min++;
      }
    },1000);
  

  row = 3;
  column = 3;
  crossWin = 1;
  array = [["2", "5", "3", "6", "1", "8", "7", "4", "50"],["8","3","6","7","5","1","2","4","50"],["6","7","8","4","2","1","5","3","50"],["8","6","5","1","2","4","7","3","50"], ["1","4","8","5","3","6","7","2","50"],["5","4","2","3","7","6","1","8","50"],["4","7","8","6","2","3","5","1","50"],["6","2","7","5","1","8","4","3","50"], ["8","7","6","4","2","5","1","3","50"],["1","4","6","2","3","8","7","5","50"]];  //
  arr = array[Math.floor(Math.random() * array.length)];
  console.log(arr);
  quality = ".png";
  board.style.height="600px";
  board.style.width="600px";
  Height="196px";
  Width="196px";
  creator();
 

}
//when medium is clicked level2 of the game is started
function Level2() {
  stats.style.display="none";
  back1.style.display="none";
  back2.style.display="flex";
  Display.style.display="flex";
  Display.style.backgroundImage="url('panda.jpg')";
  Display.style.backgroundSize="400px 400px";
  Display.style.backgroundRepeat="no-repeat";
  WholeDisplay.style.display="flex";
  userInput.style.display="none";
  userInput2.style.display="flex";
  userInput3.style.display="none";
  Custom1.style.display="none";
  Custom2.style.display="none";
  Custom3.style.display="none";
  //whenever I enter the medium mode it increase the number of games played in medium by 1;
medium++;
let Medium=localStorage.getItem("Medium");
if(Medium!==null){
  
    localStorage.setItem("Medium",Number(Medium)+1);
  
}
else{
  localStorage.setItem("Medium",medium);
}

  sec=0;
  min=0;
   num=setInterval(function() {
  Time.innerText=min+":"+sec++;
  temporaryMin=min;
  temporarySec=sec;
    if(sec==60){
      sec=0;
      min++;
    }
  },1000);
  
  
  row = 4;
  column = 4;
  crossWin = 2;
  array = [["2","15","4","11","7","1","8","6","10","5","3","13","9","14","12","50"],["11","8","3","1","10","13","5","6","4","15","7","2","9","14","12","50"],["11","9","12","7","4","1","13","6","15","2","10","3","14","5","8","50"],["1","15","13","11","9","14","7","6","10","2","3","8","4","12","5","50"],["7","5","2","11","12","13","14","15","4","3","1","10","6","8","9","50"],["13","9","15","6","3","2","1","5","11","12","14","4","7","10","8","50"],["14","6","15","12","1","8","10","11","2","4","9","13","5","7","3","50"],["5","9","7","11","3","12","15","13","6","10","1","14","4","2","8","50"],["7","12","15","10","3","14","1","2","4","11","8","9","6","5","13","50"],["3","9","5","10","8","11","2","4","15","6","7","14","12","1","13","50"]];
  //
  arr = array[Math.floor(Math.random() * array.length)];
  console.log(arr);
  quality = ".jpg";
  board.style.height="800px";
  board.style.width="800px";
  
  Height="196px";
  Width="196px";
  creator();
}
//when hard is clicked level3 of the game is started
function Level3() {
  stats.style.display="none";
  back1.style.display="none";
  back2.style.display="flex";
Display.style.display="flex";
Display.style.backgroundImage="url('unnamed.jpg')";
Display.style.backgroundSize="400px 400px";
Display.style.backgroundRepeat="no-repeat";
WholeDisplay.style.display="flex";
  userInput.style.display="none";
  userInput2.style.display="none";
  userInput3.style.display="flex";
  Custom1.style.display="none";
  Custom2.style.display="none";
  Custom3.style.display="none";
//whenever I enter the hard mode it increase the number of games played in hard by 1;
hard++;
let Hard=localStorage.getItem("Hard");
if(Hard!==null){
  
    localStorage.setItem("Hard",Number(Hard)+1);
  
}
else{
  localStorage.setItem("Hard",hard);
}


  sec=0;
    min=0;
     num=setInterval(function() {
    Time.innerText=min+":"+sec++;
    temporaryMin=min;
    temporarySec=sec;
      if(sec==60){
        sec=0;
        min++;
      }
    },1000);
  row = 5;
  column = 5;
  crossWin = 3;
  array = [["z/03","z/04","z/23","z/14","z/09","z/20","z/18","z/11","z/02","z/22","z/07","z/01","z/21","z/05","z/19","z/15","z/10","z/17","z/06","z/08","z/16","z/24","z/13","z/12","z/50"],["z/06","z/12","z/03","z/01","z/04","z/18","z/09","z/24","z/22","z/05","z/11","z/10","z/02","z/17","z/14","z/23","z/07","z/13","z/16","z/21","z/20","z/19","z/15","z/08","z/50"],["z/06","z/12","z/03","z/01","z/04","z/18","z/09","z/24","z/22","z/05","z/11","z/10","z/02","z/17","z/14","z/23","z/07","z/13","z/16","z/21","z/20","z/19","z/15","z/08","z/50"],["z/01","z/05","z/20","z/13","z/15","z/16","z/02","z/24","z/03","z/14","z/12","z/23","z/06","z/17","z/08","z/22","z/19","z/11","z/04","z/10","z/18","z/21","z/07","z/09","z/50"]];
  //["z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/","z/",]
  arr = array[Math.floor(Math.random() * array.length)];
  console.log(arr);
  quality = ".jpg";
  board.style.height="800px";
  board.style.width="800px";
  Height="156px";
  Width="156px";
  creator();
}





















let move=0;
document.getElementById("board").style.display = "none";
Time.style.display = "none";
Moves.style.display = "none";

//Creator is used to create the board and append the slider box into it.
function creator() {
  level.style.display = "none";
  start.style.display = "none";
  document.getElementById("board").style.display = "flex";
  document.getElementById("Time").style.display = "flex";
  document.getElementById("moves").style.display = "flex";
  cnt = 0;
  for (i = 0; i < row; i++) {
    for (j = 0; j < column; j++) {
      let box = document.createElement('img');
      box.setAttribute("id", i.toString() + "-" + j.toString());
      box.src = arr.shift() + quality;
      //console.log( arr[cnt]+".jpg");
      box.setAttribute("class", "box");
      document.getElementById("board").append(box);
      document.getElementById(i.toString() + "-" + j.toString()).style.width=Width;
      document.getElementById(i.toString() + "-" + j.toString()).style.height=Height;
      cnt += 1;
      box.addEventListener("dragstart", dragStart);
      box.addEventListener("dragend", dragEnd);
      box.addEventListener("dragenter", dragEnter);
      box.addEventListener("dragover", dragOver);
      box.addEventListener("drop", Drop);
    }
  }
}
var thisBox;
var thatBox;
//When dragstart the image of the draggable box is stored in thisbox
function dragStart() {
  thisBox = this;
  //console.log(thisBox);
}
//when drop the image of the dropped box is stored in thatbox
function Drop() {
  thatBox = this;

}
// when dragEnd the image of the draggable box and image og the dropped box get swapped
function dragEnd() {
  if (!thatBox.src.includes("50" + quality)) {
    return;
  }
 
 
  let thiscode = thisBox.id.split("-");
  let r = parseInt(thiscode[0]);
  let c = parseInt(thiscode[1]);


  let thatcode = thatBox.id.split("-");
  let r1 = parseInt(thatcode[0])
  let c1 = parseInt(thatcode[1])
  console.log(r + "" + c);
  console.log(r1 + "" + c1);
 

  if ((c == c1 && r1 == r + 1) || (c == c1 && r1 + 1 == r) || (c + 1 == c1 && r1 == r) || (c == c1 + 1 && r1 == r)) {
    
    let curtBox = thisBox.src;
    let otherBox = thatBox.src;
    move++
    
pmove.innerText=move;
    result = curtBox.slice(0, curtBox.lastIndexOf("/") + 1);
    console.log(result);
    thisBox.src = otherBox;
    console.log(curtBox);
    thatBox.src = curtBox;


    if (crossWin == 1) {
      if (winCondition1()) {
        
       
        Timer();
        calMoves();
         Finished();
         clearInterval(num);


      }
  
          
        


    }
    else if (crossWin == 2) {
      if (winCondition2()) {
       
        Timer();
        calMoves();
         Finished();
         clearInterval(num);

        
        
      }
    }
    else if (crossWin == 3) {
      if (winCondition3()) {
       
        Timer();
        calMoves();
         Finished();
         clearInterval(num);
      }

    }
    
  }
}

//prevent the image till it enter the another div.
function dragEnter(e) {
  e.preventDefault();
}
//prevent the image till it over the div.

function dragOver(e) {
  e.preventDefault();
}












var Custom1=document.getElementById("level11");
var Custom2=document.getElementById("level22");
var Custom3=document.getElementById("level33");
// Custom1.style.display="none";
// Custom2.style.display="none";
// Custom3.style.display="none";





///getting input from user
var inputFile1=document.querySelector("#custom1");

var NewImage="";
//The change function is to get info from the user as file(image) and display in display(div).
inputFile1.addEventListener("change",function(){
  const reader=new FileReader();
 
  reader.addEventListener("load",()=>{
    NewImage=reader.result;
  
   document.querySelector("#display").style.backgroundImage=`url(${NewImage})`;
  })
  reader.readAsDataURL(this.files[0]);
 
  
  clearInterval(num);
    Display.style.display="block";
   inputFile1.style.display="none";
userInput.style.display="none";
   Custom1.style.display="flex";
 board.innerHTML="";

})
var inputFile2=document.querySelector("#custom2");

//The change function is to get info from the user as file(image) and display in display(div).
inputFile2.addEventListener("change",function(){
  const reader=new FileReader();
 
  reader.addEventListener("load",()=>{
    NewImage=reader.result;
  
   document.querySelector("#display").style.backgroundImage=`url(${NewImage})`;
  })
  reader.readAsDataURL(this.files[0]);

  
  clearInterval(num);
    Display.style.display="block";
   inputFile2.style.display="none";
userInput2.style.display="none";
   Custom2.style.display="flex";
   board.innerHTML="";
  
 

})

var inputFile3=document.querySelector("#custom3");

//The change function is to get info from the user as file(image) and display in display(div).
inputFile3.addEventListener("change",function(){
  const reader=new FileReader();
 
  reader.addEventListener("load",()=>{
    NewImage=reader.result;
  
   document.querySelector("#display").style.backgroundImage=`url(${NewImage})`;
  })
  reader.readAsDataURL(this.files[0]);

  
  clearInterval(num);
    Display.style.display="block";
   inputFile3.style.display="none";
userInput3.style.display="none";
   Custom3.style.display="flex";
   board.innerHTML="";
 

})



//when 3X3 is clicked custom1 of the game is started
let h;
let whiteHeight;
let WhiteWidth;
function custom1() {
  board.innerHTML="";
  array=[
    ["-196px 0px","0px -392px","-392px 0px","-392px -196px","-196px -196px","0px 0px","0px -196px","-196px -392px","0px 0px"],
["0px 0px","0px -196px","-196px -392px","-392px","0px -392px","-196px -196px","-196px 0px","-392px -196px","0px 0px"],
["-196px -392px","-392px 0px","0px 0px","-392px -196px","0px -196px","-196px 0px","0px -392px","-196px -196px","0px 0px"],
["-392px 0px","0px 0px","-196px -392px","-196px 0px","-196px -196px","-392px -196px","0px -392px","0px -196px","0px 0px"],
["-392px 0px","0px -392px","0px -196px","0px 0px","-196px -392px","-392px -196px","-196px 0px","-196px -196px","0px 0px"],
["-392px -196px","0px 0px","-196px 0px","0px -196px","-196px -392px","-196px -196px","-392px 0px","0px -392px","0px 0px"],
["0px -392px","0px 0px","0px -196px","-196px 0px","-196px -392px","-392px -196px","-196px -196px","-392px 0px","0px 0px"],
["-196px -392px","-392px -196px","0px 0px","-196px -196px","0px -392px","-196px 0px","-392px 0px","0px -196px","0px 0px"],
["-392px 0px","-196px 0px","-392px -196px","-196px -392px","0px -392px","0px 0px","-196px -196px","0px -196px","0px 0px"],
["-196px 0px","-196px -196px","-392px 0px","0px -196px","0px 0px","-392px -196px","0px -392px","-196px -392px","0px 0px"]
];


  arr = array[Math.floor(Math.random() * array.length)];


  stats.style.display="none";
  Display.style.display="block"
  back1.style.display="none";
  back2.style.display="flex";
  inputFile1.style.display="flex";
userInput.style.display="flex";
   Custom1.style.display="none";
  //whenever I enter the 3X3 mode it increase the number of games played in easy by 1;
  easy++;
let Easy=localStorage.getItem("Easy");
if(Easy!==null){
  
    localStorage.setItem("Easy",Number(Easy)+1);
  
}
else{
  localStorage.setItem("Easy",easy);
}
   sec=0;
  min=0;
  num=setInterval(function() {
  Time.innerText=min+":"+sec++;
  temporaryMin=min;
  temporarySec=sec;
    if(sec==60){
      sec=0;
      min++;
    }
  },1000);
  row = 3;
  column = 3;
  crossWin = 1;
  board.style.width = "600px";
  board.style.height = "600px";
  whiteHeight="196px";
  WhiteWidth="196px";
   h=600;
  crossWin=4;
  submit();
  
 display.style.backgroundSize="400px 400px";

}

//when 4X4 is clicked custom2 of the game is started
function custom2() {
  board.innerHTML="";
  array=[
    ['-196px -588px','-392px -392px','0px -196px','-392px -196px','-588px -196px','-196px -392px','0px -392px','-196px -196px', '0px -588px','0px 0px','-392px -588px','-588px 0px', '-588px -392px','-392px 0px','-196px 0px','0px 0px'],
    ["0px -588px","-196px 0px","0px -392px","-196px -196px","-392px -196px","-588px -392px","-588px 0px","0px -196px","-196px -392px","-392px -392px","-196px -588px","-588px -196px","0px 0px","-392px 0px","-392px -588px","0px 0px"],
    ["0px -392px","-588px 0px","-392px -392px","-588px -196px","-392px -196px","-392px -588px","-196px 0px","0px 0px","-196px -196px","-588px -392px","-196px -588px","-196px -392px","-392px 0px","0px -588px","0px -196px","0px 0px"],
    ["-588px -196px","-392px -196px","-392px -588px","-196px -392px","-392px 0px","-196px 0px","0px -392px","-588px 0px","0px -196px","-196px -196px","-196px -588px","-588px -392px","0px -588px","0px 0px","-392px -392px","0px 0px"],
    ["-196px -196px","-588px 0px","0px -196px","-392px -392px","-196px -588px","-196px 0px","-196px -196px","-392px 0px","0px -588px","0px -196px","-392px -588px","-588px -196px","-392px -196px","0px 0px","-588px -392px","0px 0px"],
    ["-588px -196px","-588px 0px","-392px -392px","-196px -196px","-392px 0px","-196px -392px","-392px -196px","0px -588px","-196px 0px","0px -392px","0px -196px","-588px -392px","-196px -588px","-392px -588px","0px 0px","0px 0px"],
    ['-392px -588px', '-196px -588px', '-196px -196px', '0px 0px', '0px -196px', '-196px -392px', '-588px -196px', '-588px -392px', '-392px -196px', '-588px 0px', '-392px 0px', '-392px -392px', '0px -588px', '0px -392px', '-196px 0px', '0px 0px'],
    ['0px -196px', '-196px 0px', '-588px 0px', '-392px -196px', '-196px -588px', '-588px -196px', '-196px -196px', '-392px -392px', '-196px -392px', '-392px 0px', '-588px -392px', '-392px -588px', '0px -392px', '0px 0px', '0px -588px', '0px 0px'],
    ["0px -588px","-588px -196px","-392px 0px","-196px -588px","-196px -392px","-196px 0px","-588px 0px","-196px -196px","-392px -392px","-392px -588px","-392px -196px","0px -392px","0px -196px","0px 0px","-588px -392px","0px 0px"],
    ["-588px 0px","-196px 0px","-392px -392px","-392px 0px","-196px -392px","-588px -392px","-196px -196px","0px -196px","-392px -196px","-196px -588px","0px -392px","0px 0px","-392px -588px","0px -588px","-588px -196px","0px 0px"]
 
]

arr = array[Math.floor(Math.random() * array.length)];
  display.style.backgroundSize="400px 400px";
  stats.style.display="none";
  Display.style.display="block"
  back1.style.display="none";
  back2.style.display="flex";
  inputFile2.style.display="flex";
userInput2.style.display="flex";
   Custom2.style.display="none";
  //whenever I enter the 4X4 mode it increase the number of games played in medium by 1;
  medium++;
let Medium=localStorage.getItem("Medium");
if(Medium!==null){
  
    localStorage.setItem("Medium",Number(Medium)+1);
  
}
else{
  localStorage.setItem("Medium",medium);
}
  sec=0;
  min=0;
   num=setInterval(function() {
  Time.innerText=min+":"+sec++;
  temporaryMin=min;
  temporarySec=sec;
    if(sec==60){
      sec=0;
      min++;
    }
  },1000);

  row = 4;
  column = 4;
  crossWin = 5;

  board.style.width = "800px";
  board.style.height = "800px";
  whiteHeight="196px";
  WhiteWidth="196px";
   h=800;
  submit();


}


//when 5X5 is clicked custom3 of the game is started
function custom3() {
  board.innerHTML="";
  array=[
    ['0px -624px', '-624px -156px', '0px 0px', '-468px -468px', '-312px -156px', '-156px -156px', '-312px 0px', '-156px 0px', '-624px -312px', '-468px -624px', '0px -468px', '-156px -312px', '-468px -312px', '-312px -312px', '-156px -624px', '-156px -468px', '-312px -468px', '-624px 0px', '-624px -468px', '0px -156px', '-312px -624px', '-468px -156px', '0px -312px', '-468px 0px', '0px 0px'],
    ['-156px -468px', '0px 0px', '-312px -156px', '-468px 0px', '-156px 0px', '-468px -156px', '-468px -312px', '0px -312px', '-624px -312px', '-156px -312px', '-312px -624px', '-156px -624px', '-312px -312px', '-312px 0px', '-156px -156px', '-468px -624px', '-312px -468px', '-624px -468px', '-468px -468px', '0px -624px', '0px -468px', '-624px -156px', '0px -156px', '-624px 0px', '0px 0px'],
    ['-468px -312px', '0px -468px', '-468px -156px', '-156px 0px', '-312px 0px', '0px 0px', '-468px -468px', '-624px 0px', '-624px -312px', '0px -312px', '-312px -312px', '-156px -624px', '-312px -156px', '-468px 0px', '-624px -156px', '0px -156px', '-156px -156px', '-468px -624px', '-312px -624px', '-312px -468px', '0px -624px', '-156px -468px', '-624px -468px', '-156px -312px', '0px 0px'],
    ['0px -156px', '-312px -468px', '-312px -156px', '-468px 0px', '0px -624px', '-468px -624px', '-468px -312px', '-156px -624px', '-624px -156px', '-156px -156px', '0px -312px', '-468px -468px', '-468px -156px', '-156px 0px', '-312px 0px', '-624px -468px', '-624px 0px', '0px -468px', '-312px -312px', '-156px -312px', '-156px -468px', '-624px -312px', '0px 0px', '-312px -624px', '0px 0px'],
    ['-156px -624px', '-624px -312px', '-312px 0px', '-468px -468px', '-468px 0px', '-312px -156px', '-312px -468px', '-156px -156px', '-624px 0px', '0px -468px', '0px 0px', '-312px -624px', '-156px -468px', '-156px -312px', '0px -312px', '-468px -312px', '-624px -156px', '0px -624px', '-468px -624px', '-624px -468px', '0px -156px', '-468px -156px', '-156px 0px', '-312px -312px', '0px 0px'],
    ['-468px -156px', '-156px -312px', '-156px 0px', '-624px 0px', '-468px -468px', '-468px -624px', '0px 0px', '-312px -312px', '-624px -156px', '-156px -156px', '-312px -156px', '-468px 0px', '-312px 0px', '-156px -468px', '-312px -468px', '-156px -624px', '0px -624px', '-624px -468px', '-312px -624px', '-624px -312px', '0px -312px', '0px -156px', '-468px -312px', '0px -468px', '0px 0px'],
    ['-156px -156px', '0px -468px', '-312px -156px', '-468px 0px', '-624px 0px', '-624px -312px', '-468px -468px', '-468px -156px', '0px -156px', '-312px -468px', '0px 0px', '-156px 0px', '0px -312px', '-468px -312px', '-624px -468px', '0px -624px', '-156px -624px', '-312px -312px', '-624px -156px', '-156px -468px', '-468px -624px', '-312px 0px', '-156px -312px', '-312px -624px', '0px 0px'],
    ['-624px -156px', '-156px 0px', '-156px -624px', '-624px -312px', '-312px 0px', '-468px -312px', '0px -156px', '-312px -156px', '-312px -312px', '0px -468px', '0px -312px', '-156px -156px', '-468px 0px', '-624px 0px', '-312px -468px', '-312px -624px', '-156px -468px', '-468px -468px', '0px -624px', '-156px -312px', '-624px -468px', '0px 0px', '-468px -156px', '-468px -624px', '0px 0px'],
    ['-468px -624px', '0px 0px', '-312px -156px', '-312px 0px', '-468px 0px', '-156px -312px', '0px -312px', '-156px -468px', '-312px -624px', '0px -468px', '-312px -468px', '0px -624px', '-624px -468px', '-468px -312px', '-468px -156px', '-624px 0px', '-156px -624px', '-624px -312px', '-156px 0px', '-624px -156px', '-468px -468px', '-156px -156px', '0px -156px', '-312px -312px', '0px 0px'],
    ['-156px -312px', '0px -468px', '-156px -156px', '-624px 0px', '-468px -624px', '-312px -312px', '0px -156px', '-312px -624px', '-156px 0px', '-468px -156px', '-624px -468px', '-312px -468px', '0px -312px', '-312px 0px', '-156px -468px', '0px -624px', '-468px -312px', '-624px -156px', '-312px -156px', '-468px 0px', '-156px -624px', '-468px -468px', '0px 0px', '-624px -312px', '0px 0px']
];


arr = array[Math.floor(Math.random() * array.length)];
  display.style.backgroundSize="400px 400px";
  stats.style.display="none";
  Display.style.display="block"
  back1.style.display="none";
  back2.style.display="flex";
  inputFile3.style.display="flex";
userInput3.style.display="flex";
   Custom3.style.display="none";
  //whenever I enter the 5X5 mode it increase the number of games played in hard by 1;
  hard++;
let Hard=localStorage.getItem("Hard");
if(Hard!==null){
  
    localStorage.setItem("Hard",Number(Hard)+1);
  
}
else{
  localStorage.setItem("Hard",hard);
}

  sec=0;
    min=0;
    num=setInterval(function() {
    Time.innerText=min+":"+sec++;
    temporaryMin=min;
    temporarySec=sec;
      if(sec==60){
        sec=0;
        min++;
      }
    },1000);
    row = 5;
    column = 5;
    crossWin = 6;
    whiteHeight="156px";
    WhiteWidth="156px";
    board.style.width = "800px";
    board.style.height = "800px";
     h=800;
  
    submit();
  }

let temp;
//submit is used to create the board and append the slider box into it.
function submit(){
  level.style.display = "none";
  start.style.display = "none";
  document.getElementById("board").style.display = "flex";
  document.getElementById("Time").style.display = "flex";
  document.getElementById("moves").style.display = "flex";
 
    var n=3;
    var board=document.getElementById("board");
let count=0;
    board.style.height=h;
    board.style.width=h;
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            let box=document.createElement("div");
            box.setAttribute("id",i+"-"+j);
            box.setAttribute("class","Box1");
            box.style.backgroundImage=""+document.getElementById("display").style.backgroundImage;
            box.style.backgroundSize=h+"px "+h+"px";
            box.style.backgroundPosition=arr[count] ;
            count++;
            box.style.height=whiteHeight;
            box.style.width=WhiteWidth;
            box.setAttribute("draggable","true");

             box.addEventListener("dragstart", Customdragstart);
      box.addEventListener("dragend",  CustomdragEnd);
      box.addEventListener("dragenter",  CustomdragEnter);
      box.addEventListener("dragover",  CustomdragOver);
      box.addEventListener("drop",  CustomDrop);
            board.appendChild(box);
            temp=i+"-"+j;
        }
        
    }
    child=board.lastChild;
    board.removeChild(child)
    let white=document.createElement("div");
    white.setAttribute("id",""+temp);
    white.setAttribute("class","Box1");
    white.style.backgroundImage="url('50.jpg')";
    white.style.backgroundSize=h+"px "+h+"px";
    white.style.backgroundPosition="0px 0px";
    white.style.height=whiteHeight;
    white.style.width=WhiteWidth;
    white.setAttribute("draggable","true");

    white.addEventListener("dragstart", Customdragstart);
white.addEventListener("dragend",  CustomdragEnd);
white.addEventListener("dragenter",  CustomdragEnter);
white.addEventListener("dragover",  CustomdragOver);
white.addEventListener("drop",  CustomDrop);
    board.appendChild(white);
    
}
let CustomthisBox;
let CustomthatBox;
//When dragstart the backgroundposition and Backgroundurl  of the draggable box is stored in thisbox
function Customdragstart() {
    CustomthisBox = this;

}
//When dragstart the backgroundposition and Backgroundurl  of the drop box is stored in thisbox
function  CustomDrop() {
    CustomthatBox = this;
    
}
// when dragEnd the  backgroundposition and Backgroundurl of the draggable box and  backgroundposition and Backgroundurl of the dropped box get swapped
function  CustomdragEnd() {
    if (!CustomthatBox.style.backgroundImage.includes("50.jpg")) {
        return;
      }

  let thiscode = CustomthisBox.id.split("-");
  let r = parseInt(thiscode[0]);
  let c = parseInt(thiscode[1]);
  // console.log(CustomthisBox);console.log(CustomthisBox);

  let thatcode = CustomthatBox.id.split("-");
  let r1 = parseInt(thatcode[0])
  let c1 = parseInt(thatcode[1])
  console.log(r + "" + c);
  console.log(r1 + "" + c1);
  if ((c == c1 && r1 == r + 1) || (c == c1 && r1 + 1 == r) || (c + 1 == c1 && r1 == r) || (c == c1 + 1 && r1 == r)) {
    move++
pmove.innerText=move;
    let curtBoxsc = CustomthisBox.style.backgroundImage;
 let otherBoxsc= CustomthatBox.style.backgroundImage;
 CustomthisBox.style.backgroundImage = otherBoxsc;
 CustomthatBox.style.backgroundImage = curtBoxsc;
 let curtBox = CustomthisBox.style.backgroundPosition;
 let otherBox = CustomthatBox.style.backgroundPosition;
 CustomthisBox.style.backgroundPosition=otherBox;
 CustomthatBox.style.backgroundPosition=curtBox;

 if(crossWin == 4){
  if (CustomWinCondition1()) {
   
    Timer();
    calMoves();
     Finished();
     clearInterval(num);
  }
}
else if(crossWin == 5){
  if (CustomWinCondition2()) {
   
    Timer();
    calMoves();
     Finished();
     clearInterval(num);
  }
}
else if(crossWin == 6){
  if (CustomWinCondition3()) {
   
    Timer();
    calMoves();
    
     Finished();
     clearInterval(num);
}
 
}
}
}
//prevent the image till it enter the another div.
function  CustomdragEnter(e) {
    e.preventDefault();
}
//prevent the image till it over the div.
function  CustomdragOver(e) {
    e.preventDefault();
}



//statistics

//This function is used to show the best of our game and stats.
function func() {
  statBox.style.display="block";
  stats.style.display="none";
  level.style.display="none"
  back1.style.display="none";
  back2.style.display="flex";
     document.getElementById("timer").innerText=localStorage.getItem("Easy");
    document.getElementById("medium").innerText=localStorage.getItem("Medium");
     document.getElementById("hard").innerText=localStorage.getItem("Hard");
    document.getElementById("bestTime").innerText=localStorage.getItem("bestmin")+":"+localStorage.getItem("bestsec");
   document.getElementById("bestMove").innerText=localStorage.getItem("Move");
};

//After the game is completed this function create popup tag.
let FinalBox;
function Finished() {
  WholeContainer.style.display="none";
  Top.style.display="none";

  FinalBox=document.createElement("div");
FinalBox.setAttribute("id","Win");
document.body.appendChild(FinalBox);

let TimeAndMove=document.createElement("div");
TimeAndMove.setAttribute("id","TimeMove");
FinalBox.appendChild(TimeAndMove);

let EndTime=document.createElement("div");
EndTime.setAttribute("id","endTime");
TimeAndMove.appendChild(EndTime);
EndTime.innerText="Time";

let ShowTime=document.createElement("div");
ShowTime.setAttribute("id","showTime");
ShowTime.setAttribute("class","innerTime");
EndTime.appendChild(ShowTime);
ShowTime.innerText=temporaryMin+":"+temporarySec;


let EndMove=document.createElement("div");
EndMove.setAttribute("id","endMove");
TimeAndMove.appendChild(EndMove);
EndMove.innerText="Move";

let ShowMove=document.createElement("div");
ShowMove.setAttribute("class","innerTime");
ShowMove.setAttribute("id","showMove");
EndMove.appendChild(ShowMove);
ShowMove.innerText=move;

let BestTime=document.createElement("div");
BestTime.setAttribute("id","BestTime");
FinalBox.appendChild(BestTime);
BestTime.innerHTML='<i class="fa-solid fa-trophy"></i>BestTime';

let ShowRecord=document.createElement("div");
ShowRecord.setAttribute("id","showRecord");
BestTime.appendChild(ShowRecord);
ShowRecord.innerText=localStorage.getItem("bestmin")+":"+localStorage.getItem("bestsec");

let Ok=document.createElement("div");
Ok.setAttribute("id","Ok");
Ok.setAttribute("onclick","ok()")
FinalBox.appendChild(Ok);
Ok.innerText="Ok"


}
//when the ok of the popup tab is clicked every other value start from the beginning
function ok() {
  FinalBox.style.display="none";
  document.getElementById("whole-container").style.display="flex";
        document.getElementById("top").style.display="flex";
       
        clearInterval(num);
        if(crossWin==1){
          board.innerHTML="";
        Level1();
        move=0;
        pmove.innerText=0;
        }
        else if(crossWin==2){
          board.innerHTML="";
          Level2();
          move=0;
          pmove.innerText=0;
        }
        else if(crossWin==3){
          board.innerHTML="";
          Level3();
          move=0;
          pmove.innerText=0;
        }
        else if(crossWin==4){
          board.innerHTML="";
          custom1();
          move=0;
          pmove.innerText=0;
        }
        else if(crossWin==5){
          board.innerHTML="";
          custom2();
          move=0;
          pmove.innerText=0;
        }
        else if(crossWin==6){
          board.innerHTML="";
          custom3();
          move=0;
          pmove.innerText=0;
        }
}

 

//Timer function is used to set the Best time of the game by the user.
function Timer() {
  let bestMin=localStorage.getItem("bestmin");
  let bestSec=localStorage.getItem("bestsec");
  
if(bestMin!==null){
  if(temporaryMin<=bestMin){
    localStorage.setItem("bestmin",temporaryMin);
    }
}
else{
  localStorage.setItem("bestmin",temporaryMin);
}
if(bestSec!==null){
  
    if(temporarySec<bestSec){
      localStorage.setItem("bestsec",temporarySec);
  }
}
else{
  localStorage.setItem("bestsec",temporarySec);
}
}

//calMoves is used to show the Best Move by the user
function calMoves() {
  

let Move=localStorage.getItem("Move");
if(Move!==null){
  if(move<Move){
    localStorage.setItem("Move",move);
  }
}
else{
  localStorage.setItem("Move",move);
}
}
