function getPropertyFromTheme(selector, prop) {
    for (var i in document.styleSheets) {
        if (document.styleSheets[i].href !== null) {
            console.log(document.styleSheets[i]);
            if (document.styleSheets[i].href.indexOf('skuidtheme.css') > -1) {
                for (var j in document.styleSheets[i].rules) {
                    if (document.styleSheets[i].rules[j].selectorText.indexOf(selector) > -1) {
                        return document.styleSheets[i].rules[j].style[prop];
                    }
                }
            }
        }
    }
}

var $ = skuid.$,
    field = arguments[0],
    value = skuid.utils.decodeHTML(arguments[1]),
    iconCol = getPropertyFromTheme('.ui-icon.ui-icon-blank', 'color'),
    fieldCol = "#f8f8f8";

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
            console.log(val);
            if (val === "") { return false; }
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
        
        fieldElem.on("paste keyup", function(e) {
            if (this.value) {
                temp = validate(this.value);
            
                if (temp !== false) {
                    $(this).css({
                        "background-color": fieldCol
                    });
                
                    if (e.which == $.ui.keyCode.ENTER || e.which == $.ui.keyCode.TAB) {
                        field.model.updateRow(field.row, field.id, temp);
                    }
                } else {
                    $(this).css({
                        "background-color": "rgba(255, 0, 0, 0.2)"
                    });
                }
            } else {
                $(this).css({
                    "background-color": fieldCol
                });
            }
        });
        
        $('<i class="ui-icon fa fa-calculator">').css({
            "position": "relative",
            "float": "right",
            "margin-top": "-20px",
            "z-index": "2",
            "color": iconCol,
            "cursor": "default"
        }).insertAfter(fieldElem);
}