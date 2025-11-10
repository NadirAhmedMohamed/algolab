//Start All Algorithms 

// ARRAY ♤♤♤♤

// (1) linear search Function
function linearSearch(arr, target) {
for (let i = 0; i < arr.length; i++) {
if (arr[i] === target) {
//key found 
return arr[i]; }
}
//key not found
return -1;
}
// (1) linear search Function


// (2) binary search Function
function binarySearch(arr, target) {
let low = 0;
let high = arr.length - 1;

while (low <= high) {
let mid = Math.floor(low + (high - low) / 2);

if (arr[mid] === target) {
return target; 
}

if (arr[mid] < target) {
low = mid + 1;
} else {
high = mid - 1;
}
}

return -1; // في حال لم يتم العثور عليه
}
// (2) binary search Function


// (3) selection sort Function
function selectionSort(arr,size){

let minIndex;

for(let i = 0; i<arr.length - 1;i++){

minIndex = i;

for(let j = i+1; j<arr.length ;j++){
if(arr[j] < arr[minIndex]){
minIndex = j; 
}
}

//swap 
[arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]; 
} 
return arr; 
}
// (3) selection sort Function


// (4) buble sort Function   
function bubbleSort(arr) {
let n = arr.length;
let temp;

for (let i = 0; i < n - 1; i++) {
for (let j = 0; j < n - i - 1; j++) {
if (arr[j] > arr[j + 1]) {
// Swap
temp = arr[j];
arr[j] = arr[j + 1];
arr[j + 1] = temp;
}
}
}

return arr;
}
// (4) buble sort Function

// (5) insertion sort Function
    function insertionSort(arr) {
for (let i = 1; i < arr.length; i++) {
let key = arr[i];
let j = i - 1;

while (j >= 0 && arr[j] > key) {
arr[j + 1] = arr[j];
j--;
}

arr[j + 1] = key;
}
return arr;
}

// (5) insertion sort Function

// (6) quick sort Function
function partition(arr, low, high) {
let pivot = arr[low];
let i = low;
let j = high;

while (i < j) {
// Find element greater than pivot from left
do {
i++;
} while (i < arr.length && arr[i] <= pivot);

// Find element smaller than pivot from right
do {
j--;
} while (arr[j] > pivot);

if (i < j) {
// Swap arr[i] and arr[j]
[arr[i], arr[j]] = [arr[j], arr[i]];
}
}

// Swap pivot with arr[j]
[arr[low], arr[j]] = [arr[j], arr[low]];
return j;
}

function quickSort(arr, low, high) {
if (low < high) {
let piv = partition(arr, low, high);
quickSort(arr, low, piv);
quickSort(arr, piv + 1, high);
}
return arr;
}
// (6) quick sort Function

// ARRAY ♤♤♤♤


// LINKEDLIST ♤♤♤♤
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

makeLinkedEmpty(){
    this.head = null;
}

linkedIsEmpty(){
   return this.head === null; 
}

  addFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }

  addAt(position,value) {
  if (position === 0) {
    this.addFirst(value);
    return;
  }

  const newNode = new Node(value);
  let current = this.head;
  let prev = null;
  let index = 0;

  while (current !== null && index < position) {
    prev = current;
    current = current.next;
    index++;
  }

  if (index !== position) {
    return -1; 
    // position not exist
  }

  prev.next = newNode;
  newNode.next = current;
  
}

  deleteFirst(){
  
      if(this.linkedIsEmpty()){
         return alert("linked list empty");
      }
      
      this.head = this.head.next;
  }
  
  deleteLast() {
    if(this.linkedIsEmpty()){
         return alert("linked list empty");
      }
      
    if (this.head.next == null) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  deleteByValue(value) {
  
  if(this.linkedIsEmpty()){
         return alert("linked list empty");
      }
      
  // إذا كان العنصر الأول هو المطلوب حذفه
  if (this.head.value === value) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;
  
  // ابحث عن العنصر الذي بعده هو الذي يحتوي على القيمة
  while (current.next !== null && current.next.value !== value) {
    current = current.next;
  }

  // إذا وجد العنصر، احذفه
  if (current.next !== null) {
    current.next = current.next.next;
  }
}

  printList() {
  let current = this.head;
  const resultContainer = document.querySelector(".linkedList-menu .linked-result");
  resultContainer.innerHTML = ""; // Clear previous content

  while (current !== null) {
    const nodeDiv = document.createElement("div");
    nodeDiv.className = "node";
    nodeDiv.textContent = current.value;
    resultContainer.appendChild(nodeDiv);
    
    if(current.next != null){
       const arrowSpan = document.createElement("span");
     arrowSpan.className = "arrow";
     
     arrowSpan.textContent = ' -> ';
     resultContainer.appendChild(arrowSpan);   
       
    }
    
    current = current.next;
  }
}

}

