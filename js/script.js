
        // Welcome Screen Logic with Enhanced Animations
    document.addEventListener('DOMContentLoaded', function() {
        const welcomeScreen = document.getElementById('welcome-screen');
        const enterButton = document.getElementById('enter-button');
        const body = document.body;
        const typedText = document.getElementById('typed-text');
        
        // Prevent scrolling when welcome screen is shown
        body.style.overflow = 'hidden';
        
        // Initialize particles
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#0ea5e9"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#0ea5e9",
                        "opacity": 0.2,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 0.8
                            }
                        },
                        "push": {
                            "particles_nb": 4
                        }
                    }
                },
                "retina_detect": true
            });
        }
        
        // Typing animation
        function typeWriter(text, i, callback) {
            if (i < text.length) {
                typedText.innerHTML = text.substring(0, i+1) + '<span class="cursor"></span>';
                
                // Random typing speed for more natural feel
                const speed = Math.random() * (120 - 80) + 80;
                
                setTimeout(function() {
                    typeWriter(text, i + 1, callback)
                }, speed);
            } else {
                typedText.innerHTML = text;
                if (callback) setTimeout(callback, 700);
            }
        }
        
        // Start typing animation
        setTimeout(function() {
            typeWriter("Welcome to My Portfolio", 0);
        }, 800);
        
        // Add sound effect for button click (optional)
        function playClickSound() {
            const audio = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAbAAYGBgYGBgYGBgYGBgYGBgkJCQkJCQkJCQkJCQkJCQwMDAwMDAwMDAwMDAwMDA4ODg4ODg4ODg4ODg4ODg//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAYVf//zgZAAAJgBNmdFAAJNqyqzM6ABDLCIkmZswACGWENTMzpgEMMIiSZmzAI+kzOTI1ZkzOgAkAAAaZnZtC5mTM6ACQAAA0zOzaFzMmZ0AEgAABpmdm0LmZMzoAJAAADTM7NoXMyZnQASAAAGmZ2bQuZkzOgAkAAAaZnZtC5mTM6ACQAAAz/0/h/B/6/7/jOEiRP//////////f/i+WTMmZ0AEgAABpmdm0LmZMzoAJAAADTM7NoXMyZnQAP5EEJlf//OBkIAAC0A1GZ2TKZWpmnszMk5vAhghJZmboP4M8II7M+IHQKcIfszgBDAZBCKzPCBoAy+EBTMhAFwGYQRyZiAMAMuhA4zEABcBmMEgGYEDABlsC7mZCALgMxgj8zAgYAMuAMAzEgCMBmoChGYCAHwMuAUQzAQA+BlwCiGYCAHwGaAKMZgQA+Ay4BQjMBAD4DNAFDDF/fxDfpVMQU1FMy45OS41VVVVVVVVVVVVf/zQZEIAA+4MRo2IAACgpJiPAAAR5hPBjRV8BBgCA+XWRf//////////A+n////////////6qqqqqqqqqqqqqg==');
            audio.volume = 0.5; // 50% volume
            audio.play().catch(e => console.log("Audio couldn't play: ", e));
        }
        
        // Enter button click event with enhanced effects
        enterButton.addEventListener('click', function() {
            // Add button click animation
            this.classList.add('clicked');
            
            // Optional: play sound effect
            playClickSound();
            
            // Add transition animation
            welcomeScreen.classList.add('hide');
            
            // Enable scrolling after welcome screen is hidden
            setTimeout(function() {
                body.style.overflow = 'auto';
                welcomeScreen.style.display = 'none';
            }, 1200); // Match with CSS transition duration
        });
        
        // Add hover sound effect (optional)
        enterButton.addEventListener('mouseenter', function() {
            const audio = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAgAAAVIAYGBgYGBgYGBgYGBgYGBgkJCQkJCQkJCQkJCQkJCQ//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAQM//NUZAAOupcYYdAAACSiHhD+AAAQAAJ+gIAAAJv5hwAAAAAUeY8AAAAAA35nGAAAAAAI8xwAAAAABk/MgAAAAAD+Y8AAAAAA35nGAAAAAAI8xwAAAAABk/MgAAAAAD+Y8AAAAAA35f/zgZAOGfA0QzBsF8GcgjYzZgYAM+AowzAgZAM5BJBmJAyAZ8CwDMLBrAzkFLGbUDQBnwMAMzQGoDOQRgZoANAGfAwgzLwawM5BOhmhA0AZ8DJDMjBoAzkEZGZ4DQBnwMIMy8GsDOQRoZoQNAGfAyQzIwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmEwmE//OBkM4VIDjDMHQbQapCLzMrIuAqOHRGZgRrBRsIbMyYjKCpwf0ZgAG4FHgdcZeQG4FRw94zEgNwKPBNxmHEbgUeCEDMII3ApADsGX+BuBRgHQMs+p0MQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/8wGRPBWwOfQPWoAMKgmujxgABQAzU1VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==');
            audio.volume = 0.3; // 30% volume
            audio.play().catch(e => {});
        });
    });
    
        // Global language variable
        let currentLang = 'en';

        // Language translation function
        function translatePage(lang) {
            const elements = document.querySelectorAll('[data-en][data-id]');
            elements.forEach(element => {
                if (lang === 'en') {
                    element.textContent = element.getAttribute('data-en');
                } else {
                    element.textContent = element.getAttribute('data-id');
                }
            });

            // Update placeholder attributes for form inputs
            const inputs = document.querySelectorAll('input[data-en][data-id], textarea[data-en][data-id]');
            inputs.forEach(input => {
                if (lang === 'en') {
                    input.placeholder = input.getAttribute('data-en');
                } else {
                    input.placeholder = input.getAttribute('data-id');
                }
            });

            // Update typing texts based on language
            const typingTextsEn = [
                'TKJ Student',
                'Network Enthusiast', 
                'Linux User',
                'Tech Explorer',
                'Future Engineer',
                'Problem Solver'
            ];

            const typingTextsId = [
                'Siswa TKJ',
                'Penggemar Jaringan',
                'Pengguna Linux', 
                'Penjelajah Teknologi',
                'Insinyur Masa Depan',
                'Pemecah Masalah'
            ];

            typingTexts = lang === 'en' ? typingTextsEn : typingTextsId;
        }

        // Nonaktifkan pemulihan posisi scroll
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Preloader
        window.addEventListener('load', function() {
            setTimeout(function() {
                document.getElementById('preloader').classList.add('hide');
                // Scroll ke atas setelah preloader hilang
                window.scrollTo(0, 0);
            }, 1500);
            
            // Tambahan untuk memastikan halaman mulai dari atas
            setTimeout(function() {
                window.scrollTo(0, 0);
            }, 1800);
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        let lastScroll = 0;

        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Show/hide scroll to top button
            const scrollTop = document.getElementById('scrollTop');
            if (currentScroll > 500) {
                scrollTop.classList.add('show');
            } else {
                scrollTop.classList.remove('show');
            }
            
            lastScroll = currentScroll;
        });

        // Mobile menu toggle
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('navMenu');

        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking a nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Active navigation link
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', function() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });

        // Typing effect
        let typingTexts = [
            'TKJ Student',
            'Network Enthusiast',
            'Linux User',
            'Tech Explorer',
            'Future Engineer',
            'Problem Solver'
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseTime = 2000;

        function typeEffect() {
            const currentText = typingTexts[textIndex];
            const typingElement = document.getElementById('typingText');
            
            if (!typingElement) return;
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, pauseTime);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % typingTexts.length;
                setTimeout(typeEffect, 500);
            } else {
                setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
            }
        }

        typeEffect();

        // Scroll to top
        document.getElementById('scrollTop').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Contact form
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would normally send the form data
            const message = currentLang === 'en' ? 'Message sent! I will get back to you soon.' : 'Pesan terkirim! Saya akan segera menghubungi Anda.';
            alert(message);
            e.target.reset();
        });

        // Project filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Activity tabs
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                // Here you would show/hide content based on the tab
            });
        });

        // Animate skill bars when in view
        const skillBars = document.querySelectorAll('.skill-progress');
        const animateSkills = () => {
            skillBars.forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                }
            });
        };

        window.addEventListener('scroll', animateSkills);
        animateSkills();

        // Language toggle
        const langToggle = document.getElementById('langToggle');

        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'en' ? 'id' : 'en';
            langToggle.textContent = currentLang === 'en' ? 'EN' : 'ID';
            translatePage(currentLang);
            
            // Reset typing effect with new language
            textIndex = 0;
            charIndex = 0;
            isDeleting = false;
        });

        // Theme toggle (placeholder)
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', function() {
            // Here you would implement theme switching
            console.log('Theme toggle clicked');
        });

        // Terminal functionality
        const terminalInput = document.getElementById('terminalInput');
        const terminalHistory = document.getElementById('terminalHistory');

        const commands = {
            help: {
                description: 'Show available commands',
                execute: () => {
                    return Object.keys(commands).map(cmd => 
                        `<span class="cmd-highlight">${cmd}</span> - ${commands[cmd].description}`
                    ).join('<br>');
                }
            },
            about: {
                description: 'Display information about Vian',
                execute: () => {
                    if (currentLang === 'en') {
                        return `
                        <div class="output-info">About Jovian Ekasakta (Vian)</div>
                        TKJ (Computer and Network Engineering) student at SMK Dwija Bhakti 01.
                        Passionate about networking, cybersecurity, and continuous learning.
                        Currently focusing on Linux systems, network security, and web development.
                        `;
                    } else {
                        return `
                        <div class="output-info">Tentang Jovian Ekasakta (Vian)</div>
                        Siswa TKJ (Teknik Komputer dan Jaringan) di SMK Dwija Bhakti 01.
                        Bersemangat tentang networking, cybersecurity, dan pembelajaran berkelanjutan.
                        Saat ini fokus pada sistem Linux, keamanan jaringan, dan pengembangan web.
                        `;
                    }
                }
            },
            skills: {
                description: 'List technical skills',
                execute: () => {
                    if (currentLang === 'en') {
                        return `
                        <div class="output-info">Technical Skills:</div>
                        - Networking: TCP/IP, Routing, Switching, VLANs
                        - Cybersecurity: Network Security, Ethical Hacking basics
                        - Linux: Kali Linux, Ubuntu, Command Line, Shell Scripting
                        - Web Development: HTML/CSS, JavaScript, Responsive Design
                        - System Administration: Basic Windows Server, Virtualization
                        - Database: MySQL basics
                        `;
                    } else {
                        return `
                        <div class="output-info">Keahlian Teknis:</div>
                        - Jaringan: TCP/IP, Routing, Switching, VLANs
                        - Cybersecurity: Keamanan Jaringan, Dasar Ethical Hacking
                        - Linux: Kali Linux, Ubuntu, Command Line, Shell Scripting
                        - Pengembangan Web: HTML/CSS, JavaScript, Responsive Design
                        - Administrasi Sistem: Dasar Windows Server, Virtualisasi
                        - Database: Dasar MySQL
                        `;
                    }
                }
            },
            projects: {
                description: 'List current projects',
                execute: () => {
                    if (currentLang === 'en') {
                        return `
                        <div class="output-info">Featured Projects (60 total):</div>
                        1. What is Computer Network?
                        2. OSI and TCP/IP Models
                        3. IP Address Calculation, Subnetting, and CIDR
                        4. MikroTik Devices and RouterBoard Product Line
                        5. MikroTik RouterOS Features and Licensing
                        
                        Type <span class="cmd-highlight">project [number]</span> for details about a specific project.
                        `;
                    } else {
                        return `
                        <div class="output-info">Proyek Unggulan (60 total):</div>
                        1. Apa itu Jaringan Komputer?
                        2. Model OSI dan TCP/IP
                        3. Menghitung IP Address, Subnetting, dan CIDR
                        4. Mengenal perangkat MikroTik dan lini produk RouterBoard
                        5. Mengeksplorasi fitur dan lisensi pada MikroTik RouterOS
                        
                        Ketik <span class="cmd-highlight">project [nomor]</span> untuk detail proyek tertentu.
                        `;
                    }
                }
            },
            project: {
                description: 'Show details about a specific project (usage: project [number])',
                execute: (args) => {
                    const projectNum = parseInt(args[0]);
                    if (isNaN(projectNum) || projectNum < 1 || projectNum > 60) {
                        return currentLang === 'en' ? 
                            '<div class="output-error">Invalid project number. Use numbers 1-60.</div>' :
                            '<div class="output-error">Nomor proyek tidak valid. Gunakan nomor 1-60.</div>';
                    }
                    
                    const projectsEn = [
                        {
                            name: "What is Computer Network?",
                            desc: "Comprehensive guide explaining the fundamentals of computer networking, including basic concepts, types, and real-world applications."
                        },
                        {
                            name: "OSI and TCP/IP Models",
                            desc: "Deep dive into OSI and TCP/IP protocol models with practical examples and layer-by-layer analysis."
                        },
                        {
                            name: "IP Address Calculation, Subnetting, and CIDR",
                            desc: "Complete guide to IP addressing, subnetting calculations, and CIDR notation for network addressing."
                        },
                        {
                            name: "MikroTik Devices and RouterBoard Product Line",
                            desc: "Introduction to MikroTik hardware ecosystem and RouterBoard product specifications."
                        },
                        {
                            name: "MikroTik RouterOS Features and Licensing",
                            desc: "Comprehensive exploration of RouterOS features and licensing options for different use cases."
                        }
                        // Add more projects as needed
                    ];

                    const projectsId = [
                        {
                            name: "Apa itu Jaringan Komputer?",
                            desc: "Panduan komprehensif yang menjelaskan dasar-dasar jaringan komputer, termasuk konsep dasar, jenis, dan aplikasi dunia nyata."
                        },
                        {
                            name: "Model OSI dan TCP/IP",
                            desc: "Pendalaman model protokol OSI dan TCP/IP dengan contoh praktis dan analisis per layer."
                        },
                        {
                            name: "Menghitung IP Address, Subnetting, dan CIDR",
                            desc: "Panduan lengkap pengalamatan IP, perhitungan subnetting, dan notasi CIDR untuk pengalamatan jaringan."
                        },
                        {
                            name: "Mengenal perangkat MikroTik dan lini produk RouterBoard",
                            desc: "Pengenalan ekosistem hardware MikroTik dan spesifikasi produk RouterBoard."
                        },
                        {
                            name: "Mengeksplorasi fitur dan lisensi pada MikroTik RouterOS",
                            desc: "Eksplorasi komprehensif fitur RouterOS dan opsi lisensi untuk berbagai kasus penggunaan."
                        }
                        // Add more projects as needed
                    ];
                    
                    const projects = currentLang === 'en' ? projectsEn : projectsId;
                    const project = projects[Math.min(projectNum - 1, projects.length - 1)];
                    
                    return `
                    <div class="output-info">${project.name}</div>
                    ${project.desc}
                    `;
                }
            },
            contact: {
                description: 'Show contact information',
                execute: () => {
                    if (currentLang === 'en') {
                        return `
                        <div class="output-info">Contact Information:</div>
                        Email: jovianekasakta01@gmail.com
                        GitHub: github.com/vian0001
                        Instagram: instagram.com/jovian.my.id
                        TikTok: tiktok.com/@jovian.my.id
                        `;
                    } else {
                        return `
                        <div class="output-info">Informasi Kontak:</div>
                        Email: jovianekasakta01@gmail.com
                        GitHub: github.com/vian0001
                        Instagram: instagram.com/jovian.my.id
                        TikTok: tiktok.com/@jovian.my.id
                        `;
                    }
                }
            },
            clear: {
                description: 'Clear terminal screen',
                execute: () => {
                    terminalHistory.innerHTML = '';
                    return false; // Don't add anything to history
                }
            },
            date: {
                description: 'Show current date and time',
                execute: () => {
                    return new Date().toString();
                }
            },
            whoami: {
                description: 'Show current user',
                execute: () => {
                    return currentLang === 'en' ? 'visitor (Guest User)' : 'visitor (Pengguna Tamu)';
                }
            },
            ls: {
                description: 'List directory contents',
                execute: () => {
                    return `
                    <span style="color: #60a5fa;">about/</span>
                    <span style="color: #60a5fa;">projects/</span>
                    <span style="color: #60a5fa;">skills/</span>
                    <span style="color: #f59e0b;">resume.pdf</span>
                    <span style="color: #f59e0b;">contact.txt</span>
                    <span style="color: #f59e0b;">README.md</span>
                    `;
                }
            },
            cat: {
                description: 'Display file contents (usage: cat [filename])',
                execute: (args) => {
                    if (!args.length) {
                        return currentLang === 'en' ? 
                            '<div class="output-error">Usage: cat [filename]</div>' :
                            '<div class="output-error">Penggunaan: cat [namafile]</div>';
                    }
                    
                    const filesEn = {
                        'readme.md': `# Vian's Portfolio\nWelcome to my interactive portfolio website. Explore to learn more about my projects and skills.`,
                        'contact.txt': `Email: jovianekasakta01@gmail.com\nGitHub: github.com/vian0001\nInstagram: instagram.com/jovian.my.id`,
                    };

                    const filesId = {
                        'readme.md': `# Portfolio Vian\nSelamat datang di website portfolio interaktif saya. Jelajahi untuk mempelajari lebih lanjut tentang proyek dan keahlian saya.`,
                        'contact.txt': `Email: jovianekasakta01@gmail.com\nGitHub: github.com/vian0001\nInstagram: instagram.com/jovian.my.id`,
                    };
                    
                    const files = currentLang === 'en' ? filesEn : filesId;
                    const filename = args[0].toLowerCase();
                    
                    if (files[filename]) {
                        return files[filename].replace(/\n/g, '<br>');
                    } else {
                        return currentLang === 'en' ? 
                            `<div class="output-error">cat: ${args[0]}: No such file or directory</div>` :
                            `<div class="output-error">cat: ${args[0]}: File atau direktori tidak ditemukan</div>`;
                    }
                }
            }
        };

        terminalInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const input = terminalInput.value.trim();
                
                // Add command to history
                const promptLine = document.createElement('div');
                promptLine.innerHTML = `<span class="prompt-user">visitor@vian-portfolio</span>:<span class="prompt-location">~</span>$ ${input}`;
                terminalHistory.appendChild(promptLine);
                
                // Process command
                if (input) {
                    const args = input.split(' ');
                    const cmd = args.shift().toLowerCase();
                    
                    if (commands[cmd]) {
                        const output = commands[cmd].execute(args);
                        if (output !== false) {
                            const outputLine = document.createElement('div');
                            outputLine.innerHTML = output;
                            terminalHistory.appendChild(outputLine);
                        }
                    } else if (cmd) {
                        const errorLine = document.createElement('div');
                        const errorMsg = currentLang === 'en' ? 
                            `Command not found: ${cmd}. Type <span class="cmd-highlight">help</span> for available commands.` :
                            `Perintah tidak ditemukan: ${cmd}. Ketik <span class="cmd-highlight">help</span> untuk perintah yang tersedia.`;
                        errorLine.innerHTML = `<div class="output-error">${errorMsg}</div>`;
                        terminalHistory.appendChild(errorLine);
                    }
                }
                
                // Add new prompt
                const newPrompt = document.createElement('div');
                newPrompt.className = 'terminal-prompt';
                newPrompt.innerHTML = `<span class="prompt-user">visitor@vian-portfolio</span>:<span class="prompt-location">~</span>$ `;
                terminalHistory.appendChild(newPrompt);
                
                // Clear input and scroll to bottom
                terminalInput.value = '';
                terminalHistory.scrollTop = terminalHistory.scrollHeight;
            }
        });

        // Custom cursor
        const cursor = document.querySelector('.custom-cursor');
        const cursorDot = document.querySelector('.custom-cursor-dot');

        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', function() {
            cursor.style.width = '25px';
            cursor.style.height = '25px';
            cursor.style.borderColor = 'var(--accent)';
        });

        document.addEventListener('mouseup', function() {
            cursor.style.width = '30px';
            cursor.style.height = '30px';
            cursor.style.borderColor = 'var(--primary)';
        });

        // Hover effect on links
        document.querySelectorAll('a, button, .btn, .project-card, .skill-card, .filter-btn, .tab-btn').forEach(item => {
            item.addEventListener('mouseenter', function() {
                cursor.style.width = '40px';
                cursor.style.height = '40px';
                cursor.style.borderColor = 'var(--accent)';
            });
            
            item.addEventListener('mouseleave', function() {
                cursor.style.width = '30px';
                cursor.style.height = '30px';
                cursor.style.borderColor = 'var(--primary)';
            });
        });

        // Particle background
        function setupParticles() {
            const canvas = document.getElementById('particle-background');
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            let particlesArray = [];

            // Create particle class
            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.size = Math.random() * 3 + 1;
                    this.speedX = Math.random() * 1 - 0.5;
                    this.speedY = Math.random() * 1 - 0.5;
                    this.color = '#0ea5e9';
                    this.opacity = Math.random() * 0.5 + 0.1;
                }

                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;

                    if (this.x > canvas.width || this.x < 0) {
                        this.speedX = -this.speedX;
                    }
                    if (this.y > canvas.height || this.y < 0) {
                        this.speedY = -this.speedY;
                    }
                }

                draw() {
                    ctx.fillStyle = this.color;
                    ctx.globalAlpha = this.opacity;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // Create particles
            function init() {
                particlesArray = [];
                const particleCount = (canvas.width * canvas.height) / 10000;
                for (let i = 0; i < particleCount; i++) {
                    particlesArray.push(new Particle());
                }
            }

            // Animate particles
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < particlesArray.length; i++) {
                    particlesArray[i].update();
                    particlesArray[i].draw();

                    // Connect particles
                    for (let j = i; j < particlesArray.length; j++) {
                        const dx = particlesArray[i].x - particlesArray[j].x;
                        const dy = particlesArray[i].y - particlesArray[j].y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        
                        if (distance < 100) {
                            ctx.beginPath();
                            ctx.strokeStyle = '#0ea5e9';
                            ctx.globalAlpha = 0.1;
                            ctx.lineWidth = 1;
                            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                            ctx.stroke();
                        }
                    }
                }
                requestAnimationFrame(animate);
            }

            // Handle resize
            window.addEventListener('resize', function() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                init();
            });

            init();
            animate();
        }

        // Initialize charts
        document.addEventListener('DOMContentLoaded', function() {
            // Learning Hours Chart
            if (document.getElementById('learningChart')) {
                const learningCtx = document.getElementById('learningChart').getContext('2d');
                new Chart(learningCtx, {
                    type: 'pie',
                    data: {
                        labels: ['Networking', 'Linux', 'Web Dev', 'Cybersecurity', 'Python', 'Other'],
                        datasets: [{
                            data: [30, 25, 15, 20, 5, 5],
                            backgroundColor: [
                                '#0ea5e9',
                                '#06b6d4',
                                '#0284c7',
                                '#38bdf8',
                                '#7dd3fc',
                                '#e0f2fe'
                            ],
                            borderWidth: 0
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'right',
                                labels: {
                                    color: '#94a3b8'
                                }
                            }
                        }
                    }
                });
            }
            
            // Skill Growth Chart
            if (document.getElementById('growthChart')) {
                const growthCtx = document.getElementById('growthChart').getContext('2d');
                new Chart(growthCtx, {
                    type: 'line',
                    data: {
                        labels: ['Jan 2023', 'Jun 2023', 'Jan 2024', 'Jun 2024', 'Jan 2025', 'Jun 2025'],
                        datasets: [
                            {
                                label: 'Networking',
                                data: [30, 45, 55, 65, 75, 85],
                                borderColor: '#0ea5e9',
                                tension: 0.3,
                                fill: false
                            },
                            {
                                label: 'Linux',
                                data: [20, 30, 45, 60, 70, 75],
                                borderColor: '#06b6d4',
                                tension: 0.3,
                                fill: false
                            },
                            {
                                label: 'Web Dev',
                                data: [40, 50, 55, 60, 65, 65],
                                borderColor: '#0284c7',
                                tension: 0.3,
                                fill: false
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 100,
                                ticks: {
                                    color: '#94a3b8'
                                },
                                grid: {
                                    color: 'rgba(148, 163, 184, 0.1)'
                                }
                            },
                            x: {
                                ticks: {
                                    color: '#94a3b8'
                                },
                                grid: {
                                    color: 'rgba(148, 163, 184, 0.1)'
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    color: '#94a3b8'
                                }
                            }
                        }
                    }
                });
            }
            
            // Weekly Activity Chart
            if (document.getElementById('activityChart')) {
                const activityCtx = document.getElementById('activityChart').getContext('2d');
                new Chart(activityCtx, {
                    type: 'bar',
                    data: {
                        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        datasets: [{
                            label: 'Study Hours',
                            data: [3, 4, 2, 5, 3, 6, 4],
                            backgroundColor: '#0ea5e9'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            y: {
                                beginAtZero: true,
                                ticks: {
                                    color: '#94a3b8'
                                },
                                grid: {
                                    color: 'rgba(148, 163, 184, 0.1)'
                                }
                            },
                            x: {
                                ticks: {
                                    color: '#94a3b8'
                                },
                                grid: {
                                    color: 'rgba(148, 163, 184, 0.1)'
                                }
                            }
                        },
                        plugins: {
                            legend: {
                                labels: {
                                    color: '#94a3b8'
                                }
                            }
                        }
                    }
                });
            }

            // Setup particle background
            setupParticles();
        });
        // Tambahkan di bagian JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const splineViewer = document.querySelector('spline-viewer');
    
    if (splineViewer) {
        // Wait for Spline to load
        splineViewer.addEventListener('load', () => {
            console.log('Spline loaded successfully!');
        });
    }
});

// ============= REMOVE SPLINE WATERMARK =============
document.addEventListener('DOMContentLoaded', function() {
    const splineViewer = document.querySelector('spline-viewer');
    
    if (splineViewer) {
        // Aggressive watermark removal
        const removeWatermark = () => {
            try {
                if (splineViewer.shadowRoot) {
                    const logo = splineViewer.shadowRoot.querySelector('#logo');
                    if (logo) {
                        logo.remove();
                        console.log('✅ Spline watermark removed');
                        return true;
                    }
                }
            } catch (e) {}
            return false;
        };
        
        // Try immediately
        splineViewer.addEventListener('load', () => {
            setTimeout(removeWatermark, 100);
            setTimeout(removeWatermark, 500);
            setTimeout(removeWatermark, 1000);
        });
        
        // Keep trying for 5 seconds
        let attempts = 0;
        const interval = setInterval(() => {
            if (removeWatermark() || attempts > 20) {
                clearInterval(interval);
            }
            attempts++;
        }, 250);
    }
});



