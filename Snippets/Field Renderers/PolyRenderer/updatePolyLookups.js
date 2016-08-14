var params = arguments[0],
    lookups = arguments[1],
	$ = skuid.$,
	model = params.model;

var prefix = params.row.PolyLookupDummy.substring(0, 3);
var field = model.fields.find(f => (f.refprefix == prefix) && lookups.includes(f.id));

if (field) {
    var updates = {};

    // Clear lookups
    for (let e of lookups) { updates[e] = null; }

    updates[field.id] = params.row.PolyLookupDummy;
    params.model.updateRow(params.row, updates);
}