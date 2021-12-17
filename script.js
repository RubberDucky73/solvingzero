// Clickable hamburger menu for mobile
const navButton = document.querySelector('button[aria-expanded]');

function toggleNav({ target }) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);

// Truncate the paragraph descriptions for the blog articles
// Get the HTML element and set the trim length + make sure its not trimming in the middle of a word

var KeepOn = 'Keep Reading'
var KeepLink = KeepOn.link("blog/how-does-solar-work/index.html")


if (window.matchMedia("(max-width: 700px)").matches) {
    var ReadOn = 'Read More...'
    var ReadLink = ReadOn.link("blog/how-does-solar-work/index.html")
    var descrip = document.getElementById('description').innerHTML
    var maxLength = 160
    var trimmedPara= descrip.substr(0, maxLength);
    trimmedPara = trimmedPara.substr(0, Math.min(trimmedPara.length, trimmedPara.lastIndexOf(" ")))

    // Make sure the p element is long enough to trim and then append read more link
    function truncate(para) {
        if (para.length <= 60) {
            return para 
        }
        return trimmedPara + ' ' + ReadLink
    }

    var truncated = truncate(descrip)

    document.getElementById("description").innerHTML = truncated;
    } else {
     document.getElementById("description").innerHTML = document.getElementById("description").innerHTML + '... ' + KeepLink;
};

