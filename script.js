   document.addEventListener('DOMContentLoaded', function() {
        const statItems = document.querySelectorAll('.stat-item');
        statItems[0].classList.add('active');
        
        statItems.forEach(item => {
            item.addEventListener('mouseover', function() {
                statItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                } else {
                     entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        // Observe all reveal elements
        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    });