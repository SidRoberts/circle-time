/* global $, date */

const schedules = {
  'poplar': [
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
      'Wonders',
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
      'Society and Me',
      'iGenius'
    ],

    // Friday
    [
      'Wonders',
      'iSpring',
      'Wonders',
      'Reading Project',
      'Number Adventure',
      'iPlay'
    ]
  ],



  'palm': [
    // Monday
    [
      'Wonders',
      'iSpring',
      'Chinese',
      'Reading Project',
      'Classic',
      'Number Adventure',
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

// Ignore weekends (Saturday - 6, Sunday - 0)
if (date.getDay() >= 1 && date.getDay() <= 5) {
  var queryString = window.location.search;

  var urlParams = new URLSearchParams(queryString);

  if (urlParams.has('class')) {
    var className = urlParams.get('class')
  } else {
    var className = 'poplar'
  }

  if (urlParams.has('day')) {
    var day = urlParams.get('day')
  } else {
    var day = date.getDay() - 1
  }

  var todaysSchedule = schedules[className][day]

  $('#schedule').html('The lessons today are: <ol><li>' + todaysSchedule.join('</li> <li>') + '</li></ol>')

  if (pencilLessons.indexOf(todaysSchedule[0]) !== -1) {
    $('#extra').html('Unpack your bags and get your pencils.')
  } else {
    $('#extra').html('Unpack your bags.')
  }
}
