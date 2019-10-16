window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var big_img = big.querySelector('img');
    preview_img.addEventListener('mousemove', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })

    preview_img.addEventListener('mousemove', function(e) {
        //console.log(e.pageX); //获取鼠标相对于文档页面的x坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        var previewW = this.offsetWidth;
        var previewH = this.offsetHeight;
        var maskW = mask.offsetWidth;
        var maskH = mask.offsetHeight;
        // console.log(x);
        // if (x > 0 && x < )
        //mask.style.left = x + 'px';
        // if (x > 0 && x < (maskW / 2)) {
        //     mask.style.left = 0;
        // } else if (x >= (maskW / 2) && x < previewW - (maskW / 2)) {
        //     mask.style.left = x - (maskW / 2) + 'px';
        // } else if (x >= previewW - (maskW / 2)) {
        //     mask.style.right = 0;
        // }
        // if (y > 0 && y < (maskH / 2)) {
        //     mask.style.top = 0;
        // } else if (y >= (maskH / 2) && y < previewH - (maskH / 2)) {
        //     mask.style.top = y - (maskH / 2) + 'px';
        // } else if (y >= previewH - (maskH / 2)) {
        //     mask.style.bottom = 0;
        // }

        //鼠标移动的时候，让黄色盒子跟着鼠标来走
        maskX = x - mask.offsetWidth / 2;
        maskY = y - mask.offsetHeight / 2;

        if (maskX < 0) {
            maskX = 0;
        } else if (maskX > this.offsetWidth - mask.offsetWidth) {
            maskX = this.offsetWidth - mask.offsetWidth;
        }

        if (maskY < 0) {
            maskY = 0;
        } else if (maskY > this.offsetHeight - mask.offsetHeight) {
            maskY = this.offsetHeight - mask.offsetHeight;
        }

        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // console.log(big_img.offsetWidth);
        // console.log(big.offsetWidth);

        big_img.style.left = -((big_img.offsetWidth - big.offsetWidth - 2 * big.style.border) / (preview_img.offsetWidth - mask.offsetWidth) * maskX) + 'px';
        big_img.style.top = -((big_img.offsetHeight - big.offsetHeight - 2 * big.style.border) / (preview_img.offsetHeight - mask.offsetHeight) * maskY) + 'px';
    })
})