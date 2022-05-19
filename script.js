// Clickable hamburger menu for mobile
const navButton = document.querySelector('button[aria-expanded]');

function toggleNav({ target }) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);


// Below is the modal survey form for the CTA

var ifr = document.getElementById("JotFormIFrame-221385605315048");
if (ifr) {
  var src = ifr.src;
  var iframeParams = [];
  if (window.location.href && window.location.href.indexOf("?") > -1) {
    iframeParams = iframeParams.concat(window.location.href.substr(window.location.href.indexOf("?") + 1).split('&'));
  }
  if (src && src.indexOf("?") > -1) {
    iframeParams = iframeParams.concat(src.substr(src.indexOf("?") + 1).split("&"));
    src = src.substr(0, src.indexOf("?"))
  }
  iframeParams.push("isIframeEmbed=1");
  ifr.src = src + "?" + iframeParams.join('&');
}
window.handleIFrameMessage = function(e) {
  if (typeof e.data === 'object') { return; }
  var args = e.data.split(":");
  if (args.length > 2) { iframe = document.getElementById("JotFormIFrame-" + args[(args.length - 1)]); } else { iframe = document.getElementById("JotFormIFrame"); }
  if (!iframe) { return; }
  switch (args[0]) {
    case "scrollIntoView":
      iframe.scrollIntoView();
      break;
    case "setHeight":
      iframe.style.height = (args[1] - 100) + "px";
      break;
    case "collapseErrorPage":
      if (iframe.clientHeight > window.innerHeight) {
        iframe.style.height = window.innerHeight + "px";
      }
      break;
    case "reloadPage":
      window.location.reload();
      break;
    case "loadScript":
      if( !window.isPermitted(e.origin, ['jotform.com', 'jotform.pro']) ) { break; }
      var src = args[1];
      if (args.length > 3) {
          src = args[1] + ':' + args[2];
      }
      var script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      document.body.appendChild(script);
      break;
    case "exitFullscreen":
      if      (window.document.exitFullscreen)        window.document.exitFullscreen();
      else if (window.document.mozCancelFullScreen)   window.document.mozCancelFullScreen();
      else if (window.document.mozCancelFullscreen)   window.document.mozCancelFullScreen();
      else if (window.document.webkitExitFullscreen)  window.document.webkitExitFullscreen();
      else if (window.document.msExitFullscreen)      window.document.msExitFullscreen();
      break;
  }
  var isJotForm = (e.origin.indexOf("jotform") > -1) ? true : false;
  if(isJotForm && "contentWindow" in iframe && "postMessage" in iframe.contentWindow) {
    var urls = {"docurl":encodeURIComponent(document.URL),"referrer":encodeURIComponent(document.referrer)};
    iframe.contentWindow.postMessage(JSON.stringify({"type":"urls","value":urls}), "*");
  }
};
window.isPermitted = function(originUrl, whitelisted_domains) {
  var url = document.createElement('a');
  url.href = originUrl;
  var hostname = url.hostname;
  var result = false;
  if( typeof hostname !== 'undefined' ) {
    whitelisted_domains.forEach(function(element) {
        if( hostname.slice((-1 * element.length - 1)) === '.'.concat(element) ||  hostname === element ) {
            result = true;
        }
    });
    return result;
  }
};
if (window.addEventListener) {
  window.addEventListener("message", handleIFrameMessage, false);
} else if (window.attachEvent) {
  window.attachEvent("onmessage", handleIFrameMessage);
}

// This code will truncate the paragraph descriptions for the blog articles when displayed in the masonry grid
// Get the HTML element and set the trim length + make sure its not trimming in the middle of a word
// var KeepOn = 'Keep Reading'
// var KeepLink = KeepOn.link("blog/how-does-solar-work/index.html")

// if (window.matchMedia("(max-width: 700px)").matches) {
//     var ReadOn = 'Read More...'
//     var ReadLink = ReadOn.link("blog/how-does-solar-work/index.html")
//     var descrip = document.getElementById('description').innerHTML
//     var maxLength = 160
//     var trimmedPara= descrip.substr(0, maxLength);
//     trimmedPara = trimmedPara.substr(0, Math.min(trimmedPara.length, trimmedPara.lastIndexOf(" ")))

//     // Make sure the p element is long enough to trim and then append read more link
//     function truncate(para) {
//         if (para.length <= 60) {
//             return para 
//         }
//         return trimmedPara + ' ' + ReadLink
//     }

//     var truncated = truncate(descrip)

//     document.getElementById("description").innerHTML = truncated;
//     } else {
//      document.getElementById("description").innerHTML = document.getElementById("description").innerHTML + '... ' + KeepLink;
// };