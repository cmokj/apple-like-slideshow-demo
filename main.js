// 点击跳转
var $slide = $('ul > li');
for (let i = 0; i < $slide.length; i++) {
    $($slide[i]).on('click', function () {
        let s1 = i * -920;
        $('#images').css({
            transform: 'translateX(' + s1 + 'px)'
        })
        $($slide[i]).addClass('active').siblings('.active').removeClass('active');
    })
    n = i;
}

// 自动轮播
var n = 0;
var $size = $slide.length;
$slide.eq(n % $size).trigger('click')
var timeID = timer();

// 鼠标移入移出事件
$('.wrapper').on('mouseenter', function () {
    window.clearInterval(timeID);
})
$('.wrapper').on('mouseleave', function () {
    timeID = timer();
})

// 监听是否离开当前页面
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        window.clearInterval(timeID);
    } else {
        timeID = timer();
    }
})

// 轮播计时器   
function timer() {
    return setInterval(() => {
        n += 1;
        $slide.eq(n % $size).trigger('click')
    }, 2000)
}

// 监听是否离开当前页面
// document.addEventListener('visibilitychange', function () {
//     if (document.hidden) {
//         window.clearInterval(timer);
//     } else {
//         timer = setInterval(function () {
//             n++;
//             if (n < $slide.length) {
//                 let s2 = n * -920;
//                 $('#images').css({
//                     transform: 'translateX(' + s2 + 'px)'
//                 })
//             } else {
//                 n = -1;
//             }
//         }, 2000)
//     }

// })


