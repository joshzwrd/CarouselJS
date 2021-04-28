const next = document.querySelector("#next");
const previous = document.querySelector("#previous");

let slideIndex = 0;

const images = [
    {
        url: "./assets/img/kyle-frost-QH_vWt_bwKc-unsplash.jpg",
        alt: "A Green Lazard in Switzerland",
        captionText: `<span>Photo by <a href="https://unsplash.com/@marcus_ganahl?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank">Marcus Ganahl</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank">Unsplash</a></span>`
    },
    {
        url: "./assets/img/francesco-ungaro-pimNiNUbmSw-unsplash.jpg",
        alt: "Backcountry skiing above Peyto Lake in Banff National Park, AB, Canada.",
        captionText: `<span>Photo by <a href="https://unsplash.com/@kylefrost?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank">Kyle Frost</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank">Unsplash</a></span>`
    },
    {
        url: "./assets/img/marcus-ganahl-Fmh77Pw3-oE-unsplash.jpg",
        alt: "Dune di Piscinas, Arbus, SD, Italia",
        captionText: `<span>Photo by <a href="https://unsplash.com/@francesco_ungaro?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank">Francesco Ungaro</a> on <a href="https://unsplash.com/t/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank">Unsplash</a></span>`
    },
];



/**
 * Afficher la slide à l'index slideIndex
 */
const showSlide = () => {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = 'none')
    slides[slideIndex].style.display = 'block';
}

/**
 * Augmenter le slideIndex
 */
const nextSlide = () => {
    slideIndex++;
    // slideIndex += 1 ;
    // slideIndex = slideIndex + 1 ;
    slideIndex = slideIndex > images.length-1 ? 0 : slideIndex;
    showSlide();
}

/**
 * Réduire le slideIndex
 */
const previousSlide = () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = images.length-1;
    }
    showSlide();
}

/**
 * Créer et attacher les slides dans le DOM
 */
const generateSlide = (image) => {
    const slide = document.createElement('div');
    slide.classList = "slide";
    generateImage(image.url, image.alt, image.captionText, slide);
    document.querySelector('#carousel-container').appendChild(slide);
}

/**
 * Génére une Image et l'attache au noeud
 * @param {*} src 
 * @param {*} alt 
 * @param {*} captionText 
 * @param {*} node 
 */
const generateImage = (src, alt, captionText, node) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    const caption = document.createElement('div');
    caption.classList = 'caption';
    caption.innerHTML = captionText;
    node.appendChild(img);
    node.appendChild(caption);
}

const generateDots = () => {
    const controls = document.querySelector('#controls');
    images.forEach((image, index) => {
        const dot = document.createElement('span');
        dot.className = "dot";
        dot.addEventListener('click',()=>{
            slideIndex = index;
            showSlide();
        })
        controls.appendChild(dot);
    })

}

window.addEventListener('load',()=>{
    images.forEach(image => generateSlide(image));
    showSlide();
    generateDots();
})
next.addEventListener('click', nextSlide);
previous.addEventListener('click', previousSlide);