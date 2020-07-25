function productChangingCount(product,isIncrement,price)
{
    let phoneCount=parseInt(document.getElementById(product+"count").value);
    if(phoneCount>0 && !isIncrement)
    {
        phoneCount=phoneCount-1;
        document.getElementById(product+"count").value=phoneCount;
    }
    if(isIncrement)
    {
        phoneCount=phoneCount+1;
        document.getElementById(product+"count").value=phoneCount;
    }
    if(price=="phone")
     {let totalPricePhone=phoneCount*1219;
     document.getElementById(price+"-price").innerText=totalPricePhone;
     }
    if(price=="case")
    {
        let totalPricePhone=phoneCount*59;
     document.getElementById(price+"-price").innerText=totalPricePhone;
    }
    
totalPrice();
}
function totalPrice(){
    let phoneCount=parseInt(document.getElementById("phone-count").value);
    let caseCount=parseInt(document.getElementById("case-count").value);
    let subTotal=1219*phoneCount+59*caseCount;
    document.getElementById("subtotal").innerText=subTotal;
    let tax=parseFloat((subTotal*.01).toFixed(2));
    document.getElementById("tax").innerText=tax;
    let total=subTotal+tax;
    document.getElementById("total").innerText=Math.round(total);


}
function typeInput(product){
    
    let phoneCount=parseInt(document.getElementById(product+"-count").value);
    console.log(phoneCount);
    if(isNaN(phoneCount)){
        document.getElementById(product+"-count").value=0;
        phoneCount=0;
    }
    // if(phoneCount.includes("-"))
    // {
    //     document.getElementById(product+"-count").value="0"
    // }
     if(product=="phone")
     {let totalPricePhone=phoneCount*1219;
     document.getElementById(product+"-price").innerText=totalPricePhone;
     }
     if(product=="case")
     {let totalPricePhone=phoneCount*59;
     document.getElementById(product+"-price").innerText=totalPricePhone;
     }
totalPrice();
}
function hideDiv(hidingId){
let hidingPhone=document.getElementById("hiding-"+hidingId);
hidingPhone.style.display="none"
document.getElementById(hidingId+"-count").value=0;
totalPrice()}
function paymentMethod()
{
    document.getElementById("payment").style.display="block";
    document.getElementById("remove").style.display="none";

}
