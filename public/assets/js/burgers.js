$(function() {
    $(".changeDevour").on("click", function(event) {
        console.log('DEVOURED')
      var id = $(this).data("id");
      console.log(id)
      var newDevour = $(this).data("devour");
      console.log(newDevour)
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {
            devoured: true
        }
      }).then(
        function() {
          console.log("got devoured", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});