/*执行事件*/
$(function () {

    //打印
    $('.button_print').click(function () {
        $('.main').print({
            addGlobalStyles: true,
            mediaPrint: true
        });
    });

    //timeline action
    $('.info_timeline ul li').mouseenter(function () {
        $(this).addClass('curr');
        $(this).parent().addClass('focus');
        var s_id = $(this).attr('id');
        $('.info_content').addClass('over')
        $('.' + s_id).addClass('curr');
    });
    $('.info_timeline ul li').mouseleave(function () {
        $(this).removeClass('curr');
        $(this).parent().removeClass('focus');
        $('.info_content').removeClass('over')
        $('.info_content .desc').removeClass('curr');
    });

    // Scroll reveal using IntersectionObserver
    if ('IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.reveal').forEach(function(el) {
            revealObserver.observe(el);
        });
    } else {
        // Fallback: just show everything
        document.querySelectorAll('.reveal').forEach(function(el) {
            el.classList.add('visible');
        });
    }

});
