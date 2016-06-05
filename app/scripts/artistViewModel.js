

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

        //put al the content what dont have listeners
        var templateDiv = document.createElement('div');

        //template bUilder for the related Artist 
        var template = [
            '<div class="some-directive">',
            '<h2>' + this.name + '</h2>',
            '<img src="' + this.images[0].url + '">',
            
            '</div>'
        ].join('')

        //assign to the "static" (no listener) content templateDiv 
        templateDiv.innerHTML = template
  
        mainDiv.appendChild(templateDiv)

        //insert to the  related artist container 
        // container.appendChild(mainDiv);
        return mainDiv;

    };

    window.ViewModels = window.ViewModels || {}

    //assign to the NameSpace
    window.ViewModels.Artist = Artist

})(window, document);