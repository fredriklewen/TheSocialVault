addEventListener('DOMContentLoaded', function () {
    // // Scroll down
    // document.getElementById("scroll-down").addEventListener("click", function () {
    //     window.scroll({
    //         top: window.innerHeight,
    //         behavior: "smooth"
    //     });
    // });

    // // Scroll to top
    // var element = document.getElementsByClassName("scroll-up");
    // for (var i = 0; i < element.length; i++) {
    //     element[i].addEventListener('click', function () {
    //         window.scroll({
    //             top: 0,
    //             behavior: "smooth"
    //         });
    //     });
    // }


    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
    }

    // Smooth scroll on href to same page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



    // function disableButton() {
    //     const invalidForm = document.querySelector('form:invalid');
    //     const submitBtn = document.getElementById('submit');
    //     const email = document.getElementById('email').value;

    //     validEmail = String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        
    //     if (invalidForm || !validEmail) {
    //       submitBtn.setAttribute('disabled', true);
    //       email.setCustomValidity("Invalid field.");
    //     } else {
    //       submitBtn.disabled = false;
    //       email.setCustomValidity("");
    //     }
    //   }
      
    //   disableButton();
      
    //   const inputs = document.getElementsByTagName("input");
    //   for (let input of inputs) {
    //     input.addEventListener('change', disableButton);
    //   }

    

});

function toggleMenu() {
    var navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('active');
}