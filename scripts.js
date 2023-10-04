const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.activity-mobile-slider_buttons.next',
        prevEl: '.activity-mobile-slider_buttons.back',
    },
});

document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-charity-news-item-reade-more]');

    if (button) {
        const wrapper_block = button.closest('.activity_events_description-wrapper');
        const hidden_text = wrapper_block.querySelector('.activity_events_description');

        hidden_text.classList.toggle('activity_events_description-open');
        button.style['display'] = 'none';
    }
})


document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-charity-article-teg-header]');

    if (button && window.innerWidth < 768) {
        const wrapper_block = button.closest('.charity-article_teg-wrapper');

        wrapper_block.classList.toggle('open');
        button.classList.toggle('open');
    }
})