//引用函数
document.createElement("script").setAttribute("src", "animate.js");
window.addEventListener('load',function(){
    //获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;//清除定时器变量
    })
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function(){
            //手动调用点击事件
            arrow_r.click();
            //
        },2800);
    })
    //根据图片动态生成圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for(var i=0;i<ul.children.length;i++){
        //创建一个li
        var li = document.createElement('li');
        //获得圆圈索引号
        li.setAttribute('index',i);
        //把li插入ol中
        ol.appendChild(li);
        //生成圆圈的同时直接绑定点击事件
        li.addEventListener('click',function(){
            for(var i=0;i< ol.children.length;i++){
                ol.children[i].className='';
            }
            this.className='current';
            //点击圆圈移动ul
            var index = this.getAttribute('index');
            num = index;
            circle = index;

            animate(ul,-index*focusWidth);
        })
    }
    //把ol里的第一个li设置类名为current
    ol.children[0].className = 'current';
    //克隆第一张图片放在li后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    //设置小圆圈
    var circle = 0;
    arrow_r.addEventListener('click',function(){
        num++;
        if(num==ul.children.length-1){
            ul.style.left=0;
            num=0;
        }
        animate(ul,-num*focusWidth);
        circle++;
        if(circle==ol.children.length){
            circle=0;
        }
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className='';
        }
        ol.children[circle].className='current';
    })
    arrow_l.addEventListener('click',function(){
        if(num==0){
            num=ul.children.length-1;
            ul.style.left = -num*focusWidth+'px';
        }
        num--;
        animate(ul,-num*focusWidth);
        circle--;
        if(circle<0){
            circle=ol.children.length-1;
        }
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className='';
        }
        ol.children[circle].className='current';
    })
    //自动播放定时器
    var timer = setInterval(function(){
        //手动调用点击事件
        arrow_r.click();
    },2000);
})