const list = new LinkedList();

function linkedgetValue() {
  const val = document.getElementById("linked-valueInput").value;
  return val;
}

function linkedgetPosition() {
  const pos = document.getElementById("linked-positionInput").value;
  return pos;
}


let AddFirstButton = document.querySelector(".linkedList-menu .operations .add-first");

let AddLastButton = document.querySelector(".linkedList-menu .operations .add-last");

let AddAtButton = document.querySelector(".linkedList-menu .operations .add-at-pos");

let DeleteFirstButton = document.querySelector(".linkedList-menu .operations .delete-first");

let DeleteLastButton = document.querySelector(".linkedList-menu .operations .delete-last");

let DeleteByValueButton = document.querySelector(".linkedList-menu .operations .delete-by-value");

let LinkedReturnButton = document.querySelector(".linkedList-menu .operations .linked-return");


const linkedvalInput = document.getElementById("linked-valueInput");
        
       const linkedposInput = document.getElementById("linked-positionInput");


AddFirstButton.addEventListener("click", function() {
 
 if(linkedvalInput.value != "" && linkedvalInput.value != "" ) {
              list.addFirst(linkedgetValue());
     list.printList();
      
      linkedvalInput.value = "";
      linkedposInput.value = "";
 }
        
})

LinkedReturnButton.addEventListener("click", function() {
    document.querySelector(".algorithms").style.display = "block";
    
    document.querySelector(".linkedList-menu").style.display = "none";         
    
  document.querySelector(".linkedList-menu .linked-result").innerHTML = "";           
   
  list.makeLinkedEmpty();    
     
})

AddLastButton.addEventListener("click", function() {

   if(linkedvalInput.value != "" && linkedvalInput.value != "" ) {
             list.addLast(linkedgetValue());
     list.printList();
     
     
      linkedvalInput.value = "";
      linkedposInput.value = "";
   }     
})

AddAtButton.addEventListener("click", function() {

if(linkedvalInput.value != "" && linkedvalInput.value != "" ) {

const linkedvalue = linkedgetValue();
const linkedpos = parseInt(linkedgetPosition());

if(!isNaN(linkedpos)){
list.addAt(linkedpos,linkedvalue);
list.printList();

      linkedvalInput.value = "";
      linkedposInput.value = "";
      }
  }  
      
})

DeleteFirstButton.addEventListener("click", function() {
             list.deleteFirst();
     list.printList();
     
     linkedvalInput.value = "";
      linkedposInput.value = "";
      
})

DeleteLastButton.addEventListener("click", function() {
             list.deleteLast();
     list.printList();
     
     
      linkedvalInput.value = "";
      linkedposInput.value = "";
        
})

DeleteByValueButton.addEventListener("click", function() {
             list.deleteByValue(linkedgetValue());
     list.printList(); 
     
       linkedvalInput.value = "";
      linkedposInput.value = "";
        
})
// LINKEDLIST ♤♤♤♤


// STACK ♤♤♤♤
class Stack {
  constructor(size = 5) {
    this.size = size;
    this.items = [];
  }

   // make stack empty 
   makeStackEmpty() {
       this.items.length = 0;
   }
   
  // Push operation
  push(element) {
 if(this.isfull()) {
     return alert("stack is full");
 }   this.items.push(element);
  }

  // Pop operation
  pop() {
    if (this.isEmpty()){ return alert("stack is empty");}
    return this.items.pop();
  }

  // Peek operation
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }

  // Check if empty
  isEmpty() {
    return this.items.length === 0;
  }
  
  // Check if full
  isfull() {
    return this.items.length === this.size;
  }

  // Display stack in HTML
  printStack() {
    const container = document.querySelector(".stack-menu .stack-result");
    container.innerHTML = ""; // Clear previous content
    this.items.slice().reverse().forEach(item => {
      const node = document.createElement("div");
      node.className = "stack-item";
      node.textContent = item;
      container.appendChild(node);
    });
  }
}

