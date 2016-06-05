(function (window, document) {
    /**
     * author module
     */

    var root = 'http://jsonplaceholder.typicode.com';
    var urlPost = root + '/posts'
    var oReq = new XMLHttpRequest();
    var z = {}
    z.bar()
    // oReq.addEventListener("progress", updateProgress);
    // oReq.addEventListener("load", transferComplete);
    // oReq.addEventListener("error", transferFailed);
    // oReq.addEventListener("abort", transferCanceled);
    // debugger

    oReq.onload = transferComplete
    oReq.onerror = transferFailed
    oReq.open("GET", urlPost, true)

    oReq.send()


    oReq.onreadystatechange = function () {
        debugger
        this.myVar = this.responseText.length;

    };


    // progress on transfers from the server to the client (downloads)
    function updateProgress(oEvent) {
        if (oEvent.lengthComputable) {
            var percentComplete = oEvent.loaded / oEvent.total;
            // ...
        } else {
            // Unable to compute progress information since the total size is unknown
        }
    }

    function transferComplete(evt) {
        var posts = []
        var OK = 200
        console.log("The transfer is complete.", this);
        if (this.status === OK) {
            // console.log(this.responseText); // 'This is the returned text.'
            posts = JSON.parse(this.responseText)
            console.log(posts)
        } else {
            console.error('Error: ' + this.status, 'msg: ' + this.statusText); // An error occurred during the request.

        }
        return posts
    }

    function transferFailed(evt) {
        console.error("An error occurred while transferring the file.");
    }

    function transferCanceled(evt) {
        console.log("The transfer has been canceled by the user.");
    }

})(window, document);