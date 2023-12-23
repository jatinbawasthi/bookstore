function validateformcheckout(){  
  var name=document.myform.name.value;  
  var phonenumber=document.myform.number.value;  
  var email = document.myform.email.value;
  var admnumber = document.myform.admnumber.value;
  var address = document.myform.address.value;
  if (name==null || name==""){  
    alert("Name can't be blank");  
   }
     
   else if(phonenumber.length<10){  
          alert("Phone number must be at least 10 characters long.");     
          }  
    else if  (email==null ||email==""){  
            alert("email can't be blank");  
          }
   
  else if(admnumber.length<8){  
alert("admission must be at least 8 characters long.");    
}  
else if (address==null|| address =="")
    {
      alert("Input your address");
    }
else{
  setTimeout(function validateformreg() {window.location = "payment.html" });
}
        }        

        function validateformreg(){  
          var name=document.myform.name.value;  
          var phonenumber=document.myform.number.value;  
          var email = document.myform.email.value;
          var admnumber = document.myform.admnumber.value;
          var password = document.myform.password.value;
          var father =document.myform.father.value
          var mother =document.myform.mother.value
          var Dob =document.myform.Dob.value
          if (name==null || name==""){  
            alert("Name can't be blank");  
           }
           else if(father==null || father==""){  
            alert("Father's name can't be blank");  
           }
           else if(mother==null ||mother ==""){  
            alert("Mother's name can't be blank");  
           }
                
           else if(phonenumber.length<10){  
            alert("Phone number must be at least 10 characters long.");     
            }  
           else if(Dob==null ||Dob ==""){  
            alert("Date of birth is mandatory");  
           }
        
            else if  (email==null ||email==""){  
                    alert("email can't be blank");  
                  }
                  else if (password.length<8 )
                  {
                    alert("Password must be 8 characters long");
                  }
          else if(admnumber.length<8){  
        alert("admission must be at least 8 characters long.");    
        }  
      
        else{
          alert(name+ " You have Succesfully Registered press Ok to go to login page");
          setTimeout(function validateformreg() {window.location = "home.html" });
        }
                }
        
        
function payment(){
  var a = document.getElementById("yes").value
    alert("Payment received successfully");
    setTimeout(function validateformreg() {window.location = "catalogue.html" });
  }
  function paymentnot(){
    var a = document.getElementById("No").value
      alert("PLEASE PAY THE AMOUNT");
      setTimeout(function validateformreg() {window.location = "payment.html" });
    } 

function validatelogin(){
  var name=document.myform.name.value;  
  var email = document.myform.email.value;
  var password = document.myform.password.value;
  if (name==null || name==""){  
    alert("Name can't be blank");  
   }
   else if  (email==null ||email==""){  
    alert("email can't be blank");  
  }
  else if (password.length<8 )
  {
    alert("Enter your Password");
  }
  else{
    alert("Welcome " +name+ " You have Succesfully logged in");
    setTimeout(function validateformreg() {window.location = "catalogue.html" });
  }
}
