/* 
    Luciano Guerra Portfolio Scripts
    Interatividade e Animações
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // Menu Hambúrguer
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Fechar menu ao clicar em um link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Efeito de scroll na Navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.background = 'rgba(10, 10, 12, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.background = 'rgba(10, 10, 12, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Animação das barras de skills ao chegar na seção
    const skillsSection = document.querySelector('#skills');
    const progressBars = document.querySelectorAll('.skill-progress');

    const observerOptions = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adicionar animação de "glitch" suave no título via JS (opcional, já está no CSS se quiser)
    const title = document.querySelector('.glitch');
    if (title) {
        setInterval(() => {
            title.classList.add('active');
            setTimeout(() => title.classList.remove('active'), 200);
        }, 3000);
    }

});
