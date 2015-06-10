/*請貼上fackbook初始化的相關程式碼*/
/*https://developers.facebook.com/*/


 // Initialize Parse
 Parse.initialize("Xb0aMmf2Unia4t5RsviwO0ul2Tqgg1YyrckPwHTN", "Pw30rlo7AGDM8GW33hLA0kLnEMfVyaaAq6y1ekn9");
 window.fbAsyncInit = function() {
 Parse.FacebookUtils.init({ // this line replaces FB.init({
 appId : '{facebook-app-id}', // Facebook App ID
 status : true, // check Facebook Login status
 cookie : true, // enable cookies to allow Parse to access the session
 xfbml : true, // initialize Facebook social plugins on the page
 version : 'v2.3' // point to the latest Facebook Graph API version
 });
 // Run code after the Facebook SDK is loaded.
 };
 (function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));


 window.fbAsyncInit = function() {
    FB.init({
      appId      : '902808659762591',
      xfbml      : true,
      version    : 'v2.3'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



