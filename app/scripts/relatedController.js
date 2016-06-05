(function (window, Services, ViewModels, Utl) {


    function RelatedArtistController() {
        this.relatedArtists = []
        this.container = document.getElementById('ulRelated');
        this.activate();
    }

    RelatedArtistController.prototype.activate = activate
    RelatedArtistController.prototype.clean = clean

    // RelatedArtistController.prototype.activate = activate
    // var relatedArtists = []
    // var container = document.getElementById('ulRelated');

    // activate()

    //methods
    function activate() {
        Services.XHR.getRealtedArtist(1, onGetData.bind(this))

        function onGetData(data) {
            if (!data) {
                alert('sorry, no data to display')
                return
            }
            this.relatedArtists = data.map(everyArtist.bind(this))
            // console.log(relatedArtists)
        }

        function everyArtist(artist) {
            // console.log(artist)
            //
            var newArtist = new ViewModels.RelatedArtist(artist.name, artist.id, artist.images)

            //append to the main container
            this.container.appendChild(newArtist.getArtistElement())
            return newArtist
        }
    }

    function clean() {
        Utl.cleanNode(this.container)
    }


    window.Controllers = window.Controllers || {}


    window.Controllers.RelatedArtistController = RelatedArtistController
    // window.Controllers.RelatedArtists = {
    //     relatedArtists: relatedArtists,
    //     container: container
    // }

})(window, Services, ViewModels, Utl);