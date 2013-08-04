// Create the tooltips only when document ready
 $(document).ready(function()
 {
     // MAKE SURE YOUR SELECTOR MATCHES SOMETHING IN YOUR HTML!!!
     $('translate_this2465').each(function() {
         $(this).qtip({
             content: {
                 text: $(this).next('.tooltiptext')
             }
         });
     });
 });

$('.translate_this2465').hover(function() {
  content = ($(this).attr('data-original'));
});
