document.addEventListener('DOMContentLoaded', function() {
    // Existing smooth scrolling code
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerOffset = 80; // Adjust this value based on your header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close the mobile menu if it's open
                document.getElementById('nav-toggle').checked = false;
            }
        });
    });

    const categoryHeaders = document.querySelectorAll('.category-header');

    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

// SWITCH TRANSLATOR

document.getElementById('translate-switch').addEventListener('change', function () {
    const frame = document.querySelector('iframe.goog-te-banner-frame');
    if (frame) frame.style.display = 'none'; // Hide Google Translate banner

    const isGreek = this.checked; // Check if toggle is ON
    const language = isGreek ? 'el' : 'en';
    const translateElement = document.querySelector('#google_translate_element select');

    if (translateElement) {
        // Force refresh by switching to a dummy language first
        translateElement.value = 'af'; // Set to Afrikaans or another arbitrary language
        translateElement.dispatchEvent(new Event('change'));
    
        // Apply the desired language after a short delay
        setTimeout(() => {
            translateElement.value = language;
            translateElement.dispatchEvent(new Event('change'));
        }, 50); // Delay allows the widget to register the dummy language
    }
    
});
