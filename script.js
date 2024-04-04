function showWelcomeNotification() {
  if ("Notification" in window) {
    Notification.requestPermission().then(function(permission) {
      if (permission === "granted") {
        new Notification("Welcome to my website!");
      }
    });
  } 
}
window.onload = function() {
  showWelcomeNotification();
};



function validateForm() {
  const submitButton = document.getElementById("submit-button");
  const messagePanel = document.getElementById("message-panel");

  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const age = document.getElementById("age").value;
    const comments = document.getElementById("comments").value;

    if (!name || !email || !phone || !age || !comments) {
      messagePanel.innerHTML = "Please fill in all the fields";
      messagePanel.style.color = "white";
      messagePanel.style.backgroundColor = "red";
    } else if (!email.endsWith("@gmail.com")) {
      messagePanel.innerHTML = "Email must must be a @gmail.com";
      messagePanel.style.color = "white";
      messagePanel.style.backgroundColor = "red";
    } else if (age < 18) {
      messagePanel.innerHTML = "You must be 18 or over";
      messagePanel.style.color = "white";
      messagePanel.style.backgroundColor = "red";
    } else {
      messagePanel.innerHTML = "Form submitted successfully!";
      messagePanel.style.color = "white";
      messagePanel.style.backgroundColor = "green";

      myForm.reset();
    }
  }); 
}
document.addEventListener('DOMContentLoaded', (event) => {
  validateForm();
});



document.addEventListener('DOMContentLoaded', (event) => {
  const yesButton = document.getElementById("yes-button");
  const noButton = document.getElementById("no-button");
  const responseMessage = document.getElementById("response-message");

  function handleResponse(answer) {
      switch (answer) {
          case 'YES':
              responseMessage.textContent = "Thank you for considering me for the opportunity!";
              responseMessage.style.backgroundColor = "green"
              responseMessage.style.Color = "black"
              break;
          case 'NO':
              responseMessage.textContent = "Feel free to browse my website and projects!";
              responseMessage.style.backgroundColor = "red"
              responseMessage.style.Color = "black"
              break;
      }
  }

  yesButton.addEventListener("click", function() { handleResponse('YES'); });
  noButton.addEventListener("click", function() { handleResponse('NO'); });
});



document.addEventListener('DOMContentLoaded', () => {
  const colorSchemes = {
      light: {
          backgroundColor: 'lightgray',
          navbarBgColor: 'white'
      },
      dark: {
          backgroundColor: 'black',
          navbarBgColor: 'darkgray' 
      },
      normal: {
          backgroundColor: '#C4A484',
          navbarBgColor: 'black'
      }
  };

  function applyColor(scheme) {
      document.body.style.backgroundColor = scheme.backgroundColor;
      document.querySelector('.navbar').style.backgroundColor = scheme.navbarBgColor;
  }

  document.getElementById('lightmode').addEventListener('click', () => {
      applyColor(colorSchemes.light);
  });

  document.getElementById('darkmode').addEventListener('click', () => {
      applyColor(colorSchemes.dark);
  });

  document.getElementById('normal').addEventListener('click', () => {
      applyColor(colorSchemes.normal);
  });
});
