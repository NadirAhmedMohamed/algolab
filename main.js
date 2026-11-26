// ==========================================
// AlgoLab - Algorithms & Data Structures
// ==========================================

// ==========================================
// 1. ARRAY ALGORITHMS
// ==========================================

// Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// Binary Search
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// Selection Sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

// Bubble Sort
function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

// Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// Quick Sort
function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

  return i + 1;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);

    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }

  return arr;
}

// ==========================================
// 2. LINKED LIST
// ==========================================

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

  makeLinkedEmpty() {
    this.head = null;
  }

  linkedIsEmpty() {
    return this.head === null;
  }

  addFirst(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(value) {
    const newNode = new Node(value);

    if (this.linkedIsEmpty()) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  addAt(position, value) {
    if (!Number.isInteger(position) || position < 0) {
      return false;
    }

    if (position === 0) {
      this.addFirst(value);
      return true;
    }

    let current = this.head;
    let previous = null;
    let index = 0;

    while (current !== null && index < position) {
      previous = current;
      current = current.next;
      index++;
    }

    if (index !== position) {
      return false;
    }

    const newNode = new Node(value);

    previous.next = newNode;
    newNode.next = current;

    return true;
  }

  deleteFirst() {
    if (this.linkedIsEmpty()) {
      return false;
    }

    this.head = this.head.next;
    return true;
  }

  deleteLast() {
    if (this.linkedIsEmpty()) {
      return false;
    }

    if (this.head.next === null) {
      this.head = null;
      return true;
    }

    let current = this.head;

    while (current.next.next !== null) {
      current = current.next;
    }

    current.next = null;
    return true;
  }

  deleteByValue(value) {
    if (this.linkedIsEmpty()) {
      return false;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    let current = this.head;

    while (current.next !== null && current.next.value !== value) {
      current = current.next;
    }

    if (current.next === null) {
      return false;
    }

    current.next = current.next.next;
    return true;
  }

  printList() {
    const container = document.querySelector(".linkedList-menu .linked-result");

    container.innerHTML = "";

    let current = this.head;

    while (current !== null) {
      const nodeDiv = document.createElement("div");

      nodeDiv.className = "node";
      nodeDiv.textContent = current.value;

      container.appendChild(nodeDiv);

      if (current.next !== null) {
        const arrow = document.createElement("span");

        arrow.className = "arrow";
        arrow.textContent = " -> ";

        container.appendChild(arrow);
      }

      current = current.next;
    }

    if (this.linkedIsEmpty()) {
      container.textContent = "Linked List is empty";
    }
  }
}

const list = new LinkedList();

// ==========================================
// 3. STACK
// ==========================================

class Stack {
  constructor(size = 5) {
    this.size = size;
    this.items = [];
  }

  makeStackEmpty() {
    this.items.length = 0;
  }

  push(element) {
    if (this.isFull()) {
      return false;
    }

    this.items.push(element);
    return true;
  }

  pop() {
    if (this.isEmpty()) {
      return false;
    }

    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  isFull() {
    return this.items.length === this.size;
  }

  printStack() {
    const container = document.querySelector(".stack-menu .stack-result");

    container.innerHTML = "";

    this.items
      .slice()
      .reverse()
      .forEach((item) => {
        const node = document.createElement("div");

        node.className = "stack-item";
        node.textContent = item;

        container.appendChild(node);
      });

    if (this.isEmpty()) {
      container.textContent = "Stack is empty";
    }
  }
}

const stack = new Stack();

// ==========================================
// 4. QUEUE
// ==========================================

class Queue {
  constructor(size = 5) {
    this.size = size;
    this.queueitems = [];
  }

  enqueue(element) {
    if (this.queueisFull()) {
      return false;
    }

    this.queueitems.push(element);
    return true;
  }

  dequeue() {
    if (this.queueisEmpty()) {
      return false;
    }

    return this.queueitems.shift();
  }

  queuepeek() {
    if (this.queueisEmpty()) {
      return "Queue is empty";
    }

    return this.queueitems[0];
  }

  queueisFull() {
    return this.queueitems.length === this.size;
  }

  queueisEmpty() {
    return this.queueitems.length === 0;
  }

  makeQueueEmpty() {
    this.queueitems.length = 0;
  }

  printQueue() {
    const container = document.querySelector(".queue-menu .queue-result");

    container.innerHTML = "";

    this.queueitems.forEach((item, index) => {
      const node = document.createElement("div");

      node.className = "queue-node";
      node.textContent = item;

      container.appendChild(node);

      if (index !== this.queueitems.length - 1) {
        const arrow = document.createElement("span");

        arrow.className = "queue-arrow";
        arrow.textContent = " <- ";

        container.appendChild(arrow);
      }
    });

    if (this.queueisEmpty()) {
      container.textContent = "Queue is empty";
    }
  }
}

const queue = new Queue();

// ==========================================
// 5. CIRCULAR QUEUE
// ==========================================

class CircularQueue {
  constructor(size = 5) {
    this.size = size;
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.count = 0;
  }

  CQisFull() {
    return this.count === this.size;
  }

  CQisEmpty() {
    return this.count === 0;
  }

  makeCQEmpty() {
    this.front = -1;
    this.rear = -1;
    this.count = 0;
    this.queue = new Array(this.size);
  }

  CQenqueue(value) {
    if (this.CQisFull()) {
      return false;
    }

    if (this.CQisEmpty()) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
    this.count++;

    this.CQdisplay();

    return true;
  }

  CQdequeue() {
    if (this.CQisEmpty()) {
      return false;
    }

    const removed = this.queue[this.front];

    this.queue[this.front] = undefined;
    this.count--;

    if (this.CQisEmpty()) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    this.CQdisplay();

    return removed;
  }

  CQpeek() {
    if (this.CQisEmpty()) {
      return "Queue is empty";
    }

    return this.queue[this.front];
  }

  CQdisplay() {
    const container = document.querySelector(".cq-menu .cq-result");

    container.innerHTML = "";

    if (this.CQisEmpty()) {
      container.textContent = "Circular Queue is empty";
      return;
    }

    let index = this.front;

    for (let i = 0; i < this.count; i++) {
      const node = document.createElement("div");

      node.className = "cq-node";
      node.textContent = this.queue[index];

      container.appendChild(node);

      if (i !== this.count - 1) {
        const arrow = document.createElement("span");

        arrow.textContent = " <- ";
        container.appendChild(arrow);
      }

      index = (index + 1) % this.size;
    }
  }
}

const cq = new CircularQueue();

// ==========================================
// 6. DOM ELEMENTS
// ==========================================

const algorithms = document.querySelector(".algorithms");
const arrListCont = document.querySelector(".arr-list-cont");
const searchMenu = document.querySelector(".search-menu");
const sortMenu = document.querySelector(".sort-menu");

const searchForm = document.querySelector(".searching-form");
const sortingForm = document.querySelector(".sorting-form");

const searchedComplete = document.querySelector(".searched-complete");
const sortingComplete = document.querySelector(".sorting-complete");

const linkedListMenu = document.querySelector(".linkedList-menu");
const stackMenu = document.querySelector(".stack-menu");
const queueMenu = document.querySelector(".queue-menu");
const cqMenu = document.querySelector(".cq-menu");
const treeMenu = document.querySelector(".tree");

const exitMessage = document.querySelector(".exit-message");
const errorMessage = document.querySelector(".error-msg");

const sidebar = document.querySelector(".sidebar");
const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".sidebar .close-icon");

const loader = document.querySelector(".loader");

// ==========================================
// 7. NAVIGATION SYSTEM
// ==========================================

const screens = [
  algorithms,
  arrListCont,
  searchMenu,
  sortMenu,
  searchForm,
  sortingForm,
  searchedComplete,
  sortingComplete,
  linkedListMenu,
  stackMenu,
  queueMenu,
  cqMenu,
  treeMenu,
  exitMessage,
];

// Updated: Navigation no longer scrolls to the top.
function showScreen(screen) {
  screens.forEach((item) => {
    item.style.display = "none";
  });

  screen.style.display = "block";
}

function showError(message = "Something went wrong!") {
  errorMessage.textContent = message;
  errorMessage.style.display = "flex";

  setTimeout(() => {
    errorMessage.style.display = "none";
  }, 1800);
}

// Initialize screens
screens.forEach((screen) => {
  screen.style.display = "none";
});

algorithms.style.display = "block";

// ==========================================
// 8. MAIN MENU BUTTONS
// ==========================================

document.querySelector(".array").addEventListener("click", () => {
  showScreen(arrListCont);
});

document.querySelector(".linked").addEventListener("click", () => {
  showScreen(linkedListMenu);
});

document.querySelector(".stack").addEventListener("click", () => {
  showScreen(stackMenu);
});

document.querySelector(".queue").addEventListener("click", () => {
  showScreen(queueMenu);
});

document.querySelector(".cq").addEventListener("click", () => {
  showScreen(cqMenu);
});

document.querySelector(".tr").addEventListener("click", () => {
  showScreen(treeMenu);
});

document.querySelector(".exit").addEventListener("click", () => {
  showScreen(exitMessage);
});

// ==========================================
// 9. ARRAY MENU NAVIGATION
// ==========================================

const arrayButtons = document.querySelectorAll(".array-list button");

arrayButtons[0].addEventListener("click", () => {
  showScreen(searchMenu);
});

arrayButtons[1].addEventListener("click", () => {
  showScreen(sortMenu);
});

arrayButtons[2].addEventListener("click", () => {
  showScreen(algorithms);
});

// ==========================================
// 10. SEARCHING NAVIGATION
// ==========================================

let currentSearchAlgorithm = "linear";

const searchButtons = document.querySelectorAll(".search-list button");

searchButtons[0].addEventListener("click", () => {
  currentSearchAlgorithm = "linear";

  searchForm.reset();
  searchArrayInputs.innerHTML = "";

  searchedComplete.style.display = "none";

  showScreen(searchForm);
});

searchButtons[1].addEventListener("click", () => {
  currentSearchAlgorithm = "binary";

  searchForm.reset();
  searchArrayInputs.innerHTML = "";

  searchedComplete.style.display = "none";

  showScreen(searchForm);
});

searchButtons[2].addEventListener("click", () => {
  showScreen(arrListCont);
});

// ==========================================
// 11. SORTING NAVIGATION
// ==========================================

let currentSortAlgorithm = "selection";

const sortButtons = document.querySelectorAll(".sort-list button");

const sortAlgorithms = ["selection", "bubble", "insertion", "quick"];

sortButtons.forEach((button, index) => {
  if (index < 4) {
    button.addEventListener("click", () => {
      currentSortAlgorithm = sortAlgorithms[index];

      sortingForm.reset();
      sortArrayInputs.innerHTML = "";

      sortingComplete.style.display = "none";

      showScreen(sortingForm);
    });
  }
});

sortButtons[4].addEventListener("click", () => {
  showScreen(arrListCont);
});

// ==========================================
// 12. DYNAMIC ARRAY INPUTS
// ==========================================

function generateArrayInputs(size, container) {
  container.innerHTML = "";

  if (!Number.isInteger(size) || size < 1 || size > 100) {
    return false;
  }

  for (let i = 0; i < size; i++) {
    const input = document.createElement("input");

    input.type = "number";
    input.className = "element-input";
    input.placeholder = `Element ${i + 1}`;
    input.required = true;

    container.appendChild(input);
  }

  return true;
}

// Searching inputs
const searchArraySize = document.querySelector(".searching-form .arraySize");

const searchArrayInputs = document.querySelector(
  ".searching-form .search-arrayInputs",
);

searchArraySize.addEventListener("input", () => {
  const size = parseInt(searchArraySize.value);

  if (searchArraySize.value === "") {
    searchArrayInputs.innerHTML = "";
    return;
  }

  if (!generateArrayInputs(size, searchArrayInputs)) {
    searchArrayInputs.innerHTML = "";
  }
});

// Sorting inputs
const sortArraySize = document.querySelector(".sorting-form .arraySize");

const sortArrayInputs = document.querySelector(".sorting-form .arrayInputs");

sortArraySize.addEventListener("input", () => {
  const size = parseInt(sortArraySize.value);

  if (sortArraySize.value === "") {
    sortArrayInputs.innerHTML = "";
    return;
  }

  if (!generateArrayInputs(size, sortArrayInputs)) {
    sortArrayInputs.innerHTML = "";
  }
});

// ==========================================
// 13. SEARCHING FORM SUBMIT
// ==========================================

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const size = parseInt(searchArraySize.value);

  const targetInput = document.querySelector(".targetValue");
  const targetValue = Number(targetInput.value);

  const inputs = searchArrayInputs.querySelectorAll(".element-input");

  const values = Array.from(inputs).map((input) => Number(input.value));

  const resultElement = document.querySelector(
    ".searched-complete .result span",
  );

  if (
    !Number.isInteger(size) ||
    size < 1 ||
    size > 100 ||
    inputs.length !== size
  ) {
    showError("Please enter a valid array size!");
    return;
  }

  if (
    Array.from(inputs).some((input) => input.value.trim() === "") ||
    values.some((value) => !Number.isFinite(value))
  ) {
    showError("Please enter all array elements!");
    return;
  }

  if (targetInput.value.trim() === "" || !Number.isFinite(targetValue)) {
    showError("Please enter the target value!");
    return;
  }

  let result;

  if (currentSearchAlgorithm === "linear") {
    result = linearSearch(values, targetValue);
  } else {
    const isSorted = values.every(
      (value, index) => index === 0 || values[index - 1] <= value,
    );

    if (!isSorted) {
      showError("Binary Search requires a sorted array!");
      return;
    }

    result = binarySearch(values, targetValue);
  }

  if (result !== -1) {
    resultElement.textContent = `Element ${targetValue} found at index ${result}.`;
  } else {
    resultElement.textContent = `Element ${targetValue} was not found.`;
  }

  showScreen(searchedComplete);
});

