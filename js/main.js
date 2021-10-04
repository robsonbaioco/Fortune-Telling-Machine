$(function() {
    $.ajax({
        url: '',
        type: 'post',
        dataType: 'json',
    })
    .done(function() {
        console.log("success");
    });

    $('#machine').click(function( event ) {
        var keys = Object.keys(answers);
        answer   = answers[keys[keys.length * Math.random() << 0]];
        
        $('img').addClass('_shake');

        $('img').on("animationend", function(){
            $(this).removeClass('_shake');
        });

        $('.answer').text(answer.texto);
    });
});