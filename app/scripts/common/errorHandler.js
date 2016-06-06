
(function (window, document) {
    /**
     * treat error handling like event handling in JavaScript.
     * so, this will capture sync and async , awesome
     */
    window.addEventListener('error', function (e) {
        var stack = e.error.stack;
        var message = e.error.toString();
        if (stack) {
            message += '\n' + stack;
        }

        console.error(message)
        //log to the server
        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', '/log', true);
        // xhr.send(message);
    });

})(window, document);