var ratio = .1
var options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio
}

var handleIntersect = function (entries, observer) {
    entries.forEach(function (entry){
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add("reveal-visible")
            observer.unobserve(entry.target)
        }
    })
}

var observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll(".reveal").forEach(function (r) {
    observer.observe(r)
})

const target = document.getElementById('#main'),
    button = document.getElementById('bouton_suivant');

button.addEventListener('click', function(){

    target.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'nearest'
    });

});
