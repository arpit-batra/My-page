document.getElementById("addElement").addEventListener('click',function () {
	var text = prompt("What do you want to do???");
	// if(text=="" || text==NULL){
	// 	alert("You added Nothing :(");
	// }
	// else{
		var list=document.getElementById('list');


		var item=document.createElement('li');
		item.innerText=text;

		var deletee = document.createElement('button');
		deletee.classList.add('delete');
	
		var done = document.createElement('button');
		done.classList.add('done');

		item.appendChild(deletee);
		item.appendChild(done);

		list.appendChild(item);
	// }
})