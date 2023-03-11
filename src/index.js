/*
id 1 = clothes
id 2 = electronics
id 3 = furniture
id 4 = show 
id 5 = others
*/

const API = "https://api.escuelajs.co/api/v1/products";
const categoriesURL = "https://api.escuelajs.co/api/v1/products/?categoryId=" 

const main = document.querySelector('main');
const menu = document.getElementById('menu');
const btn = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const clothes = document.getElementById('clothes')
const electronics = document.getElementById('electronics')
const furniture = document.getElementById('furniture')
const shoes = document.getElementById('shoes')
const others = document.getElementById('others')
const categoryTitle = document.getElementById('category-title');

window.addEventListener('load', load)

btn.addEventListener('click', ()=>{
    menu.classList.toggle('show-menu');
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
})
clothes.addEventListener('click', ()=>{
    main.innerHTML = ""
    disableFunctions()
    getData(1, "Clothes")
})
electronics.addEventListener('click', ()=>{
    main.innerHTML = ""
    disableFunctions()
    getData(2, "Electronics")
})
furniture.addEventListener('click', ()=>{
    main.innerHTML = ""
    disableFunctions()
    getData(3, "Furniture")
})
shoes.addEventListener('click', ()=>{
    main.innerHTML = ""
    disableFunctions()
    getData(4, "Shoes")
})
others.addEventListener('click', ()=>{
    main.innerHTML = ""
    disableFunctions()
    getData(5, "Others")
})

function disableFunctions(){
    menu.classList.toggle('show-menu');
    overlay.classList.toggle('overlay-show');
    btn.classList.toggle('open');
    document.body.classList.toggle('stop-scrolling');
}

async function fetchData(url){
    const response = await fetch(url);
    const data = response.json();
    return data;
}

async function getData(id, title){
    try{
        const response = await fetchData(categoriesURL +  id);
        response.forEach(product =>{
            if(product.title != "New Product"){
                categoryTitle.innerHTML = title
                main.innerHTML += `
                <div class="tarjeta">
                    <img src="${product.images[0]}" alt="product">
                    <h3 class="title">${product.title}</h3>
                    <p class="price">$${product.price}</p>   
                    <button onclick="buy()" class="btn-cart" id="btn-cart"><i class="fa-solid fa-cart-shopping icono-cart"></i></button>
                </div>
                `
            }
            
        })
    }
    catch{
        throw new Error("Error at the API")
    }
}

async function load(){
    try{
        const response = await fetchData(API);
        response.forEach(product =>{
            if(product.title != "New Product"){
                main.innerHTML += `
                <div class="tarjeta">
                    <img src="${product.images[0]}" alt="product">
                    <h3 class="title">${product.title}</h3>
                    <p class="price">$${product.price}</p>   
                    <button onclick="buy()" class="btn-cart" id="btn-cart"><i class="fa-solid fa-cart-shopping icono-cart"></i></button>
                </div>
                `
            }
            
        })
        return response
    }
    catch{
        throw new Error("Error at the API");
    }
}

function buy(){
    alert('Hola')
}

console.log(getData());
// console.log(getData(API));
getData()