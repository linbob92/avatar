"use strict";
(function() {
    window.addEventListener("load", init);

    let aNum = 1;
    let bNum = 1;
    let total = 2;

    function init() {

        let alisa = id("alisa")
        console.log(alisa)
        let bob = id("bob")
        console.log(bob)
        
        // initialized msg table
        alisa.addEventListener("click", changeAlisa);
        bob.addEventListener("click", changeBob);
        
    }

    function changeAlisa() {
        aNum++;
        if (aNum > total) {
            aNum = 1;
        }
        
        alisa.src = '/img/alisa' + aNum + '.jpeg';
    }

    function changeBob() {
        bNum++;
        if (bNum > total) {
            bNum = 1;
        }
        bob.src = '/img/bob' + bNum + '.jpeg';
    }

    function id(id) {
        return document.getElementById(id);
    }
})();