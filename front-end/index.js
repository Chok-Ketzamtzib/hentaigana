$(document).ready(function() {
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function(e) {
                $('#uploaded-image').attr('src', e.target.result);
                $('#id-text').text('Here will be displayed the analysis.');
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#img-input").change(function() {
        readURL(this);
    });

    


});