// ==========================================
// 14. SORTING FORM SUBMIT
// ==========================================

sortingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const size = parseInt(sortArraySize.value);

  const inputs = sortArrayInputs.querySelectorAll(".element-input");

  const values = Array.from(inputs).map((input) => Number(input.value));

  const resultElement = document.querySelector(
    ".sorting-complete .result span",
  );

  if (
    !Number.isInteger(size) ||
    size < 1 ||
    size > 100 ||
    inputs.length !== size
  ) {
    showError("Please enter a valid array size!");
    return;
  }

  if (
    Array.from(inputs).some((input) => input.value.trim() === "") ||
    values.some((value) => !Number.isFinite(value))
  ) {
    showError("Please enter all array elements!");
    return;
  }

  let result;

  switch (currentSortAlgorithm) {
    case "selection":
      result = selectionSort([...values]);
      break;

    case "bubble":
      result = bubbleSort([...values]);
      break;

    case "insertion":
      result = insertionSort([...values]);
      break;

    case "quick":
      result = quickSort([...values]);
      break;

    default:
      showError("Please select a sorting algorithm!");
      return;
  }

  resultElement.textContent = result.join(" , ");

  showScreen(sortingComplete);
});

// ==========================================
// 15. SEARCH & SORT RESULT BUTTONS
// ==========================================

