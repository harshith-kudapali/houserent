document.addEventListener('DOMContentLoaded', function () {

    const exploreButton = document.querySelector('.cta-exp');
    if (exploreButton) {
        exploreButton.addEventListener('click', function (e) {
            e.preventDefault();
            const propertySection = document.querySelector('#property-details');
            if (propertySection) {
                propertySection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    }

    const callButton = document.querySelector('.cta-call');
    if (callButton) {
        callButton.addEventListener('click', function (e) {
            e.preventDefault();
            const phoneNumber = callButton.getAttribute('href');
            window.location.href = phoneNumber;
        });
    }

});
