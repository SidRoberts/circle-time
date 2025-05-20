/* global $, date */

const schedule = [
  // Monday
  [
    'Number Adventure',
    'iSpring',
    'Wonders',
    'Reading Project',
    'iPlay',
    'Society and Me'
  ],

  // Tuesday
  [
    'Wonders',
    'iSpring',
    'iGenius',
    'Word and Sentence',
    'Discover and Explore',
    'Body Movement'
  ],

  // Wednesday
  [
    'Number Adventure',
    'iSpring',
    'Reading Project',
    'iSpring',
    'Chinese',
    'Classic'
  ],

  // Thursday
  [
    'Body Movement',
    'Wonders',
    'iSpring',
    'Reading Project',
    'Classic',
    'Discover and Explore'
  ],

  // Friday
  [
    'Word and Sentence',
    'iSpring',
    'Wonders',
    'Story Art',
    'Society and Me',
    'iGenius'
  ]
]

const queryString = window.location.search

const urlParams = new URLSearchParams(queryString)

// Sunday 0, Monday 1, Tuesday 2, ..., Saturday 6
const dayNumber = urlParams.has('day')
  ? urlParams.get('day')
  : date.getDay()

// Ignore weekends
if (dayNumber >= 1 && dayNumber <= 5) {
  const todaysSchedule = schedule[dayNumber - 1]

  $('#schedule').html('The lessons today are: <ol><li contenteditable>' + todaysSchedule.join('</li> <li contenteditable>') + '</li></ol>')
}
