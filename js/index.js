window.addEventListener('load', function() {
    // 1、获取元素
    var arrow_l = this.document.querySelector('.arrow-l');
    var arrow_r = this.document.querySelector('.arrow-r');
    var focus = this.document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    var num = 0;
    // 2、鼠标经过focus就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {
            arrow_l.style.display = 'none';
            arrow_r.style.display = 'none';
            timer = setInterval(function() {
                // 自动调用事件 很强大!!!
                arrow_r.click();
            }, 2000)
        })
        // 3、根据图片的张数创建小圆圈
    var ul = focus.querySelector('ul');
    // this.console.log(ul.children.length);
    var ol = focus.querySelector('ol');
    for (var i = 0; i < ul.children.length; i++) {
        var li = this.document.createElement('li');
        // 记录当前小li 的索引号,自定义属性
        li.setAttribute('index', i);
        ol.appendChild(li);
        //小圆圈的排他思想
        // 点击当前小圆圈，就添加current类，其余小圆圈就移除这个current类
        li.addEventListener('click', function() {
            //把所有小li清除current
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            //点击第几个小圆圈就把该小圆圈的下标乘以图片的宽度，得到的值为动画移动的距离
            // 移动的是ul,注意 参数target是负值
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            // console.log(index);

            // console.log(focusWidth);
            animate(ul, -index * focusWidth);
        })
    }
    // 吧ol里面的第一个小li设置类名为 current
    ol.children[0].className = 'current';
    //克隆第一张小li放ul里面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 点击左右按钮 切换轮播图
    var circle = 0;
    arrow_r.addEventListener('click', function() {
        // circle = num;
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * focusWidth);
        circle++;
        if (circle == ul.children.length - 1) {
            circle = 0;
        }
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
        circleChange()
    })
    arrow_l.addEventListener('click', function() {
        // circle = num;
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * focusWidth + 'px';
        }
        num--;
        animate(ul, -num * focusWidth);
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        circleChange()
    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';

    }

    //自动播放功能
    var timer = setInterval(function() {
        // 自动调用事件 很强大!!!
        arrow_r.click();
    }, 2000)

})