document.getElementById("cashout").style.display="none";
document.getElementById("transaction").style.display="none";
document.getElementById("add-money").addEventListener(
    "click", function(){
       document.getElementById("addmoney").style.display="block";
       document.getElementById("cashout").style.display="none";
       document.getElementById("transaction").style.display="none"; 
    }
)
document.getElementById("cash-out").addEventListener(
    "click", function(){
       document.getElementById("addmoney").style.display="none";
       document.getElementById("cashout").style.display="block"; 
       document.getElementById("transaction").style.display="none";
    }
)
document.getElementById("transaction1").addEventListener(
    "click", function(){
       document.getElementById("addmoney").style.display="none";
       document.getElementById("cashout").style.display="none"; 
       document.getElementById("transaction").style.display="block";
    }
)