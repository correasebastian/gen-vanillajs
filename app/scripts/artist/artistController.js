(function (window, Services, ViewModels, Utl) {

/**
 *  @param  {string} spotifyId -  The spotify  Id of your artist. 
 */

    function ArtistController(spotifyId) {
        this.artist;
        this.container = document.getElementById('artist');
        this.spotifyId = spotifyId
        this.listen();
        this.activate();


    }

    ArtistController.prototype.activate = activate
    ArtistController.prototype.clean = clean
    ArtistController.prototype.listen = listen


    //methods


    function activate() {
        Services.XHR.getArtist(this.spotifyId, onGetData.bind(this))

        function onGetData(data) {
            if (!data) {
                alert('sorry, no data to display')
                return
            }
            this.clean()
            // console.log(data)
            this.artist = new ViewModels.Artist(data);
            this.container.appendChild(this.artist.getArtistElement())
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


    //resgister the controller
    window.Controllers = window.Controllers || {}
    window.Controllers.ArtistController = ArtistController


})(window, Services, ViewModels, Utl);