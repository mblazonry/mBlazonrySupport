var $ = skuid.$,
    field = arguments[0],
    lookups = arguments[1];

// Find currently active lookup
var active = Object.keys(field.row).find(k => field.row[k] && lookups.includes(k));

switch(field.mode) {
    case 'read':

    case 'readonly':
        if (active) {
            skuid.ui.fieldRenderers.REFERENCE.read(field, field.row[active]);
        } else {
            skuid.ui.fieldRenderers.REFERENCE.read(field);
        }
    break;
   
    case 'edit':
        if (active) {
            skuid.ui.fieldRenderers.REFERENCE.edit(field, field.row[active]);
        } else {
            skuid.ui.fieldRenderers.REFERENCE.edit(field);
        }
}