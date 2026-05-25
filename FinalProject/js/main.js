/**
 * Required Final Project Features JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 5. Event Gallery (Double Click Enlarge)
    // ==========================================
    const galleryImages = document.querySelectorAll('.gallery-img');
    galleryImages.forEach(img => {
        img.addEventListener('dblclick', function() {
            // Toggle the 'enlarged-img' class on double click
            this.classList.toggle('enlarged-img');
        });
    });

    // ==========================================
    // 7. Dynamic Event Fee Display (OnChange)
    // ==========================================
    const eventTypeSelect = document.getElementById('eventType');
    const feeDisplay = document.getElementById('feeDisplay');

    if (eventTypeSelect) {
        eventTypeSelect.addEventListener('change', function() {
            let fee = 0;
            switch(this.value) {
                case 'music':
                    fee = 500;
                    break;
                case 'sports':
                    fee = 300;
                    break;
                case 'food':
                    fee = 200;
                    break;
                default:
                    fee = 0;
            }
            feeDisplay.textContent = `₹${fee}`;
        });
    }

    // ==========================================
    // 8. Feedback Section (Keyboard Character Counter)
    // ==========================================
    const feedbackText = document.getElementById('feedbackText');
    const charCounter = document.getElementById('charCounter');

    if (feedbackText && charCounter) {
        feedbackText.addEventListener('keyup', function() {
            const currentLength = this.value.length;
            charCounter.textContent = `Characters typed: ${currentLength}`;
        });
    }

    // ==========================================
    // 6. Registration Form Submission behavior & History
    // ==========================================
    const regForm = document.getElementById('regForm');
    const outputConfirmation = document.getElementById('outputConfirmation');
    const registrationTableBody = document.getElementById('registrationTableBody');

    // Function to load and display registered events from LocalStorage
    function loadRegistrations() {
        const regs = JSON.parse(localStorage.getItem('myRegistrations')) || [];
        if(regs.length === 0 && registrationTableBody) {
            registrationTableBody.innerHTML = '<tr><td colspan="4" class="text-center text-muted py-3">No events registered yet. Fill out the form to register!</td></tr>';
            return;
        }
        if(registrationTableBody) {
            registrationTableBody.innerHTML = regs.map(reg => `
                <tr>
                    <td class="fw-bold">${reg.name}</td>
                    <td class="text-capitalize">${reg.type}</td>
                    <td>${reg.date}</td>
                    <td class="text-danger fw-bold">₹${reg.fee}</td>
                </tr>
            `).join('');
        }
    }
    
    // Load table on startup
    loadRegistrations();

    if (regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            // Simple validation bypass since HTML5 Required takes over mostly
            const name = document.getElementById('fullName').value;
            const date = document.getElementById('eventDate').value;
            const type = document.getElementById('eventType').value;
            const currentFee = feeDisplay ? feeDisplay.textContent.replace('₹', '') : '0';
            
            // Save to localStorage
            const regs = JSON.parse(localStorage.getItem('myRegistrations')) || [];
            regs.push({ name: name, type: type, date: date, fee: currentFee });
            localStorage.setItem('myRegistrations', JSON.stringify(regs));
            
            // Refresh table
            loadRegistrations();
            
            outputConfirmation.innerHTML = `<strong>Booking Confirmed!</strong> Thank you ${name}. You are registered for the ${type} event on ${date}.`;
            outputConfirmation.classList.remove('d-none');
            
            regForm.reset();
            if(feeDisplay) feeDisplay.textContent = `₹0`;
            
            setTimeout(() => {
                outputConfirmation.classList.add('d-none');
            }, 5000);
        });
    }

    // ==========================================
    // 10. Nearby Events Section (Geolocation API)
    // ==========================================
    const findNearbyBtn = document.getElementById('findNearbyBtn');
    const geoDetails = document.getElementById('geoDetails');

    if (findNearbyBtn) {
        findNearbyBtn.addEventListener('click', () => {
            geoDetails.innerHTML = `<p class="text-secondary mt-3 spinner-border spinner-border-sm"></p> Locating...`;
            
            if (navigator.geolocation) {
                // Handling Timeout and Success/Error
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude.toFixed(4);
                        const lon = position.coords.longitude.toFixed(4);
                        
                        geoDetails.innerHTML = `
                            <p class="mt-3 mb-1 fw-bold text-success">Location Found!</p>
                            <p class="mb-1 text-muted"><strong>Latitude:</strong> ${lat} | <strong>Longitude:</strong> ${lon}</p>
                            <p class="mt-2 fw-bold bg-warning text-dark p-2 rounded d-inline-block">Nearest Event: Community Hall, 2km away</p>
                        `;
                    },
                    (error) => {
                        let errorMsg = 'An unknown error occurred.';
                        if(error.code === 1) errorMsg = 'Permission denied by user. Please check your browser settings.';
                        if(error.code === 2) errorMsg = 'Location unavailable. Your device could not determine its location.';
                        if(error.code === 3) errorMsg = 'Location request timed out. Network or device location services might be slow. Please try again.';
                        
                        geoDetails.innerHTML = `<p class="mt-3 text-danger fw-bold">Error: ${errorMsg}</p>
                            <button id="retryGeo" class="btn btn-sm btn-outline-secondary mt-2">Retry Location</button>`;
                        
                        document.getElementById('retryGeo').addEventListener('click', () => {
                            findNearbyBtn.click();
                        });
                    },
                    { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
                );
            } else {
                geoDetails.innerHTML = `<p class="mt-3 text-danger fw-bold">Geolocation is not supported by your browser.</p>`;
            }
        });
    }

    // ==========================================
    // 11. User Preferences (localStorage/sessionStorage)
    // ==========================================
    const prefSelect = document.getElementById('prefSelect');
    const savePrefBtn = document.getElementById('savePrefBtn');
    const clearPrefBtn = document.getElementById('clearPrefBtn');
    const prefStatus = document.getElementById('prefStatus');

    // Auto-load preference on page load
    if (localStorage.getItem('preferredEventType')) {
        const savedPref = localStorage.getItem('preferredEventType');
        prefSelect.value = savedPref;
        prefStatus.textContent = `Auto-loaded saved preference: ${savedPref}`;
    }

    savePrefBtn.addEventListener('click', () => {
        const selectedPref = prefSelect.value;
        localStorage.setItem('preferredEventType', selectedPref);
        sessionStorage.setItem('currentSessionAction', 'Preference Updated'); // Satisfying sessionStorage usage
        prefStatus.className = "text-success fw-bold";
        prefStatus.textContent = `Preference saved successfully!`;
        
        // Auto-select in form if applicable
        const formEventType = document.getElementById('eventType');
        if(formEventType && selectedPref !== 'none') {
            formEventType.value = selectedPref;
            // manually trigger change event for fee calculation
            formEventType.dispatchEvent(new Event('change')); 
        }
    });

    clearPrefBtn.addEventListener('click', () => {
        localStorage.removeItem('preferredEventType');
        prefSelect.value = 'none';
        prefStatus.className = "text-danger fw-bold";
        prefStatus.textContent = `Preferences cleared.`;
    });

});

// ==========================================
// 9. Promo Video Section (Global oncanplay event)
// ==========================================
window.videoReady = function() {
    const statusMsg = document.getElementById('videoStatusMsg');
    if(statusMsg) {
        statusMsg.innerHTML = '<i class="bi bi-play-circle"></i> Video ready to play';
    }
};