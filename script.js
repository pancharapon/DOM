var form = document.getElementById('form');
var addItems = document.getElementById('addItems');
var Items = document.getElementById('Items');

function afterClickSubmit(e) {
	e.preventDefault();
	if(addItems.value.length > 0) {
		// Add Items
		var li = document.createElement('li');
		li.className = 'list-group-item';
		var spanText = document.createElement('div');
		spanText.appendChild(document.createTextNode(addItems.value));
		li.appendChild(spanText);
		Items.appendChild(li);

		// Add Delete
		var spanButton = document.createElement('div');
		var del = document.createElement('button');
		del.className = 'btn-danger';
		del.appendChild(document.createTextNode('x'));
		spanButton.className = 'float-right'
		spanButton.appendChild(del);
		li.appendChild(spanButton);

	}
}

form.addEventListener('submit', afterClickSubmit);