const stack = new Stack();


let PushButton = document.querySelector(".stack-menu .operations .push");

let PopButton = document.querySelector(".stack-menu .operations .pop");

let PeekButton = document.querySelector(".stack-menu .operations .peek");

let StackReturnButton = document.querySelector(".stack-menu .operations .stack-return");


function getValue() {
  const val = document.getElementById("stack-valueInput").value;
  return val;
}

PushButton.addEventListener("click", function() {
  const val = document.getElementById("stack-valueInput").value;
  
  if (val) {
    stack.push(val);
    stack.peek();
    document.querySelector(".stack-menu .peek-result .peek-value").innerHTML = stack.peek();
    
    stack.printStack();
    document.getElementById("stack-valueInput").value = "";
  }
  
})

StackReturnButton.addEventListener("click", function() {
    document.querySelector(".algorithms").style.display = "block";
    
    document.querySelector(".stack-menu").style.display = "none";         
 
  document.querySelector(".stack-menu .stack-result").innerHTML = "";          
  
stack.makeStackEmpty(); 
 document.querySelector(".stack-menu .peek-result").style.display = "none";
 document.querySelector(".stack-menu .peek-result .peek-value").innerHTML = "";  
     
})

PopButton.addEventListener("click", function() {

       stack.pop(); 
       stack.peek();
       document.querySelector(".stack-menu .peek-result .peek-value").innerHTML = stack.peek();
         
    stack.printStack();
    document.getElementById("stack-valueInput").value = "";
        
})

PeekButton.addEventListener("click", function() {

        const top = stack.peek();

document.querySelector(".stack-menu .peek-result").style.display = "block";
 document.querySelector(".stack-menu .peek-result .peek-value").innerHTML = top;

   document.getElementById("stack-valueInput").value = "";
        
})
// STACK ♤♤♤♤

// QUEUE ♤♤♤♤
class Queue {
constructor(size = 5) {
this.size = size;
this.queueitems = [];
}

// إضافة عنصر للطابور
enqueue(element) {

if (this.queueisFull()){ return alert("Queue is full");
}

this.queueitems.push(element);

}

// إزالة أول عنصر من الطابور
dequeue() {

if (this.queueisEmpty()){ return alert("Queue is empty");
return
}

this.front--;
this.queueitems.shift();
}

// عرض أول عنصر دون إزالته
queuepeek() {

if (this.queueisEmpty()) return "Queue is empty";

return this.queueitems[0];
}

queueisFull() {
return this.queueitems.length === this.size;
}
// التحقق من أن الطابور فارغ
queueisEmpty() {
return this.queueitems.length === 0;
}

makeQueueEmpty(){
    this.queueitems.length = 0;
}

// Display Queue in HTML
  printQueue() {
    const queueContainer = document.querySelector(".queue-menu .queue-result");
    queueContainer.innerHTML = ""; // Clear previous content
    this.queueitems.forEach(item => {
    
    const queueNodeDiv = document.createElement("div");
    queueNodeDiv.className = "queue-node";
    queueNodeDiv.textContent = item;
    queueContainer.appendChild(queueNodeDiv);
    
    if(this.queueitems.indexOf(item) != this.queueitems.length -1){
       const arrowSpan = document.createElement("span");
     arrowSpan.className = "queue-arrow";
     
     arrowSpan.textContent = ' <- ';
     queueContainer.appendChild(arrowSpan);   
   }    
       
    });
  }
}


const queue = new Queue(); 


function queuegetValue() {
  const queueval = document.getElementById("queue-valueInput").value;
  return queueval;
}


let EnqueueButton = document.querySelector(".queue-menu .operations .enqueue");

let DequeueButton = document.querySelector(".queue-menu .operations .dequeue");

let QueueReturnButton = document.querySelector(".queue-menu .operations .queue-return");

let queuePeekButton = document.querySelector(".queue-menu .operations .queue-peek");


