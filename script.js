// ===== PESTALERT - JAVASCRIPT ULTRA-PROFESSIONNEL =====

class PestAlertApp {
    constructor() {
        this.currentScreen = 1;
        this.isDarkMode = false;
        this.isLoading = true;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeLoading();
        this.setupNavigation();
        this.setupThemeToggle();
        this.setupAnimations();
        this.initializeCharts();
        this.setupInteractiveElements();
    }

    // ===== LOADING SCREEN =====
    initializeLoading() {
        const loadingScreen = document.getElementById('loadingScreen');
        const appWrapper = document.getElementById('appWrapper');

        // Simuler un chargement
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                appWrapper.style.opacity = '1';
                this.isLoading = false;
                this.animateWelcomeMessage();
            }, 500);
        }, 2000);
    }

    // ===== EVENT LISTENERS =====
    setupEventListeners() {
        // Navigation tabs
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const screenId = e.currentTarget.dataset.screen;
                this.navigateToScreen(screenId);
            });
        });

        // Action cards
        document.querySelectorAll('.action-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.action;
                this.handleActionCard(action);
            });
        });

        // Demo button
        const demoButton = document.getElementById('demoButton');
        if (demoButton) {
            demoButton.addEventListener('click', () => {
                this.startDemo();
            });
        }

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Back buttons
        document.querySelectorAll('.header-left i.fa-arrow-left').forEach(btn => {
            btn.addEventListener('click', () => {
                this.goBack();
            });
        });

        // Form interactions
        this.setupFormInteractions();
    }

    // ===== NAVIGATION =====
    setupNavigation() {
        this.navTabs = document.querySelectorAll('.nav-tab');
        this.screens = document.querySelectorAll('.screen');
    }

    navigateToScreen(screenId) {
        // Mettre à jour les tabs
        this.navTabs.forEach(tab => {
            tab.classList.remove('active');
            if (tab.dataset.screen === screenId) {
                tab.classList.add('active');
            }
        });

        // Mettre à jour les écrans
        this.screens.forEach(screen => {
            screen.classList.remove('active');
            if (screen.id === `screen-${screenId}`) {
                screen.classList.add('active');
                this.animateScreenTransition(screen);
            }
        });

        this.currentScreen = parseInt(screenId);
        this.updateScreenContent(screenId);
    }

    animateScreenTransition(screen) {
        screen.style.opacity = '0';
        screen.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            screen.style.transition = 'all 0.5s ease-out';
            screen.style.opacity = '1';
            screen.style.transform = 'translateY(0)';
        }, 50);
    }

    goBack() {
        if (this.currentScreen > 1) {
            this.navigateToScreen(this.currentScreen - 1);
        }
    }

    // ===== ACTION CARDS =====
    handleActionCard(action) {
        const card = event.currentTarget;
        
        // Animation de clic
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);

        switch (action) {
            case 'camera':
                this.navigateToScreen(2);
                break;
            case 'treatment':
                this.navigateToScreen(5);
                break;
            case 'alert':
                this.navigateToScreen(6);
                break;
            case 'dashboard':
                this.navigateToScreen(9);
                break;
        }
    }

    // ===== THEME TOGGLE =====
    setupThemeToggle() {
        this.themeToggle = document.getElementById('themeToggle');
        this.body = document.body;
        
        // Charger le thème sauvegardé
        const savedTheme = localStorage.getItem('pestalert-theme');
        if (savedTheme === 'dark') {
            this.enableDarkMode();
        }
    }

    toggleTheme() {
        if (this.isDarkMode) {
            this.disableDarkMode();
        } else {
            this.enableDarkMode();
        }
    }

    enableDarkMode() {
        this.isDarkMode = true;
        this.body.classList.add('dark-mode');
        this.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('pestalert-theme', 'dark');
    }

    disableDarkMode() {
        this.isDarkMode = false;
        this.body.classList.remove('dark-mode');
        this.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('pestalert-theme', 'light');
    }

    // ===== ANIMATIONS =====
    setupAnimations() {
        // Animation des éléments au scroll
        this.setupScrollAnimations();
        
        // Animation des cartes
        this.setupCardAnimations();
        
        // Animation des boutons
        this.setupButtonAnimations();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observer les éléments animables
        document.querySelectorAll('.action-card, .detail-card, .step-card').forEach(el => {
            observer.observe(el);
        });
    }

    setupCardAnimations() {
        document.querySelectorAll('.action-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    setupButtonAnimations() {
        document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // Effet de ripple
                const ripple = document.createElement('span');
                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');

                btn.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
    
    // ===== WELCOME MESSAGE =====
    animateWelcomeMessage() {
        const welcomeMessage = document.querySelector('.welcome-message');
        if (welcomeMessage) {
            welcomeMessage.style.opacity = '0';
            welcomeMessage.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                welcomeMessage.style.transition = 'all 0.8s ease-out';
                welcomeMessage.style.opacity = '1';
                welcomeMessage.style.transform = 'translateY(0)';
            }, 500);
        }
    }

    // ===== FORM INTERACTIONS =====
    setupFormInteractions() {
        // Pest selector
        document.querySelectorAll('.pest-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.pest-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                option.classList.add('selected');
            });
        });

        // Severity slider
        const severitySlider = document.querySelector('.severity-slider input');
        if (severitySlider) {
            severitySlider.addEventListener('input', (e) => {
                this.updateSeverityDisplay(e.target.value);
            });
        }

        // Toggle switches
        document.querySelectorAll('.toggle-switch').forEach(toggle => {
            toggle.addEventListener('click', () => {
                toggle.classList.toggle('active');
            });
        });

        // Crop status toggles
        document.querySelectorAll('.crop-status').forEach(status => {
            status.addEventListener('click', () => {
                status.classList.toggle('active');
            });
        });
    }

    updateSeverityDisplay(value) {
        const labels = ['Faible', 'Faible', 'Modérée', 'Modérée', 'Élevée'];
        const labelElement = document.querySelector('.severity-slider .slider-labels');
        if (labelElement) {
            labelElement.textContent = labels[value - 1];
        }
    }

    // ===== SCREEN CONTENT UPDATES =====
    updateScreenContent(screenId) {
        switch (screenId) {
            case '3':
                this.simulateAnalysis();
                break;
            case '9':
                this.updateDashboard();
                break;
            case '10':
                this.updateAnalytics();
                break;
        }
    }

    // ===== ANALYSIS SIMULATION =====
    simulateAnalysis() {
        const steps = document.querySelectorAll('.analysis-steps .step');
        let currentStep = 0;

        const processStep = () => {
            if (currentStep < steps.length) {
                steps[currentStep].classList.add('active');
                
                // Simuler le traitement
                setTimeout(() => {
                    const status = steps[currentStep].querySelector('.step-status');
                    if (status) {
                        status.innerHTML = '<i class="fas fa-check"></i>';
                        status.style.color = 'var(--success-500)';
                    }
                    currentStep++;
                    processStep();
                }, 2000);
            } else {
                // Analyse terminée, naviguer vers le diagnostic
                setTimeout(() => {
                    this.navigateToScreen(4);
                }, 1000);
            }
        };

        processStep();
    }

    // ===== CHARTS INITIALIZATION =====
    initializeCharts() {
        // Attendre que Chart.js soit chargé
        if (typeof Chart !== 'undefined') {
            this.createInfestationChart();
            this.createCropsChart();
            this.createPestsChart();
        } else {
            // Retry après un délai
                    setTimeout(() => {
                this.initializeCharts();
            }, 1000);
        }
    }

    createInfestationChart() {
        const ctx = document.getElementById('infestationChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
                datasets: [{
                    label: 'Infestations',
                    data: [3, 5, 2, 8, 4, 6, 3],
                    borderColor: 'rgb(34, 197, 94)',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    createCropsChart() {
        const ctx = document.getElementById('cropsChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Maïs', 'Tomate', 'Ananas', 'Autres'],
                datasets: [{
                    data: [45, 25, 20, 10],
                    backgroundColor: [
                        'rgb(34, 197, 94)',
                        'rgb(239, 68, 68)',
                        'rgb(245, 158, 11)',
                        'rgb(107, 114, 128)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    createPestsChart() {
        const ctx = document.getElementById('pestsChart');
        if (!ctx) return;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Chenille', 'Puceron', 'Mildiou', 'Autres'],
                datasets: [{
                    label: 'Occurrences',
                    data: [35, 25, 20, 20],
                    backgroundColor: [
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(34, 197, 94, 0.8)',
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(107, 114, 128, 0.8)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // ===== DASHBOARD UPDATES =====
    updateDashboard() {
        // Animer les statistiques
        this.animateStatistics();
        
        // Mettre à jour les alertes
        this.updateAlerts();
    }

    animateStatistics() {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const target = parseInt(stat.textContent);
            const increment = target / 20;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                stat.textContent = Math.floor(current);
            }, 50);
        });
    }

    updateAlerts() {
        const alertList = document.querySelector('.alert-list');
        if (alertList) {
            // Simuler de nouvelles alertes
            setTimeout(() => {
                const newAlert = document.createElement('div');
                newAlert.className = 'alert-item';
                newAlert.innerHTML = `
                    <div class="alert-icon warning">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <div class="alert-content">
                        <h4>Nouvelle alerte</h4>
                        <p>Nouveau signalement détecté</p>
                        <span class="alert-time">À l'instant</span>
                    </div>
                `;
                alertList.insertBefore(newAlert, alertList.firstChild);
            }, 3000);
        }
    }

    // ===== ANALYTICS UPDATES =====
    updateAnalytics() {
        // Mettre à jour les métriques
        this.updateMetrics();
        
        // Animer les insights
        this.animateInsights();
    }

    updateMetrics() {
        const metrics = document.querySelectorAll('.metric-value');
        metrics.forEach(metric => {
            const target = parseFloat(metric.textContent);
            const increment = target / 30;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                metric.textContent = current.toFixed(1) + (metric.textContent.includes('%') ? '%' : '');
            }, 30);
        });
    }

    animateInsights() {
        const insights = document.querySelectorAll('.insight-item');
        insights.forEach((insight, index) => {
            setTimeout(() => {
                insight.style.opacity = '0';
                insight.style.transform = 'translateX(-20px)';
                
                setTimeout(() => {
                    insight.style.transition = 'all 0.6s ease-out';
                    insight.style.opacity = '1';
                    insight.style.transform = 'translateX(0)';
                }, 100);
            }, index * 200);
        });
    }

    // ===== DEMO MODE =====
    startDemo() {
        const demoButton = document.getElementById('demoButton');
        demoButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Démo en cours...</span>';
        demoButton.disabled = true;

        // Séquence de démonstration
        const demoSequence = [
            { screen: 2, delay: 1000 },
            { screen: 3, delay: 3000 },
            { screen: 4, delay: 2000 },
            { screen: 5, delay: 2000 },
            { screen: 1, delay: 1000 }
        ];

        let currentStep = 0;
        const runDemo = () => {
            if (currentStep < demoSequence.length) {
                const step = demoSequence[currentStep];
            setTimeout(() => {
                    this.navigateToScreen(step.screen);
                    currentStep++;
                    runDemo();
                }, step.delay);
            } else {
                // Fin de la démo
                demoButton.innerHTML = '<i class="fas fa-play"></i><span>Démo Live</span>';
                demoButton.disabled = false;
            }
        };

        runDemo();
    }

    // ===== INTERACTIVE ELEMENTS =====
    setupInteractiveElements() {
        // Capture button
        const captureBtn = document.querySelector('.capture-btn');
        if (captureBtn) {
            captureBtn.addEventListener('click', () => {
                this.simulatePhotoCapture();
            });
        }

        // GPS button
        const gpsBtn = document.querySelector('.gps-btn');
        if (gpsBtn) {
            gpsBtn.addEventListener('click', () => {
                this.getCurrentLocation();
            });
        }

        // Period buttons
        document.querySelectorAll('.period-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.updateChartPeriod(btn.textContent);
            });
        });
    }

    simulatePhotoCapture() {
        const captureBtn = document.querySelector('.capture-btn');
        captureBtn.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            captureBtn.style.transform = 'scale(1)';
            this.navigateToScreen(3);
        }, 200);
    }

    getCurrentLocation() {
        const gpsBtn = document.querySelector('.gps-btn');
        gpsBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
        
        // Simuler la géolocalisation
        setTimeout(() => {
            gpsBtn.innerHTML = '<i class="fas fa-check"></i>';
            const locationInput = document.querySelector('.location-input input');
            if (locationInput) {
                locationInput.value = 'Ablawa, Togo (GPS)';
            }
            
            setTimeout(() => {
                gpsBtn.innerHTML = '<i class="fas fa-crosshairs"></i>';
            }, 2000);
        }, 1500);
    }

    updateChartPeriod(period) {
        // Mettre à jour les données du graphique selon la période
        console.log(`Mise à jour du graphique pour la période: ${period}`);
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser l'application
    window.pestAlertApp = new PestAlertApp();
    
    // Ajouter des styles CSS pour les animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .dark-mode {
            --gray-50: #111827;
            --gray-100: #1f2937;
            --gray-200: #374151;
            --gray-300: #4b5563;
            --gray-400: #6b7280;
            --gray-500: #9ca3af;
            --gray-600: #d1d5db;
            --gray-700: #e5e7eb;
            --gray-800: #f3f4f6;
            --gray-900: #f9fafb;
        }
        
        .dark-mode .app-navigation {
            background: var(--gray-800);
            border-bottom-color: var(--gray-700);
        }
        
        .dark-mode .phone-frame {
            background: var(--gray-900);
        }
        
        .dark-mode .phone-screen {
            background: var(--gray-800);
        }
    `;
    document.head.appendChild(style);
});

// ===== UTILITY FUNCTIONS =====
window.PestAlertUtils = {
    // Formater les nombres
    formatNumber: (num) => {
        return new Intl.NumberFormat('fr-FR').format(num);
    },
    
    // Formater les dates
    formatDate: (date) => {
        return new Intl.DateTimeFormat('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(date);
    },
    
    // Générer des couleurs aléatoires
    getRandomColor: () => {
        const colors = [
            '#22c55e', '#ef4444', '#3b82f6', '#f59e0b',
            '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    },
    
    // Débouncer les fonctions
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// ===== EXPORT FOR MODULES =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PestAlertApp;
} 