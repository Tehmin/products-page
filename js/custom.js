$(document).ready(function () {

    $(".logo_block").click(function () {
        $('.logo_block').addClass("rotate_logo");
    })

    $('.steps_block_item').click(function () {
        $('div.clicked').removeClass('clicked');
        $(this).addClass('clicked');
    });

    $('.hide').click(function () {
        $(this).parent().parent().parent().hide();
    });

    $('.details').click(function () {
        $('.optional_block').show();
    });

    $(".update").click(function () {
        $('.refresh').toggleClass("rotate_refresh_icon");
    })

    $(".search_btn").click(function () {
        $('#search').css("background", "rgb(249, 249, 249)");
    });

});