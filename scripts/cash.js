document.getElementById("btnCash").addEventListener("click",
    function(event){
        event.preventDefault();
        const account= document.getElementById("coun").value;
        const pin= document.getElementById("cashpin").value;
        const conPin= parseInt(pin);
        const amount = document.getElementById("cashamount").value;
        const conAmount= parseFloat(amount);
        const mainBalance=document.getElementById("main-balance").innerText;
        const conMainBalance= parseFloat(mainBalance);
        
        if(conAmount>mainBalance){
            alert("invalid amount");
            return;
        }

        if(conPin===1234){
            const sum = conMainBalance - conAmount;
            document.getElementById("main-balance").innerText= sum;
             
            const container = document.getElementById("tranhis");
            const div = document.createElement("div");
            div.innerHTML=`<h1 class="bg-slate-100 p-2" mt-3>Cashout <span class="font-bold">${amount} </span> from <span class="font-bold">${account}</span> account</h1>`;
            container.appendChild(div);

        }
        else{alert("Enter Valid Pin")}
    }
)