// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
const currentYear = new Date().getFullYear();
// console.log(date, currentYear);
date.innerHTML = currentYear;

// ********** close links ************
const toggleBtn = document.querySelector(".nav-toggle");
const linkContainer = document.querySelector(".link-container");
const links = document.querySelector(".links");
// console.log(links);

toggleBtn.addEventListener('click', function() {
    // linkContainer.classList.toggle('show-links');
    // calculate linksheight
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linkContainer.getBoundingClientRect().height;
    console.log(linksHeight); 

    if ( containerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`;
    } else {
        linkContainer.style.height = 0 ;
    }

});

// ********** fixed navbar ************

    window.addEventListener('scroll', function () {
        const navBar = document.getElementById("nav");
        const topLink = document.querySelector(".top-link");
        let navHeight = navBar.getBoundingClientRect().height;
        // console.log(navBar, navHeight);
        // console.log(pageYOffset); 
        let positionScroll = window.pageYOffset;
        if ( positionScroll > navHeight  ) {
            navBar.classList.add("fixed-nav")
        }
        else {
            navBar.classList.remove("fixed-nav")
        }
        // back to bottom function
        if ( positionScroll > 500) {
            topLink.classList.add("show-link");
        }
        else {
            topLink.classList.remove("show-link");
        }
    })

// ********** smooth scroll ************
// select links

    const scrollLinks = document.querySelectorAll('.scroll-link');
    console.log(scrollLinks);
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let linkId = e.currentTarget.getAttribute('href').slice(1);
            // console.log(linkId);

            let elementPos = document.getElementById(linkId).getBoundingClientRect().top + window.scrollY;
            console.log(elementPos);
            const navBar = document.getElementById("nav");
            const navBarHeight = navBar.getBoundingClientRect().height;
            console.log(navBarHeight);
            let scrollPos = elementPos - navBarHeight;

            let fixedNav = navBar.classList.contains('fixed-nav')
            if (!fixedNav) {
                scrollPos = scrollPos - 82;
            }
            const linksHeight = links.getBoundingClientRect().height;
            if (linksHeight > 82) {
                scrollPos = scrollPos + linksHeight;
                // console.log(scrollPos)
            }

            window.scroll({
                left: 0,
                top: scrollPos
            });
            linkContainer.style.height = 0 ;
     }); 
});