import products from "data.js";
// console.log(products.reduce( (a,b)=>a+b.price,0 ));

{/* <div class="col-lg-3 col-md-6 mb-4 catalog-item">
	<div class="card">
		<img class="card-img-top" src="bg-02.jpg" alt="Card image cap">
		<div class="card-body">
			<h5 class="card-title">Card title</h5>
			<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</div> */}


function createNewElement(tag, ineerContent=null, classStr=null, attr=null){
	var el;
	el = document.createElement(tag);
	el.className = (classStr)?classStr:"";
	el.innerHTML = (ineerContent)?ineerContent:"";
	if(attr){
		attr.map((attr_el)=>el.setAttribute(attr_el.name, attr_el.value));
	}
	
	return el;
}

function createCard(product){
	var link = createNewElement("a", "Add to card", "btn btn-primary", [{"name":"href", "value": "#"}]);
	var desc = createNewElement("p", product.description, "card-text");
	var title = createNewElement("h5", product.name, "card-title");

	var cardBody = createNewElement("div", null, "card-body");
	cardBody.appendChild(title);
	cardBody.appendChild(desc);
	cardBody.appendChild(link);
	//Final create cardBody

	var img = createNewElement("img", null, "card-img-top", [{"name":"src", "value": "images/"+product.image}]);

	var card = createNewElement("div", null, "card");
	card.appendChild(img);
	card.appendChild(cardBody);

	var catalogItem = createNewElement("div", null, "col-lg-3 col-md-6 mb-4 catalog-item");
	catalogItem.appendChild(card);

	return catalogItem;
}

var catalog = document.getElementById("catalog");
// catalog.appendChild(createCard(products[0]));
products.map((product)=>catalog.appendChild(createCard(product)));

// var arr = [3, 6, [1, 5], 4, [7, [10, 8]]];
var arr = [3, 6, 1, 5, 4, 7, 10, 8];

function showElements(data_arr, pos){
	console.log(data_arr[pos]);
	if(!data_arr[pos+1]){
		return;
	}
	showElements(data_arr, pos+1);
}

showElements(arr, 0);