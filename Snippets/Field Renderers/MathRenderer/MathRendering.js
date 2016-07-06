var $ = skuid.$,
    field = arguments[0],
    value = skuid.utils.decodeHTML(arguments[1]);

switch(field.mode) {
    case 'read':
        skuid.ui.fieldRenderers[field.metadata.displaytype].read(field, value);
        break;
    
    case 'readonly':
        skuid.ui.fieldRenderers[field.metadata.displaytype].read(field, value);
        break;
    
    case 'edit':
        skuid.ui.fieldRenderers[field.metadata.displaytype].edit(field, value);
        
        function validate(val) {
            try {
                return math.eval(val);
            } catch (e) {
                return false;
            }
        }
        
        var fieldElem = $(field.element).find(':input');
        fieldElem.css({
            "padding-right": "20px"
        });
        
        fieldElem.on("keydown keyup", function(e) {
            if (this.value) {
                temp = validate(this.value);
            
                if (temp) {
                    $(this).css({
                        "background-color": "#f8f8f8"
                    });
                
                    if (e.which == $.ui.keyCode.ENTER || e.which == $.ui.keyCode.TAB) {
                        field.model.updateRow(field.row, field.id, temp);
                    }
                } else {
                    $(this).css({
                        "background-color": "rgba(255, 0, 0, 0.2)"
                    });
                }
            }
        });
        
        $('<i class="fa fa-calculator">').css({
            "position": "relative",
            "float": "right",
            "margin-top": "-20px",
            "z-index": "2",
            "color": "#30AD62",
            "cursor": "default"
        }).insertAfter(fieldElem);
}