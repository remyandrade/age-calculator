function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();

    if (isNaN(birthdate)) {
        document.getElementById("result").textContent = "Please enter a valid birthdate.";
        return;
    }

    const ageInMilliseconds = today - birthdate;
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    document.getElementById("result").textContent = `Your age is approximately ${ageInYears} years.`;
}