(function() {
    "use strict";
    window.onload = function() {       
        window.onscroll = function() {checkHeader()};
        function checkHeader() {
            if (window.pageYOffset < 100) {
                document.getElementById("header").classList.remove("sticky");
            } else {
                document.getElementById("header").classList.add("sticky");
                if(localStorage.getItem("92crew-snipcart-loaded") !== "yes") {
                    localStorage.setItem("92crew-snipcart-loaded", "yes");
                    addSnipcart();
                }
            }
        };

        let acc = document.getElementsByClassName("accordion-button");
        let i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                let accs = document.getElementsByClassName("accordion-button");
                let j;
                for (j = 0; j < accs.length; j++) {
                    accs[j].classList.remove("active");
                    var panel = accs[j].nextElementSibling;
                    panel.style.display = "none";
                }
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }

        let mobileNavButton = document.getElementById("mobile-nav-button");
        let mobileNav = document.getElementById("navbarContent");
        mobileNavButton.addEventListener("click", function() {
            if (window.getComputedStyle(mobileNav).display === "none") {
                mobileNav.style.display = "block";
            }
            else {
                mobileNav.style.display = "none";
            }
        });

        let merch = document.getElementById("merch-link");
        let faq = document.getElementById("faq-link");
        let contact = document.getElementById("contact-link");

        merch.addEventListener("click", function() { updateActive(merch) });
        faq.addEventListener("click", function() { updateActive(faq) });
        contact.addEventListener("click", function() { updateActive(contact) });

        function updateActive(clickedLink) {
            merch.classList.remove("active");
            faq.classList.remove("active");
            contact.classList.remove("active");
            clickedLink.classList.add("active");
        }

        let moreInfoButton = document.getElementById("buy-btn-hero");
        moreInfoButton.addEventListener("click", function() { addSnipcart() });
        function addSnipcart() {
            localStorage.setItem("92crew-snipcart-loaded", "yes");
            console.log('Adding snipcart');
            var css = document.createElement('link')
            css.href = 'https://cdn.snipcart.com/themes/v3.0.8/default/snipcart.css'
            css.rel = 'stylesheet'
            css.type = 'text/css'
            document.getElementsByTagName('head')[0].appendChild(css)

            var customCss = document.createElement('link')
            customCss.href = '/assets/css/custom-snipcart.css'
            customCss.rel = 'stylesheet'
            customCss.type = 'text/css'
            document.getElementsByTagName('head')[0].appendChild(customCss)
            
            var js = document.createElement('script')
            js.src = 'https://cdn.snipcart.com/themes/v3.0.8/default/snipcart.js'
            document.getElementsByTagName('body')[0].appendChild(js) 
        }
        if(localStorage.getItem("92crew-snipcart-loaded") === "yes") {
            addSnipcart();
        }
    };
}());

/**
 * Author: Fatima Aurelia
 * Date: 01/22/2017
 * Version: 1.0
 */

document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
        if (target.hasAttribute('data-target')) {
            var m_ID = target.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();
        }
    }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
        var modal = document.querySelector('[class="modal open"]');
        modal.classList.remove('open');
        e.preventDefault();
    }
}, false);

let buyButtonModal = document.getElementById("buy-btn-modal");
buyButtonModal.addEventListener("click", function() { 
    var modal = document.querySelector('[class="modal open"]');
        modal.classList.remove('open');
        e.preventDefault();
});