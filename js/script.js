document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const daySelect = document.getElementById('day');
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');
    const calculateBtn = document.getElementById('calculate');
    const saveBirthdateBtn = document.getElementById('saveBirthdate');
    const loadBirthdateBtn = document.getElementById('loadBirthdate');
    const errorElement = document.getElementById('error');
    const resultElement = document.getElementById('result');
    const ageYearsElement = document.getElementById('ageYears');
    const ageMonthsElement = document.getElementById('ageMonths');
    const ageDaysElement = document.getElementById('ageDays');
    const zodiacSignElement = document.getElementById('zodiacSign');
    const chineseZodiacElement = document.getElementById('chineseZodiac');
    const nextBirthdayElement = document.getElementById('nextBirthday');
    const ageInWeeksElement = document.getElementById('ageInWeeks');
    const ageInSecondsElement = document.getElementById('ageInSeconds');
    const shareFacebookBtn = document.getElementById('shareFacebook');
    const shareTwitterBtn = document.getElementById('shareTwitter');
    const printResultBtn = document.getElementById('printResult');
    const languageSelect = document.getElementById('language');

    // Initialize
    populateDays(daySelect);
    populateMonths(monthSelect);
    populateYears(yearSelect);
    i18n.init(); // Initialize internationalization

    // Event Listeners
    monthSelect.addEventListener('change', () => updateDays(daySelect, monthSelect, yearSelect));
    yearSelect.addEventListener('change', () => updateDays(daySelect, monthSelect, yearSelect));
    calculateBtn.addEventListener('click', calculateAndDisplayAge);
    saveBirthdateBtn.addEventListener('click', saveBirthdate);
    loadBirthdateBtn.addEventListener('click', loadBirthdate);
    shareFacebookBtn.addEventListener('click', shareOnFacebook);
    shareTwitterBtn.addEventListener('click', shareOnTwitter);
    printResultBtn.addEventListener('click', printResult);
    languageSelect.addEventListener('change', changeLanguage);

    // Functions

    function calculateAndDisplayAge() {
        const day = parseInt(daySelect.value);
        const month = parseInt(monthSelect.value);
        const year = parseInt(yearSelect.value);

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            displayError(i18n.translate('invalidDate')); // Use i18n
            hideResult();
            return;
        }

        const birthDate = new Date(year, month, day);
        const today = new Date();

        if (birthDate > today) {
            displayError(i18n.translate('futureDate')); // Use i18n
            hideResult();
            return;
        }

        hideError();

        const age = calculateAge(birthDate, today);

        // Display Age
        animateCounter(ageYearsElement, 0, age.years, 1000, ' ' + i18n.translate('years'));
        animateCounter(ageMonthsElement, 0, age.months, 800);
        animateCounter(ageDaysElement, 0, age.days, 600);

        // Display Additional Details
        zodiacSignElement.textContent = i18n.translate('zodiac') + ": " + getZodiacSign(month, day, i18n); // Pass i18n
        chineseZodiacElement.textContent = i18n.translate('chineseZodiac') + ": " + getChineseZodiac(year, i18n); // Pass i18n
        nextBirthdayElement.textContent = i18n.translate('nextBirthday') + ": " + daysUntilNextBirthday(birthDate) + " " + i18n.translate('days'); // Use i18n
        ageInWeeksElement.textContent = i18n.translate('ageInWeeks') + ": " + calculateAgeInWeeks(birthDate, today);
        ageInSecondsElement.textContent = i18n.translate('ageInSeconds') + ": " + formatNumber(calculateAgeInSeconds(birthDate, today));

        showResult();
    }

    function calculateAge(birthDate, today) {
        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
            ageYears--;
            ageMonths += 12;
        }

        if (ageDays < 0) {
            const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            ageDays += lastDayOfMonth;
            ageMonths--;
        }

        return { years: ageYears, months: ageMonths, days: ageDays };
    }

    function calculateAgeInWeeks(birthDate, today) {
        const ageInDays = (today.getTime() - birthDate.getTime()) / (1000 * 3600 * 24);
        return Math.floor(ageInDays / 7);
    }

    function calculateAgeInSeconds(birthDate, today) {
        return Math.floor((today.getTime() - birthDate.getTime()) / 1000);
    }

    function formatNumber(number) {
        return number.toLocaleString();
    }

    function saveBirthdate() {
        localStorage.setItem('birthdateDay', daySelect.value);
        localStorage.setItem('birthdateMonth', monthSelect.value);
        localStorage.setItem('birthdateYear', yearSelect.value);
        alert(i18n.translate('birthdateSaved')); // Use i18n
    }

    function loadBirthdate() {
        const day = localStorage.getItem('birthdateDay');
        const month = localStorage.getItem('birthdateMonth');
        const year = localStorage.getItem('birthdateYear');

        if (day && month && year) {
            daySelect.value = day;
            monthSelect.value = month;
            yearSelect.value = year;
            updateDays(daySelect, monthSelect, yearSelect);
        } else {
            alert(i18n.translate('noBirthdateSaved')); // Use i18n
        }
    }

    function displayError(message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        errorElement.classList.add('shake-animation');
    }

    function hideError() {
        errorElement.style.display = 'none';
        errorElement.classList.remove('shake-animation');
    }

    function showResult() {
        resultElement.classList.add('show');
    }

    function hideResult() {
        resultElement.classList.remove('show');
    }

    function printResult() {
        window.print();
    }

    function changeLanguage() {
        const selectedLanguage = languageSelect.value;
        i18n.changeLanguage(selectedLanguage);
        // Update labels and messages
        document.querySelectorAll('[data-i18n]').forEach(element => {
            element.textContent = i18n.translate(element.dataset.i18n);
        });
        calculateAndDisplayAge(); // Recalculate and display with new language
    }

    // Animation function (same as before)
    function animateCounter(element, start, end, duration, suffix = '') {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = end + suffix;
            }
        };
        window.requestAnimationFrame(step);
    }
});