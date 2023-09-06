let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let a = document.getElementById('search_item');
    let b = document.getElementsByClassName('options');
    for(let i=0;i<8;i++){
        b[i].style.display="none";
    }
    if(a.value==''){
        return;
    }
    for(let i=0;i<8;i++){
        let c = b[i].id;
        if(c.includes(a.value)){   
            b[i].style.display="block";
            b[i].style.width="80%";
        }
    }
});