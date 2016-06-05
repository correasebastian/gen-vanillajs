(function (window, document) {
    /**
     * utilities module
     */

    var service = {
        //remove all the child nodes from a parentNode
        cleanNode: cleanNode
    }

    function cleanNode(elm) {
        while (elm.hasChildNodes())
            elm.removeChild(elm.lastChild);
    }

    window.Utl = window.Utl || {}

    window.Utl = service
})(window, document);