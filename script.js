let index = 0;
let carouselitems = document.querySelectorAll(".carousel-item");
function goNext (){
    if(index === carouselitems.length - 1){
        index = 0 
    }else{
        index++;
    }
    
    carouselitems[index].scrollIntoView({behavior: "smooth"});
   
}
function goBack (){
    if(index === 0 ) { index = carouselitems.length - 1;
    }else{
        index--;
    }
    
    carouselitems[index].scrollIntoView({behavior: "smooth"});
   
}