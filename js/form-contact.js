
$(document).ready(function() {
    $('form#contact-form').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        $('form#contact-form .error').remove();
        var hasError = false;

        $('.requiredField').each(function() {
            if (jQuery.trim($(this).val()) === '') {
                var labelText = $(this).prev('label').text();
                $(this).parent().append('<span class="error">You forgot to enter your ' + labelText + '</span>');
                $(this).addClass('inputError');
                hasError = true;
            } else if ($(this).hasClass('email')) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (!emailReg.test(jQuery.trim($(this).val()))) {
                    var labelText = $(this).prev('label').text();
                    $(this).parent().append('<span class="error">You entered an invalid ' + labelText + '</span>');
                    $(this).addClass('inputError');
                    hasError = true;
                }
            }
        });

        if (!hasError) {
            $('form#contact-form input.submit').fadeOut('normal', function() {
                $(this).parent().append('');
            });

            $("#loader").show();

            $.ajax({
                url: "contact.php",
                type: "POST",
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,
                success: function(data) {
                    $('form#contact-form').slideUp("fast", function() {
                        $(this).before('<div class="success">Thank you. Your Email was sent successfully.</div>');
                        $("#loader").hide();
                    });
                },
                error: function() {
                    $('form#contact-form').before('<div class="error">Sorry, there was an error sending your message. Please try again later.</div>');
                    $("#loader").hide();
                }
            });
        }

        return false;
    })
});

