const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

//day 1

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');
const passwordInput = document.querySelector('#password');

let login = localStorage.getItem('gloDelivery');




//console.log('buttonAuth: ', buttonAuth);
//modalAuth.classList.add('hello');  //class="modal-auth hello" 
//console.log('modalAuth: ', modalAuth);

function toogleModalAuth() {
  modalAuth.classList.toggle('is-open');
};


// buttonAuth.onclick = function() {
//   toogleModalAuth();
// };

//buttonAuth.removeEventListener('click', toggleModalAuth);

function authorized() {

  function logOut() {
    login = null;
    localStorage.removeItem('gloDelivery');
    
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', logOut)
    checkAuth();
  }
  console.log("Avtorizatsiya qilindi");  

  userName.textContent = login;
  
 // buttonAuth.style.backgroundColor = 'red'; // ro'yxatdan otilgan song qizi tusgga otadi
  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut);

}

function notAuthorized() {
  console.log("Not avtorizatsiya");  

  function logIn(event) {
//    console.log(event);
    event.preventDefault(); // not update
    // console.log("Login");
    // console.log(loginInput.value);    //console ga modaldagi sozni chiqarish
    login = loginInput.value; 
    password = passwordInput.value;
    if(login == '' || password == '') {
      alert("Please fill the input");
    } else {

      localStorage.setItem('gloDelivery', login);
      toogleModalAuth();   
      
      buttonAuth.removeEventListener('click', toogleModalAuth );
      closeAuth.removeEventListener('click', toogleModalAuth);
      logInForm.removeEventListener('submit', logIn);
      logInForm.reset();
      checkAuth();
   
    }
  }

  buttonAuth.addEventListener('click', toogleModalAuth );
  closeAuth.addEventListener('click', toogleModalAuth);
  logInForm.addEventListener('submit', logIn);

}


function checkAuth() {
  if(login) {
    authorized();
  } else {
    notAuthorized();
  }
}

checkAuth();