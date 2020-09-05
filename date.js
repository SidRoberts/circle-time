/* global $ */

const daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

const monthsOfTheYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const date = new Date()

const day = daysOfTheWeek[date.getDay() - 1]
const month = monthsOfTheYear[date.getMonth()]

$('#date').html('Today is ' + day + ', ' + month + ' ' + date.getDate() + ', ' + date.getFullYear() + '.')
