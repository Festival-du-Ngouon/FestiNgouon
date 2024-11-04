document.querySelector('.login.form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire
    
    // Réinitialise les messages d'erreur
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Récupère les valeurs des champs
    const email = document.getElementById('sign-email').value;
    const password = document.getElementById('sign-password').value;
    let valid = true;

    // Validation de l'email
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Veuillez entrer un email valide.';
        valid = false;
    }

    // Validation du mot de passe
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Le mot de passe doit contenir au moins 8 caractères.';
        valid = false;
    }

    // Si tout est valide, soumet le formulaire
    if (valid) {
        event.target.submit();
    }
});

//  gestion du registration form 
document.querySelector('.registration.form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission du formulaire
    
    // Réinitialise les messages d'erreur
    document.getElementById('registerEmailError').textContent = '';
    document.getElementById('registerPasswordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Récupère les valeurs des champs
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmpassword = document.getElementById('confirm-password').value;
    let valid = true;

    // Validation de l'email
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Veuillez entrer un email valide.';
        valid = false;
    }

    // Validation du mot de passe
    if (password.length < 8) {
        document.getElementById('registerPasswordError').textContent = 'Le mot de passe doit contenir au moins 8 caractères.';
        valid = false;
    }
    // Vérification de la correspondance des mots de passe
    if(password !== confirmpassword){
          document.getElementById('confirmPasswordError').textContent = 'Les mots de passe ne correspondent pas !'
         valid= false;
    }

    // Si tout est valide, soumet le formulaire
    if (valid) {
        event.target.submit();
    }
});
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}