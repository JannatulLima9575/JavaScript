// matched method 
const products = [
    { id: 1, name: 'laptop', price: 50000 },
    { id: 2, name: 'mobile', price: 15000 },
    { id: 3, name: 'desktop', price: 30000 },
]
function matchedproducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.includes(search)) {
           matched.push(product); 
        }
    }
    return matched;
}

const result = matchedproducts(products, 'laptop')
console.log(result);
