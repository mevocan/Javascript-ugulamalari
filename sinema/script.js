const count = document.getElementById("count")
const amount = document.getElementById("amount");
const container = document.querySelector(".container");
const select = $("#movie");

container.addEventListener('click',function(e){
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
        calculateTotal()

     
    }
});
$(select).change(function (e) { 
    calculateTotal()    
});
function calculateTotal(){
    let selectedSeatCount =container.querySelectorAll(".seat.selected").length;
    let price = $(select).val();;    
    $("#count").text(selectedSeatCount);
    $("#amount").text(selectedSeatCount * price);
}