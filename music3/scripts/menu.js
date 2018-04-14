$(document).ready(function(){
   jQuery('#menu_button').click(function(){
	if(jQuery('#options').width()===0)
	{
		jQuery('#options').css('width',jQuery(window).width()*33/100);
		jQuery('body').css('background', 'rgba(65, 65, 65, 0.9)');
        
	}
    
    if(jQuery('#info').width()===0)
    {
        jQuery('#info').css('width',jQuery(window).width()*67/100);
    }

	if(jQuery('#options').width()!=0)
	{
		jQuery('#options').css('width', '0');
        
		jQuery('body').css('background', 'rgba(255, 255, 255, 1)');
	}
    
    if(jQuery('#info').width()!=0)
    {
        jQuery('#info').css('width', '0');
    }
});
   
    
    jQuery("#now_playing").click(function(evt){
        if(evt.target.id!=='play_button')
        {
            if(jQuery('#now_playing').height()!=0)
            {
             jQuery("#now_playing").css('height',jQuery(window).height()*98/100);
            
            }
        }
    });
    
    

	
});
