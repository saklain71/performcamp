import React from "react";

const ChatwootWidget = () => {

    // Add Chatwoot Settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right", // This can be left or right
      locale: "en", // Language to be set
      type: "expanded_bubble", // [standard, expanded_bubble]
      darkMode: "auto",
    };

    (function(d,t) {
        var BASE_URL="https://app.chatwoot.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: process.env.REACT_APP_WEBSITE_TOKEN,
            baseUrl: BASE_URL
          })
        }
      })(document,"script");

      return(
            <div></div>
      );
    };
    
    export default ChatwootWidget;