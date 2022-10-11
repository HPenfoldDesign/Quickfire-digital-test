document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState==="hidden"){
        console.log(" >> This window is hidden")
    }
    else{
        console.log(" >> This window is visible")
    }
})