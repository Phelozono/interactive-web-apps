const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: new Date(`16 December ${currentYear}`) ,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

console.log(holidays.futureId || `ID ${futureId} not created yet`)

let copied = {christmas}
copied.name = 'X-mas'
let correctDate = new Date("2023-12-25")
correctDate.setHours(0)
correctDate.setMinutes(0)

let isEarlier = correctDate< holidays[6].date
console.log('New date is earlier:', isEarlier)

if (isEarlier) holidays[6].date = correctDate
console.log('ID change:', holidays[christmas].id != copied.id === copied.id)
console.log('Name change:', copied.name)
console.log('Date change:', holidays[christmas].date != correctDate || correctDate)



const firstHolidayTimestamp = new Date(Math.min(
    holidays[0].date,
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
    ) 
)



console.log(firstHolidayTimestamp)

const lastHolidayTimestamp = new Date(Math.max(
    holidays[0].date,
    holidays[1].date,
    holidays[2].date,
    holidays[3].date,
    holidays[4].date,
    holidays[5].date,
    holidays[6].date,
    holidays[7].date,
    holidays[8].date,
    ) 
)

const firstDay = firstHolidayTimestamp.getDate();
const firstMonth = firstHolidayTimestamp.getMonth() +1;
const lastDay = lastHolidayTimestamp.getDate();
const lastMonth = lastHolidayTimestamp.getMonth() + 1;


console.log(`${lastDay}/${lastMonth}/${currentYear}`); 
console.log("0"+`${firstDay}/${"0"+firstMonth}/${currentYear}`);

const randomHoliday= holidays[Math.floor(Math.random()*8 )];
console.log(randomHoliday)