// Simple "Tap to Shine" interaction
        function tapProduct(element) {
            element.style.transform = "scale(0.95)";
            setTimeout(() => {
                element.style.transform = "translateY(-10px)";
                alert("Adorable choice! Added to your collection.");
            }, 150);
        }

        // Scroll reveal for cards
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.product-card').forEach(card => {
            card.style.opacity = "0";
            card.style.transform = "translateY(40px)";
            card.style.transition = "0.6s all ease-out";
            observer.observe(card);
        });