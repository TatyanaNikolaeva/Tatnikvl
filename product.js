; (function () {
    var catalog = document.querySelector('.catalog');

    const closestItemByClass = function (item, className) {
        var node = item;
        while (node) {

            if (node.classList.contains(className)) {
                return node;
            }
            node = node.parentElement;

        }
        return null;
    };

    if (catalog === null) {
        return;
    }


    var changeProductSize = function (target) {
        var product = closestItemByClass(target, 'product');
        var previusBtnActive = product.querySelector('.product_size.is-active');

        previusBtnActive.classList.remove('is-active');
        target.classList.add('is-active');
    };

    var changeProductPrice = function (target) {
        var product = closestItemByClass(target, 'product');


        var productPrise = product.querySelector('.product_size.is-active').getAttribute('data-product-size-prise');


        product.querySelector('.product_price-value').textContent = productPrise;

    }


    var changeProductOrderInfo = function (target) {
        var product = closestItemByClass(target, 'product');
        var order = document.querySelector('.popup-order');
        console.log(order);

        var productTitle = product.querySelector('.product_title').textContent;
        var productSize = product.querySelector('.product_size.is-active').textContent;
        var productPrise = product.querySelector('.product_price-value').textContent;
        var productImgSrc = product.querySelector('.product_img').getAttribute('src');


        order.querySelector('.order-info-title').setAttribute('value', productTitle);
        order.querySelector('.order-info-size').setAttribute('value', productSize);
        order.querySelector('.order-info-prise').setAttribute('value', productPrise);

        order.querySelector('.order-product-title').textContent = productTitle;
        order.querySelector('.order-product-price').textContent = productPrise;
        order.querySelector('.order_size').textContent = productSize;
        order.querySelector('.order_img').setAttribute('src', productImgSrc);

    };


    catalog.addEventListener('click', function (e) {
        var target = e.target;

        if (target.classList.contains('product_size')) {
            e.preventDefault();
            changeProductSize(target);
            changeProductPrice(target);

        }

        if (target.classList.contains('product_btn')) {
            e.preventDefault();
            changeProductOrderInfo(target);
        }



    })




})();