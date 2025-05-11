// chinese-zodiac.js
function getChineseZodiac(year, i18n) {
    const animals = [
        i18n.translate('rat'),
        i18n.translate('ox'),
        i18n.translate('tiger'),
        i18n.translate('rabbit'),
        i18n.translate('dragon'),
        i18n.translate('snake'),
        i18n.translate('horse'),
        i18n.translate('goat'),
        i18n.translate('monkey'),
        i18n.translate('rooster'),
        i18n.translate('dog'),
        i18n.translate('pig')
    ];
    const elements = [
        i18n.translate('wood'),
        i18n.translate('fire'),
        i18n.translate('earth'),
        i18n.translate('metal'),
        i18n.translate('water')
    ];

    const animalIndex = (year - 1900) % 12;
    const elementIndex = Math.floor((year - 1900) / 2) % 5;

    return elements[elementIndex] + " " + animals[animalIndex];
}