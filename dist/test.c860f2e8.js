let str = `
 .skin{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.skin{
    position: relative;
    background-color:#ffe600 ;
    min-height: 50vh;
}
.nose{
    border: 10px solid black;
    border-color: black transparent  transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 5;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin: 50% 100%;
    animation: wave 400ms infinite linear;
}
.yuan{
    width: 20px;
    height: 6px;
    position: absolute;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background-color: black;
}
.eye{
    position: absolute;
    border: 2px solid black;
    width: 64px;
    height: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background-color: #2e2e2e;
    border-radius: 50%;
}
.eye::before{
    content: '';
    border: 3px solid black;
    width: 25px;
    height: 25px;
    display: block;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    left: 8px;
    top: 4px;
}
.eye.left{
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
.mouth .up{
position: relative;
top: -20px;
z-index:2;
}

.mouth .up .lip{
    border: 5px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background-color: #ffe600;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip::before{
    content: '';
    display:block;
    width: 8px;
    height: 38px;
    position: absolute;
    bottom: 0;
    background-color: #ffe600;
}
.mouth .up .lip.left::before{
    right: -6px;
}
.mouth .up .lip.right::before{
    left: -6px;
}

.mouth .down{
    height: 180px;
    position: absolute;
    top:5px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 1px solid black;
    width: 150px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    height: 1000px;
    border-radius:75px/300px;
    background-color: #9b000a;
    z-index: 1;
    overflow: hidden;
}

.mouth .down .yuan1 .yuan2{
    width: 200px;
    height: 290px;
    position: absolute;
    background-color:  #ff485f;
    bottom: -150px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}

.face{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
}

.face.left{
    transform: translateX(-180px);
    background-color: #ff0000;
    border-radius: 50%;
}
.face.right{
    transform: translateX(180px);
    background-color: #ff0000;
    border-radius: 50%;
}
 `;
const demo = document.querySelector('#demo');
const demo2 = document.querySelector('#demo2');
let n = 1;
let time = 100;
let id;
const player = {
    init: ()=>{
        demo.innerText = str.substring(0, n);
        demo2.innerHTML = str.substring(0, n);
        player.play();
        player.bindEvents();
    },
    events: {
        '#butPause': 'pause',
        '#butPlay': 'play',
        '#butSlow': 'slow',
        '#btnNormal': 'normal',
        '#butFast': 'fast'
    },
    bindEvents: ()=>{
        for(let key in player.events){
            let value = player.events[key];
            document.querySelector(key).onclick = player[value];
        }
    },
    run: ()=>{
        n += 1;
        if (n > str.length) {
            window.clearInterval(id);
            return;
        }
        demo.innerText = str.substring(0, n);
        demo2.innerHTML = str.substring(0, n);
        demo.scrollTop = demo.scrollHeight;
    },
    play: ()=>{
        id = setInterval(player.run, time);
    },
    pause: ()=>{
        window.clearInterval(id);
    },
    slow: ()=>{
        player.pause();
        time = 300;
        player.play();
    },
    normal: ()=>{
        player.pause();
        time = 50;
        player.play();
    },
    fast: ()=>{
        player.pause();
        time = 0;
        player.play();
    }
};
player.init();

//# sourceMappingURL=test.c860f2e8.js.map
