

(function (window, document) {
    /**
     * author module
     */

    var root = 'https://api.spotify.com/v1/';
    var OK = 200


    //api for the service
    var service = {
        getRealtedArtist: getRealtedArtist
    }

    ///methods definition
    function getRealtedArtist(id, cb) {
        var relatedUrl = 'https://api.spotify.com/v1/artists/4dpARuHxo51G3z768sgnrY/related-artists'
        var relatedArtists = []
        function normalize(data) {
            if (typeof data === 'object' && data.artists)
                relatedArtists = data.artists
            cb(relatedArtists)

        }
        xhr(relatedUrl, normalize)
    }


    //generic wrapper for the Get request 
    function xhr(url, cb) {
        var oReq = new XMLHttpRequest();

        oReq.onload = transferComplete
        oReq.onerror = transferFailed
        oReq.open("GET", url, true)

        oReq.send()

        function transferComplete(evt) {
            var data
            console.log("The transfer is complete.", this);
            if (this.status === OK) {
                // console.log(this.responseText); // 'This is the returned text.'
                data = JSON.parse(this.responseText)
                // console.log(relatedArtist)
            } else {
                console.error('Error: ' + this.status, 'msg: ' + this.statusText); // An error occurred during the request.

            }
            cb(data)
        }
    }



    function transferFailed(evt) {
        console.error("An error occurred while transferring the file.");
    }

    function transferCanceled(evt) {
        console.log("The transfer has been canceled by the user.");
    }

    window.Services = window.Service || {}

    window.Services.XHR = service

})(window, document);