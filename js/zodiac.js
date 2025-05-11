// zodiac.js
function getZodiacSign(month, day, i18n) {
    const translatedSigns = {
        Aquarius: i18n.translate('aquarius'),
        Pisces: i18n.translate('pisces'),
        Aries: i18n.translate('aries'),
        Taurus: i18n.translate('taurus'),
        Gemini: i18n.translate('gemini'),
        Cancer: i18n.translate('cancer'),
        Leo: i18n.translate('leo'),
        Virgo: i18n.translate('virgo'),
        Libra: i18n.translate('libra'),
        Scorpio: i18n.translate('scorpio'),
        Sagittarius: i18n.translate('sagittarius'),
        Capricorn: i18n.translate('capricorn')
    };

    if ((month == 0 && day >= 20) || (month == 1 && day <= 18)) {
        return translatedSigns.Aquarius;
    } else if ((month == 1 && day >= 19) || (month == 2 && day <= 20)) {
        return translatedSigns.Pisces;
    } else if ((month == 2 && day >= 21) || (month == 3 && day <= 19)) {
        return translatedSigns.Aries;
    } else if ((month == 3 && day >= 20) || (month == 4 && day <= 20)) {
        return translatedSigns.Taurus;
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return translatedSigns.Gemini;
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 22)) {
        return translatedSigns.Cancer;
    } else if ((month == 6 && day >= 23) || (month == 7 && day <= 22)) {
        return translatedSigns.Leo;
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        return translatedSigns.Virgo;
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        return translatedSigns.Libra;
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 21)) {
        return translatedSigns.Scorpio;
    } else if ((month == 10 && day >= 22) || (month == 11 && day <= 21)) {
        return translatedSigns.Sagittarius;
    } else {
        return translatedSigns.Capricorn;
    }
}