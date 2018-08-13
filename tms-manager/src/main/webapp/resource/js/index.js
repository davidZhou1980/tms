$(document).ready(function() {
    //首页轮播
    function slideshow() {
        var aPage = $('#page1 a');
        var aImg = $('#slides1 li');
        var imgSize = aImg.size();
        var index = -1;
        aPage.click(function() {
            index = $(this).index();
            change(index);
        })
        function change(index) {
            aPage.removeClass('selected')
            aPage.eq(index).addClass('selected');
            aImg.stop();
            aImg.eq(index).siblings().animate({ opacity: 0 }, 1000).hide()
            aImg.eq(index).show().animate({ opacity: 1 }, 1000)
        }
        function autoshow() {
            index = index + 1;
            if (index <= imgSize - 1) {
                change(index)
            }
            else {
                index = 0; change(index)
            }
        }
        autoshow(0);
        var int1 = setInterval(autoshow, 5000);
    }
    setTimeout(slideshow, 2000);
})