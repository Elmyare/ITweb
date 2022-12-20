var count = 0;
var price = 0;	

function openMenu(){
	document.getElementById("sidebar").classList.toggle('active');
	document.getElementById("bgimg").style.display = 'none';
};


function AddToCartop1(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartop2(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartop3(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartop4(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartGC1(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartGC2(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartGC3(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartGC4(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartMB1(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartMB2(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartMB3(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartMB4(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartPROC1(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartPROC2(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartPROC3(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function AddToCartPROC4(z) {
	count = count + 1;
	price = price + z;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function refresh() {
	count = 0;
	price = 0;
	document.getElementById("count").innerHTML = count;
	document.getElementById("price").innerHTML = price;
}

function OpenMain() {
	document.getElementById("Processors").style.display = 'none';
	document.getElementById("Motherboards").style.display = 'none';
	document.getElementById("GraphicsCards").style.display = 'none';
	document.getElementById("RAM").style.display = 'none';
	document.getElementById("main").style.display = 'block';
}

function OpenGr() {
	document.getElementById("Processors").style.display = 'none';
	document.getElementById("GraphicsCards").style.display = 'none';
	document.getElementById("main").style.display = 'none';
	document.getElementById("RAM").style.display = 'none';
	document.getElementById("GraphicsCards").style.display = 'block';
}

function OpenMotherboards() {
	document.getElementById("Processors").style.display = 'none';
	document.getElementById("main").style.display = 'none';
	document.getElementById("GraphicsCards").style.display = 'none';
	document.getElementById("RAM").style.display = 'none';
	document.getElementById("Motherboards").style.display = 'block';

}

function OpenProcessors() {
	document.getElementById("main").style.display = 'none';
	document.getElementById("GraphicsCards").style.display = 'none';
	document.getElementById("Motherboards").style.display = 'none';	
	document.getElementById("RAM").style.display = 'none';
	document.getElementById("Processors").style.display = 'block';	
}

function OpenRAM() {
	document.getElementById("main").style.display = 'none';
	document.getElementById("GraphicsCards").style.display = 'none';
	document.getElementById("Motherboards").style.display = 'none';	
	document.getElementById("Processors").style.display = 'none';	
	document.getElementById("RAM").style.display = 'block';
}