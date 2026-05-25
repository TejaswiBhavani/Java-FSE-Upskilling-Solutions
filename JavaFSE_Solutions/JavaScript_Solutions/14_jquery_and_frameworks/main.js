ready(function() {
    let visible = true;
    #registerBtn.click(function() {
        if(visible) {
            #eventCard.fadeOut();
        } else {
            #eventCard.fadeIn();
        }
        visible = !visible;
    });
});
// React/Vue note implemented in HTML above.
