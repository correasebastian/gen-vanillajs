(function (window, Controllers) {
    'use strict';

	/**
	 * Sets up a brand new Conde-nast artist page.
	 *
	 * @spoId {string}  The spotify  Id of your artist.
	 */
    function Conde(spoId) {
        this.spoId = spoId
        this.artistController = new Controllers.ArtistController(this.spoId)
        this.tracksController = new Controllers.TrackController(this.spoId)
        this.relatedController = new Controllers.RelatedArtistController(this.spoId)
    }

    var adele = '4dpARuHxo51G3z768sgnrY'
    var todo = new Conde(adele);


})(window, Controllers);