var progress = document.getElementById("progressb");
progress.style.width= "20%";

/*****Declaraciones de formularios*****/
var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");
var form_5 = document.querySelector(".form_5");


/*****Declaraciones de contenedor de botones por formulario*****/
var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");
var form_5_btns = document.querySelector(".form_5_btns");


/*****Declaraciones de botones dentro del contenedor de botones por formulario*****/
var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");
var form_4_next_btn = document.querySelector(".form_4_btns .btn_next");
var form_5_back_btn = document.querySelector(".form_5_btns .btn_back");


/*****Declaraciones de contador de pasos*****/
var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");
var form_4_progessbar = document.querySelector(".form_4_progessbar");
var form_5_progessbar = document.querySelector(".form_5_progessbar");



/***************Evento clic de botones siguiente y atrás por formulario***************/
/***Formulario 1 / Step 1-----Next***/
form_1_next_btn.addEventListener("click", function(){
	form_1.style.display = "none";
	form_2.style.display = "block";

	form_1_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	progress.style.width= "40%";

	form_2_progessbar.classList.add("active");
});

/***Formulario 2 / Step 2 -----Back***/
form_2_back_btn.addEventListener("click", function(){
	form_1.style.display = "block";
	form_2.style.display = "none";

	form_1_btns.style.display = "block";
	form_2_btns.style.display = "none";

	progress.style.width= "20%";

	form_2_progessbar.classList.remove("active");
});

/***Formulario 2 / Step 2 -----Next***/
form_2_next_btn.addEventListener("click", function(){
	form_2.style.display = "none";
	form_3.style.display = "block";

    form_2_btns.style.display = "none";
	form_3_btns.style.display = "flex";

	progress.style.width= "60%";

	form_3_progessbar.classList.add("active");
});

/***Formulario 3 / Step 3 -----Back***/
form_3_back_btn.addEventListener("click", function(){
	form_2.style.display = "block";
	form_3.style.display = "none";

    form_2_btns.style.display = "flex";
	form_3_btns.style.display = "none";

	progress.style.width= "40%";

	form_3_progessbar.classList.remove("active");
});

/***Formulario 3 / Step 3 -----Next***/
form_3_next_btn.addEventListener("click", function(){
	form_3.style.display = "none";
	form_4.style.display = "block";

    form_3_btns.style.display = "none";
	form_4_btns.style.display = "flex";

	progress.style.width= "80%";

	form_4_progessbar.classList.add("active");
});

/***Formulario 4 / Step 4 -----Back***/
form_4_back_btn.addEventListener("click", function(){
	form_3.style.display = "block";
	form_4.style.display = "none";

    form_3_btns.style.display = "flex";
	form_4_btns.style.display = "none";

	progress.style.width= "60%";

	form_4_progessbar.classList.remove("active");
});

/***Formulario 4 / Step 4 -----Next***/
form_4_next_btn.addEventListener("click", function(){
        
    form_4.style.display = "none";
	form_5.style.display = "block";

	form_4_btns.style.display = "none";
    form_5_btns.style.display = "block";

	progress.style.width= "100%";

	form_5_progessbar.classList.add("active");
});

/***Formulario 5 / Step 5 -----Back***/
form_5_back_btn.addEventListener("click", function(){
	form_4.style.display = "block";
	form_5.style.display = "none";

    form_4_btns.style.display = "flex";
	form_5_btns.style.display = "none";

	progress.style.width= "80%";

	form_5_progessbar.classList.remove("active");
});
