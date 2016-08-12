(function(skuid)
{
   'use strict';

   var sortable = skuid.snippet.getSnippet('sortable'),
        tableId = 'sk-39dlIj-483',
        orderByFieldApiName = 'Sprint_Rank__c',
        spinnerURL = ''; // will use default

    // sortable(arguments[0].something..., orderByFieldApiName, spinnerURL); // could call from AF and get context as argument....
    sortable(tableId, orderByFieldApiName, spinnerURL);
})(skuid);
