let ProfileImage = document.getElementById('ProfileImage')
console.log(ProfileImage)

let storedData = JSON.parse(localStorage.getItem('userDetails'))
console.log(storedData)

let image = storedData.imageUrl
console.log(image)
ProfileImage.src = `${image}`


let allProducts = [
    {
        id: 1,
        productName: "I Phone 17",
        productPrice: 69000,
        productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHV-tmTlRvbeu9UiN9TJrK28NuHFbhSg3bQ&s",
        category: "mobile"
    },
    {
    id: 2,
    productName: "Samsung Galaxy S24 Ultra",
    productPrice: 124999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEWocWXh0ZGd6bto2oGq8ECzEtDvqhgKstg&s",
    category: "mobile"
  },

  {
    id: 3,
    productName: "OnePlus 12",
    productPrice: 64999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMN3MX6uiQZz6TV45P1NZq6EbHk93vj9W4Q&s",
    category: "mobile"
  },

  {
    id: 4,
    productName: "Realme GT 6",
    productPrice: 40999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdTJbYPORB33VQc-_k6OqPoM-0j-sU_RLVKg&s",
    category: "mobile"
  },

  {
    id: 5,
    productName: "Vivo V30 Pro",
    productPrice: 41999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-UMrGrsS_xlAQ6b7N7qGB0-AyQ1kEQluGJg&s",
    category: "mobile"
  },

  {
    id: 6,
    productName: "Xiaomi 14",
    productPrice: 69999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFjcfTazMQnYAe4JmQQrh_ShE7tFPTUZ0Gg&s",
    category: "mobile"
  },
  {
    id: 7,
    productName: "iQOO Neo 9 Pro",
    productPrice: 37999,
    productImage: "https://i.gadgets360cdn.com/large/iqoo_neo_9_series_iqoo_1703734048634.jpg",
    category: "mobile"
  },

  {
    id: 8,
    productName: "Google Pixel 8 Pro",
    productPrice: 106999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIH1qTCZNtpjwVRN8CIKJJzNaBXpBufCWGA&s",
    category: "mobile"
  },

  {
    id: 9,
    productName: "Nothing Phone 2",
    productPrice: 44999,
    productImage: "https://i.gadgets360cdn.com/large/nothing_phone_2_twitter_1688466810044.jpg",
    category: "mobile"
  },

  {
    id: 10,
    productName: "Motorola Edge 50 Pro",
    productPrice: 31999,
    productImage: "https://cartdaddy.in/public/uploads/all/x8aqzpxwt906tcIIUgUt3ftf0vLEw2yXodZ3iDIY.jpg",
    category: "mobile"
  },

  {
    id: 11,
    productName: "Oppo Reno 11 Pro",
    productPrice: 39999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCpaOtjL8HPCuJdnK2nFCbnFRVfsP2xfQCg&s",
    category: "mobile"
  },

  {
    id: 12,
    productName: "Redmi Note 13 Pro+",
    productPrice: 33999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs7WpTieKOYHjUKghgC-s9yQwHJBN6X136Qg&s",
    category: "mobile"
  },

  {
    id: 13,
    productName: "Poco X6 Pro",
    productPrice: 28999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HsfBedXid-dpolijHWyha5Tkp6Sr1sSEZA&s",
    category: "mobile"
  },

  {
    id: 14,
    productName: "Asus ROG Phone 8",
    productPrice: 79999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tL45hQH7RzD6ub8x0cLTeiJo0qm8XIfzow&s",
    category: "mobile"
  },
    {
        id: 15,
        productName: "G Shock",
        productPrice: 16500,
        productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7U_uBPL9a7nzkry4k4h6bmkidcMMKqHQGw&s",
        category: "watch"
    },
    {
    id: 16,
    productName: "Fastrack Reflex",
    productPrice: 3499,
    productImage: "https://images.jdmagicbox.com/quickquotes/images_main/fastrack_reflex_unisex_pu_smart_band_blue_orange_swd90059pp02__25639820_0.jpg",
    category: "watch"
  },

  {
    id: 17,
    productName: "Rolex Submariner",
    productPrice: 850000,
    productImage: "https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126610ln-0001.png",
    category: "watch"
  },

  {
    id: 18,
    productName: "Apple Watch Series 9",
    productPrice: 42900,
    productImage: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/s9-case-unselect-gallery-1-202309",
    category: "watch"
  },

  {
    id: 19,
    productName: "Samsung Galaxy Watch 6",
    productPrice: 28999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZf3-DyADBvaNmphZbUcPLaB38IeTDReUGyQ&s",
    category: "watch"
  },

  {
    id: 20,
    productName: "Titan Neo",
    productPrice: 5999,
    productImage: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw96b986ec/images/Titan/Catalog/1805QM04_1.jpg?sw=600&sh=600",
    category: "watch"
  },

  {
    id: 21,
    productName: "Noise ColorFit Pro 5",
    productPrice: 4499,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBGrxAJt9fOE07yuyKsTe33OyZtwRxE9Gs5w&s",
    category: "watch"
  },

  {
    id: 22,
    productName: "Boat Wave Call",
    productPrice: 2999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcX1Xy4wj6FtbUgPLb9y6atcSOKUNwDitMag&s",
    category: "watch"
  },

  {
    id: 23,
    productName: "Fossil Gen 6",
    productPrice: 22995,
    productImage: "https://fossil.scene7.com/is/image/FossilPartners/FTW4061_main",
    category: "watch"
  },

  {
    id: 24,
    productName: "Casio Vintage",
    productPrice: 2495,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjEuVdO2Qp_lvKm23JrROm8GGMa9remY8_g&s",
    category: "watch"
  },
    {
        id: 25,
        productName: "Samsung S25",
        productPrice: 830000,
        productImage: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/i/s/g/-original-imahgfmzraymrnrg.jpeg?q=90",
        category: "mobile"
    },
    {
        id: 26,
        productName: "Apple Watch",
        productPrice: 66000,
        productImage: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-se-202603_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=dFQyNjEycitpbFBFNXA5RHpaQjc1a2YwVXZvYWdoa2NXQndKNFdmSlMzdWZaQno4VzdyOTRhQU93VEhhWjgvSHg4ZHpEbm5XWGdaM3BiNVRDaG55Uk9OM1JTVGtKUFFWc0NQZFFxTkdlYUJBU25Ob2N5dVQyQmxkN0IyWWVHdW0",
        category: "watch"
    },
    {
        id: 27,
        productName: "HP laptop",
        productPrice: 45000,
        productImage: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275777_0_19Kz84BwT.png?updatedAt=1762868566073?tr=w-400",
        category: "laptop"
    },
    {
    id: 28,
    productName: "Asus ROG Strix G16",
    productPrice: 89999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bf8HBUtlX7Q9UyjyiBfCnmNVMR9vU-FB2g&s",
    category: "laptop"
  },

  {
    id: 29,
    productName: "Lenovo IdeaPad Slim 5",
    productPrice: 62999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA76DQAPH2ksitdX7Fs1J1uM85derqqQ0NVA&s",
    category: "laptop"
  },

  {
    id: 30,
    productName: "HP Victus Gaming Laptop",
    productPrice: 74999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-XiXhT_HfwGC2GCuZWzaXPyaTXIZAeAq5Q&s",
    category: "laptop"
  },

  {
    id: 31,
    productName: "Apple iPad Pro",
    productPrice: 99999,
    productImage: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-1-202405",
    category: "laptop"
  },

  {
    id: 32,
    productName: "Dell Inspiron 15",
    productPrice: 55999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkBrTkI2BC4C33pWcLe6Ym7EmqdywHp6UJw&s",
    category: "laptop"
  },

  {
    id: 33,
    productName: "Acer Aspire 7",
    productPrice: 58999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1-1W2OjMbI7XaB5F_mCYxvVsF9qBHJM_dg&s",
    category: "laptop"
  },

  {
    id: 34,
    productName: "Asus VivoBook 15",
    productPrice: 48999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8t2bx1oVQ_vDzmbAcDng-EoeSG3oGn1oPw&s",
    category: "laptop"
  },

  {
    id: 35,
    productName: "Lenovo Legion 5",
    productPrice: 109999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Gbmi3UMgBkflbvafjjT2h8B_41CbYsdJwQ&s",
    category: "laptop"
  },

  {
    id: 36,
    productName: "HP Pavilion x360",
    productPrice: 67999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTfevPTtqjMxHxH5rE4T3BvAs_wNeo3V8EA&s",
    category: "laptop"
  },

  {
    id: 37,
    productName: "Apple MacBook Air M3",
    productPrice: 124999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLXDxYbeV62DhboJWcr07zOBH13kIu1vGJuA&s",
    category: "laptop"
  },
  {
    id: 38,
    productName: "Apple Neo",
    productPrice: 89999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkSdSJU2oCmljMP8OjfCkR7r4pCEAI_0qwaA&s",
    category: "laptop"
},
    {
        id: 39,
        productName: "DELL Laptop",
        productPrice: 43000,
        productImage: "https://m.media-amazon.com/images/I/71Vum7DnVBL._AC_UF1000,1000_QL80_.jpg",
        category: "laptop"
    },
    {
        id: 40,
        productName: "Nothing 3a Pro",
        productPrice: 36000,
        productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdp5r8Y86eCwP1b6Rl9KWAMggbz7MjXiZW9Q&s",
        category: "mobile"
    },
    {
        id: 41,
        productName: "Rolex Watch",
        productPrice: 25500,
        productImage: "https://cdn.shopify.com/s/files/1/0475/6206/4034/files/Rolex_Seadweller.webp?v=1727207533",
        category: "watch"
    },
    {
        id: 42,
        productName: "Vivo V30e",
        productPrice: 38000,
        productImage: "https://m.media-amazon.com/images/I/61vxwwIEnXL._AC_UF1000,1000_QL80_.jpg",
        category: "mobile"
    },
    {
        id: 43,
        productName: "Fastrack Watch",
        productPrice: 6000,
        productImage: "https://backend.paiinternational.in/media/images/1_3RIw8WQ.jpg",
        category: "watch"
    },
    {
        id: 44,
        productName: "LENOVA Laptop",
        productPrice: 38000,
        productImage: "https://m.media-amazon.com/images/I/513bplmZ3VL.jpg",
        category: "laptop"
    },
    {
        id: 45,
        productName: "ASUS Laptop",
        productPrice: 46000,
        productImage: "https://rukminim2.flixcart.com/image/480/640/xif0q/computer/u/6/q/-original-imahg5fugjtn9hb7.jpeg?q=90",
        category: "laptop"
    },
    {
    id: 46,
    productName: "iPhone 16 Pro Max",
    productPrice: 159999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQInzI69QTfhKGZZJSTKjbTAdI4ZeJ5fhSBBw&s",
    category: "mobile"
  },

  {
    id: 47,
    productName: "Rolex Daytona",
    productPrice: 1250000,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSP7nFkyIwbcipKl0Cs33c8ydR0XHBDkftUQ&s",
    category: "watch"
  },

  {
    id: 48,
    productName: "Asus ROG Zephyrus Duo",
    productPrice: 289999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZXhGWizv02hg0-Jide5NhJEW_NlGWpZ7Ikw&s",
    category: "laptop"
  },

  {
    id: 49,
    productName: "Samsung Galaxy Z Fold 6",
    productPrice: 164999,
    productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPZKbZfYdnyX2f7jxJSoSOs3ylh3IbCWkQw&s",
    category: "mobile"
  }
]
console.log(allProducts)


