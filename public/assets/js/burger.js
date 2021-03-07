//on click function ready for the event
$(function () {
    $(".eat-me").on("click", function (event) {
      event.preventDefault();
        const id = $(this).data("id");
    
        //new variable for the changing status of devoured to eaten
        var changeStatus = {
          devoured: true
        };
    
        // ajax put request to update burger from available to eaten
        $.ajax("/api/burger/" + id, {
          type: "PUT",
          data: changeStatus
        }).then(
          function () {
            console.log("you have eaten, nice");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    //listening for a new burger on submit click
    $(".burgerInput").on("submit", function(event) {
    event.preventDefault();
    var burgerNew = {
        burger_name: $("#newBurger").val().trim()
    };
    //followed by ajax post request of a new burger to the table
    $.ajax("/api/burger", {
        type: "POST",
        data: burgerNew
    }).then(function() {
        location.reload();
    })
    })
  })
