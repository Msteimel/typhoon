    <script>
        $('#s-lc-eq-auth-lobtn').addClass('isulib-logout');
        document.getElementById('s-lc-eq-auth-lobtn').classList.add("isulib-logout");

        $('.isulib-logout').on('click', function (e) {
            // localStorage.clear();
            // window.close();
            window.open("https://iastate.libcal.com/equipment?lid=6690&gid=12028", "newwindow", "width=800,height=1000");
        });
        
       document.querySelector('#s-lc-eq-auth-lobtn').addEventListener('click', function(e) {
           e.preventDefault();
            console.log("test");
       });

        $('#s-lc-eq-auth-lobtn').on('click', function (e) {
            e.preventDefault();
            window.open("https://iastate.libcal.com/equipment?lid=6690&gid=12028");
        });
        
        $.removeCookie('ic_eqa', { path: '/' });


        $('#test').on('click', function (e) {
            e.preventDefault();
            window.open("http://www.google.com/");
        });

    </script>