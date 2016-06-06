

(function (window, document) {


    function Artist(values) {
        Object.keys(values).forEach(function (key) {
            this[key] = values[key];
        }.bind(this));


    }

    Artist.prototype.getArtistElement = function () {
        // var container = document.getElementById('ulRelated');

        //container for every Artist
        var mainDiv = document.createElement('div');
        var ancher = document.createElement('a');
        //put al the content what dont have listeners
        var templateDiv = document.createElement('div');

        //template bUilder for the related Artist 
        var template = [
            '<div class="some-directive">',
            // '<h1>' + this.name + '</h1>',
            '<a href="'+ this.external_urls.spotify + '"> <h1>' + this.name + '</h1> </a>',
            '<img class="main-img" src="' + this.images[0].url + '">',
            '<h5> followers: ' + this.followers.total + '</h2>',
            '</div>'
        ].join('')

        //assign to the "static" (no listener) content templateDiv 
        templateDiv.innerHTML = template
    

        // mainDiv.appendChild(h1)
        mainDiv.appendChild(templateDiv)

        //insert to the  related artist container 
        // container.appendChild(mainDiv);
        return mainDiv;

    };

    window.ViewModels = window.ViewModels || {}

    //assign to the NameSpace
    window.ViewModels.Artist = Artist



})(window, document);