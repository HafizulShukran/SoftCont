$(function() {
    const api_url = 
        "http://localhost:9040/";

    // Defining async function
    async function login(email,password) {
        await fetch(api_url+"user/signin",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
          }).then(async(response) => {
            var data = await response.json();
        
            if (response) {
                if(response.status==200){
                    window.alert("Login Successful")
                    sessionStorage.setItem("userId", data[0]['id']);
                    return window.location.href = "tasklist.html";
                }
                
            }
            
            throw new Error('Something went wrong');
          })
          .catch((error) => {
            console.log(error);
            document.getElementById("errorText").style.display="block";
          });
        
    }
    window.sigin = async (e) => {
        
        const email = document.getElementById("your_email").value;
        const pass = document.getElementById("your_pass").value;
        var data=await login(email,pass);
    };
});

class User {
    constructor(name, email,password) {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  }