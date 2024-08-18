$(document).ready(function() {
    
    $.ajax({
        url: 'products.json',
        method: 'GET',
        dataType: 'json',
        success: function(products) {
            const productList = $('#product-list');
            
            products.forEach(function(product) {
                const productCard = `
                    <div class="col-sm-4 mb-4">
                        <div class="product-card">
                            <span class="discount-badge">${product.discount}% off</span>
                            
                            <img src="${product.image}" alt="${product.name}">
                            
                        
                            <div class="card-body">
                                <h5>${product.name}</h5>
                                
                                <p class="price">₹${product.price}</p>
                                <p class="original-price">₹${product.originalPrice}</p>
                                <a href="index.html"  onclick="addToCart(${product.discount})"><button class="btn btn-primary w-100">Add to Cart</button></a>
                            </div>
                        </div>
                    </div>
                `;
                productList.append(productCard);
               
            });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching products:', error);
        }
    });


    function addToCart(e){
    debugger;
        const product= e;
        console.log(product);
        const prodlist=$('#cart-items');
        product.forEach((product)=>{
            const productCard = `
            <div class="col-sm-4 mb-4">
                <div class="product-card">
                    <span class="discount-badge">${product.discount}% off</span>
                    
                    <img src="${product.image}" alt="${product.name}">
                    
                
                    <div class="card-body">
                        <h5>${product.name}</h5>
                        
                        <p class="price">₹${product.price}</p>
                        <p class="original-price">₹${product.originalPrice}</p>
                        <a href="index.html"><button class="btn btn-primary w-100" onclick="addToCart(${product})">Add to Cart</button></a>
                    </div>
                </div>
            </div>
        `;
        prodlist.append(productCard);

        })



    }
});

