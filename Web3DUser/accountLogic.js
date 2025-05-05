document.querySelector('.account-btn').addEventListener('click', () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    
    if (userData) {
        document.querySelector('.account-btn').textContent = 'My Profile';
        document.querySelector('.account-btn').setAttribute('href', 'profile.html');
    } else {
        document.getElementById('loginModal').style.display = 'block';
    }
});

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('loginModal').style.display = 'none';
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value;
    const email = document.getElementById('signup-email').value.trim();

    if (!username || !password) {
        document.getElementById('signup-message').textContent = 'Please fill all fields.';
        return;
    }

    if (localStorage.getItem(username)) {
        document.getElementById('signup-message').textContent = 'This username already exists.';
        return;
    }

    localStorage.setItem(username, JSON.stringify({ password, email }));

    document.getElementById('signup-message').textContent = 'Registration successful! You can now log in.';
    document.getElementById('showLogin').click(); 
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    const storedUser = localStorage.getItem(username);

    if (!storedUser) {
        document.getElementById('login-message').textContent = 'User not found.';
        return;
    }

    const userData = JSON.parse(storedUser);

    if (userData.password === password) {
        document.getElementById('login-message').textContent = `Welcome, ${username}!`;
        localStorage.setItem('user', JSON.stringify({ username, email: userData.email }));
        document.querySelector('.account-btn').textContent = `Logged in as ${username}`;
        document.querySelector('.account-btn').setAttribute('href', 'profile.html');

        document.getElementById('loginModal').style.display = 'none';
    } else {
        document.getElementById('login-message').textContent = 'Incorrect password.';
    }
});

document.querySelector('.account-btn').addEventListener('click', () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    
    if (userData) {
        window.location.href = 'profile.html';
    } else {
        document.getElementById('loginModal').style.display = 'block';
    }
});
