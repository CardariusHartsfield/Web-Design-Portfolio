
//Coding for ALL Webpages

// document.addEventListener("DOMContentLoaded", function () {
//     setTimeout(() => {
//         window.scrollTo(0, 0);
//     }, 100); 
// });


document.addEventListener("DOMContentLoaded", function () {
    const shopBorder = document.getElementById("location_Shop_Border");

    function checkVisibility() {
        const rect = shopBorder.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            shopBorder.classList.add("show");
        }
    }

    // Delay execution by 2 seconds (2000ms)
    setTimeout(() => {
        window.addEventListener("scroll", checkVisibility);
        checkVisibility();
    }, 800);
});
        




//FOOTER/BORDER

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("scroll", function() {
        const locationShopBorder = document.querySelector('#location_Shop_Border');
        
        if (locationShopBorder) {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                locationShopBorder.classList.add('show');
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const shopBorder = document.getElementById("location_Shop_Border");

    function checkVisibility() {
        const rect = shopBorder.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            shopBorder.classList.add("show");
        }
    }

    // Delay execution by 2 seconds (2000ms)
    setTimeout(() => {
        window.addEventListener("scroll", checkVisibility);
        checkVisibility();
    }, 800);
});
