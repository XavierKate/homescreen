// Create function diplayTime()
function displayTime() {
  // create a new date object
  const currentTime = new Date()
  // get the hours
  const hours = currentTime.getHours()
  // get the minutes
  const minutes = currentTime.getMinutes().toString().padStart(2, "0")
  // variable reference time element
  const timeEl = document.getElementById("time")
  // set the inner text to hours: minutes
  timeEl.innerText = hours + ":" + minutes
}
// call diplayTime()
displayTime()
// use setInterval to call displayTime() every second
setInterval(displayTime, 1000)

// Create function diplayDate()
function displayDate() {
  //create a date object
  const currentDate = new Date()
  // get the weekday
  const weekday = currentDate.toLocaleDateString("en-US", { weekday: "long" })
  // get the day of the month
  const day = currentDate.getDate()
  // get the month
  const month = currentDate.toLocaleDateString("en-US", { month: "long" })
  // variable reference date element
  const dateEl = document.getElementById("date")
  // set the inner text to a concatenated string  with weekday, day, and month
  dateEl.innerText = weekday + " " + day + " " + month
}
// Call displayDate()
displayDate()
// use setInterval to call displayDate every second
setInterval(displayDate, 1000)

// Create function displayGreeting()
function displayGreeting() {
  // get the hours
  const hours = new Date().getHours()

  // initialize a variable caleld 'greeting'
  let greeting

  // if hours is greater than or equal to 5, and less than 12 ....assign greeting to 'Good Morning'
  // if hours is greater than or equal to 12, and less than 18 ....assign greeting to 'Good Afternoon'
  // if hours is greater than or equal to 18, and less than 22 ....assign greeting to 'Good Evening'
  // otherwise assign greeting to 'Good Night'
  if (hours >= 5 && hours < 12) {
    greeting = "Good Morning"
  } else if (hours >= 12 && hours < 18) {
    greeting = "Good Afternoon"
  } else if (hours >= 18 && hours < 22) {
    greeting = "Good Evening"
  } else {
    greeting = "Good Night"
  }

  // find the element with id 'greeting', set the inner text to the greeting variable
  document.getElementById("greeting").innerText = greeting
}

// Call displayGreeting()
displayGreeting()
// use setInterval to call displayGreeting() every second
setInterval(displayGreeting, 1000)

// Create function displayWeather()
function displayWeather() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Jacksonville&units=imperial&appid=d98791f28ad49cf55ea8290da4629400"
  )
    .then((response) => response.json())
    .then((data) => {
      const temp = parseInt(data.main.temp) + "°"
      const icon = data.weather[0].icon
      document.getElementById("weather").innerHTML = `
            <img src="https://openweathermap.org/img/wn/${icon}@4x.png" width="100px" />
            <span>${temp}</span>`
    })
    .catch((error) => {
      document.getElementById("weather").innerText = "Weather data unavailable"
      console.error("Error fetching weather data:", error)
    })
}

// use setTimeout to call displayTime() after a 1/10 second delay
setTimeout(displayWeather, 100)
// use setInterval to call displayTime() every second
setInterval(displayWeather, 1000)

// create an array called shortcuts, each object should have a url and an icon property
// ....the icon property value should be the font awesome class
let shortcuts = [
  {
    url: "https://www.google.com/",
    icon: "fa-brands fa-google",
  },
  {
    url: "https://www.youtube.com/",
    icon: "fa-brands fa-youtube",
  },
  {
    url: "https://mail.google.com/",
    icon: "fa-solid fa-envelope",
  },
  {
    url: "https://apnews.com/",
    icon: "fa-solid fa-newspaper",
  },
]

// create a variable which references the shortcut list
const shortcutList = document.getElementById("shortcutList")

// Create function createListItem()
function createListItem(shortcut) {
  const li = document.createElement("li")
  li.innerHTML = `<a href="${shortcut.url}" target="_blank"><i class="${shortcut.icon}"></i></a>`
  shortcutList.appendChild(li)
}

// Create function createShortcuts() which loops over each shortcuts and calls createListItem()
function createShortcuts() {
  shortcuts.forEach((shortcut) => createListItem(shortcut))
}

// Call createShortcuts()
createShortcuts()
