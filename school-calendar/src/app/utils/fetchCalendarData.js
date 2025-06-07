
export async function fetchCalendarData(state) {
  console.log(`Fetching calendar data for state: ${state}`);
  
  // const res = await fetch(`https://schoolcalendar.net/school-holidays/${state}`);
  // if (!res.ok) throw new Error('Failed to fetch data');
  // return res.json();
   return {
  schools: [
    { name: "Aberdeen School District", link: "https://..." },
    { name: "Artesia Public Schools", link: "https://..." },
    // more...
  ]
}
}
