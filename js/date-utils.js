// date-utils.js

function populateDays(daySelect) {
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
}

function populateMonths(monthSelect) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
}

function populateYears(yearSelect) {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 120; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

function updateDays(daySelect, monthSelect, yearSelect) {
    const selectedDay = daySelect.value;
    const selectedMonth = parseInt(monthSelect.value);
    const selectedYear = parseInt(yearSelect.value);

    while (daySelect.options.length > 0) {
        daySelect.remove(0);
    }
    populateDays(daySelect);

    let daysInMonth = 31;

    if (!isNaN(selectedMonth)) {
        if (selectedMonth === 1) {
            if (!isNaN(selectedYear) && isLeapYear(selectedYear)) {
                daysInMonth = 29;
            } else {
                daysInMonth = 28;
            }
        } else if ([3, 5, 8, 10].includes(selectedMonth)) {
            daysInMonth = 30;
        }
    }

    while (daySelect.options.length > 0) {
        daySelect.remove(0);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    if (selectedDay && selectedDay <= daysInMonth) {
        daySelect.value = selectedDay;
    }
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function daysUntilNextBirthday(birthDate) {
    const today = new Date();
    let nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());

    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const timeDiff = nextBirthday.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}