function getResponse() {
    const responses = [
        "The tides are shifting, but the direction remains unclear.",
        "The path ahead is foggy, but change is in the air.",
        "A great nation stirs—only time will tell its fate.",
        "Much depends on the winds of fortune and the will of the people.",
        "The stars hint at both promise and peril.",
        "History repeats, but not always as expected.",
        "The road to greatness is long, and many turns lie ahead.",
        "Some say yes, others say no—perhaps both are right.",
        "Greatness is a journey, not a destination.",
        "A house divided cannot stand—watch for unity or discord.",
        "The eagle soars, but storms may gather.",
        "Old glories may rise again, but new challenges emerge.",
        "The answer lies in the hands of the many, not the few.",
        "The past whispers lessons, but the future writes its own story.",
        "Momentum builds, but will it last?",
        "The spirit is willing, but the flesh is unpredictable.",
        "A crossroads approaches—choose wisely.",
        "What was once lost can be found, but not always the same.",
        "The foundations remain, but the structure is evolving.",
        "Greatness is in the eye of the beholder."
    ];

    const responseElement = document.getElementById("response");
    responseElement.innerText = "Checking..."; // Initial suspense message
    responseElement.classList.add("suspense"); // Add flashing animation

    // Delay to simulate "thinking" before showing final response
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * responses.length);
        responseElement.innerText = responses[randomIndex];
        responseElement.classList.remove("suspense"); // Remove animation
    }, 2000); // 2-second delay
}
