$(document).ready(function(){

    isFaceAuth = true;
    var faceAuth = $('.faceAuth');
    var userAuth = $('.userAuth');
    $('#normalLogin').on('click',()=>{
        if (isFaceAuth == true){
            faceAuth.css({
                'display': 'none',
            });
            userAuth.css({
                'display': 'block',
            });
            $('#normalLogin').html("Face ID");
            isFaceAuth = false;
        }

        else{
            faceAuth.css({
                'display': 'flex',
                'flex-direction': 'column',
            });

            userAuth.css({
                'display' : 'none',
            });
            $('#normalLogin').html("Usuario/Contrasena");
            isFaceAuth = true;
        }
    });

    var username = $("#username");
    var password = $("#password");
    var submit = $("#submit");

    submit.on("click", e=>{
        if (username.val() == "" && password.val() == "") {
            e.preventDefault();
            userAuth.append("<p>Introduce un usuario y contrasena validos</p>");
        }
        else if(username.val() == ""){
            e.preventDefault();
            userAuth.append("<p>Introduce un usuario valido</p>");
        }
        else if(password.val() == ""){
            e.preventDefault();
            userAuth.append("<p>Introduce un contrasena valida</p>")
        }
    })
});