function spaceClocks() {
    const earthTime = new Date().toLocaleTimeString("en-US", {timeZone: 'America/Chicago'});

    // Mars Time Calculation
    const earthUTC = new Date().getTime() / 1000 / 86400 + 2440588; // Julian Date
    const MSD = (earthUTC - 2405522) / 1.027; // Mars Sol Date
    const mtcHours = (MSD % 1) * 24;
    const marsTime = new Date();
    marsTime.setUTCHours(mtcHours, (mtcHours % 1) * 60, ((mtcHours * 60) % 1) * 60);
    const marsTimeString = marsTime.toUTCString().split(" ")[4];

    document.querySelector('.earthTime').textContent = `Earth (CST): ${earthTime}`;
    document.querySelector('.marsTime').textContent = `Mars (MTC): ${marsTimeString}`;
}

setInterval(spaceClocks, 1000);

spaceClocks();