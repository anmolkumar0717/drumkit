
for(let i=0;i<(document.querySelectorAll(".btn-bg")).length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        switch(this.innerHTML){
            case 'A':
                let audio=new Audio("1.mp3")
                audio.play()
                break
                
            case 'B':
                let audio1=new Audio("2.mp3")
                audio1.play()
                break

            case 'C':
                let audio2=new Audio("3.mp3")
                audio2.play() 
                break
                
            case 'D':
                let audio3=new Audio("4.mp3")
                audio3.play()
                break
                
            case 'E':
                let audio4=new Audio("5.mp3")
                audio4.play()
                break 
                
                
        }
        

    })
    document.addEventListener("keydown",(event1)=>{
        const ev=event1.key.toUpperCase()
        console.log(ev.toUpperCase())
        buttonAnimation(ev)
        switch(ev){
            case 'A':
                let audio=new Audio("1.mp3")
                audio.play()
                break
                
            case 'B':
                let audio1=new Audio("2.mp3")
                audio1.play()
                break

            case 'C':
                let audio2=new Audio("3.mp3")
                audio2.play() 
                break
                
            case 'D':
                let audio3=new Audio("4.mp3")
                audio3.play()
                break
                
            case 'E':
                let audio4=new Audio("5.mp3")
                audio4.play()
                break
        }

})
function buttonAnimation(currentkey){
    let currkey=document.querySelector("."+currentkey)
    currkey.classList.add("new")
    setTimeout(()=>{
        currkey.classList.remove("new")
    },100)
    

}

}