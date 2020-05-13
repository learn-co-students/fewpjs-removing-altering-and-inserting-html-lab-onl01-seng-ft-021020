// Write your code here!
document.GetElementById('main').remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Jon is the champion";