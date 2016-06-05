(function (window, Services, ViewModels) {


    var relatedArtists = []

    activate()

    //methods
    function activate() {
        Services.XHR.getRealtedArtist(1, onGetData)

        function onGetData(data) {
            relatedArtists = data.map(everyArtist)
            console.log(relatedArtists)
        }
    }

    function everyArtist(artist) {
        console.log(artist)
      
        return new ViewModels.RelatedArtist(artist.name, artist.id, artist.images)
    }

})(window, Services, ViewModels);