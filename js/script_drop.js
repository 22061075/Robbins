$("#winston").draggable();
        $("#dropzone").droppable({
            drop: function(event, ui) {
              $(this).css('background-image', 'url("./free_img/cake_info2.png")');
            },
            out: function(event, ui) {
                $(this).css('background-image', 'url("./free_img/cake_center.png")');
            }
        });
