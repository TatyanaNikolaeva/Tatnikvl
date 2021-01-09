; (function () {
    var body = document.querySelector('body');



    // идем все выше к родителю
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

    var scroll = function (target) {
        var targetTop = target.getBoundingClientRect().top;
        var scrollTop = window.pageYOffset;
        var targetOffsetTop = targetTop + scrollTop;
        window.scrollTo(0, targetOffsetTop);
    }

    body.addEventListener('click', function (e) {
        var target = e.target;
        var scrollToItemClass = closestAttr(target, 'data-scroll-to');
        if (scrollToItemClass === null) {
            return;
        }
        e.preventDefault(); //отменяем стандартное поведение
        var scrollToItem = document.querySelector('.' + scrollToItemClass);
        if (scrollToItem) {
            scroll(scrollToItem);
        }
    });
})();