const products = [
	{"name": "Snikers #1", "price": 103.50, "image": "bg-01.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #2", "price": 152.14, "image": "bg-02.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #3", "price": 202.22, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #4", "price": 240.00, "image": "bg-04.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #5", "price": 180.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #6", "price": 186.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	
	{"name": "Snikers #7", "price": 111.60, "image": "bg-01.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #8", "price": 169.64, "image": "bg-02.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #9", "price": 215.20, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #10", "price": 245.00, "image": "bg-04.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #11", "price": 109.30, "image": "bg-05.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #12", "price": 198.50, "image": "bg-06.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},

	{"name": "Snikers #13", "price": 128.69, "image": "bg-01.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #14", "price": 179.00, "image": "bg-02.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #15", "price": 260.20, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
	{"name": "Snikers #16", "price": 301.20, "image": "bg-03.jpg", "description": "This is very cool snikers. Nice colorfull and quality"},
];

const per_page = 6;
let current_page = 0;

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

function renderProducts(){
	catalog.innerHTML = "";
	for(let i = startFromProduct(); i <= products.length;i++){
		console.log(i);
		if(i >= per_page + startFromProduct()){
			break;
		}
		catalog.appendChild(createCard(products[i]));
	}
}


function startFromProduct(){
	return per_page * current_page;
}

const pagination_links = document.getElementsByClassName("page-link");

Array.from(pagination_links).map((el)=>{
	el.addEventListener("click",(e)=>{
		console.log(e.target.dataset.link);
		current_page = e.target.dataset.link;
		renderProducts();
	});
});


// Run code

renderProducts();