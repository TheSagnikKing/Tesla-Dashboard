const open_menu = document.getElementById("menu-btn")
const aside = document.querySelector("aside")
const close_menu = document.querySelector(".bx-x")


open_menu.addEventListener("click", () => {
    aside.classList.toggle("aside-open")
})

close_menu.addEventListener("click", () => {
    aside.classList.remove("aside-open")
})


const sunbtn = document.getElementById("sun")
const moonbtn = document.getElementById("moon")
const body = document.querySelector("body")
const header = document.querySelector("header")
const aside_bg = document.querySelector("aside")
const middle = document.querySelector("middle")
const end = document.querySelector("end")
const chart_bg = document.querySelector(".chart")

moonbtn.addEventListener("click" , () => {
    body.classList.add("body-active")
    header.classList.add("header-active")
    aside_bg.classList.add("aside-active")
    middle.classList.add("middle-active")
    end.classList.add("end-active")
    chart_bg.classList.add("chart-active")
})

sunbtn.addEventListener("click", () => {
    body.classList.remove("body-active")
    header.classList.remove("header-active")
    aside_bg.classList.remove("aside-active")
    middle.classList.remove("middle-active")
    end.classList.remove("end-active")
    chart_bg.classList.remove("chart-active")
})

//  ========== chart js ===============

const chart = document.querySelector(".chart").getContext('2d')

// create a new chart instance
new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May' ,'Jun',
        'Jul','Aug', 'Sep', 'Oct',  'Nov'],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537,49631, 59095,57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832,36844],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})


