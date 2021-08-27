/* global $, date */

const schedules = {
  poplar: [
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
  ],

  palm: [
    // Monday
    [
      'Wonders',
      'iSpring',
      'Chinese',
      'Reading Project',
      'Classic',
      'Number Adventure'
    ],

    // Tuesday
    [
      'Wonders',
      'iSpring',
      'Reading Project',
      'Body Movement',
      'Word and Sentence',
      'Discover and Explore'
    ],

    // Wednesday
    [
      'Wonders',
      'Classic',
      'iSpring',
      'iSpring',
      'Word and Sentence',
      'iPlay'
    ],

    // Thursday
    [
      'Wonders',
      'iSpring',
      'Body Movement',
      'Creative Writing',
      'Society and Me',
      'iGenius'
    ],

    // Friday
    [
      'Wonders',
      'iSpring',
      'Reading Project',
      'Number Adventure',
      'Discover and Explore',
      'Society and Explore'
    ]
  ]
}

// Lessons that require a pencil at the very beginning of the class
const pencilLessons = [
  'iGenius',
  'iSpring',
  'Wonders',
  'Word and Sentence',
  'Creative Writing'
]

const queryString = window.location.search

const urlParams = new URLSearchParams(queryString)

// Sunday 0, Monday 1, Tuesday 2, ..., Saturday 6
const dayNumber = urlParams.has('day')
  ? urlParams.get('day')
  : date.getDay()

// Ignore weekends
if (dayNumber >= 1 && dayNumber <= 5) {
  const className = urlParams.has('class')
    ? urlParams.get('class')
    : 'poplar'

  const todaysSchedule = schedules[className][dayNumber - 1]

  $('#schedule').html('The lessons today are: <ol><li contenteditable>' + todaysSchedule.join('</li> <li contenteditable>') + '</li></ol>')

  if (pencilLessons.indexOf(todaysSchedule[0]) !== -1) {
    $('#extra').html('Unpack your bags and get your pencils.')
  } else {
    $('#extra').html('Unpack your bags.')
  }
}
