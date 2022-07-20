$(function() {
    const api_url = 
        "http://localhost:9040/";

    // Defining async function
    async function register(name,email,password) {
        await fetch(api_url+"user/register",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name":name,
                "email": email,
                "password": password
            })
          }).then((response) => {
        
            if (response) {
                if(response.status==201){
                    window.alert("Register Successful")
                    return window.location.href = "login.html";
                }
                
            }
            
            throw new Error('Something went wrong');
          })
          .catch((error) => {
            console.log(error);
            document.getElementById("errorText").style.display="block";
          });
        
    }
    window.check = async (e) => {
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const pass = document.getElementById("pass").value;
        var data=await register(name,email,pass);
    };
});

class User {
    constructor(name, email,password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  }