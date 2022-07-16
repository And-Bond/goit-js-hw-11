// const CountdownTimer = {
//     selector: document.querySelector('#timer-1'),
//     targetDate: new Date('Jul 17, 2019'),
//   };
const refs = {
    daysTimer: document.querySelector('[data-value="days"]'),
    hoursTimer: document.querySelector('[data-value="hours"]'),
    minsTimer: document.querySelector('[data-value="mins"]'),
    secsTimer: document.querySelector('[data-value="secs"]'),
    minusBtn: document.querySelector('.js-minus'),
    dateInput: document.querySelector('.date-input'),
    timeInput: document.querySelector('.time-input'),
    timerId: document.getElementById('timer-1'),
    stopBtn: document.querySelector('.js-stop'),
    coniformBtn: document.querySelector('.js-coniform')
}

// const isActive = false
// refs.dateInput.addEventListener('input', (evt) => {
//     console.log(evt);
//     const date = refs.dateInput.value
//     console.log(date);
    
// })

let isActive = false
let timerId = null
let timeOptions = {}


class CountdownTimer {
    constructor( targetDate, targetTime){
        this.targetDate = targetDate
        this.tagetTime = targetTime
    }

    get() {
        const currentTime = Date.now()
        return currentTime;
    }
    returnTargetDate() {
        const targetTime = new Date(this.targetDate)
        return targetTime;
    }
    options({days,hours,mins,secs}){
        timeOptions = {
            days,
            hours,
            mins,
            secs,
        }
        console.log(timeOptions);
    }
    // returnTargetTime(){
    //     const targetTime = new Date(this.targetTime)
    //     return targetTime;
    // }
    // timerDoc(){
    //     const timerHTML = document.getElementById(`${this.selector}`)
    //     return timerHTML;
    // }


}



    refs.coniformBtn.addEventListener('click', (evt) => {
    
        if(isActive){
            clearInterval(timerId)
            isActive = false
        }
    
    
        const timer = new CountdownTimer(`${refs.dateInput.value}`)

            isActive = true
            timerId = setInterval(() => {
    
    
                const currentDate = timer.get()
                
                // const optionalTime = timer.returnTargetTime()
                const optionalDate = timer.returnTargetDate()
        

                let interval = optionalDate - currentDate 

                const days = Math.floor(interval / (1000 * 60 * 60 * 24));
                const hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const mins = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
                const secs = Math.floor((interval % (1000 * 60)) / 1000);
                timer.options({days,hours,mins,secs})
                
                refs.daysTimer.textContent = timeOptions.days
                refs.hoursTimer.textContent = timeOptions.hours
                refs.minsTimer.textContent = timeOptions.mins
                refs.secsTimer.textContent = timeOptions.secs
            
    
               
            }, 1000)
    
    
    })
    
    
refs.stopBtn.addEventListener('click', (evt) => {
    clearInterval(timerId)
})