

function click(){
    var reg_button = document.getElementById('reg_b');
    var sig_button = document.getElementById('sig_b');
    sig_button.onclick = function(){
        document.getElementById('reg').removeAttribute('class','hidden');
        document.getElementById('sig').setAttribute('class','hidden');                
    }
    reg_button.onclick = function(){
        document.getElementById('reg').setAttribute('class','hidden');
        document.getElementById('sig').removeAttribute('class','hidden');        
    }
    console.log("reg and sig catched")

};
click();