var $ = skuid.$, console= window.console;

console.log(arguments);

var tableId = arguments[0],
  orderByFieldApiName = arguments[1],
  spinnerURL = arguments[2] || 'http://imgur.com/a/x2SJZ',
  component, height;

$(document.body).one('pageload', function ()
{
  'use strict';

  // Sprint Work Drag & Drop reorder
  component = skuid.$C(tableId);
  var listContents = component && component.element.find('.nx-list-contents');

  /*************SORTABLE********************/

  listContents.sortable(
  {
    forcePlaceholderSize: true,
    //containment: "parent",
    helper: fixWidthHelper,
    start: function (event, ui)
    {
      var degs = 0 + "deg";
      ui.item.css(
      {
        "transform": `rotate(${degs})`,
        "-moz-transform": `rotate(${degs})`,
        "-webkit-transform": `rotate(${degs})`
      });
      ui.placeholder.children('td').css(
      {
        visibility: "visible",
        height: height,
        /*border-top: 1px solid #dad55e;*/
        "border-top": "1px solid #A0C6FF",
        "border-bottom": "1px solid #A0C6FF",
        /*background: #fffa90 !important;*/
        color: "#777620 !important;"
      });
      ui.placeholder.children('td:first-child').css(
      {
        "border-left": "1px solid #A0C6FF"
      });
      ui.placeholder.children('td:last-child').css(
      {
        "border-right": "1px solid #A0C6FF"
      });
    },
    stop: stopHelper
  });
});
/*************FUNCTIONS********************/

function stopHelper(event, ui)
{
  'use strict';

  var data = ui.item.data('object'),
    model = data.list.model,
    movedRow = data.row,
    movedRowNum = movedRow[orderByFieldApiName],
    target = $(event.target),
    found = false;

  console.log(`Moving row #${movedRowNum}...`);

  target.children().each(function (index, tr)
  {
    var row = $(tr).data('object').row,
      order = row[orderByFieldApiName];

    // This will update all the rows following
    // the one we chose to drop our row on
    if (index + 1 !== order)
    {
      model.updateRow(row, orderByFieldApiName, index + 1,
      {
        initiatorId: component._GUID
      });
      if (movedRowNum === order)
      {
        found = true;
        console.log(`Moved row #${order} into position #${index+1}`);
      }
    }
  });

  if (!found)
  {
    console.log(`Destination position same as source`);
  }

  $.blockUI(
  {
    message: `<img src="${spinnerURL}"/><br><h1>Updating order...</h1>`
  });
  $.when(model.save())
    .done(function ()
    {
      $.unblockUI();
    });
  ui.item.removeClass('tilt');
}

// Fix the dragged container width
function fixWidthHelper(e, ui)
{
  'use strict';

  ui.children().each(function ()
  {
    $(this).width($(this).width());
    height = $(this).height();
  });
  return ui;
}