// Search - No button
document
  .querySelector(".searched-complete .no")
  .addEventListener("click", () => {
    searchForm.reset();
    searchArrayInputs.innerHTML = "";

    showScreen(searchMenu);
  });

// Search - Yes button
document
  .querySelector(".searched-complete .yes")
  .addEventListener("click", () => {
    searchForm.reset();
    searchArrayInputs.innerHTML = "";

    showScreen(searchMenu);
  });

// Sort - No button
document
  .querySelector(".sorting-complete .no")
  .addEventListener("click", () => {
    sortingForm.reset();
    sortArrayInputs.innerHTML = "";

    showScreen(sortMenu);
  });

// Sort - Yes button
document
  .querySelector(".sorting-complete .yes")
  .addEventListener("click", () => {
    sortingForm.reset();
    sortArrayInputs.innerHTML = "";

    showScreen(sortMenu);
  });

// ==========================================
// 16. LINKED LIST OPERATIONS
// ==========================================

const linkedValueInput = document.getElementById("linked-valueInput");

const linkedPositionInput = document.getElementById("linked-positionInput");

function getLinkedValue() {
  return linkedValueInput.value.trim();
}

function clearLinkedInputs() {
  linkedValueInput.value = "";
  linkedPositionInput.value = "";
}

function validateLinkedValue() {
  if (getLinkedValue() === "") {
    showError("Please enter a value!");
    return false;
  }

  return true;
}

