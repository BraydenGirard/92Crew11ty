(function() {
    "use strict";
    window.onload = function() {       
        window.onscroll = function() {checkHeader()};
        function checkHeader() {
            if (window.pageYOffset < 100) {
                document.getElementById("header").classList.remove("sticky");
            } else {
                document.getElementById("header").classList.add("sticky");
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
    };
}());

if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
        if (!user) {
        window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
        });
        }
    });
}
