(function (window, Services, ViewModels, Utl) {


    function TrackController(spotifyId) {
        this.tracks = []
        this.container = document.getElementById('tracks');
        this.spotifyId = spotifyId
        this.listen();
        this.activate();
    }

    TrackController.prototype.activate = activate
    TrackController.prototype.clean = clean
    TrackController.prototype.listen = listen

    // TrackController.prototype.activate = activate
    // var tracks = []
    // var container = document.getElementById('ulRelated');

    // activate()

    //methods
    function activate() {
        Services.XHR.getTracks(this.spotifyId, onGetData.bind(this))

        function onGetData(data) {
            if (!data) {
                alert('sorry, no tracks   to display')
                return
            }
            this.clean()
            this.tracks = data.map(everyTrack.bind(this))
            // console.log(tracks)
        }

        function everyTrack(track) {
            // console.log(track)
            //
            var newTrack = new ViewModels.Track(track.name, track.id, track.preview_url)

            // //append to the main container
            this.container.appendChild(newTrack.getTrackElement())
            return newTrack
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


    window.Controllers.TrackController = TrackController
    // window.Controllers.tracks = {
    //     tracks: tracks,
    //     container: container
    // }

})(window, Services, ViewModels, Utl);