document.querySelector(".add-first").addEventListener("click", () => {
  if (!validateLinkedValue()) return;

  list.addFirst(Number(getLinkedValue()));

  list.printList();
  clearLinkedInputs();
});

document.querySelector(".add-last").addEventListener("click", () => {
  if (!validateLinkedValue()) return;

  list.addLast(Number(getLinkedValue()));

  list.printList();
  clearLinkedInputs();
});

document.querySelector(".add-at-pos").addEventListener("click", () => {
  if (!validateLinkedValue()) return;

  const position = Number(linkedPositionInput.value);

  if (
    linkedPositionInput.value.trim() === "" ||
    !Number.isInteger(position) ||
    position < 0
  ) {
    showError("Please enter a valid position!");
    return;
  }

  const success = list.addAt(position, Number(getLinkedValue()));

  if (!success) {
    showError("Position does not exist!");
    return;
  }

  list.printList();
  clearLinkedInputs();
});

document.querySelector(".delete-first").addEventListener("click", () => {
  if (!list.deleteFirst()) {
    showError("Linked List is empty!");
    return;
  }

  list.printList();
  clearLinkedInputs();
});

document.querySelector(".delete-last").addEventListener("click", () => {
  if (!list.deleteLast()) {
    showError("Linked List is empty!");
    return;
  }

  list.printList();
  clearLinkedInputs();
});

