// 点击跳转
var $slide = $('ul > li');
for (let i = 0; i < $slide.length; i++) {
    $($slide[i]).on('click', function (x) {
        var s1 = i * -920;
        $('#images').css({
            transform: 'translateX(' + s1 + 'px)'
        })
    })
    n = i;
}
// 自动轮播
var n = 0;
var timer = setInterval(function () {
    n++;
    if (n < $slide.length) {
        let s2 = n * -920;
        $('#images').css({
            transform: 'translateX(' + s2 + 'px)'
        })
    } else {
        n = 0;
    }
}, 2000)

// 鼠标移入移出事件
$('#wrapper').on('mouseenter', function () {
    clearInterval(timer);
})
$('.wrapper').on('mouseout', function () {
    timer = setInterval(function () {
        n++;
        if (n < $slide.length) {
            let s2 = n * -920;
            $('#images').css({
                transform: 'translateX(' + s2 + 'px)'
            })
        } else {
            n = 0;
        }
    }, 2000)
})


