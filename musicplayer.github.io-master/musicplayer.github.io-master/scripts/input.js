$('input').change(function(){
	//var Files = this.files;

	var req = new XMLHttpRequest();
	req.open('GET', '', true);
	req.responseType = 'arraybuffer';

	req.onload = function() {
		var metadata = AudioMetaData.id3v2(req.response);
		$('#albums').append(document.createTextNode(JSON.stringify(metadata, null, '  ')));
	};

	req.send(null);
	//for(var i=0; i<Files.length-1; i++){
		//$('#albums').append("<div>"+Files[1].name+"</div>");	
	//}
	
});