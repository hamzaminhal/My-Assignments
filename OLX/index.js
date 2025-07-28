let api = "https://dummyjson.com/products";
let productsElement = document.querySelector("#products");

(async function () {
  let res = await fetch(api);
  let productsFetched = await res.json();
  let { products } = productsFetched;
  console.log(products);
  showProducts(products);
})();

function showProducts(products) {
  products.map((singleProduct) => {
    let {
      brand,
      category,
      description,
      id,
      price,
      rating,
      shippingInformation,
      stock,
      images,
      title,
      warrantyInformation,
    } = singleProduct;
    productsElement.innerHTML += `
    <div class="product-card">
    <a href="./singleProduct/index.html?id=${id}" target="_blank">
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
      </a>
    </div>
    `;
  });
}
