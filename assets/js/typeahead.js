var id_user_selected = 0;

function cargar_typeahead(datos){
        $(function() {
          'use strict'
          
        var substringMatcher = function(strs) {
          return function findMatches(q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            var substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            for (var i = 0; i < strs.length; i++) {
              if (substrRegex.test(strs[i])) {
                matches.push(strs[i]);
              }
            }

            cb(matches);
          };
        };
        
        $('#remitente').typeahead({
          minLength: 1,
          order: "asc",
          hint: true,
          source: datos,
          display: 'nombres_cargo',
          callback: {
              onClickAfter: function (node, a, item, event) {
                  id_user_selected = item.id_user;
                  $("#lnk_editar_typeahead").show();
                  $('#remitente').attr('disabled','disabled');
              }
          },
          debug: true
      });

        $(".twitter-typeahead").css("width","100%");
      });
      $("#lnk_editar_typeahead").click(function(){
        $("#lnk_editar_typeahead").hide();
        $('#remitente').removeAttr('disabled').val('').focus();
        id_user_selected = 0;
      });
}
  
function getValorTypeahead(){
  return id_user_selected;
}

function setValorTypeahead(valor){
  id_user_selected = valor;
}