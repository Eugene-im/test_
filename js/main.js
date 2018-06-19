document.addEventListener("DOMContentLoaded",setTimeout);
setTimeout(click, 10000);

function click(){
    var          a = document.getElementById('cssload');
    var reg_button = document.getElementById('reg_b');
    var sig_button = document.getElementById('sig_b');
    var reg = document.getElementById('reg');
    var sig = document.getElementById('sig');
    // var prog = document.getElementById('progress')
    // var header = document.getElementsByTagName('header')[0];
    // var main = document.getElementsByTagName('main')[0];
    // var footer = document.getElementsByTagName('footer')[0];

    a.setAttribute('class','fade');
    setTimeout(a.setAttribute('class','hidden'),800);

    // window.onscroll = function(){
    //     document.getElementById('wr').scrollBy(0,1000);
    //     prog.setAttribute('class','class-33');
    // }

    sig_button.onclick = function(){
        reg.removeAttribute('class','hidden');
        sig.setAttribute('class','hidden');  
        // window.scrollTo(0,1000);
                      
    }
    reg_button.onclick = function(){
        reg.setAttribute('class','hidden');
        sig.removeAttribute('class','hidden');        
    }
};