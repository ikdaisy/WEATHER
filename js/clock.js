function timer(){
    let date = new Date()
    hours=date.getHours()
    ampm=hours<12?"AM":"PM"
    hr=hours%12==0?12:hours%12;
    document.getElementById("time").textContent=`${putZero(hr)}-${putZero(date.getMinutes())}- ${putZero(date.getSeconds())} ${ampm} ${putZero(date.getDay())}-${putZero(date.getMonth())}-${date.getFullYear()}`
    setTimeout(()=>{
        timer()
    },1000)

    displaybg(ampm)
}

timer()

 function displaybg(ampm){
    if(ampm=="PM"){
        document.getElementById("bgimage").style.background="url:('')"
    }


}
function putZero(time){
    return time<10?"0"+time:time;

}