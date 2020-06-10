function validateForm() {
     alert("Faleminderit që na kontaktuat!");
    return false;
  
}

function checkemail(){
	var str=document.myForm.email.value
	var len=str.length
	var iat=str.indexOf("@")
	var idot=str.indexOf(".")
	var idot2=str.indexOf(".",iat)
	if(iat<1||(iat>idot2)|| idot2>=len-1){
		document.getElementById("m_email").innerHTML="Ju lutem shkruani email valid";
		document.getElementById("m_email").style.color="red" ;
		document.myForm.email.focus();
		return false;
	}else{
		document.getElementById("m_email").innerHTML="Emaili në rregull";
		document.getElementById("m_email").style.color="green";
		return true;
	}
}
	function isNumber(char){
	var numcheck = /\D/;
	for(i=0;i<char.length;i++){
		if(numcheck.test(char.charAt(i)))
			return false;
	}	
	return true;
}

function checkphno(){	
	var len=document.myForm.phno.value.length
		if(len==0){
			document.getElementById("m_phno").innerHTML="";
			return true;
		}
		else if(isNumber(document.myForm.phno.value)){
			if(len==9){
				document.getElementById("m_phno").innerHTML="Numri i telefonit OK";
				document.getElementById("m_phno").style.color="green" ;
				return true;
			}else{
				document.getElementById("m_phno").innerHTML="Telefoni duhet ti perbaje 9 numra (04x-xxx-xxx) ";
				document.getElementById("m_phno").style.color="red" ;			
			}
		}else{
			document.getElementById("m_phno").innerHTML="Telefoni mund të përmbajë vetëm numra";
			document.getElementById("m_phno").style.color="red" ;
			}	
	return false;
}

/* chat button*/
function openForm() {
	document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
	document.getElementById("myForm").style.display = "none";
  }