window.onload = () => {
    const homeButtonPlus1 = document.querySelector("#home-score-btn-1");
    const homeButtonPlus2 = document.querySelector("#home-score-btn-2");
    const homeButtonPlus3 = document.querySelector("#home-score-btn-3");
    const homeScoreText = document.querySelector("#home-score");
    const resetHomeButton = document.querySelector("#reset-home-score");
    
    const guestButtonPlus1 = document.querySelector("#guest-score-btn-1");
    const guestButtonPlus2 = document.querySelector("#guest-score-btn-2");
    const guestButtonPlus3 = document.querySelector("#guest-score-btn-3");
    const guestScoreText = document.querySelector("#guest-score");
    const resetGuestButton = document.querySelector("#reset-guest-score");

    let homeScore = 0;
    let guestScore = 0;

    homeButtonPlus1.addEventListener("click", () => {
        homeScore += 1;
        setHomeScore();
    });

    homeButtonPlus2.addEventListener("click", () => {
        homeScore += 2;
        setHomeScore();
    });

    homeButtonPlus3.addEventListener("click", () => {
        homeScore += 3;
        setHomeScore();
    });

    const setHomeScore = () => {
        homeScoreText.textContent = homeScore;
        if (homeScore > 99) {
            homeScoreText.textContent = "--";
        }
    }

    resetHomeButton.addEventListener("click", () => {
        homeScore = 0;
        homeScoreText.textContent = 0;
    });

    guestButtonPlus1.addEventListener("click", () => {
        guestScore += 1;
        setGuestScore();
    });

    guestButtonPlus2.addEventListener("click", () => {
        guestScore += 2;
        setGuestScore();
    });

    guestButtonPlus3.addEventListener("click", () => {
        guestScore += 3;
        setGuestScore();
    });

    const setGuestScore = () => {
        guestScoreText.textContent = guestScore;
        if (guestScore > 99) {
            guestScoreText.textContent = "--";
        }
    }

    resetGuestButton.addEventListener("click", () => {
        guestScore = 0;
        guestScoreText.textContent = 0;
    });
}