/* global $ */

const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
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

const day = daysOfTheWeek[date.getDay()]
const month = monthsOfTheYear[date.getMonth()]

$('#date').html('Today is ' + day + ', ' + month + ' ' + date.getDate() + ', ' + date.getFullYear() + '.')
