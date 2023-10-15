document.addEventListener("DOMContentLoaded", () => {
    const shopElement = document.getElementById("shop-items");
    // Assuming `myShop` is your instance of `Shop` with items
    myShop.items.forEach(item => {
        const itemCard = document.createElement("div");
        itemCard.classList.add("item-card");
        itemCard.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: ${item.value}</p>
            <p>Stock: ${item.stock}</p>
            <button onclick="addToCart('${item.id}')">Add to Cart</button>
        `;
        shopElement.appendChild(itemCard);
    });
});

function addToCart(itemId) {

}