QueueReturnButton.addEventListener("click", function() {
    document.querySelector(".algorithms").style.display = "block";
    document.querySelector(".queue-menu").style.display = "none";         
   
 document.querySelector(".queue-menu .queue-result").innerHTML = "";  
   
queue.makeQueueEmpty();     
           document.querySelector(".queue-menu .queue-peek-result").style.display = "none";
 document.querySelector(".queue-menu .queue-peek-result .queue-peek-value").innerHTML = "";  
      
})


EnqueueButton.addEventListener("click", function() {

 if(document.getElementById("queue-valueInput").value != "") {
   queue.enqueue(queuegetValue());
     
        const queueTop = queue.queuepeek();
 document.querySelector(".queue-menu .queue-peek-result .queue-peek-value").innerHTML = queueTop;

queue.printQueue();
   document.getElementById("queue-valueInput").value = "";
   
  }
        
})

DequeueButton.addEventListener("click", function() {

     queue.dequeue();
     
        const queueTop = queue.queuepeek();
 document.querySelector(".queue-menu .queue-peek-result .queue-peek-value").innerHTML = queueTop;

queue.printQueue();
   document.getElementById("queue-valueInput").value = "";
        
})

queuePeekButton.addEventListener("click", function() {
     
        const queueTop = queue.queuepeek();

document.querySelector(".queue-menu .queue-peek-result").style.display = "block";
 document.querySelector(".queue-menu .queue-peek-result .queue-peek-value").innerHTML = queueTop;

queue.printQueue();
   document.getElementById("queue-valueInput").value = "";
        
})
// QUEUE ♤♤♤♤

// CIRCULAR QUEUE ♤♤♤♤
class CircularQueue {
constructor(size = 5) {
this.size = size;
this.queue = new Array(size);
this.front = -1;
this.rear = -1;
}

CQisFull() {
return (this.rear + 1) % this.size === this.front;
}

makeCQEmpty(){
   this.front = -1;
   this.rear = -1; 
   this.queue = new Array(this.size);
}

CQisEmpty() {
return this.front === -1;
 }

CQenqueue(value) {
if (this.CQisFull()) return alert("Circular Queue is full");

if (this.CQisEmpty()) {
this.front = 0;
}

this.rear = (this.rear + 1) % this.size;
this.queue[this.rear] = value;
this.CQdisplay();
}

CQdequeue() {
if (this.CQisEmpty()) return alert("Queue is empty");

const removed = this.queue[this.front];

if (this.front === this.rear) {
this.front = this.rear = -1;
} else {
this.front = (this.front + 1) % this.size;
}
this.CQdisplay();
return removed;
}

CQpeek() {
if (this.CQisEmpty()) return "Queue is empty";
return this.queue[this.front];
}

CQdisplay() {

let CQContainer = document.querySelector(".cq-menu .cq-result");
CQContainer.innerHTML = "";

if (this.CQisEmpty()) {
CQContainer.innerText = "Queue is empty";
return;
}

let i = this.front;

do {
const nodeDiv = document.createElement("div");

nodeDiv.className = "cq-node";
nodeDiv.textContent = this.queue[i];
CQContainer.appendChild(nodeDiv);

if (i !== this.rear) {
const arrow = document.createElement("span");
arrow.textContent = " <- ";
CQContainer.appendChild(arrow);
}

i = (i + 1) % this.size;
} while (i !== (this.rear + 1) % this.size);
}
}

const cq = new CircularQueue();

function CqgetValue() {
  const cqval = document.getElementById("cq-valueInput").value;
  return cqval;
}

let CQEnqueueButton = document.querySelector(".cq-menu .operations .cq-enqueue");

let CQDequeueButton = document.querySelector(".cq-menu .operations .cq-dequeue");

let CQReturnButton = document.querySelector(".cq-menu .operations .cq-return");

let CQPeekButton = document.querySelector(".cq-menu .operations .cq-peek");


CQEnqueueButton.addEventListener("click", function() {

 if(document.getElementById("cq-valueInput").value != "") {
   cq.CQenqueue(CqgetValue());
     
        const cqTop = cq.CQpeek();
 document.querySelector(".cq-menu .cq-peek-result .cq-peek-value").innerHTML = cqTop;

cq.CQdisplay();
   document.getElementById("cq-valueInput").value = "";
   
  }
        
})


