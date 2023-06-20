

if ($(".menu-dropdown").length) {

    $(".menu-dropdown").on("mouseenter", function () {
        if ($(window).width() > 1024) {
            $(this).find(".menu-dropdown-list").addClass("active");
        }
    }).on("mouseleave", function () {
        if ($(window).width() > 1024) {
            $(this).find(".menu-dropdown-list").removeClass("active");
        }
    }).on("click", function () {
        if ($(window).width() < 1023) {
            $(this).find(".menu-dropdown-list").slideToggle(500);
        }
    })

}
// =================================================

// show - hide  mobile menu 
$(".mob-menu-btn").on("click", function () {
    $(".mob-menu").addClass("active");
})

$(".mob-menu-closbtn").on("click", function () {
    $(".mob-menu").removeClass("active");
})