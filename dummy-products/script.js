let api = "https://dummyjson.com/products";
const loader = document.getElementById("loader");
let productContainer = document.querySelector("#product-container");
(async function () {
  let res = await fetch(api);
  let data = await res.json();
  let { products } = data;
  console.log(products);
  loader.style.display = "none";
  showCards(products);
})();

function showCards(products) {
  products.map((product) => {
    let {
      brand,
      category,
      description,
      images,
      price,
      rating,
      title,
      shippingInformation,
    } = product;
    productContainer.innerHTML += `
    <div class="product-card">
      <img
        src="${images[0]}"
        alt="Product Image"
        class="product-image"
      />

      <div class="product-details">
        <div class="product-title">${title}</div>
        <div class="brand-category">${category}</div>
        <div class="description">
          ${description}
        </div>
        <div class="price">$${price}</div>
        <div class="shipping">Shipping: ${shippingInformation}</div>
        <div class="rating">
          <span class="star">★</span><span class="star">★</span
          ><span class="star">★</span><span class="star">★</span
          ><span class="star">☆</span>
          <span>(${rating}/5)</span>
        </div>
      </div>
    </div>
    `;
  });
}

window.addEventListener("load", function () {
  loader.style.opacity = "1";
});
