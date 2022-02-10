function calculateTip(event) {
    event.preventDefault()

    let bill = document.getElementById('bill').Value
    let serviceQuality = document.getElementById('serviceQuality').Value
    let numOfPeople = document.getElementById('people').Value

    if (bill == '' | serviceQuality == 0) {
        alert("Favor da uma gorjeta mão de vaca!")
        return
    }

    if (numOfPeople == "" | numOfPeople <= 1) {
        numOfPeople = 1
        document.getElementById('each').style.display = "none"
    } else {
        document.getElementById('each').style.display = "block"
    }

    let total = (bill * serviceQuality) / numOfPeople
    total = total.toFixed(2)
    document.getElementById('each').innerHTML = total
    document.getElementById('totalTip').style.display = "block"
}

document.getElementById('totalTip').style.display = "none"
document.getElementById('each').style.display = "nome"

document.getElementById('tipsForm').addEventListener('submit', calculateTip)
