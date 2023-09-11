//codigo del footer
 
const botonConctacto = document.getElementById('botonContacto');
const listaDesplegableContacto = document.querySelector('.listaDesplegableContacto');
// productos
const cardsContainer = document.querySelector('.cardsContainer');

// cogido aside carrito de compras / sección store
const CardAside = document.querySelector('#CardAside');



botonConctacto.addEventListener('click', desplegarMenuContacto);

function desplegarMenuContacto() {
    listaDesplegableContacto.classList.toggle('inactive');    
};

function openProdcutDetailAside(){
    shoppingCardAside.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function desplegarAsidechoppingcar() {
    CardAside.classList.toggle('inactive')

}

const ProductList= [];

ProductList.push({
    name: 'concentrado',
    price: 50000,
    descripcion: 'aaaaaa',
    img: "./IMG/cat9.jpg"    

})
ProductList.push({
    name: 'guacal',
    price: 50000,
    descripcion: 'aaaaaa',
    img: "./IMG/cat9.jpg"    

})
ProductList.push({
    name: 'Arena',
    price: 50000,
    descripcion: 'aaaaaa',
    img: "./IMG/cat9.jpg"    

})
ProductList.push({
    name: 'Areneros',
    price: 50000,
    descripcion: 'aaaaaa',
    img: "./IMG/cat9.jpg"    

})
ProductList.push({
    name: 'Comerederos',
    price: 50000,
    descripcion: 'aaaaaa',
    img: "./IMG/cat9.jpg"    

})

function renderProducts(arr){
    for(product of arr){

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);
    productImg.addEventListener('click', openProdcutDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p')
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productCartImg = document.createElement('img');
    productCartImg.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productCartImg);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard)
    }
    
}


renderProducts(ProductList);