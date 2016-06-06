

(function (window, document) {

/**
 * simple pubSub Implementation
 */
    var service = {
        events: {},
        on: on,
        off: off,
        emit: emit

    }
    
    //methods
    function on(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    }
    
    function off(eventName, fn) {
        if (this.events[eventName]) {
            for (var i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            };
        }
    }
    
     function emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function (fn) {
                fn(data);
            });
        }
    }


    window.events = service

})(window, document);