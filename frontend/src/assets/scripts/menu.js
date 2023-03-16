var menumodal = document.getElementById("menumodalid");
var button_myaccount = document.getElementById("my-account-button");

button_myaccount.addEventListener("click", function(){
    if(menumodal.style.visibility === 'visible'){
        menumodal.style.visibility = 'hidden';
        button_myaccount.style.boxShadow = "0px 0px 0px #19130840";
    }else{
        menumodal.style.visibility = 'visible';

        button_myaccount.style.boxShadow = "0px 2px 4px #19130840";

    }
	menumodal.classList.remove("desactive");
    menumodal.classList.add("active");
});