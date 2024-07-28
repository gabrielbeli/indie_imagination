let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

document.addEventListener('DOMContentLoaded', () => {
   
    let isMuted = true; 
    const muteButton = document.getElementById('mute-toggle');
    const muteIcon = muteButton.querySelector('i');

    function updateVideoMuteState() {
        const videos = document.querySelectorAll('.carousel .list .item video');
        videos.forEach(video => video.muted = true); 
        const firstVisibleVideo = videos[0]; 
        if (firstVisibleVideo) {
            firstVisibleVideo.muted = isMuted; 
        }
    }

    updateVideoMuteState();

    muteButton.addEventListener('click', () => {
        isMuted = !isMuted;
        updateVideoMuteState();

        if (isMuted) {
            muteIcon.classList.remove('bi-volume-off-fill');
            muteIcon.classList.add('bi-volume-mute-fill');
        } else {
            muteIcon.classList.remove('bi-volume-mute-fill');
            muteIcon.classList.add('bi-volume-off-fill');
        }
    });

    function showSlider(type) {
        const SliderItemsDom = document.querySelectorAll('.carousel .list .item');
        const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

        if (type === 'next') {
            document.querySelector('.carousel .list').appendChild(SliderItemsDom[0]);
            document.querySelector('.carousel .thumbnail').appendChild(thumbnailItemsDom[0]);
            document.querySelector('.carousel').classList.add('next');
        } else {
            document.querySelector('.carousel .list').prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            document.querySelector('.carousel .thumbnail').prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            document.querySelector('.carousel').classList.add('prev');
        }

        updateVideoMuteState();

        setTimeout(() => {
            document.querySelector('.carousel').classList.remove('next');
            document.querySelector('.carousel').classList.remove('prev');
        }, 3000);
    }

    document.getElementById('next').onclick = function() {
        showSlider('next');
    };

    document.getElementById('prev').onclick = function() {
        showSlider('prev');
    };
});

