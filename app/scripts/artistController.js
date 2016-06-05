(function (window, Services, ViewModels, Utl) {


    function ArtistController() {
        this.artist;
        this.container = document.getElementById('artist');
        this.activate();

    }

    ArtistController.prototype.activate = activate
    ArtistController.prototype.clean = clean

    // var Artist;

    // activate()

    //methods
    function activate() {
        Services.XHR.getArtist(1, onGetData.bind(this))

        function onGetData(data) {
            if (!data) {
                alert('sorry, no data to display')
                return
            }
            console.log(data)
            this.artist = new ViewModels.Artist(data);
            this.container.appendChild(this.artist.getArtistElement())
        }
    }

    function clean() {
        Utl.cleanNode(this.container)
    }


    window.Controllers = window.Controllers || {}


    window.Controllers.ArtistController = ArtistController


})(window, Services, ViewModels, Utl);