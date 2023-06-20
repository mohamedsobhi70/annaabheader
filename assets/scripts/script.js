
// Drop Down In Header 
if ($(".dropdown-list").length) {
    $(".dropdown-list").hover(function (e) {
        $(".colored-act").removeClass("active")
        if ($(this).find(".dropdown-list-items").hasClass("active")) {
            $(".dropdown-list-items").removeClass("active");
            $(this).removeClass("active")
        }
        else {
            $(".dropdown-list-items").removeClass("active");
            $(this).find(".dropdown-list-items").addClass("active");
            $(this).addClass("active")
        }
    })
}

// mobile dropdown 
if ($(".menu-dropdown").length) {
    if ($(window).width() < 1023) {
        $(".menu-dropdown").on("click", function (e) {
            $(this).find(".menu-dropdown-list").slideToggle(500);
        })
    }
    else{
        $(".menu-dropdown").hover(function (e) {
            $(".colored-act").removeClass("active")
            if ($(this).find(".menu-dropdown-list").hasClass("active")) {
                $(".menu-dropdown-list").removeClass("active");
                $(this).removeClass("active")
            }
            else {
                $(".menu-dropdown-list").removeClass("active");
                $(this).find(".menu-dropdown-list").addClass("active");
                $(this).addClass("active")
            }
        })
    }
}
// =================================================

// show - hide  mobile menu 
$(".mob-menu-btn").on("click", function () {
    $(".mob-menu").addClass("active");
})

$(".mob-menu-closbtn").on("click", function () {
    $(".mob-menu").removeClass("active");
})