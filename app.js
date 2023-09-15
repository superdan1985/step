const darkModeToggle = document.getElementById("dark-mode-toggle");
const productList = document.getElementById("product-list");
const categoryFilter = document.getElementById("category-filter");
const sortButton = document.getElementById("sort-button");
const sortMaxButton = document.getElementById("sort-max");
const sortMinButton = document.getElementById("sort-min");
const applyPriceFilterButton = document.getElementById("apply-price-filter");
const slider = document.querySelector("#slider");
const arrowRight = document.querySelector("#arrow-right");
const arrowLeft = document.querySelector("#arrow-left");

const slides = [
    {
        id:1,
        title: "Phones",
        description: "Latest Phones",
        image: "https://www.ixbt.com/img/n1/news/2023/8/3/Apple-iPhone-15-Pro-lineup-color-lineup-geo-230912_big.jpg.large%20(1)_large.png"
    },

    {
        id:2,
        title: "Laptops",
        description: "Latest laptops",
        image: "https://apple-store.net.ru/image/catalog/novosty/2023/macbook-pro-2023.jpg"
    },

    {
        id:3,
        title: "Accesory",
        description: "latest Accesory",
        image: "https://images.unsplash.com/photo-1609334761848-77b4d1994040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
    },

    {
        id:4,
        title: "T-Shirts",
        description: "Famouse brands for Skates clothings",
        image: "https://images.asos-media.com/products/obey-bold-icon-heavyweight-backprint-t-shirt-in-purple/204616876-1-purple?$n_750w$&wid=750&hei=750&fit=crop"
    },

    {
        id:5,
        title: "Snikers",
        description: "Branded snikers",
        image: "https://neilsonboutique.co.uk/cdn/shop/products/IMG_9267NEILSON-scaled_1024x1024.jpg?v=1679905929"
    },

    {
        id:6,
        title: "Jakets",
        description: "Casual skaters jakets brands",
        image: "https://www.colorskates.com/images/products/2022/01/CLBLJ19001_2.jpg"
    },
]

if (slides.length %2 !=0){
    alert("NUmber of slides must be even")
}

slider.style.width = `${slides.length * 350}px`

slides.forEach((slide)=>{
    slider.innerHTML +=`
    <div class='slide'>
    <h1>${slide.title}</h1>
    <p>${slide.description}</p>
    <img src="${slide.image}">
    </div>
    `
})

let positionX = 0
arrowLeft.style.display = "none"

function checkArrows(){
    arrowLeft.style.display = positionX === 0 ? "none" : "block"
    arrowRight.style.display = positionX === (slides.length - 2)* 350 ? "none" : "block" 
}

arrowRight.addEventListener("click", () => {
    positionX += 700

    checkArrows()

    slider.style.transform = `translateX(-${positionX}px)`

})

arrowLeft.addEventListener("click", () => {
    positionX -=700

    checkArrows()

    slider.style.transform = `translateX(-${positionX}px)`
})



const products = [
    { name: "Iphone 14", 
    price: 800, 
    category: "electronics",
    img: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-iPhone-14-Plus-hero-220907_Full-Bleed-Image.jpg.large.jpg" 
    },

    { name: "Iphone 14 pro", 
    price: 900, 
    category: "electronics",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753619946" 
    },

    { name: "Iphone 14 pro MAX", 
    price: 1000, 
    category: "electronics",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896" 
    },

    { name: "Iphone 15", 
    price: 999, 
    category: "electronics",
    img: "https://s0.rbk.ru/v6_top_pics/media/img/9/59/346945452685599.webp" 
    },

    { name: "Iphone 15 plus", 
    price: 1999, 
    category: "electronics",
    img: "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/tile/Apple-iPhone-15-lineup-hero-230912.jpg.landing-big_2x.jpg" 
    },

    { name: "Iphone 15 pro", 
    price: 2199, 
    category: "electronics",
    img: "https://trashbox.ru/nowebp/1857113_057516/logo1.jpeg" 
    },

    { name: "OBEY", 
    price: 20, 
    category: "clothing",
    img:"https://images.asos-media.com/products/obey-icon-eyes-backprint-t-shirt-in-off-white/204616839-1-white?$n_750w$&wid=750&hei=750&fit=crop" 
    },
    
    { name: "DICKEYS", 
    price: 30, 
    category: "clothing",
    img:"https://www.kunstform.org/images/Dickies-Icon-Logo-Tee-T-Shirt-White-2021022293139-1.jpg" 
    },

    { name: "AUTRY", 
    price: 200, 
    category: "clothing",
    img:"https://cdn.webshopapp.com/shops/179120/files/376700354/image.jpg" 
    },

    { name: "DIADORA", 
    price: 50, 
    category: "clothing",
    img:"https://www.diadora.com/dw/image/v2/BBPK_PRD/on/demandware.static/-/Sites-diadora-master/default/dw88d31a08/images/hi-res/501.177354_C0451_00_HR.jpg?sw=1920" 
    },

    { name: "HURLEY", 
    price: 290, 
    category: "clothing",
    img:"https://pimg.bucklecontent.com/images/products/86760TS0031940/H04/f/e611c01f71b1ac0a3d5ca2e468c3d601v3?quality=0.8&width=1425" 
    },
];

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

let darkMode = false;
let currentCategory = "all";

function generateProductHTML(product) {
    return `
        <div class="product">
            <img src='${product.img}'>
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: ${product.category}</p>
        </div>
    `;
}


function displayProducts(productsToDisplay) {
    productList.innerHTML = "";

    productsToDisplay.forEach((product) => {
        const productHTML = generateProductHTML(product);
        productList.innerHTML += productHTML;
    });
}


function filterProducts() {
    const minPriceInput = document.getElementById("min-price");
    const maxPriceInput = document.getElementById("max-price");
    const minPrice = minPriceInput.value ? parseFloat(minPriceInput.value) : 0;
    const maxPrice = maxPriceInput.value ? parseFloat(maxPriceInput.value) : Infinity;
    
    const filteredProducts = products.filter((product) => {
        const categoryMatch = currentCategory === "all" || product.category === currentCategory;
        const minPriceMatch = minPrice === 0 || product.price >= minPrice;
        const maxPriceMatch = maxPrice === Infinity || product.price <= maxPrice;
        return categoryMatch && minPriceMatch && maxPriceMatch;
    });

    displayProducts(filteredProducts);
}


function sortProducts(sortType) {
    const sortedProducts = products.slice().sort((a, b) => {
        if (sortType === "max") {
            return b.price - a.price;
        } else if (sortType === "min") {
            return a.price - b.price;
        }
        return 0;
    });

    displayProducts(sortedProducts);
}

categoryFilter.addEventListener("change", () => {
    currentCategory = categoryFilter.value;
    filterProducts();
});

applyPriceFilterButton.addEventListener("click", () => {
    filterProducts();
});

sortMaxButton.addEventListener("click", () => {
    sortProducts("max");
});

sortMinButton.addEventListener("click", () => {
    sortProducts("min");
});

sortButton.addEventListener("click", () => {
    sortProducts("all");
});

displayProducts();