/*jslint browser: true*/
/*global $, _, data*/
$(document).ready(function() {
  var names = JSON.parse(data);
  $("#generatebutton").on("click", function() {
    $("#resultlist").empty();
    $("#resultlist").append(
      _.map(_.sample(names, $("#generatenum").val()),
        function(name) { return "<li>" + name + "</li>"; })
    );
  });
});

