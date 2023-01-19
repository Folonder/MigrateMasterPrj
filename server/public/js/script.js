let header_burger = document.querySelectorAll('.header-burger,.header-link');
let header_menu = document.querySelector('.header-menu');
let back = document.querySelector('body');

header_burger.forEach(function (item) {
   item.onclick = function () {
      item.classList.toggle('active');
      header_menu.classList.toggle('active');
      back.classList.toggle('lock');
   }
});

document.getElementById('benefits-link').addEventListener('click', function(ev){
    linkHandler(ev, '.benefits-info')        
    document.querySelector('.header-burger').classList.toggle('active')
 })
 
 document.getElementById('process-link').addEventListener('click', function(ev){    
     linkHandler(ev, '.process-info')
     document.querySelector('.header-burger').classList.toggle('active')
 })

document.getElementById('feedback-link').addEventListener('click', function(ev){   
    linkHandler(ev, '.constact-us')
    document.querySelector('.header-burger').classList.toggle('active')
})

document.getElementById('first-step-id').addEventListener('click', function(ev){
    linkHandler(ev, '.first-step');    
})

document.getElementById('second-step-id').addEventListener('click', function(ev){
    linkHandler(ev, '.second-step');    
})

document.getElementById('third-step-id').addEventListener('click', function(ev){
    linkHandler(ev, '.third-step');    
})

document.getElementById('logo').addEventListener('click', function(ev){
    linkHandler(ev, '.main-page');
})

document.getElementById('main-link').addEventListener('click', function(ev){
    linkHandler(ev, '.main-page');
})

document.getElementById('footer-benefits-link').addEventListener('click', function(ev){
    linkHandler(ev, '.benefits-info');
})

document.getElementById('footer-process-link').addEventListener('click', function(ev){
    linkHandler(ev, '.process-info');
    console.log(1);
})

document.getElementById('crew-link').addEventListener('click', function(ev){
    linkHandler(ev, '.crew-info');
})


function linkHandler(ev, name){
    ev.preventDefault();
    document.querySelector(name).scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })  
    if (name == 'main-page'){
        window.scrollTo(0, 80);
    } 
}

let head = document.querySelector('.js-header');
let headH = document.querySelector('.js-header').clientHeight;
let arrow = document.querySelector('.arrow');
let wayToScroll = '.benefits-info';

document.getElementById('_arrow').addEventListener('click', function(ev){
    linkHandler(ev, wayToScroll);
})

document.onscroll = function(){
    if (window.innerWidth > 1240){
        let scroll = window.scrollY;    
        if (scroll > headH && window.innerWidth > 1240){
           head.classList.add('fixed');
           document.body.style.paddingTop = headH + 'px';           
        }
        else{
           head.classList.remove('fixed');
           document.body.removeAttribute('style');           
        }
    }
    else{        
        head.classList.remove('fixed');
        document.body.removeAttribute('style');        
    }
    
    // for apper/disapper arrow
    let widthArrow = window.getComputedStyle(document.getElementById('_arrow')).width; // width of arrow block
    let scroll = window.scrollY;
    let halfWidthArrow = (parseInt(widthArrow)/2);
    
    if (scroll > headH + 1){           
       arrow.style.left = '1rem';
       document.getElementById('arrowId').src = "https://iconvulture.com/wp-content/uploads/2017/12/up-arrow.svg"; // arrow up
       arrow.style.position = 'fixed';       
       arrow.style.zIndex = 5;
       wayToScroll = '.main-page';
    }
    else{                  
       arrow.style.display = 'block';
       arrow.style.left = `calc(50% - ${halfWidthArrow}px)`;
       document.getElementById('arrowId').src = "https://iconvulture.com/wp-content/uploads/2017/12/angle-arrow-down.svg"; // arrow down
       wayToScroll = '.benefits-info';
    }    
 }

 var form = document.getElementById('form-block');
 form.onsubmit = function(event){
         var xhr = new XMLHttpRequest();
         var formData = new FormData(form);
         xhr.open('POST','https://migratemaster.onrender.com/api/person')
         xhr.setRequestHeader("Content-Type", "application/json");
         xhr.send(JSON.stringify(Object.fromEntries(formData)));
 
         xhr.onreadystatechange = function() {
             if (xhr.readyState == XMLHttpRequest.DONE) {
                 form.reset();
             }
         }
         alert("Вы успешно зарегистрировались")
         return false; 
     }



//  document.addEventListener('DOMContentLoaded', function(){
//     const form = document.getElementById('form-block');
//     form.addEventListener('submit', formSend);

//     async function formSend(e){
//         e.preventDefault();        
//         let error = formValidate(form);

//         if (error === 0){
            
//             // SEND FORM TO EMAIL
//             console.log(error);
            
//             alert('Мы с вами свяжемся позже');
//             form.reset();
//         }else{
//             alert('Заполните обязательные поля');
//             console.log(error);
//         }

//     }

//     function formValidate(form){
//         let error = 0;
//         let formRequest = document.querySelectorAll('._req');

//         for (let index = 0 ;  index < formRequest.length; index++){
//             const input = formRequest[index];
//             formRemoveError(input);
            
//             if (input.classList.contains('_email')){                
//                 if (emailValidator(input)){
//                     formAddError(input);
//                     error++;
//                 }
//             }
//             else if (input.classList.contains('_name')){
//                 if (input.value === ''){
//                     formAddError(input);
//                     error++;
//                 }
//             }
            
//         }
//         return error;
//     }

//     function formAddError(input){
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');    
//     }

//     function formRemoveError(input){
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');    
//     }

//     function emailValidator(input){
//         const EMAIL_REGEXP = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//         return !EMAIL_REGEXP.test(input.value);
        
//     }

//  });