$(document).ready(function() {
    // Toggle Video Modal

    function toggle_video_modal() {
        $(".js-trigger-video-modal").on("click", function(e) { 
            // console.log('click');
            e.preventDefault();

            
            const id = $(this).attr("data-id");
            // const autoplay = "?autoplay=1";
            // const related_no = "&rel=0";
            const src = "https://player.vimeo.com/video/"+id;

            console.log(src);

            $("#vimeo").attr("src", src);

            $("body").addClass("show-video-modal noscroll");
        });
  

        function close_video_modal() {
            event.preventDefault();
            $("body").removeClass("show-video-modal noscroll");

            $("#vimeo").attr("src", "");
        }

        $("body").on("click", ".close-video-modal, .video-modal .overlay", function(e) {
            close_video_modal();
        });

        $("body").keyup(function(e){
            if (e.keyCode == 27) {
                close_video_modal();
            }
        });

    }
    toggle_video_modal();


});