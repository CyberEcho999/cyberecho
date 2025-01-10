document.addEventListener('DOMContentLoaded', () => {
    const banners = document.querySelectorAll('.banner');
    const footer = document.querySelector('footer');
    let bannerBottomPosition = 10;

    banners.forEach(banner => {
        const bannerId = banner.id;

        if (localStorage.getItem(bannerId) === 'dismissed') {
            banner.style.display = 'none';
        } else {
            banner.style.display = 'block';
            banner.classList.add('show');
            adjustBannerPositions();
        }
    });

    adjustBannerPositions();
});

function dismissBanner(bannerId) {
    const banner = document.getElementById(bannerId);

    if (banner) {
        banner.classList.add('hide');

        banner.addEventListener(
            'transitionend',
            () => {
                banner.style.display = 'none';
                localStorage.setItem(bannerId, 'dismissed');
                adjustBannerPositions();
            },
            { once: true }
        );
    }
}

function adjustBannerPositions() {
    const banners = Array.from(document.querySelectorAll('.banner')).filter(
        banner => banner.style.display !== 'none'
    );
    let bannerBottomPosition = 10;

    banners.forEach(banner => {
        banner.style.bottom = `${bannerBottomPosition}px`;
        bannerBottomPosition += banner.offsetHeight + 10;
    });
}

function restoreBanners() {
    const banners = document.querySelectorAll('.banner');

    banners.forEach(banner => {
        localStorage.removeItem(banner.id);
        banner.style.display = 'block';
        banner.classList.remove('hide');
    });

    adjustBannerPositions();
}

document.addEventListener('DOMContentLoaded', () => {
    const banners = document.querySelectorAll('.banner');

    banners.forEach(banner => {
        if (localStorage.getItem(banner.id) === 'dismissed') {
            banner.style.display = 'none';
        } else {
            banner.style.display = 'block';
        }
    });

    adjustBannerPositions();
});