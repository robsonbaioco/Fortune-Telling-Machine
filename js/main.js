$(function() {
    $(document).on('click', '#machine', function(event) {
        var keys = Object.keys(answers);
        answer   = answers[keys[keys.length * Math.random() << 0]];

        // Anim image
        $('img').addClass('_shake');
        $('.answer').removeClass('_active');

        $('img').on("animationend", function(){
            $(this).removeClass('_shake');

            // Anim resposta
            $('.answer').addClass('_active');
            $('.answer span').text(answer.texto);
        });
    });
});