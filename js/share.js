// share.js
function shareOnFacebook() {
    const ageYears = document.getElementById('ageYears').textContent;
    const shareUrl = encodeURIComponent(window.location.href);
    const quote = encodeURIComponent("I am " + ageYears + "! Calculate your age here.");
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${quote}`, '_blank');
}

function shareOnTwitter() {
    const ageYears = document.getElementById('ageYears').textContent;
    const text = encodeURIComponent("I am " + ageYears + "! Calculate your age here: " + window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
}