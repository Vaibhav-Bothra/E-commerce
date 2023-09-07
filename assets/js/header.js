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
        let val = a.value;
        let d = val.split(" ").join("");
        if(c.includes(d)){   
            b[i].style.display="block";
            b[i].style.width="250%";
            b[i].style.fontSize="large";
        }
    }
});