CQReturnButton.addEventListener("click", function() {
    document.querySelector(".algorithms").style.display = "block";
    document.querySelector(".cq-menu").style.display = "none";         
   
cq.makeCQEmpty();
cq.CQdisplay();
 document.querySelector(".cq-menu .cq-result").innerHTML = "";  
              document.querySelector(".cq-menu .cq-peek-result").style.display = "none";
 document.querySelector(".cq-menu .cq-peek-result .cq-peek-value").innerHTML = "";  
      
})

CQDequeueButton.addEventListener("click", function() {

     cq.CQdequeue();
     
        const cqTop = cq.CQpeek();
 document.querySelector(".cq-menu .cq-peek-result .cq-peek-value").innerHTML = cqTop;

cq.CQdisplay();
   document.getElementById("cq-valueInput").value = "";
        
})

CQPeekButton.addEventListener("click", function() {
     
        const cqTop = cq.CQpeek();

document.querySelector(".cq-menu .cq-peek-result").style.display = "block";
 document.querySelector(".cq-menu .cq-peek-result .cq-peek-value").innerHTML = cqTop;
  document.getElementById("cq-valueInput").value = "";
        
})
// CIRCULAR QUEUE ♤♤♤♤
//End All Algorithms 


//start variables
let algorithms = document.querySelector(".algorithms");

let exit = document.querySelector(".algorithms .cont .exit");

let exitmsg = document.querySelector(".exit-message");

//$$$$$$$$$$$
let algorithmsQ = document.querySelector(".userinp");

let inputAlgo = document.querySelector(".algorithms .cont .userinp input");

let sendBtn = document.querySelector(".algorithms .cont .userinp button.send");
//$$$$$$$

let ErrorMsg = document.querySelector(".error-msg");

//$$$$$$$$
let arrListCont = document.querySelector(".arr-list-cont");

let BtnSendArrList = document.querySelector(".arr-list-cont .arruserinp .btn-and-send button.send");

let inputArrList = document.querySelector(".arr-list-cont .arruserinp .btn-and-send input");
//$$$$$$$$

let searchForm = document.querySelector(".searching-form");

let searchedComplete = document.querySelector(".searched-complete");

let resultOfSearch = document.querySelector(".searched-complete .result span");

let sortingForm = document.querySelector(".sorting-form");

let sortingComplete = document.querySelector(".sorting-complete");

let resultOfSorting = document.querySelector(".sorting-complete .result span");

let infiniteScroll = document.querySelector(".infinite-scroll");

let sidebar =
document.querySelector(".sidebar");

let burgerIcon = document.querySelector(".burger-icon");

let closeIcon=
document.querySelector(".sidebar .close-icon");

let loader=
document.querySelector(".loader");

// $$$$$$
let searchMenu = document.querySelector(".search-menu");

let BtnSendSearchlist = document.querySelector(".search-menu .arruserinp .btn-and-send button.send");

let inputSearchList = document.querySelector(".search-menu .arruserinp .btn-and-send input");
// $$$$$$$

// $$$$$$
let sortMenu = document.querySelector(".sort-menu");

let BtnSendSortlist = document.querySelector(".sort-menu .arruserinp .btn-and-send button.send");

let inputSortList = document.querySelector(".sort-menu .arruserinp .btn-and-send input");
// $$$$$$$

//$$$$$$$
let linkedListMenu = document.querySelector(".linkedList-menu");
//$$$$$$

//$$$$$$$
let StackMenu = document.querySelector(".stack-menu");
//$$$$$$

//$$$$$$$
let QueueMenu = document.querySelector(".queue-menu");
//$$$$$$

//$$$$$$$
let CQMenu = document.querySelector(".cq-menu");
//$$$$$$


let footerYear = document.querySelector("footer span.year").innerHTML = new Date().getFullYear();

//end variables


//start exit handleClick
exit.addEventListener("click",()=>{
algorithms.classList.toggle("non-show");
exitmsg.classList.toggle("show");

});
//End exit handleClick


