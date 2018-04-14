var $files = [];

$( 'input[name="audio_files"]' ).on( 'change' , function(e) {
    if ( this.files && this.files.length > 0 ) {
        for( var i=0,file; file = this.files[i]; i++ ){
            var $fileObj = {};
            $fileObj.blob = file;
            ID3.loadTags( $fileObj.blob.name , function() {
                console.log( $fileObj.blob.name ); //its there as expected
                var tags = ID3.getAllTags( $fileObj.blob.name );
                console.log(tags); //its always null
                if(tags != null){
                    $fileObj.title     = tags.title;
                    $fileObj.artist    = tags.artist;
                    $fileObj.featuring = '';
                }else{
                    $fileObj.title    =  '';
                    $fileObj.artist   =  '';
                    $fileObj.featuring = '';
                }
                $files.push($fileObj);
            }($fileObj), {
                dataReader: FileAPIReader($fileObj.blob)
            });
        }
    }
});