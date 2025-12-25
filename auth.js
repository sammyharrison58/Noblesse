document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginLink = document.querySelector('a[href="login.html"]');

    // Update Navigation Link
    if (loginLink) {
        if (isLoggedIn) {
            loginLink.innerHTML = '<i class="fa-solid fa-user" style="margin-right:8px;"></i> LOGOUT';
            loginLink.href = '#';
            loginLink.addEventListener('click', (e) => {
                e.preventDefault();
                logout();
            });
        }
    }

    // Handle Login Form Submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            // In a real app, you would validate credentials here
            if (email) {
                login(email);
            }
        });
    }
});

function login(email) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    alert('Login successful!');
    window.location.href = 'index.html';
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    alert('You have been logged out.');
    window.location.href = 'login.html'; // Or reload current page
}
