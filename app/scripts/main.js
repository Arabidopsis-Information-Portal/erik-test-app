/* globals window, jQuery, AIP */
  'use strict';
  window.addEventListener('Agave::ready', function() {
    if(console){
        console.log('Agave has been initialized, do something');
        /* Remove this if you don't want to print the example */
          var appContext = $('.list-info');
          //AIP.displayDocs(appContext);
          AIP.displayList(appContext, 'araport', 'gene_summary_by_locus_v0.1', {});
    }
  });
