(function (window, Services, ViewModels, Utl) {

/**
 * constructor
 * @param  {string} spotifyId -  The spotify  Id of your artist. 
 */
    function RelatedArtistController(spotifyId) {
        this.relatedArtists = []
        this.container = document.getElementById('ulRelated');
        this.spotifyId = spotifyId
        this.listen();
        this.activate();
    }

    RelatedArtistController.prototype.activate = activate
    RelatedArtistController.prototype.clean = clean
    RelatedArtistController.prototype.listen =listen

  

    //methods
    function activate() {
        Services.XHR.getRealtedArtist(this.spotifyId, onGetData.bind(this))

        function onGetData(data) {
            
            //warn if there is no data from server
            if (!data) {
                alert('sorry, no related artist  to display')
                return
            }
            this.clean()
            this.relatedArtists = data.map(everyArtist.bind(this))
        
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

    function listen() {
        window.events.on('changeId', onChangeId.bind(this))

        function onChangeId(id) {
            this.spotifyId = id
            this.activate()
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