function getInputValueByID(id){
    const value= document.getElementById(id).value;  
    const convertedValue= parseFloat(value);
    return convertedValue;
    
}

function getInnerTextByID(id){
    const value= document.getElementById(id).innerText;
    const convertedValue =parseFloat(value);
    return convertedValue;
}

function setInnerTextByIDandValue(id,value){
    document.getElementById(id).innerText= value;
}


document.getElementById("add-money").addEventListener("click",
    function(){
        handleToggle("addmoney","block")
        handleToggle("cashOut","none")
    }
)
document.getElementById("cash-out").addEventListener("click",
    function(){
        handleToggle("addmoney","none")
        handleToggle("cashOut","block")
    }
)


document.getElementById()

function handleToggle(id,status){
    document.getElementById(id).style.display = status;
}