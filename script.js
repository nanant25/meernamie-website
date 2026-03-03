function openFullImage(element) {
    const imgElement = element.querySelector('img');
    if (imgElement) {
        const imgSrc = imgElement.src;
        const fullImg = document.getElementById('fullImage');
        if (fullImg) {
            fullImg.src = imgSrc;
            var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
            myModal.show();
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var menuCollapse = document.getElementById('navbar1');
    var navLinks = document.querySelectorAll('.nav-link');
    var toggler = document.querySelector('.navbar-toggler');

    if (menuCollapse && typeof bootstrap !== 'undefined') {
        var bsCollapse = new bootstrap.Collapse(menuCollapse, { toggle: false });

        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                if (menuCollapse.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });

        if (toggler) {
            toggler.addEventListener('click', function() {
                if (menuCollapse.classList.contains('show')) {
                    bsCollapse.hide();
                } else {
                    bsCollapse.show();
                }
            });
        }
    }
});