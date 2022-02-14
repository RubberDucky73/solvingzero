// This will open and close the modal
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");
const submit = document.querySelector(".submit-modal");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
submit.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


// This will take the modal inputs and filter the landing page company list based on the choices made

var button = document.getElementById("submit");

button.onclick = () => {
    var y = document.getElementsByClassName("item").item(0);
    var w = y.dataset.value
}

button.addEventListener ("click", function() {
    var y = document.getElementsByClassName("item").item(0);
    var w = y.dataset.value;
    var x = document.getElementById(w);
      if ( x.style.display == "" || x.style.display == "none") {
          x.style.display = "none";
      } else {
          x.style.display = "";
      }
  }, false);

// All the companies need to be declared before the onclick 
var companies = document.getElementsByName("company");

button.onclick = () => {
    var greenValue = document.querySelector('input[name="green-amount"]:checked');
    var priceValue = document.querySelector('input[name="price-amount"]:checked');
    var trustValue = document.querySelector('input[name="trust-amount"]:checked');   
    if (greenValue === null) {
            greenValue = 1
        } else {
             greenValue = greenValue.value;   
        }

    if (priceValue === null) {
            priceValue = 1
        } else {
                priceValue = priceValue.value;   
        }

    if (trustValue === null) {
            trustValue = 1
        } else {
                trustValue = trustValue.value;   
        }

    runValues();

    function runValues(gValue, pValue, tValue) {
        companies.forEach(function (biz) {
            var g = biz.dataset.green
            var p = biz.dataset.price
            var t = biz.dataset.trust
            if (g < gValue) {
                biz.style.display = 'none';
            } else if (p < pValue) {
                biz.style.display = 'none';
            } else if (t < tValue) {
                biz.style.display = 'none';
            } else {
                biz.style.display = '';
            }
        })
    };
    runValues(greenValue, priceValue, trustValue)


    // Find what group each company is in, then find if that company is being displayed to the user, if so display the header, if not remove the header
    if (greenValue !== null || priceValue !== null || trustValue !== null) {
        document.getElementById('list1').style.display = "none"; }

    if (greenValue !== null || priceValue !== null || trustValue !== null) {
        document.getElementById('list2').style.display = "none"; }

    if (greenValue !== null || priceValue !== null || trustValue !== null) {
        document.getElementById('list3').style.display = "none"; }

    if (greenValue !== null || priceValue !== null || trustValue !== null) {
        document.getElementById('list4').style.display = "none"; }
        
    if (greenValue !== null || priceValue !== null || trustValue !== null) {
        document.getElementById('list5').style.display = "none"; }
    

    var display5 = document.querySelectorAll('[data-rank="1"]');
    var array5 = []

    display5.forEach(function (title) {
        var rankId = title.id;
        var showing = document.getElementById(rankId).style.display;
        array5.push(showing)
    });

    if (array5.includes('')) {
        document.getElementById('list5.1').style.display = ''; 
    } else {
        document.getElementById('list5.1').style.display = 'none'; 
    };

    var display3 = document.querySelectorAll('[data-rank="3"]');
    var array3 = []

    display3.forEach(function (title) {
        var rankId = title.id;
        var showing = document.getElementById(rankId).style.display;
        array3.push(showing)
    });

    if (array3.includes('')) {
        document.getElementById('list3.1').style.display = ''; 
    } else {
        document.getElementById('list3.1').style.display = 'none'; 
    };

    var display1 = document.querySelectorAll('[data-rank="4"]');
    var array1 = []

    display1.forEach(function (title) {
        var rankId = title.id;
        var showing = document.getElementById(rankId).style.display;
        array1.push(showing)
    });

    if (array1.includes('')) {
        document.getElementById('list1a').style.display = ''; 
    } else {
        document.getElementById('list1a').style.display = 'none'; 
    };
}

