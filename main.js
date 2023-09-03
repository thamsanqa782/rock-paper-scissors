let gameButtonsArry = document.querySelectorAll(".main-buttons");
let log = console.log;

let countHolder ={}

gameButtonsArry.forEach((e)=>{
    e.onclick = () =>{
        let color = e.value
        
        if(color in countHolder){
            countHolder[color] += 1 
        }else{
            Object.assign(countHolder , {[color]: 1})
        }
        e.innerHTML = countHolder[color]
    }
});

let resertBtn = document.querySelector(".resert");

resertBtn.onclick = () => {
    countHolder = {}
    gameButtonsArry.forEach(e => e.innerHTML = 0)
}