//start main send btn handleClick
sendBtn.addEventListener("click",()=>{

if(inputAlgo.value == 1){
inputAlgo.value = "";
algorithms.style.display= "none";
arrListCont.style.display="block";
exitmsg.style.display = "none"; 
}else if(inputAlgo.value == 2){

  inputAlgo.value = "";
algorithms.style.display= "none";
linkedListMenu.style.display="block";  
exitmsg.style.display = "none"; 
}else if(inputAlgo.value == 3){
   inputAlgo.value = "";
algorithms.style.display= "none";
StackMenu.style.display="block";
 exitmsg.style.display = "none"; 
}else if(inputAlgo.value == 4){
 inputAlgo.value = "";
algorithms.style.display= "none";
QueueMenu.style.display="block"; 
  exitmsg.style.display = "none"; 
}else if(inputAlgo.value == 5){
 inputAlgo.value = "";
algorithms.style.display= "none";
CQMenu.style.display="block"; 
}else if(inputAlgo.value == 6){

window.scrollTo(0,0);

 inputAlgo.value = "";
algorithms.style.display= "none";

document.querySelector(".tree").style.display="block"; 
   
}else if(inputAlgo.value == 7){
inputAlgo.value = "";
algorithms.style.display= "none";
exitmsg.style.display = "block"; 
}else{
  ErrorMsg.style.display = "flex";
  setTimeout(()=>{
      ErrorMsg.style.display = "none";
  },1500)
}

});
//End main send btn handleClick

//Start tree return btn handleClick
let treeReturn = document.querySelector(".tree-return").addEventListener("click",()=>{

inputAlgo.value = "";

document.querySelector(".tree").style.display="none";

algorithms.style.display= "block";

})
//Start tree return btn handleClick

//start array send btn handleClick

BtnSendArrList.addEventListener("click",()=>{
if(inputArrList.value==3) {

inputArrList.value = "";

algorithms.style.display= "block";
arrListCont.style.display="none";

}else if(inputArrList.value==1){

inputArrList.value = "";

arrListCont.style.display = "none"; 

searchMenu.style.display = "block"; 

}else if(inputArrList.value==2){

inputArrList.value = "";

arrListCont.style.display = "none"; 

sortMenu.style.display = "block";

}else{
ErrorMsg.style.display = "flex";
  setTimeout(()=>{
      ErrorMsg.style.display = "none";
  },1500)    
}
});
//End array send btn handleClick

//Start search send btn handleClick
BtnSendSearchlist.addEventListener("click",()=>{

if(inputSearchList.value==1) {

 inputSearchList.value = "";
 
 searchMenu.style.display = "none"; 
 
 searchForm.style.display = "block"; 
 
const arraySize = document.querySelector(".searching-form .arraySize");

const arrayInputsContainer = document.querySelector(".searching-form .search-arrayInputs");

arraySize.addEventListener("input", function () {

arrayInputsContainer.innerHTML = ""; // تنظيف المدخلات السابقة

const size = parseInt(arraySize.value);

if (size > 0) {
for (let i = 0; i < size; i++) {

const input = document.createElement("input");

input.type = "number";

input.className = "element-input";

let current = i+1;

input.placeholder = "Element " + current;


arrayInputsContainer.appendChild(input);

}
}
});

//Start submit of linearsearch Form
searchForm.addEventListener("submit", function(e) {

e.preventDefault();

searchedComplete.style.
display = "block";

const size = parseInt(arraySize.value);

const targetValue = parseInt(document.querySelector(".targetValue").value);

const inputs = document.querySelectorAll(".searching-form .search-arrayInputs .element-input");

const values = Array.from(inputs).map(input => parseInt(input.value));

if (values.some(v=>isNaN(v)) || values.length !== size) { 
document.querySelector(".sorting-complete .result span").innerHTML = "please enter all values in correct way!";
return;
}

// تنفيذ البحث الخطي
const result = linearSearch(values, targetValue);

// عرض النتيجة
if (result !== -1) {
document.querySelector(".searched-complete .result span").innerHTML = "searched element : "+result+" exist " ;
} else{
document.querySelector(".searched-complete .result span").innerHTML = "the searched element not exist!";
}

});
//End submit of linearsearch Form
   
}else if(inputSearchList.value == 2){
   inputSearchList.value = "";
   
   searchMenu.style.display = "none"; 
 
 searchForm.style.display = "block"; 


const arraySize = document.querySelector(".searching-form .arraySize");

const arrayInputsContainer = document.querySelector(".searching-form .search-arrayInputs");

arraySize.addEventListener("input", function () {

arrayInputsContainer.innerHTML = ""; // تنظيف المدخلات السابقة

const size = parseInt(arraySize.value);

if (size > 0) {
for (let i = 0; i < size; i++) {

const input = document.createElement("input");

input.type = "number";

input.className = "element-input";

let current = i+1;

input.placeholder = "Element " + current;


arrayInputsContainer.appendChild(input);

}
}
}
);

//Start submit of binarysearch Form
searchForm.addEventListener("submit", function(e) {
e.preventDefault();

searchedComplete.style.
display = "block";

const size = parseInt(arraySize.value);

const targetValue = parseInt(document.querySelector(".targetValue").value);

const inputs = document.querySelectorAll(".searching-form .search-arrayInputs .element-input");

let inputIsEmpty = false;

inputs.forEach((input) => {
    if(input.value.trim() === ""){
      inputIsEmpty = true; 
    }
});

if(inputIsEmpty) { 
document.querySelector(".searched-complete .result span").innerHTML = "please enter all elements , don't keep element empty!";
return; 
}

const values = Array.from(inputs).map(input => parseInt(input.value));

if (values.some(v => isNaN(v))) { 
document.querySelector(".sorting-complete .result span").innerHTML = "please enter all values in correct way!";
return;
}

if(values.length !== size) {
  document.querySelector(".sorting-complete .result span").innerHTML = "the size of array not equal elememts!";
return; 
 
}
// تنفيذ البحث الثنائي
const result = binarySearch(values, targetValue);

// عرض النتيجة
if (result !== -1) {
document.querySelector(".searched-complete .result span").innerHTML = "searched element : "+result+" exist " ;
} else{
document.querySelector(".searched-complete .result span").innerHTML = "the searched element not exist!";
}

});
//End submit of binarysearch Form

}else if(inputSearchList.value == 3){
  inputSearchList.value = "";
  
  searchMenu.style.display = "none"; 
      arrListCont.style.display="block";
}else{
 ErrorMsg.style.display = "flex";
  setTimeout(()=>{
      ErrorMsg.style.display = "none";
  },1500) 
}
});
//End search send btn handleClick

