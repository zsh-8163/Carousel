function animate(obj,target){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        if(target > obj.offsetLeft){
            var step = Math.ceil((target-obj.offsetLeft) / 10);
        } else if(target < obj.offsetLeft) {
            var step = Math.floor((target-obj.offsetLeft) / 10);
        }
        if(target == obj.offsetLeft){
            //到达目的地，停止
            clearInterval(obj.timer);
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    },15);
}