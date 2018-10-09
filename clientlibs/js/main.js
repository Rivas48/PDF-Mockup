(function ($) {



    $('.fhd-testimonial-content-container').on('click', '.slide-arrow', function() {
        var $this = $(this),
            sliderContent = $this.siblings('.fhd-testimonial-slider'),
            slide = sliderContent.find('.fhd-slide'),
            activeSlide = sliderContent.find('.fhd-current-slide'),
            nextSlide = activeSlide.next(),
            nextIndex,
            slideLength = slide.length,
            moveAmount = '-100%',
            startingPosition = '100%';

        if ($this.hasClass('previous')) {
            moveAmount = '100%';
            startingPosition = '-100%';
            nextSlide = activeSlide.prev();
        }

        nextIndex = nextSlide.index();

        activeSlide.animate({left: moveAmount}).removeClass('fhd-current-slide');
        nextSlide.css('left', startingPosition).animate({left: 0}).addClass('fhd-current-slide');

        $this.siblings('.slide-arrow').removeClass('disabled');

        if (nextIndex === 0) {
            $this.filter('.previous').addClass('disabled');
        } else if (nextIndex === slideLength - 1) {
            $this.filter('.next').addClass('disabled');
        }
    });

})(this.jQuery);

function openModal(slideUrl) {
    document.getElementById('slider-modal').style.display = "block";
    var slideModal = $('#slider-modal');
    var video = slideModal.find("video");
    video.attr("src", slideUrl);


}

function closeModal() {
    document.getElementById('slider-modal').style.display = "none";
    var slideModal = $('#slider-modal');
    var video = slideModal.find("video");
    video.attr("src", "");
}
