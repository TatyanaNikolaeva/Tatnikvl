; (function () {
    var catalogSection = document.querySelector('.section-catalog');

    if (catalogSection === null) {
        return;
    }

    var catalog = catalogSection.querySelector('.catalog');
    var catalogNav = catalogSection.querySelector('.catalog-nav');
    var catalogItems = catalogSection.querySelectorAll('.catalog_item');

    const removeChildren = function (item) {
        while (item.firstChild) {
            item.removeChild(item.firstChild);
        }
    };
    const updateChildren = function (item, children) {
        removeChildren(item);
        for (var i = 0; i < children.length; i++) {
            item.appendChild(children[i]);
        }
    };

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




    catalogNav.addEventListener('click', function (e) {
        var target = e.target;
        var item = closestItemByClass(target, 'catalog-nav_btn');
        if (item === null || item.classList.contains('is-active')) {
            return;
        }
        e.preventDefault(); //отменяем стандарное поведение кнопки

        var filterValue = item.getAttribute('data-filter');
        var previusBtnActive = catalogNav.querySelector('.catalog-nav_btn.is-active');
        previusBtnActive.classList.remove('is-active');
        item.classList.add('is-active');


        if (filterValue === 'all') {
            updateChildren(catalog, catalogItems);
            return;
        }
        var filteredItems = [];
        for (var i = 0; i < catalogItems.length; i++) {
            var current = catalogItems[i];
            if (current.getAttribute('data-category') === filterValue) {
                filteredItems.push(current);

            }
        }
        updateChildren(catalog, filteredItems);
    })

})();