
document.getElementById("btnadd").addEventListener("click",
    function(event){
        event.preventDefault();
        const account= document.getElementById("cou").value;
        const amount=document.getElementById("Amount").value;
        const conAmount= parseFloat(amount);
        const pin =document.getElementById("pin").value;
        const conPin = parseInt(pin);
        const mainBalance=document.getElementById("main-balance").innerText;
        const conMainBalance= parseFloat(mainBalance);
        
        if(conAmount<0){
            alert("enter valid amount");
            return;
        }
        

        if(amount && pin){
            if(conPin===1234 ){
                const sum= conMainBalance + conAmount;
                document.getElementById("main-balance").innerText= sum;
                 
                const container = document.getElementById("tranhis");
                const div = document.createElement("div");
                div.innerHTML=`<h1 class="bg-slate-100 p-2" mt-3>added <span class="font-bold">${amount} </span> from <span class="font-bold">${account}</span> account</h1>`;
                container.appendChild(div);
                
                
            
            }
            else{alert("Enter valid Pin")}
        }
        else{
            alert("Enter Amount");
        }
    }
)