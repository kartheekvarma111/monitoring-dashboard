/* script.js */
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'flex';
        document.getElementById('mainContent').style.justifyContent = 'center';
        document.getElementById('mainContent').style.alignItems = 'center';
        document.getElementById('mainContent').style.height = '100vh';
    }, 3000);
});

document.querySelectorAll('.btn-custom').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('loginModal').style.display = 'flex';
        document.getElementById('loginModal').innerHTML = `
            <div class="modal-content animated-modal">
                <h2 class="modal-title">🔐 Welcome to Secure Access</h2>
                <p class="modal-subtitle">Enter your credentials to proceed</p>
                <div class="input-container">
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Enter your username" class="input-field">
                </div>
                <div class="input-container">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" class="input-field">
                </div>
                <button id="loginBtn" class="btn-submit">Login 🚀</button>
                <button id="closeModal" class="btn-close">Cancel ❌</button>
            </div>
        `;

        document.querySelector('.animated-modal').classList.add('slide-in');

        document.getElementById('loginBtn').onclick = () => {
            document.getElementById('loginModal').style.display = 'none';
            if (button.id === 'prometheusBtn') {
                window.open('http://localhost:9090', '_blank');
            } else if (button.id === 'grafanaBtn') {
                window.open('http://localhost:3000', '_blank');
            }
        };

        document.getElementById('closeModal').addEventListener('click', () => {
            document.getElementById('loginModal').classList.add('slide-out');
            setTimeout(() => {
                document.getElementById('loginModal').style.display = 'none';
                document.getElementById('loginModal').classList.remove('slide-out');
            }, 500);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const videoBackground = document.createElement('video');
    videoBackground.src = 'background-video.mp4';
    videoBackground.autoplay = true;
    videoBackground.loop = true;
    videoBackground.muted = true;
    videoBackground.classList.add('background-video');
    document.body.prepend(videoBackground);
});
