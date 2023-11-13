function convertTemperature() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let value = document.querySelector(".value").value;
    let result = document.querySelector(".value2");
    if (input1 === "cel" && input2 === "fah1") {
        result.value = (value * 9 / 5) + 32;
    } else if (input1 === "cel" && input2 === "kel1") {
        result.value = parseInt(value) + 273.15;
    } else if (input1 === "fah" && input2 === "cel1") {
        result.value = (value - 32) * 5 / 9;
    } else if (input1 === "fah" && input2 === "kel1") {
        result.value = (value - 32) * 5 / 9 + 273.15;
    } else if (input1 === "kel" && input2 === "cel1") {
        result.value = value - 273.15;
    } else if (input1 === "kel" && input2 === "fah1") {
        result.value = (value - 273.15) * 9 / 5 + 32;
    } else {
        result.value = value;
    }
}

document.querySelector(".btn1").addEventListener("click", convertTemperature);
document.querySelector(".btn2").addEventListener("click", () => {
    document.querySelector(".value").value = "";
    document.querySelector(".value2").value = "";
});
