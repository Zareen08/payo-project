document.getElementById("btn-login").addEventListener("click",
    function(event){
        event.preventDefault();
        const account= document.getElementById("acc").value;
         
        const Pin= document.getElementById("pin").value;
        const convertedPin= parseInt(Pin)
        if(account.length===11){
            if(convertedPin===1234)
               window.location.href="./front.html"
            else{
                alert()
            }
        }
        else{
            alert()
        }
    }
)