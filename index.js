/* Your Code Here */
function createEmployeeRecord(array){
    let obj = {firstName: array[0], familyName: array[1], title: array[2], payPerHour: array[3], timeInEvents: [], timeOutEvents: []}
    return obj
}

function createEmployeeRecords(array){
    let arrObjs = array.map(employee => createEmployeeRecord(employee))
    return arrObjs
}

function createTimeInEvent(timeStamp){
   this.timeInEvents.push({type: 'TimeIn', hour: parseInt(timeStamp.split(' ')[1]), date: timeStamp.split(' ')[0]})
    return this
}

function createTimeOutEvent(timeStamp){
    this.timeOutEvents.push({type: 'TimeOut', hour: parseInt(timeStamp.split(' ')[1]), date: timeStamp.split(' ')[0]})
    return this
}

function hoursWorkedOnDate(timeStamp){
    let timeIn = this.timeInEvents.find(date => timeStamp == date.date)
    let timeOut = this.timeOutEvents.find(date => timeStamp == date.date)
    let hours = parseInt(timeOut.hour.toString().split('00')[0]) - parseInt(timeIn.hour.toString().split('00')[0])
    return hours
}

function wagesEarnedOnDate(date){
    let wagesOwed = hoursWorkedOnDate.call(this,date) * this.payPerHour
    return wagesOwed
}

function findEmployeeByFirstName(array, name){
    let result = array.find(record => record.firstName == name)
    return result
}

function calculatePayroll(array){
    let a = []
    array.forEach(function(record){
       a.push(allWagesFor.call(record))
    })

    let total = a.reduce(function(el, cv){
        return el + cv 
    })
    return total

}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}