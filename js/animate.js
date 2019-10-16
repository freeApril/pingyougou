function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var x = obj.offsetLeft;
        //var step = Math.ceil((target - x) / 10); //只要有除法就会有除不尽的问题，所以要向上取整
        var step = (target - x) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (x == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        } else {
            obj.style.left = x + step + 'px';
        }
    }, 20);
};