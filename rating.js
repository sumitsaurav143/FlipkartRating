const rate_box = document.getElementById("rating_div");
let selected=0;

for(let i=0;i<5;i++){
    const rate=document.createElement("i");
    rate.classList.add("fa-solid");
    rate.classList.add("fa-star");
    rate.classList.add("rate");
    rate.dataset.rateval=i;
    rate_box.appendChild(rate);
    rate.addEventListener('mouseover',OnHover);
    rate.addEventListener('mouseout',OnOut);
    rate.addEventListener('click',Click);
    //console.log("Created : "+i);
}

function OnHover(e){
    const val=e.target.dataset.rateval;
    const rating=document.getElementsByClassName("rate");

    for(let i=0;i<5;i++){
        if(i<=val)
        rating[i].style.color="yellow";
        else
        rating[i].style.color="white";
    }
}

function OnOut(e){
    const rating=document.getElementsByClassName("rate");
    if(selected==0){
    for(let i=0;i<5;i++){
        rating[i].style.color="white";
    }
}
    else{
      
        for(let i=0;i<selected;i++)
            rating[i].style.color="yellow";
        for(let i=selected;i<5;i++)
            rating[i].style.color="white";
    }
}

function Click(e){
    
    const val=e.target.dataset.rateval;
    selected=Number(val)+1;
    const rating=document.getElementsByClassName("rate");

    for(let i=0;i<5;i++){
        if(i<=val)
        rating[i].style.color="yellow";
        else
        rating[i].style.color="white";
    }

    document.getElementById("Counter").innerText=Number(val)+1;
}