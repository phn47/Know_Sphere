


$('[data-countdown]').each(function () {
    
    var $this = $(this),
        finalDate = $(this).data('countdown');
    if (!$this.hasClass('countdown-full-format')) {
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="countdown-time"><span>%D</span><small>Ngày</small></span> <span class="countdown-time"><span>%H</span><small>Giờ</small></span> <span class="countdown-time"><span>%M</span><small>Phút</small></span> <span class="countdown-time"><span>%S</span><small>Giây</small></span>'));
        });
    } else {
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="countdown-time"><span>%D</span><small>Ngày</small></span> <span class="countdown-time"><span>%H</span><small>Giờ</small></span> <span class="countdown-time"><span>%M</span><small>Phút</small></span> <span class="countdown-time"><span>%S</span><small>Giây</small></span>'));
        });
    }
});