document.querySelector(".delete-by-value").addEventListener("click", () => {
  if (!validateLinkedValue()) return;

  const success = list.deleteByValue(Number(getLinkedValue()));

  if (!success) {
    showError("Value was not found!");
    return;
  }

  list.printList();
  clearLinkedInputs();
});

document.querySelector(".linked-return").addEventListener("click", () => {
  list.makeLinkedEmpty();
  list.printList();

  clearLinkedInputs();

  showScreen(algorithms);
});

// ==========================================
// 17. STACK OPERATIONS
// ==========================================

const stackValueInput = document.getElementById("stack-valueInput");

const stackPeekResult = document.querySelector(".stack-menu .peek-result");

const stackPeekValue = document.querySelector(".stack-menu .peek-value");

document.querySelector(".push").addEventListener("click", () => {
  const value = stackValueInput.value.trim();

  if (value === "") {
    showError("Please enter a value!");
    return;
  }

  if (!stack.push(Number(value))) {
    showError("Stack is full!");
    return;
  }

  stack.printStack();

  stackValueInput.value = "";
});

document.querySelector(".pop").addEventListener("click", () => {
  if (stack.isEmpty()) {
    showError("Stack is empty!");
    return;
  }

  stack.pop();
  stack.printStack();

  stackPeekResult.style.display = "none";
  stackPeekValue.textContent = "";

  stackValueInput.value = "";
});

document.querySelector(".peek").addEventListener("click", () => {
  stackPeekResult.style.display = "block";
  stackPeekValue.textContent = stack.peek();

  stackValueInput.value = "";
});

document.querySelector(".stack-return").addEventListener("click", () => {
  stack.makeStackEmpty();
  stack.printStack();

  stackValueInput.value = "";

  stackPeekResult.style.display = "none";
  stackPeekValue.textContent = "";

  showScreen(algorithms);
});

