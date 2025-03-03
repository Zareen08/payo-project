document.getElementById("btnadd").addEventListener("click",
    function(event){
        event.preventDefault();
        const acount = document.getElementById("cou").value;
        const amount=document.getElementById("Amount").value;
        const conAmount= parseFloat(amount);
        const pin =document.getInputValueByID("pin").value;
        
        const mainBalance=document.getInnerTextByID("main-balance").innerText;
        console.log(mainBalance);

        if(acount.length===11){
            if(pin===1234 ){
                const sum= mainBalance + conAmount;
                document.getElementById("main-balance").innerText= sum;
            }
            else{alert("Enter valid Pin")}
        }
        else{
            alert("Enter Amount");
        }
    }
)