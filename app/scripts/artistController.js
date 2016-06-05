(function (window, Services, ViewModels) {


    var Artist;

    activate()

    //methods
    function activate() {
        Services.XHR.getArtist(1, onGetData)

        function onGetData(data) {
            if (!data) {

            }
            console.log(data)
        }
    }


})(window, Services, ViewModels);