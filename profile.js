document.addEventListener('DOMContentLoaded', function () {
    const postImages = document.querySelectorAll('.post img');
    const highlightImages = document.querySelectorAll('.highlight img');
    const profileImage = document.querySelector('#profile');
    
    
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.appendChild(modal);


    const modalImage = document.createElement('img');
    modal.appendChild(modalImage);

    
    function openModal(imgSrc) {
        modalImage.src = imgSrc;
        modal.style.display = 'flex';  
    }

    postImages.forEach(function (img) {
        img.addEventListener('click', function () {
            openModal(img.src);
        });
    });

    highlightImages.forEach(function (img) {
        img.addEventListener('click', function () {
            openModal(img.src);
        });
    });

    profileImage.addEventListener('click', function () {
        openModal(profileImage.src);
    });

    modal.addEventListener('click', function () {
        modal.style.display = 'none';  
    });
});
