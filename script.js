// var data = {
// 	todo:[],
// 	complete:[]
// };

document.getElementById("addElement").addEventListener('click',function () {
	var text = prompt("What do you want to do???");
	if(text){
		var list=document.getElementById('list');


		var item=document.createElement('li');
		item.innerText=text;

		var deletee = document.createElement('button');
		deletee.classList.add('delete');
		deletee.addEventListener('click',removeItem);

		var done = document.createElement('button');
		done.classList.add('done');
		done.addEventListener('click',itemComplete);

		item.appendChild(deletee);
		item.appendChild(done);

		list.insertBefore(item,list.childNodes[0]);
	}
	else{
		alert("You added Nothing :(");
	}
})


function removeItem(){
	var item = this.parentNode;
	var list = item.parentNode;
	list.removeChild(item);
}

function itemComplete(){
	var item = this.parentNode;
	var list = item.parentNode;
	list.removeChild(item);
	if(list.id=="doneList"){
		var todoList=document.getElementById("list");
		todoList.insertBefore(item,todoList.childNodes[0]);
	}
	else{
		var completedList=document.getElementById("doneList");
		completedList.appendChild(item);
	}

}