// ==========================================
// 18. QUEUE OPERATIONS
// ==========================================

const queueValueInput = document.getElementById("queue-valueInput");

const queuePeekResult = document.querySelector(
  ".queue-menu .queue-peek-result",
);

const queuePeekValue = document.querySelector(".queue-menu .queue-peek-value");

document.querySelector(".enqueue").addEventListener("click", () => {
  const value = queueValueInput.value.trim();

  if (value === "") {
    showError("Please enter a value!");
    return;
  }

  if (!queue.enqueue(Number(value))) {
    showError("Queue is full!");
    return;
  }

  queue.printQueue();
  queueValueInput.value = "";
});

document.querySelector(".dequeue").addEventListener("click", () => {
  if (queue.queueisEmpty()) {
    showError("Queue is empty!");
    return;
  }

  queue.dequeue();
  queue.printQueue();

  queuePeekResult.style.display = "none";
  queuePeekValue.textContent = "";

  queueValueInput.value = "";
});

document.querySelector(".queue-peek").addEventListener("click", () => {
  queuePeekResult.style.display = "block";
  queuePeekValue.textContent = queue.queuepeek();

  queueValueInput.value = "";
});

document.querySelector(".queue-return").addEventListener("click", () => {
  queue.makeQueueEmpty();
  queue.printQueue();

  queueValueInput.value = "";

  queuePeekResult.style.display = "none";
  queuePeekValue.textContent = "";

  showScreen(algorithms);
});

// ==========================================
// 19. CIRCULAR QUEUE OPERATIONS
// ==========================================

const cqValueInput = document.getElementById("cq-valueInput");

const cqPeekResult = document.querySelector(".cq-menu .cq-peek-result");

const cqPeekValue = document.querySelector(".cq-menu .cq-peek-value");

document.querySelector(".cq-enqueue").addEventListener("click", () => {
  const value = cqValueInput.value.trim();

  if (value === "") {
    showError("Please enter a value!");
    return;
  }

  if (!cq.CQenqueue(Number(value))) {
    showError("Circular Queue is full!");
    return;
  }

  cq.CQdisplay();
  cqValueInput.value = "";
});

document.querySelector(".cq-dequeue").addEventListener("click", () => {
  if (cq.CQisEmpty()) {
    showError("Circular Queue is empty!");
    return;
  }

  cq.CQdequeue();
  cq.CQdisplay();

  cqPeekResult.style.display = "none";
  cqPeekValue.textContent = "";

  cqValueInput.value = "";
});

document.querySelector(".cq-peek").addEventListener("click", () => {
  cqPeekResult.style.display = "block";
  cqPeekValue.textContent = cq.CQpeek();

  cqValueInput.value = "";
});

document.querySelector(".cq-return").addEventListener("click", () => {
  cq.makeCQEmpty();
  cq.CQdisplay();

  cqValueInput.value = "";

  cqPeekResult.style.display = "none";
  cqPeekValue.textContent = "";

  showScreen(algorithms);
});

// ==========================================
// 20. TREE RETURN BUTTON
// ==========================================

document.querySelector(".tree-return").addEventListener("click", () => {
  showScreen(algorithms);
});

// ==========================================
// 21. SIDEBAR
// ==========================================

burgerIcon.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

closeIcon.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

// ==========================================
// 22. SIDEBAR NAVIGATION
// ==========================================

const sidebarItems = document.querySelectorAll(".DS-cont div");

sidebarItems[0].addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
  showScreen(arrListCont);
});

sidebarItems[1].addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
  showScreen(linkedListMenu);
});

sidebarItems[2].addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
  showScreen(stackMenu);
});

sidebarItems[3].addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
  showScreen(queueMenu);
});

// ==========================================
// 23. FOOTER YEAR
// ==========================================

document.querySelector("footer .year").textContent = new Date().getFullYear();

// ==========================================
// 24. LOADER
// ==========================================

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("non-show");
  }, 700);
});

// ==========================================
// END AlgoLab
// ==========================================
