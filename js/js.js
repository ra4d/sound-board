const sound = document.querySelectorAll("audio");
const btns = document.querySelectorAll("button");

btns.forEach((e , index)=>{
    e.addEventListener("click" , ()=>{
        sound.forEach((se,sindex)=> {
            switch(index){
                case sindex:
                    se.play();
            }

        })
        
    })
})



// if(index == 0){
//     sound[0].play()
// }
// else if(index == 1){
//     sound[1].play()
// }
// else if(index == 2){
//     sound[2].play()
// }
// else if(index == 3){
//     sound[3].play()
// }
// else if(index == 4){
//     sound[4].play()
// }
// else if(index == 5){
//     sound[5].play()
// }