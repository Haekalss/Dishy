// Dishy - Song Lyrics Page Script
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dishy lyrics page loaded successfully!');
    
    // Add a scroll effect to smooth scroll when clicking navigation links
    const smoothScroll = () => {
        const scrollLinks = document.querySelectorAll('a[href^="#"]');
        scrollLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // Add a visual effect when hovering over lyrics sections
    const addLyricsHoverEffect = () => {
        const verses = document.querySelectorAll('.verse, .chorus');
        verses.forEach(verse => {
            verse.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.transition = 'transform 0.3s ease';
            });
            verse.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    };

    // Add a play button functionality
    const setupPlayButton = () => {
        const playButton = document.querySelector('.spotify-button');
        if (playButton) {
            playButton.addEventListener('click', function() {
                // Track click events (can be expanded with analytics)
                console.log('Play button clicked');
            });
        }
    };

    // Initialize all functions
    smoothScroll();
    addLyricsHoverEffect();
    setupPlayButton();
    
    // Simple animation for song title
    const songTitle = document.querySelector('.song-title');
    if (songTitle) {
        songTitle.style.opacity = '0';
        songTitle.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            songTitle.style.opacity = '1';
        }, 300);
    }
});
