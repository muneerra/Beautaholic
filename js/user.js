

// this will run on load to set defult username and password!!!

var check_tbllogin = localStorage.getItem('tbllogin');

if(!check_tbllogin){

var tbllogin = {"tbllogin":[    
				    {"name":"mohsin", "email":"mohsin@gmail.com", "password":"3011"},    
				    {"name":"hira", "email":"hira@gmail.com", "password":"3011"},  
				    {"name":"maheen", "email":"maheen@gmail.com", "password":"3011"}
				]};

localStorage.setItem('tbllogin', JSON.stringify(tbllogin));

}

// this will run on load to set defult username and password!!!







function btnlogin(){

// txtname = document.getElementById('txtname').value;
txtemail = document.getElementById('txtemail').value;
txtpassword = document.getElementById('txtpassword').value;

if(txtname.length>0 && txtemail.length>0 && txtpassword.length>0 ){


var logindata = localStorage.getItem('tbllogin');
var loginJson = JSON.parse(logindata);
//console.log('logindata: ', JSON.parse(logindata));

// yeh hira ko btanaa hay..
// filter ka function hota hay jo ap k json k array k andar say values filter kar k return array karta hay hamesha...
var result = loginJson.tbllogin.filter(data => data.email == txtemail && data.password == txtpassword);

	if(result.length > 0){
		alert('Welcome '+ txtname);
	}else{
		alert(txtname + ' something went wrong ');
	}

}


}



function signup(){

// txtname = document.getElementById('txtname').value;
txtemail = document.getElementById('txtemail').value;
txtpassword = document.getElementById('txtpassword').value;

if(txtname.length>0 && txtemail.length>0 && txtpassword.length>0 ){

var logindata = localStorage.getItem('tbllogin');
var loginJson = JSON.parse(logindata);
var loginCount = loginJson.tbllogin.length;
var signup = loginJson.tbllogin.push({"name":txtname, "email":txtemail, "password":txtpassword})

console.log('signup',signup);

	if(signup > loginCount){
		localStorage.setItem('tbllogin', JSON.stringify(loginJson));
		alert('Welcome '+ txtname);
	}else{
		alert(txtname + ' something went wrong ');
	}
}


}