//Start sort send btn handleClick
BtnSendSortlist.addEventListener("click",()=>{

if(inputSortList.value==1) {

 inputSortList.value = "";
 
 sortMenu.style.display = "none"; 
 
 sortingForm.style.display = "block"; 
 
const arraySize = document.querySelector(".sorting-form .arraySize");

const arrayInputsContainer = document.querySelector(".sorting-form .arrayInputs");

arraySize.addEventListener("input", function () {

arrayInputsContainer.innerHTML = ""; // تنظيف المدخلات السابقة

const size = parseInt(arraySize.value);

if (size > 0) {
for (let i = 0; i < size; i++) {

const input = document.createElement("input");

input.type = "number";

input.className = "element-input";

let current = i+1;

input.placeholder = "Element " + current;


arrayInputsContainer.appendChild(input);

}
}
});

 //Start submit of selectionSort Form
sortingForm.addEventListener("submit", function (e) {

e.preventDefault();

sortingComplete.style.display = "block";

const size = parseInt(arraySize.value);

const inputs = document.querySelectorAll(".element-input");

const values = Array.from(inputs).map(input => parseInt(input.value));

if (values.some(v=>isNaN(v)) || values.length !== size) { 
document.querySelector(".sorting-complete .result span").innerHTML = "please enter all values in correct way!";
return;
}

// تنفيذ الترتيب بالاختيار
const result = selectionSort(values, size);

document.querySelector(".sorting-complete .result span").innerHTML = result.join(" , ");

});
//End submit of selectionSort Form 
 
}else if(inputSortList.value==2){
   
 inputSortList.value = "";
 
 sortMenu.style.display = "none"; 
 
 sortingForm.style.display = "block"; 
  
  const arraySize = document.querySelector(".sorting-form .arraySize");

const arrayInputsContainer = document.querySelector(".sorting-form .arrayInputs");

arraySize.addEventListener("input", function () {

arrayInputsContainer.innerHTML = ""; // تنظيف المدخلات السابقة

const size = parseInt(arraySize.value);

if (size > 0) {
for (let i = 0; i < size; i++) {

const input = document.createElement("input");

input.type = "number";

input.className = "element-input";

let current = i+1;

input.placeholder = "Element " + current;


arrayInputsContainer.appendChild(input);

}
}
});

//Start submit of bubbleSort Form
sortingForm.addEventListener("submit", function (e) {

e.preventDefault();

sortingComplete.style.display = "block";

const size = parseInt(arraySize.value);

const inputs = document.querySelectorAll(".element-input");

const values = Array.from(inputs).map(input => parseInt(input.value));

if (values.some(v=>isNaN(v)) || values.length !== size) { 
document.querySelector(".sorting-complete .result span").innerHTML = "please enter all values in correct way!";
return;
}

// تنفيذ الترتيب بالفقاعة
const result = bubbleSort(values, size);

document.querySelector(".sorting-complete .result span").innerHTML = result.join(" , ");

});
//End submit of bubbleSort Form 
 
  
}else if(inputSortList.value==3){
   
 inputSortList.value = "";
 
 sortMenu.style.display = "none"; 
 
 sortingForm.style.display = "block"; 
 
const arraySize = document.querySelector(".sorting-form .arraySize");

const arrayInputsContainer = document.querySelector(".sorting-form .arrayInputs");

arraySize.addEventListener("input", function () {

arrayInputsContainer.innerHTML = ""; // تنظيف المدخلات السابقة

const size = parseInt(arraySize.value);

if (size > 0) {
for (let i = 0; i < size; i++) {

const input = document.createElement("input");

input.type = "number";

input.className = "element-input";

let current = i+1;

input.placeholder = "Element " + current;


arrayInputsContainer.appendChild(input);

}
}
});

 //Start submit of insertionSort Form
sortingForm.addEventListener("submit", function (e) {

e.preventDefault();

sortingComplete.style.display = "block";

const size = parseInt(arraySize.value);

const inputs = document.querySelectorAll(".element-input");

const values = Array.from(inputs).map(input => parseInt(input.value));

if (values.some(v=>isNaN(v)) || values.length !== size) { 
document.querySelector(".sorting-complete .result span").innerHTML = "please enter all values in correct way!";
return;
}

// تنفيذ الترتيب بالاضافة 
const result = insertionSort(values, size);


document.querySelector(".sorting-complete .result span").innerHTML = result.join(" , ");

});
//End submit of insertionSort Form 
  
}else if(inputSortList.value==4){

 inputSortList.value = "";
 
 sortMenu.style.display = "none"; 
 
 sortingForm.style.display = "block"; 

const arraySize = document.querySelector(".sorting-form .arraySize");

const arrayInputsContainer = document.querySelector(".sorting-form .arrayInputs");

arraySize.addEventListener("input", function () {

arrayInputsContainer.innerHTML = ""; // تنظيف المدخلات السابقة

const size = parseInt(arraySize.value);

if (size > 0) {
for (let i = 0; i < size; i++) {

const input = document.createElement("input");

input.type = "number";

input.className = "element-input";

let current = i+1;

input.placeholder = "Element " + current;


arrayInputsContainer.appendChild(input);

}
}
});

 //Start submit of quickSort Form
sortingForm.addEventListener("submit", function (e) {

e.preventDefault();

sortingComplete.style.display = "block";

const size = parseInt(arraySize.value);

const inputs = document.querySelectorAll(".element-input");

const values = Array.from(inputs).map(input => parseInt(input.value));

if (values.some(v=>isNaN(v)) || values.length !== size) { 
document.querySelector(".sorting-complete .result span").innerHTML = "please enter all values in correct way!";
return;
}

// تنفيذ الترتيب السريع  
const result = quickSort(values,0,size);


document.querySelector(".sorting-complete .result span").innerHTML = result.join(" , ");

});
//End submit of quickSort Form 
 
}else if(inputSortList.value==5){
   
 inputSortList.value = "";
 
 sortMenu.style.display = "none"; 
 
 arrListCont.style.display = "block"; 
  
}else{
    ErrorMsg.style.display = "flex";
  setTimeout(()=>{
      ErrorMsg.style.display = "none";
  },1500) 
}
});
//End sort send btn handleClick
 
//start burgerIcon handleClick
burgerIcon.addEventListener("click",()=>{
sidebar.classList.add("show-sidebar");

});
//end burgerIcon handleClick

//start closeIcon handleClick
closeIcon.addEventListener("click",()=>{
sidebar.classList.remove("show-sidebar");

});

//end closeIcon handleClick


//start setTimeout for loader
setTimeout(()=>{
loader.classList.add("non-show");

},900);

//end setTimeout for loader

