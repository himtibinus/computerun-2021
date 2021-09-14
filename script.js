$('#right-button').click(function () {
    event.preventDefault();
    $('.menuslider').animate({
        scrollLeft: "+=300px"
    }, "slow");
});

$('#left-button').click(function () {
    event.preventDefault();
    $('.menuslider').animate({
        scrollLeft: "-=300px"
    }, "slow");
});