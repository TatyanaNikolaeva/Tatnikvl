// переменные видны только внутри функции


; (function () {
    // библиотека для постепенной загрузки страницы
    var lazyLoadInstance = new LazyLoad({
        element_selector: '.lazy'
        // Your custom settings go here
    });
    lazyLoadInstance.update();
})();


; (function () {
    const headerPage = document.querySelector('.header-page');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 0) {
            headerPage.classList.add('is-active');
        }
        else {
            headerPage.classList.remove('is-active');
        }
    });
})();


// вывод попапов, закрытие, запрет скрола
; (function () {
    const body = document.querySelector('body');


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

    const closestAttr = function (item, attr) {
        var node = item;
        while (node) {
            const attrVatue = node.getAttribute(attr);

            if (attrVatue) {
                return attrVatue;
            }
            node = node.parentElement;

        }
        return null;
    };

    var showPopup = function (target) {
        target.classList.add('is-active');
    };
    var closePopup = function (target) {
        target.classList.remove('is-active');
    };
    var toggleScroll = function () {
        body.classList.toggle('no-scroll');
    };


    body.addEventListener('click', function (e) {
        const target = e.target;
        const popupClass = closestAttr(target, 'data-popup');

        if (popupClass === null) {
            return;
        }

        e.preventDefault();

        var popup = document.querySelector('.' + popupClass);

        if (popup) {
            showPopup(popup);
            toggleScroll();
        }
    });

    body.addEventListener('click', function (e) {
        var target = e.target;

        if (target.classList.contains('popup-close') || target.classList.contains('popup_inner')) {
            var popup = closestItemByClass(target, 'popup');
            closePopup(popup);
            toggleScroll();
        }
    });


    body.addEventListener('keydown', function (e) {
        if (e.keyCode !== 27) {
            return;
        }
        var popup = document.querySelector('.popup.is-active');
        if (popup) {
            closePopup(popup);
            toggleScroll();
        }
    });


})();