function displayProducts(listOfProducts) {
    let productContainer = document.getElementById('product-container')
    console.log(productContainer)

    if (listOfProducts.length === 0) {
        productContainer.innerHTML = `<h2>No products found</h2>`
    }
    productContainer.innerHTML = listOfProducts.map((prodoct) => `
    <div class="product-card">
            <img src="${prodoct.productImage}" alt="">
            <h2>${prodoct.productName}</h2>
            <p>₹ ${prodoct.productPrice}</p>
            <button onclick="addToCart(${prodoct.id})">Add to Cart🛒</button>

            <button>Add to Wishlist❤️</button>
        </div>
    `).join('')
}
displayProducts(allProducts)


function searchFilter() {
    let text = document.getElementById('search').value.toLowerCase()
    console.log(text)

    let filterData = allProducts.filter((p) => p.productName.toLowerCase().includes(text))
    displayProducts(filterData)
}

function searchCategory(cat) {
    if (cat === "all") {
        displayProducts(allProducts)
    } else {
        let filterData = allProducts.filter((p) => p.category === cat)
        displayProducts(filterData)
    }
}

function addToCart(id){
    let cart=JSON.parse(localStorage.getItem('cart'))||[];
    let product=allProducts.find((p)=>p.id===id)
    cart.push(product)

    localStorage.setItem('cart',JSON.stringify(cart))

    alert(`${product.productName} added to cart`)
}

