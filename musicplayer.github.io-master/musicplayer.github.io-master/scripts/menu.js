$('#menu_button').click(function(){
	if($('#options').width()===0)
	{
		$('#options').css('width',$(window).width()*33/100);
		$('body').css('background', 'rgba(65, 65, 65, 0.9)');
	}

	if($('#options').width()!=0)
	{
		$('#options').css('width', '0');
		$('body').css('background', 'rgba(255, 255, 255, 1)');
	}
});


$(document).ready(function(){
    $("#now_playing").click(function(evt){
        if(evt.target.id!=='play_button')
        {
            if($('#now_playing').height()!=0)
            {
             $("#now_playing").css('height',$(window).height()*98/100);
            
            }
        }
    });
});