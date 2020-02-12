'use strict';




// ScrollTo Menu
var menuLinks = document.querySelectorAll('.main-menu__link');

menuLinks.forEach(function(element) {
    element.addEventListener('click', function() {
        event.preventDefault();
        var linkHref = this.getAttribute("href");
        var sectionPosititon = document.querySelector(linkHref).getBoundingClientRect().top - 25;
        window.scrollTo({ 
            top: sectionPosititon, 
            behavior: "smooth" 
        });
    });
});




// Mobile Menu
var mainMenu = document.getElementById('mainMenu');
var menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', function () {
    if (!this.classList.contains('main-nav__menu-button_active')) {
        this.classList.add('main-nav__menu-button_active');
        mainMenu.style.display = 'flex';
    }
    else {
        this.classList.remove('main-nav__menu-button_active');
        mainMenu.style.display = 'none';
    }
});



// Select Styling
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");

for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "custom-select__items-current");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "custom-select__items custom-select__items-hide");
    for (j = 1; j < selElmnt.length; j++) {
        c = document.createElement("DIV");
        c.setAttribute("class", "custom-select__items-single");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("custom-select__items-hide");
        this.classList.toggle("custom-select__arrow");
    });
}

function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("custom-select__items");
    y = document.getElementsByClassName("custom-select__items-current");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("custom-select__arrow");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("custom-select__items-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);




// Range Slider
var slider = document.getElementById("jsRangeInput");
var bar = document.getElementById("jsRangeBar");

bar.style.width = slider.value + '%';

slider.oninput = function () {
    bar.style.width = this.value + '%';
}

slider.onchange = function () {
    
    if (this.value > 0 && this.value < 12) {
        this.value = '0';
    }
    else if (this.value == 12 || this.value > 12 && this.value < 24 || this.value > 24 && this.value < 37) {
        this.value = '24';
    }
    else if (this.value == 37 || this.value > 37 && this.value < 50 || this.value > 50 && this.value < 65) {
        this.value = '50';
    }
    else if (this.value == 65 || this.value > 65 && this.value < 100) {
        this.value = '100';
    }

    bar.style.width = this.value + '%';

}




// Prevent Submit
document.getElementById('describeForm').addEventListener('submit', function (event) {
    event.preventDefault();
})