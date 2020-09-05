/* global $ */

const weathers = [
  'sunny',
  'rainy',
  'cloudy',
  'stormy',
  'snowy',
  'windy',
  'foggy'
]

const temperatures = [
  'hot',
  'warm',
  'cool',
  'cold'
]

$('#currentWeather').click(
  function () {
    var currentCondition = $(this).text()

    var currentIndex = weathers.indexOf(currentCondition)
    var newIndex = (currentIndex + 1) % weathers.length

    var newCondition = weathers[newIndex]

    $(this).html(newCondition)
  }
)

$('#currentTemperature').click(
  function () {
    var currentCondition = $(this).text()

    var currentIndex = temperatures.indexOf(currentCondition)
    var newIndex = (currentIndex + 1) % temperatures.length

    var newCondition = temperatures[newIndex]

    $(this).html(newCondition)
  }
)
