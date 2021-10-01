$(function() {
    $.ajax({
        url: '',
        type: 'post',
        dataType: 'json',
    })
    .done(function() {
        console.log("success");
    });

    // wow
    // new WOW({
    //     offset: 300
    // }).init();

    $( "#machine" ).click(function( event ) {
        var keys = Object.keys(answers);
        answer = answers[keys[keys.length * Math.random() << 0]];
    
        $('.answer_').text(answer.texto);
    });
});