const input = document.getElementById('userinput');
const button = document.getElementById("enter");
const ul = document.querySelector("ul");
// bouton sur la liste existante(for of)
const existingItems = document.querySelectorAll('li');
for (const item of existingItems){
	createButton(item);
}

// fonction pour creer un nouveau boutton:
function createButton(list) {
	const but = document.createElement('button');
	but.textContent = "delete";
	list.appendChild(but);
}

// fonction pour creer une nouvelle liste:
function createList(){
	const list = document.createElement("li");
	list.textContent= input.value;
	ul.appendChild(list);
// vide le champs;
	input.value = " ";
	createButton(list);
}

function inputLength() {
	return input.value.trim().length > 0 ;
}

function addListAfterClick(){
	if (inputLength()){
		createList();
	}
}

function enterButton(event){
	if (event.key === 'Enter' && inputLength()) {
		createList();
	}
}

function toggleItems(event) {
	if (event.target.tagName === "LI")
	{
	event.target.classList.toggle("done");
	}
}

button.addEventListener('click', addListAfterClick);
input.addEventListener('keydown', enterButton);
ul.addEventListener('click' , toggleItems);

















