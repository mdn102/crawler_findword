const IMAGES = document.querySelectorAll("img");

for (let i = 0; i<IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    imgSrc = imgSrc.slice(0,-8);
    console.log(imgSrc);
    
    // let srcset = makeSrcset(imgSrc);
    // IMAGES[i].setAttribute("srcset", srcset);

    // let type = IMAGES[i].getAttribute("data-type");
    // let sizes = SIZES[type];
    // IMAGES[i].setAttribute("sizes", sizes);

}