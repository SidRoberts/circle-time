/* global $, date */

const schedule = [
  // Monday
  [
    'Chinese',
    'Classic',
    'iSpring',
    'Reading Project',
    'Number Adventure',
    'Discover and Explore'
  ],

  // Tuesday
  [
    'Wonders',
    'iSpring',
    'iSpring',
    'Body Movement',
    'Story Art',
    'Society and Me'
  ],

  // Wednesday
  [
    'Wonders',
    'iSpring',
    'Word and Sentence',
    'Reading Project',
    'Body Movement',
    'Classic'
  ],

  // Thursday
  [
    'Wonders',
    'iSpring',
    'iSpring',
    'Discover and Explore',
    'Word and Sentence',
    'iGenius'
  ],

  // Friday
  [
    'Wonders',
    'iSpring',
    'Word and Sentence',
    'Reading Project',
    'Number Adventure',
    'iPlay'
  ]
]

// Lessons that require a pencil at the very beginning of the class
const pencilLessons = [
  'iGenius',
  'iSpring',
  'Wonders',
  'Word and Sentence'
]

// Ignore weekends (Saturday - 6, Sunday - 0)
if (date.getDay() >= 1 && date.getDay() <= 5) {
  var todaysSchedule = schedule[date.getDay() - 1]

  $('#schedule').html('The lessons today are: <ol><li>' + todaysSchedule.join('</li> <li>') + '</li></ol>')

  if (pencilLessons.indexOf(todaysSchedule[0]) !== -1) {
    $('#extra').html('Unpack your bags and get your pencils.')
  } else {
    $('#extra').html('Unpack your bags.')
  }
}
