
// const onSubmit = () => {
// const loginEmail = document.getElementById('email-field')
// const loginPassword = document.getElementById('password-field')

// const users = JSON.parse(localStorage.getItem('user'));

// }



// // this will run on load to set defult username and password!!!

// var check_tbllogin = localStorage.getItem('tbllogin');

// if(!check_tbllogin){

// var tbllogin = {"tbllogin":[       
// 				    {"name":"hira", "email":"hira@gmail.com", "password":"3011"}, 
// 					{"name":"munira", "email":"munira@gmail.com", "password":"3011"},
// 					{"name":"mohsin", "email":"mohsin@gmail.com", "password":"3011"},
// 				]};

// localStorage.setItem('tbllogin', JSON.stringify(tbllogin));

// }

// // this will run on load to set defult username and password!!!


// function btnlogin(){

// // txtname = document.getElementById('txtname').value;
// txtemail = document.getElementById('txtemail').value;
// txtpassword = document.getElementById('txtpassword').value;

// if(txtname.length>0 && txtemail.length>0 && txtpassword.length>0 ){


// var logindata = localStorage.getItem('tbllogin');
// var loginJson = JSON.parse(logindata);
// console.log('logindata: ', JSON.parse(logindata));

// // yeh hira ko btanaa hay..
// // filter ka function hota hay jo ap k json k array k andar say values filter kar k return array karta hay hamesha...
// var result = loginJson.tbllogin.filter(data => data.email == txtemail && data.password == txtpassword);

// 	if(result.length > 0){
// 		alert('Welcome '+ txtname);
// 	}else{
// 		alert(txtname + ' something went wrong ');
// 	}

// }


// }



// function signup(){

// txtname = document.getElementById('txtname').value;
// txtemail = document.getElementById('txtemail').value;
// txtpassword = document.getElementById('txtpassword').value;

// if(txtname.length>0 && txtemail.length>0 && txtpassword.length>0 ){

// var logindata = localStorage.getItem('tbllogin');
// var loginJson = JSON.parse(logindata);
// var loginCount = loginJson.tbllogin.length;
// var signup = loginJson.tbllogin.push({"name":txtname, "email":txtemail, "password":txtpassword})

// console.log('signup',signup);

// 	if(signup > loginCount){
// 		localStorage.setItem('tbllogin', JSON.stringify(loginJson));
// 		alert('Welcome '+ txtname);
// 	}else{
// 		alert(txtname + ' something went wrong ');
// 	}
// }


// }



function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}
