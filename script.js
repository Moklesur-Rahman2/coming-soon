const setCountDownTime = new Date('March 27, 2023 4:14:02').getTime()

const updateTime = setInterval(() => {

    // get today time
    const toady = new Date().getTime()

    // distance bwtween setCountDownTime and today
    const distance = setCountDownTime - toady

    // Get days, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);



    // expired condition
    if (distance > 0) {
        // set days, hours, minutes and seconds with dom
        const dayElement = document.querySelector('.day')
        dayElement.innerText = days

        const hourElement = document.querySelector('.hours')
        hourElement.innerText = hours

        const minuteElement = document.querySelector('.minutes')
        minuteElement.innerText = minutes

        const secondElement = document.querySelector('.seconds')
        secondElement.innerText = seconds
    } else {
        clearInterval(updateTime)
        document.querySelector('.expired').innerText = 'Expired'
    }

}, 1000)
