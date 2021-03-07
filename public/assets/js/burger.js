$(function () {
    $(".eat-me").on("click", function (event) {
      event.preventDefault();
        const id = $(this).data("id");
    
        const newState = {
          devoured: true
        };
    
        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
          type: "PUT",
          data: newState
        }).then(
          function () {
            console.log("you have devoured, nice");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    $(".burgerInput").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
        burger_name: $("#newBurger").val().trim()
    };
    
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
    }).then(function() {
        console.log("New Burger Created");
        location.reload();
    })
    })
  })