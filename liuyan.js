"use strict";
(function() {
    window.addEventListener("load", init);

    function init() {
        console.log("hehe")
        id("msg-btn").addEventListener("click", submit)
    }

    function submit() {
        console.log("111")
        let content = id("content").value.trim()
        console.log("msg is:" + content)
        
        window.location.replace("index.html");
    }

    function id(id) {
        return document.getElementById(id);
    }
})();