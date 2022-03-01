//random # gen

let minVal = document.getElementById('minVal')
let maxVal = document.getElementById('maxVal')
let randNumButton = document.getElementById('gen1')
let randomReturn = document.getElementsByClassName('display')[0]


randNumButton.onclick = () => {
    let ee = parseInt(maxVal.value) - parseInt(minVal.value) + 1
    let e = Math.floor((Math.random() * ee) + parseInt(minVal.value))

    randomReturn.innerHTML = `${e}`
}

//random power gen
let powerInput = document.getElementById('power')
let powerButton = document.getElementById('gen2')
let powerReturn = document.getElementsByClassName('display')[1]

powerButton.onclick = () => {
    let low = parseInt(powerInput.value) - 20;
    let high = (parseInt(powerInput.value) + 20) - low + 1;
    let e = Math.floor((Math.random() * high) + low)

    powerReturn.innerHTML = `${e}`
}

//states data

let states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
]
let states2 = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
    'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
]

// division creator
let div1 = document.getElementsByClassName('region')[0]
let div2 = document.getElementsByClassName('region')[1]
let div3 = document.getElementsByClassName('region')[2]
let div4 = document.getElementsByClassName('region')[3]

let regionButton = document.getElementById('create-div')

regionButton.onclick = () => {
    for (let i = 0; i < 12; i++) {
        let randNum = Math.floor(Math.random() * states.length)
        div1.innerHTML += `<p>${states[randNum]}</p>`
        states.splice(randNum, 1)
    }
    for (let i = 0; i < 13; i++) {
        let randNum = Math.floor(Math.random() * states.length)
        div2.innerHTML += `<p>${states[randNum]}</p>`
        states.splice(randNum, 1)
    }
    for (let i = 0; i < 13; i++) {
        let randNum = Math.floor(Math.random() * states.length)
        div3.innerHTML += `<p>${states[randNum]}</p>`
        states.splice(randNum, 1)
    }
    for (let i = 0; i < 12; i++) {
        let randNum = Math.floor(Math.random() * states.length)
        div4.innerHTML += `<p>${states[randNum]}</p>`
        states.splice(randNum, 1)
    }
}