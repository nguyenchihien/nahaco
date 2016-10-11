$(document).ready(function(){
    $("#your-fb.fb-comments").attr('data-href', URL); //set truoc
    initFacebook(FB_APP_ID);
    init();
    setColor(COLOR);
    setAnimation();
    // initTwitter();
    initGoogleAnalytic(GOOGLE_ANALYTIC_ID);
    setKeyword(KEYWORDS);
    $(document).on("click","#signupPop", function(){
        // alert();
        signupPop(); 
    });
});
//-----------------------------------------------------------------
function setColor(COLOR){
    $("body").addClass(COLOR + " lighten-5");
    $(".main-color-text").addClass(COLOR + "-text text-darken-4");
    $(".main-color").addClass(COLOR + " darken-4");

    $(".progress, .indeterminate").addClass(COLOR + " lignten-1");
    $("nav#nav").addClass(COLOR + " darken-2 center-align");
    $("li#avatar").addClass(COLOR + " darken-4 white-text center-align");
    $("ul#dropdown-1").addClass(COLOR + " darken-3");
    $("div#report").addClass(COLOR + " darken-4 white-text z-depth-1");
    $(".prefix").addClass(COLOR + "-text darken-4");
    $("ul.dropdown-content li a").addClass(COLOR + "-text");
}

function setKeyword(KEYWORDS){
    $('img').attr("alt", KEYWORDS);
    $('img').attr("title", KEYWORDS);
}

function setAnimation(){
    animationHover(".call-to-action","tada");
}

function init(){
    $(".dropdown-button").dropdown();
    $('.parallax').parallax();
    // $('.slider1').bxSlider({
    //     captions: true, 
    //     slideWidth: 210,
    //     minSlides: 2,
    //     maxSlides: 4,
    //     slideMargin: 10
    // });
    // $('.materialboxed').materialbox();
    $("#owl-example").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items : 3,
        margin: 20,
        autoHeight : true,
        lazyLoad : true,
    });

    $('ul.tabs').tabs();

}

function checkLicense(){

}

function fbComment(URL) {
    //- console.log('Found FB: Loading comments.');
    // var url = $("#club").val();
    $("#your-fb.fb-comments").attr('data-href', URL);
    FB.XFBML.parse();
}

//-----------------------------------------------------------------
//-- animate.css
function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);        
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
        });
}

function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
  
        });
}

function animation(element, animation){
    element.addClass('animated ' + animation);        
    //wait for animation to finish before removing classes
    window.setTimeout( function(){
        element.removeClass('animated ' + animation);
    }, 2000);         

}

//- Google Analytics
function initGoogleAnalytic(ID){

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    // ID = "UA-82197343-1";
    ga('create', ID, 'auto');
    ga('send', 'pageview');

}

function initFacebook(FB_APP_ID){
    window.fbAsyncInit = function() {
        FB.init({
          appId      : FB_APP_ID,
          xfbml      : true,
          version    : 'v2.7'
        });

        // *** here is my code ***
        if (typeof fbComment == 'function') {
            fbComment();
        }
    };    

    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     // js.src = "https://connect.facebook.net/en_VN/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}

function initTwitter(){
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
}


function signupPop(){
    require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us14.list-manage.com","uuid":"d68ef8e1b507da3cf2e00f39a","lid":"12a5230bd5"}) })
    document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}



