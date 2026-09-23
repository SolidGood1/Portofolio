// === Home ===
// Destination data
        const destinations = {
            'Borobudur Temple': {
                image: 'https://www.tropilogy.com/wp-content/uploads/2023/03/img_buddha-statue-borobudur-temple-2.jpg',
                location: 'Central Java, Indonesia',
                description: 'Borobudur is a magnificent 9th-century Mahayana Buddhist temple and one of the greatest Buddhist monuments in the world. This UNESCO World Heritage site features over 2,600 relief panels and 504 Buddha statues, representing the Buddhist cosmology and the path to enlightenment.',
                highlights: [
                    'Largest Buddhist temple in the world',
                    'UNESCO World Heritage Site since 1991',
                    'Stunning sunrise views from the temple',
                    '2,672 relief panels telling Buddhist stories',
                    'Located in the Kedu Valley surrounded by volcanoes',
                    'Best visited during sunrise or sunset for magical atmosphere'
                ]
            },
            'Raja Ampat': {
                image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=300&fit=crop',
                location: 'Southwest Papua, Indonesia',
                description: 'Raja Ampat, meaning "Four Kings", is a pristine archipelago renowned as the crown jewel of marine biodiversity. Located at the heart of the Coral Triangle, this remote paradise offers the richest marine life on Earth with crystal-clear waters and untouched coral reefs.',
                highlights: [
                    '75% of all known coral species found here',
                    'Over 1,500 species of fish',
                    'Manta ray cleaning stations',
                    'Pristine coral reefs and crystal-clear waters',
                    'Traditional Papuan culture and hospitality',
                    'World-class diving and snorkeling spots'
                ]
            },
            'Komodo Island': {
                image: 'https://media.bareksa.com/cms/media/assets/image/2019/11/15291_d12c5ca419130d95bb06c1d571f7d700.jpg',
                location: 'East Nusa Tenggara, Indonesia',
                description: 'Komodo Island is home to the legendary Komodo dragons, the world\'s largest living lizards. This rugged volcanic island within Komodo National Park offers dramatic landscapes, pink sand beaches, and exceptional marine life, making it a unique destination for wildlife enthusiasts and adventurers.',
                highlights: [
                    'Home to the famous Komodo dragons',
                    'Part of UNESCO World Heritage Site',
                    'Rare pink sand beaches',
                    'Excellent diving with manta rays',
                    'Dramatic volcanic landscapes',
                    'Rich marine biodiversity in surrounding waters'
                ]
            }
        };

        // Show destination modal
        function showDestination(name) {
            const destination = destinations[name];
            if (!destination) return;

            document.getElementById('modalImage').style.backgroundImage = `url('${destination.image}')`;
            document.getElementById('modalTitle').textContent = name;
            document.getElementById('modalLocation').textContent = destination.location;
            document.getElementById('modalDescription').textContent = destination.description;

            const highlightsList = document.getElementById('modalHighlights');
            highlightsList.innerHTML = '';
            destination.highlights.forEach(highlight => {
                const li = document.createElement('li');
                li.textContent = highlight;
                highlightsList.appendChild(li);
            });

            document.getElementById('destinationModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // Close modal
        function closeModal() {
            document.getElementById('destinationModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        document.getElementById('destinationModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Search functionality
        function performSearch() {
            const query = document.querySelector('.search-bar').value;
            if (query.trim()) {
                alert(`🔍 Searching for "${query}"...\n\nIn a real site, this would show search results for Indonesian destinations!`);
            } else {
                alert('Please enter a search term!');
            }
        }

        // Enhanced search with Enter key
        document.querySelector('.search-bar').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        // Action button handlers
        function showFeature(feature) {
            const messages = {
                'TRIP': 'Plan your perfect Indonesian adventure! Browse all available destinations, create custom itineraries, and book your dream vacation.',
                'TIPS': 'Get insider tips from local experts! Discover hidden gems, cultural insights, and practical travel advice for Indonesia.',
                'CHECKOUT': 'Review your selected packages and complete your booking. Secure payment and instant confirmation guaranteed!'
            };

            alert(`🎯 ${feature} Feature!\n\n${messages[feature]}\n\nThis would open the ${feature.toLowerCase()} section.`);
        }

        // Promo details handler
        function showPromoDetails(promoType) {
            const promos = {
                'holiday': {
                    title: '🎉 Special Holiday Package',
                    details: '• 40% off on Bali and Yogyakarta packages\n• Free airport transfers included\n• Complimentary cultural tours\n• Valid until end of holiday season\n• Book now and save big!'
                },
                'island': {
                    title: '🌊 Island Hopping Deal',
                    details: '• Visit 3+ islands for the price of 2\n• Includes inter-island transportation\n• Accommodation in beachfront resorts\n• Snorkeling gear provided\n• Perfect for adventure seekers!'
                },
                'culture': {
                    title: '🏛️ Cultural Heritage Tour',
                    details: '• Expert local guides included\n• Traditional art workshops\n• Authentic local cuisine experiences\n• Temple and historical site access\n• Deep dive into Indonesian culture!'
                }
            };

            const promo = promos[promoType];
            if (promo) {
                alert(`${promo.title}\n\n${promo.details}\n\nContact us to book this amazing deal!`);
            }
        }

        // Smooth scrolling parallax effect
        let ticking = false;

        function updateParallax() {
            const header = document.querySelector('.header');
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;

            if (header) {
                header.style.transform = `translateY(${rate}px)`;
            }

            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });

        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';

            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Add click ripple effect to cards
        document.querySelectorAll('.destination-card').forEach(card => {
            card.addEventListener('click', function(e) {
                const ripple = document.createElement('div');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(74, 144, 226, 0.3);
                    transform: scale(0);
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    pointer-events: none;
                    animation: ripple 0.6s ease-out;
                `;

                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add ripple animation to CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

// === Register ===
        // Form validation and registration logic
        const form = document.getElementById('registerForm');
        const inputs = {
            fullName: document.getElementById('fullName'),
            email: document.getElementById('email'),
            phone: document.getElementById('phone'),
            password: document.getElementById('password'),
            confirmPassword: document.getElementById('confirmPassword')
        };

        // Password strength checker
        inputs.password.addEventListener('input', function() {
            const password = this.value;
            const strengthBar = document.getElementById('strengthBar');
            let strength = 0;
            let width = 0;
            let className = '';

            if (password.length >= 8) strength++;
            if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
            if (password.match(/[0-9]/)) strength++;
            if (password.match(/[^a-zA-Z0-9]/)) strength++;

            switch (strength) {
                case 0:
                case 1:
                    width = 25;
                    className = 'strength-weak';
                    break;
                case 2:
                case 3:
                    width = 60;
                    className = 'strength-medium';
                    break;
                case 4:
                    width = 100;
                    className = 'strength-strong';
                    break;
            }

            strengthBar.style.width = width + '%';
            strengthBar.className = 'password-strength-bar ' + className;
        });

        // Real-time validation
        Object.keys(inputs).forEach(key => {
            inputs[key].addEventListener('blur', () => validateField(key));
            inputs[key].addEventListener('input', () => clearError(key));
        });

        function validateField(fieldName) {
            const input = inputs[fieldName];
            const errorElement = document.getElementById(fieldName + 'Error');
            let isValid = true;

            switch (fieldName) {
                case 'fullName':
                    isValid = input.value.trim().length >= 2;
                    break;
                case 'email':
                    isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
                    break;
                case 'phone':
                    isValid = /^(\+62|62|0)[0-9]{9,13}$/.test(input.value.replace(/[-\s]/g, ''));
                    break;
                case 'password':
                    isValid = input.value.length >= 8;
                    break;
                case 'confirmPassword':
                    isValid = input.value === inputs.password.value;
                    break;
            }

            if (!isValid) {
                input.classList.add('error');
                errorElement.style.display = 'block';
            } else {
                input.classList.remove('error');
                errorElement.style.display = 'none';
            }

            return isValid;
        }

        function clearError(fieldName) {
            inputs[fieldName].classList.remove('error');
            document.getElementById(fieldName + 'Error').style.display = 'none';
        }

        // Show success overlay
        function showSuccessOverlay(name, email) {
            document.getElementById('successName').textContent = name;
            document.getElementById('successEmail').textContent = email;

            document.getElementById('successOverlay').classList.add('show');
            document.body.style.overflow = 'hidden';

            // Auto redirect after 3 seconds
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 3000);
        }

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let isFormValid = true;
            Object.keys(inputs).forEach(key => {
                if (!validateField(key)) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Simulate registration process
                const registerBtn = document.getElementById('registerBtn');
                const originalText = registerBtn.textContent;
                registerBtn.textContent = 'Creating Account...';
                registerBtn.disabled = true;

                // Get form values
                const name = inputs.fullName.value;
                const email = inputs.email.value;

                setTimeout(() => {
                    // Reset button
                    registerBtn.textContent = originalText;
                    registerBtn.disabled = false;

                    // Show success overlay
                    showSuccessOverlay(name, email);
                }, 2000);
            }
        });

        // Navigation functions

        function socialRegister(provider) {
            alert(`📱 Registering with ${provider}...\n\nThis would integrate with ${provider} OAuth in a real application.`);
        }

        function goToLogin() {
            window.location.href = 'login.html';
        }

        function goBack() {
            // Cek apakah ada referrer (halaman sebelumnya)
            if (document.referrer && document.referrer !== window.location.href) {
                window.history.back();
            } else {
                // Jika tidak ada referrer atau sama dengan current page, ke home
                window.location.href = 'index.html';
            }
        }

        // Focus on first input when page loads
        window.addEventListener('load', function() {
            inputs.fullName.focus();
        });

// === Edit Profile ===
        // Initialize display name on load
        window.addEventListener('load', function() {
            updateDisplayName();
        });

        // Avatar upload functionality
        function uploadAvatar() {
            document.getElementById('avatarInput').click();
        }

        document.getElementById('avatarInput').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const avatarDisplay = document.getElementById('avatarDisplay');
                    avatarDisplay.innerHTML = `<img src="${e.target.result}" alt="Avatar">`;
                };
                reader.readAsDataURL(file);
            }
        });

        // Update display name when first/last name changes
        document.getElementById('firstName').addEventListener('input', updateDisplayName);
        document.getElementById('lastName').addEventListener('input', updateDisplayName);

        function updateDisplayName() {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const displayName = document.getElementById('displayName');

            if (firstName || lastName) {
                displayName.textContent = `${firstName} ${lastName}`.trim();
            } else {
                displayName.textContent = 'User Profile';
            }
        }

        // Form submission - FUNCTIONAL (Updated to redirect to home)
        document.getElementById('profileForm').addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = e.target.querySelector('.btn-primary');
            const originalText = submitBtn.textContent;

            // Show loading state
            submitBtn.textContent = 'Saving...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // Show success modal
                showModal('successModal');

                // Store form data (in real app, this would be sent to server)
                const formData = new FormData(e.target);
                console.log('Profile data saved:', Object.fromEntries(formData));
            }, 2000);
        });

        // Delete account - FUNCTIONAL (Updated to redirect to home)
        function deleteAccount() {
            showModal('deleteModal');
            document.getElementById('deleteConfirmInput').value = '';
        }

        function confirmDelete() {
            const confirmInput = document.getElementById('deleteConfirmInput').value;

            if (confirmInput === 'DELETE') {
                closeModal('deleteModal');

                // Simulate account deletion process
                setTimeout(() => {
                    showModal('deleteSuccessModal');
                }, 500);
            } else {
                alert('Please type "DELETE" exactly to confirm account deletion.');
                document.getElementById('deleteConfirmInput').focus();
            }
        }

        // Navigation functions - UPDATED to redirect to homepage
        function goBack() {
            // Always redirect to home/index page
            redirectToHomePage();
        }

        function goToHome() {
            redirectToHomePage();
        }

        function saveAndGoHome() {
            closeModal('successModal');
            setTimeout(() => {
                redirectToHomePage();
            }, 500);
        }

        function deleteAndGoHome() {
            closeModal('deleteSuccessModal');
            setTimeout(() => {
                redirectToHomePage();
            }, 500);
        }

        function redirectToHomePage() {
            // Try different possible home page names
            const possibleHomePaths = [
                'index.html',
                'home.html',
                'main.html',
                '../index.html',
                '/'
            ];

            // In a real application, you would use the actual home page URL
            // For demo purposes, we'll show an alert and then try to redirect
            console.log('🏠 Redirecting to IndoEssence home page...');

            // Try to redirect to index.html (most common homepage name)
            try {
                window.location.href = 'index.html';
            } catch (error) {
                // If redirect fails, show alert as fallback
                alert('🏠 Redirecting to IndoEssence home page...');
                // Alternative: use history.back() or just reload the current page
                // window.history.back();
            }
        }

        // Modal functions
        function showModal(modalId) {
            document.getElementById(modalId).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target === modal) {
                    closeModal(modal.id);
                }
            });
        });

        // Auto-save draft functionality
        let autoSaveTimeout;
        const formInputs = document.querySelectorAll('.form-input, .form-select, .form-textarea, input[type="checkbox"]');

        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                clearTimeout(autoSaveTimeout);
                autoSaveTimeout = setTimeout(() => {
                    console.log('Draft auto-saved:', {
                        field: input.id,
                        value: input.type === 'checkbox' ? input.checked : input.value
                    });
                }, 2000);
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Ctrl/Cmd + S to save
            if ((e.ctrlKey || e.metaKey) && e.key === 's') {
                e.preventDefault();
                document.getElementById('profileForm').dispatchEvent(new Event('submit'));
            }

            // Escape to close modals
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal[style*="block"]');
                if (openModal) {
                    closeModal(openModal.id);
                }
            }
        });

// === Trip ===
        function showSection(sectionName) {
            // Hide all sections
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show selected section
            document.getElementById(sectionName).classList.add('active');

            // Update active nav link
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            event.target.classList.add('active');
        }

        // Add smooth scrolling and animations
        document.addEventListener('DOMContentLoaded', function() {
            // Animate cards on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe all cards
            document.querySelectorAll('.trip-card, .tip-article').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        });

        function filterTrips() {
            const regionFilter = document.getElementById('region-filter').value;
            const categoryFilter = document.getElementById('category-filter').value;
            const priceFilter = document.getElementById('price-filter').value;
            const searchInput = document.getElementById('search-input').value.toLowerCase();
            
            const tripCards = document.querySelectorAll('.trip-card');
            let visibleCount = 0;

            tripCards.forEach(card => {
                const region = card.getAttribute('data-region');
                const category = card.getAttribute('data-category');
                const price = parseInt(card.getAttribute('data-price'));
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                let showCard = true;

                // Region filter
                if (regionFilter !== 'all' && region !== regionFilter) {
                    showCard = false;
                }

                // Category filter
                if (categoryFilter !== 'all' && category !== categoryFilter) {
                    showCard = false;
                }

                // Price filter
                if (priceFilter !== 'all') {
                    if (priceFilter === 'budget' && price >= 1500000) {
                        showCard = false;
                    } else if (priceFilter === 'medium' && (price < 1500000 || price > 3000000)) {
                        showCard = false;
                    } else if (priceFilter === 'premium' && price <= 3000000) {
                        showCard = false;
                    }
                }

                // Search filter
                if (searchInput && !title.includes(searchInput) && !description.includes(searchInput)) {
                    showCard = false;
                }

                if (showCard) {
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            // Update trip count
            document.getElementById('trip-count').textContent = "Menampilkan ${visibleCount} destinasi";
        }

// === Checkout ===
        // Payment method selection
        document.querySelectorAll('.payment-option').forEach(option => {
            option.addEventListener('click', function() {
                document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
            });
        });

        // Form validation and checkout process
        function processCheckout() {
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const terms = document.getElementById('terms').checked;

            if (!firstName || !lastName || !email || !phone) {
                alert('Please fill in all required fields.');
                return;
            }

            if (!terms) {
                alert('Please agree to the terms and conditions first.');
                return;
            }

            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Invalid email format.');
                return;
            }

            // Simulate checkout process
            const button = document.querySelector('.checkout-btn');
            button.innerHTML = '⏳ Processing...';
            button.disabled = true;

            setTimeout(() => {
                alert('Booking successful! You will be redirected to the confirmation page.');
                button.innerHTML = '✅ Payment Successful';
            }, 2000);
        }

        function goBack() {
            // Always redirect to home/index page
            redirectToHomePage();
        }


        // Travel packages data
        const travelPackages = [{
            id: 1,
            icon: '🏛️',
            title: 'Borobudur Temple Tour',
            date: 'June 25 - 26, 2025',
            hotel: 'Heritage Hotel Yogyakarta',
            includes: ['🚗 Private Transport', '🎫 Temple Entrance', '🍽️ Traditional Lunch'],
            adultPrice: 45,
            childPrice: 25,
            insurance: 8,
            adminFee: 5,
            discount: 10
        }, {
            id: 2,
            icon: '🐠',
            title: 'Raja Ampat Diving Experience',
            date: 'July 15 - 20, 2025',
            hotel: 'Underwater Paradise Resort',
            includes: ['✈️ Domestic Flights', '🤿 Diving Equipment', '🍽️ All Meals'],
            adultPrice: 320,
            childPrice: 200,
            insurance: 25,
            adminFee: 15,
            discount: 40
        }, {
            id: 3,
            icon: '🦎',
            title: 'Komodo Island Adventure',
            date: 'August 10 - 14, 2025',
            hotel: 'Komodo Beach Resort',
            includes: ['🛥️ Island Hopping', '🏊 Snorkeling Gear', '🍽️ Seafood BBQ'],
            adultPrice: 180,
            childPrice: 120,
            insurance: 15,
            adminFee: 10,
            discount: 25
        }, {
            id: 4,
            icon: '🏝️',
            title: 'Gili Islands Paradise',
            date: 'September 5 - 8, 2025',
            hotel: 'Tropical Bungalows',
            includes: ['🚤 Fast Boat Transfer', '🚲 Bicycle Rental', '🍹 Welcome Drinks'],
            adultPrice: 95,
            childPrice: 65,
            insurance: 12,
            adminFee: 8,
            discount: 15
        }, {
            id: 5,
            icon: '⚰️',
            title: 'Tana Toraja Cultural Tour',
            date: 'October 20 - 24, 2025',
            hotel: 'Traditional Tongkonan House',
            includes: ['🚗 4WD Transport', '🎭 Cultural Shows', '🍽️ Local Cuisine'],
            adultPrice: 120,
            childPrice: 80,
            insurance: 15,
            adminFee: 8,
            discount: 20
        }];

        let currentPackageId = 1;

        // Dynamic price calculation based on participants
        function updatePrice() {
            const adults = parseInt(document.getElementById('adults').value);
            const children = parseInt(document.getElementById('children').value);
            const currentPackage = travelPackages.find(pkg => pkg.id === currentPackageId);

            const subtotal = (adults * currentPackage.adultPrice) + (children * currentPackage.childPrice);
            const total = subtotal + currentPackage.insurance + currentPackage.adminFee - currentPackage.discount;

            // Update price display
            document.querySelector('.price-breakdown').innerHTML = `
                <div class="price-row">
                    <span>Tour Package (${adults} Adult${adults > 1 ? 's' : ''}${children > 0 ? ', ' + children + ' Child' + (children > 1 ? 'ren' : '') : ''})</span>
                    <span>${subtotal.toLocaleString('en-US')}</span>
                </div>
                <div class="price-row">
                    <span>Travel Insurance</span>
                    <span>${currentPackage.insurance.toLocaleString('en-US')}</span>
                </div>
                <div class="price-row">
                    <span>Service Fee</span>
                    <span>${currentPackage.adminFee.toLocaleString('en-US')}</span>
                </div>
                <div class="price-row">
                    <span>Early Bird Discount</span>
                    <span style="color: #e74c3c;">-${currentPackage.discount.toLocaleString('en-US')}</span>
                </div>
                <div class="price-row total">
                    <span>Total Payment</span>
                    <span>${total.toLocaleString('en-US')}</span>
                </div>
            `;
        }

        // Update trip card display
        function updateTripCard() {
            const currentPackage = travelPackages.find(pkg => pkg.id === currentPackageId);
            const tripCard = document.querySelector('.trip-card');

            tripCard.innerHTML = `
                <div class="trip-image">${currentPackage.icon}</div>
                <div class="trip-title">${currentPackage.title}</div>
                <div class="trip-details">
                    📅 ${currentPackage.date}<br>
                    🏨 ${currentPackage.hotel}<br>
                    ${currentPackage.includes.join('<br>')}
                </div>
            `;
        }

        // Change package function
        function changePackage(packageId) {
            currentPackageId = packageId;
            updateTripCard();
            updatePrice();
        }

        // Add event listeners for participant count changes
        document.getElementById('adults').addEventListener('change', updatePrice);
        document.getElementById('children').addEventListener('change', updatePrice);

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            updateTripCard();
            updatePrice();
        });

// Tips
        // Add smooth scrolling and animations
        document.addEventListener('DOMContentLoaded', function() {
            // Animate cards on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe all cards
            document.querySelectorAll('.trip-card, .tip-article').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        });
