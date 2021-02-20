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
    const currentCondition = $(this).text()

    const currentIndex = weathers.indexOf(currentCondition)
    const newIndex = (currentIndex + 1) % weathers.length

    const newCondition = weathers[newIndex]

    $(this).html(newCondition)

    $('body').removeClass(currentCondition)
    $('body').addClass(newCondition)
  }
)

$('#currentTemperature').click(
  function () {
    const currentCondition = $(this).text()

    const currentIndex = temperatures.indexOf(currentCondition)
    const newIndex = (currentIndex + 1) % temperatures.length

    const newCondition = temperatures[newIndex]

    $(this).html(newCondition)
  }
)
