const container = document.getElementById("container")
const Boxs = container.getElementsByClassName("Box")
const totalPrice = document.getElementById("total-price")

let total=300
for(let i=0; i< Boxs.length ;i++){
    const Box=Boxs[i]
    const plus=Box.getElementsByClassName("plus")[0]
    const minus =Box.getElementsByClassName("minus")[0]
    const quantity =Box.getElementsByTagName("input")[0]
    const deleteBtn=Box.getElementsByClassName("delete-btn")[0]
    const price =parseInt(Box.getElementsByClassName("price")[0].innerText.substring(1))

plus.addEventListener("click",()=>{
    quantity.value++ 
    total+=price;
    totalPrice.innerText=`Total Price: $${total}`
})
minus.addEventListener("click",()=>{
    if (quantity.value >1){
    quantity.value-- ;
    total-=price;
    totalPrice.innerText=`Total Price: $${total}`
    }
})

deleteBtn.addEventListener("click",()=>{
    Box.remove()
    total-=price*quantity.value 
    totalPrice.innerText=`Total Price $${total}`
})




}
$(".heart.fa").click(function(){
    $(this).toggleClass("fa-heart fa-heart-o")
})