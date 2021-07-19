$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $(".scroll-up-btn").click(function(){
        $("html, body").animate({scrollTop: 0});
    });

    var typed = new Typed(".typing", {
        strings: ["Programmer","Developer" , "CTF-Player","Student","Geek"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });

    var typed = new Typed(".typing2", {
        strings: ["Programmer","Developer" , "CTF-Player","Student","Geek"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true

    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});


var form = document.getElementById("contactform");
        
        async function handleSubmit(event) {
          event.preventDefault();
          
          var data = new FormData(event.target);
          fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
          }).then(response => {
            window.alert("Thanks for your submission!")
            form.reset()
          }).catch(error => {
              window.alert("Oops! There was a problem submitting your form")
          });
        }
        form.addEventListener("submit", handleSubmit)
