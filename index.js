let clicked = 0;

function clickCount() {
    console.log("function clickCount ran.")
    $(".js-clicker").on("click", function() {
        clicked++;
        $(".js-click-counter").text(clicked);
    });
}

$(clickCount);