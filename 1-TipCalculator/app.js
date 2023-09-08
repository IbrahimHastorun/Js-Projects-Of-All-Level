const customTipBtn = document.getElementById("custom-tip-btn");

let customTipCalculateState = false;
customTipBtn.addEventListener("click" , () => {
    if (!customTipCalculateState) {

        document.querySelector(".custom-tip-area").classList.remove("hidden");
        customTipBtn.innerText = "Calculate";

        document.getElementById("total-amount-text").innerText = "000";
        document.getElementById("total-bill-text").innerText = "000";
        document.getElementById("total-tip-text").innerText = "000";
        customTipCalculateState = true;

        const buttons = document.querySelectorAll("button");
        for(let button of buttons) {
            if (button.getAttribute("id") != "custom-tip-btn") {
                
                button.classList.add("disabled");

            }  
        }
        
    } else {

        customTipCalculator();
        document.querySelector(".custom-tip-area").classList.add("hidden");
        customTipCalculateState = false;
        customTipBtn.innerText = "Custom Tip";

        const buttons = document.querySelectorAll("button");
        for(let button of buttons) {
            if (button.getAttribute("id") != "custom-tip-btn") {
                
                button.classList.remove("disabled");

            }  
        }

    }
});

document.getElementById("btn-10").addEventListener("click" , () => { tipCalculate(10) });
document.getElementById("btn-15").addEventListener("click" , () => { tipCalculate(15) });
document.getElementById("btn-20").addEventListener("click" , () => { tipCalculate(20) });

const tipCalculate = (tipPercentage) => {
    const billAmount = Number(document.getElementById("bill-input").value);

    if (billAmount == "") {

        alert("Please Enter Bill Amount");
        return;

    }
    const tip = (billAmount * tipPercentage) / 100;
    const totalAmount = billAmount + tip;

    document.getElementById("total-amount-text").innerText = totalAmount;
    document.getElementById("total-bill-text").innerText = billAmount;
    document.getElementById("total-tip-text").innerText = tip;
};

const customTipCalculator = () => {
    const billAmount = Number(document.getElementById("bill-input").value);
    const customTipPercentage = Number(document.getElementById("custom-tip-input").value);
    if (billAmount == "" && customTipPercentage == "") {

        alert("Please Enter Tip Percentage");
        return;

    }
    const tip = (billAmount * customTipPercentage) / 100;
    const totalAmount = billAmount + tip;

    document.getElementById("total-amount-text").innerText = totalAmount;
    document.getElementById("total-bill-text").innerText = billAmount;
    document.getElementById("total-tip-text").innerText = tip;
};