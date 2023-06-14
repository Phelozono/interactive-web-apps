const data = {
    data: {
      "1": {
        firstName: "Nwabisa",
        surname: "Masiko",
        races: [
          { date: "2022-12-02", times: [7, 7, 7, 7] },
          { date: "2022-11-25", times: [8, 8, 8, 8] },
        ],
      },
      "2": {
        firstName: "Schalk",
        surname: "Venter",
        races: [
          { date: "2022-12-09", times: [9, 9, 9, 10] },
          { date: "2022-12-02", times: [9, 9, 10, 10] },
          { date: "2022-11-25", times: [10, 10, 10, 10] },
          { date: "2022-11-18", times: [11, 11, 11, 11] },
        ],
      },
    },
  };
  
  function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
  }
  
  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
  
  function displayAthleteInfo(id) {
    const athlete = data.data[id];
    
    const totalRaces = athlete.races.length;
    
    const latestRace = athlete.races[totalRaces -1];
    
    const latestRaceDate = formatDate(latestRace.date);
    
    const latestRaceTime = formatTime(latestRace.times.reduce((a,b) => a+b));
    
    console.log(`Athlete: ${athlete.firstName} ${athlete.surname}`);
    
    console.log(`Total Races: ${totalRaces}`);
    
    console.log(`Event Date (Latest): ${latestRaceDate}`);
    
    console.log(`Total Time (Latest): ${latestRaceTime}`);
  }
  
  displayAthleteInfo("1");
  displayAthleteInfo("2");
  