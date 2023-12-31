var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");
//Form Submit Event
form.addEventListener('submit',addItem);

//Delete Event
itemList.addEventListener('click',removeItem);

//Filter Event
filter.addEventListener('keyup',filterItem);

//Add Item
function addItem(e){
	e.preventDefault();

	// Get input Value
	var newItem = document.getElementById('item');

	// Create new li item
	var li = document.createElement("li");
	
	// Add the class in li tags
	li.className = "list-group-item";
	
	//Add text node with input value
	li.appendChild(document.createTextNode(newItem.value));
	
	//Add the delete button 
	var deleteBtn = document.createElement("button");
	
	//Add the class in the deletebtn Element
	deleteBtn.className = "btn btn-danger btn-sm float-right delete";
	
	//Add the text node in the button
	deleteBtn.appendChild(document.createTextNode('X'));
	
	//Add the deleteBtn in the li
	
	li.appendChild(deleteBtn);
	//Add the li item in the ul list
	itemList.appendChild(li);
	
}
// removeItem
function removeItem(e){
	if(e.target.classList.contains('delete')){
		if(confirm("Are You Sure ?")){
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

//FilterItem
function filterItem(e){
	//convert text to lowercase
	var text = e.target.value.toLowerCase();
	
	//Get List item
	var items = document.getElementsByTagName("li");
	
	//Convert to an array
	
	Array.from(items).forEach(function(item){
	var itemName = item.firstChild.textContent;
		if(itemName.toLowerCase().indexOf(text)!= -1){
			item.style.display = 'block';
		}
		else
		{
			item.style.display = 'none';
		}
	});
}