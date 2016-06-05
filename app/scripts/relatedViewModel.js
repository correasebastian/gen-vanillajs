

(function (window, document) {


    function RelatedArtist(name, id, imgs) {
        this.name = name;
        this.id = id
        this.imgs = imgs;
        // this.create()
    }

    RelatedArtist.prototype.getArtistElement = function () {
        // var container = document.getElementById('ulRelated');

        //container for every relatedArtist
        var mainDiv = document.createElement('div');

        //action element, this emit the change of artist
        var ancher = document.createElement('a');

        //put al the content what dont have listeners
        var templateDiv = document.createElement('div');

        //template bUilder for the related Artist 
        var template = [
            '<div class="some-directive">',
            '<img src="' + this.imgs[this.imgs.length - 1].url + '">',
            '<h4>' + this.name + '</h4>',
            '</div>'
        ].join('')

        //assign to the "static" (no listener) content templateDiv 
        templateDiv.innerHTML = template

        ancher.text = this.name
        ancher.addEventListener('click', onClick.bind(this), false)
        // div.addEventListener('click', onClick)


        //emit the event to the mediator to start all the changes in the differents modules
        function onClick(e) {

            e.preventDefault()
            console.log('on click', this)
        }

        mainDiv.appendChild(ancher)
        mainDiv.appendChild(templateDiv)

        //insert to the  related artist container 
        // container.appendChild(mainDiv);
        return mainDiv;

    };

    window.ViewModels = window.ViewModels || {}

    //assign to the NameSpace
    window.ViewModels.RelatedArtist = RelatedArtist

})(window, document);