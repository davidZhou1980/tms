$(document).ready(function() {
    $("#s_city").mouseenter(function() {
        $(this).addClass("cityhover");
        $("#d_city").show();
    }).mouseleave(function() {
        $("#d_city").hide();
        $(this).removeClass("cityhover");
    });

    $("#d_city").mouseenter(function() {
        $(this).show();
        $("#s_city").addClass("cityhover");
    }).mouseleave(function() {
        $(this).hide();
        $("#s_city").removeClass("cityhover");
    });

    $("#d_city ul li").click(function() {
        $("#s_city").text($(this).text());
        $("#d_city").hide();
        $("#s_city").removeClass("cityhover");
    });

    $("#s_all_cate").mouseenter(function() {
        $("#d_cate_wrap").show();
    }).mouseleave(function() {
       $("#d_cate_wrap").hide();
    });

    $("#d_cate_wrap").mouseenter(function() {
       $(this).show();
    }).mouseleave(function() {
       $(this).hide();
    });
})