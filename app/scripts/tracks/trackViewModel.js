

(function (window, document) {


    function Track(name, id, uri) {
        this.name = name;
        this.id = id
        this.uri = uri;
        // this.create()
    }

    Track.prototype.getTrackElement = function () {
        // var container = document.getElementById('ulRelated');

        //container for every Track
        var mainDiv = document.createElement('div');

        //template bUilder for the related Artist 
        var template = [
            // '<iframe src="https://embed.spotify.com/?' + this.uri + '"',
            // ' width="300" height="90" ',
            // 'frameborder="0" allowtransparency="true"></iframe>'
            '<h5>' + this.name + '</h5>',
            '<video class="preview" controls=""  name="media">',
            '<source src="' + this.uri + '" type="audio/mpeg">',
            '</video>'
        ].join('')

        //assign to the "static" (no listener) content templateDiv 
        mainDiv.innerHTML = template;


        return mainDiv;

    };

    window.ViewModels = window.ViewModels || {}

    //assign to the NameSpace
    window.ViewModels.Track = Track

})(window, document);