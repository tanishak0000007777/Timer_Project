const endDate=new Date("10 March,2025 00:00:00").getTime();
const startDate=new Date().getTime();

let x=setInterval(function updateTimer()
{
    const now=new Date().getTime();

    const distanceCovered=now-startDate;
    const distancePending=endDate-now;

    // calculate-> days,hr ,min,sec
    const onedayinMillis=24*60*60*1000;
    const onehourinMillis=60*60*1000;
    const oneminInMIllis=60*1000;
    const onesecinMillis=1000;
    const days=Math.floor(distancePending/(onedayinMillis));

    const hrs=Math.floor((distancePending%(onedayinMillis))
    /(onehourinMillis));

    const min=Math.floor((distancePending%(onehourinMillis))
    /( oneminInMIllis));

    const sec=Math.floor((distancePending%( oneminInMIllis))
    /(onesecinMillis));

    // Populate the data 
    document.getElementById("days").innerHTML=days;
    document.getElementById("hour").innerHTML=hrs;
    document.getElementById("min").innerHTML=min;
    document.getElementById("sec").innerHTML=sec;
    

    //Cal percentage for progess bar 
    const totaldis=endDate-startDate;
    const percentage_distance=(distanceCovered/totaldis)*100;
    let wi=percentage_distance+"%";
    document.getElementById("prog_bar").style.width=wi;
    console.log(percentage_distance);
    if(distancePending<0)
    {
        clearInterval(x);
        document.getElementById("countdown").innerHTML="Expired";
        document.getElementById("countdown").style.fontSize="1.5rem";
        document.getElementById("prog_bar").style.width="100%";
       
    }
},1000);