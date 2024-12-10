const weekdays = ["mon", "tus", "wed", "thu", "fri", "sat", "sun"];
const [mon, tus, wed, thu, fri] = weekdays;

const restoreStatus = {
  mon: {
    open: "9:00am",
    close: "22:00pm",
  },
  tus: {
    open: "9:00am",
    close: "2:00pm",
  },
  wed: {
    open: "9:00am",
    close: "12:00pm",
  },
  thu: {
    open: "9:00am",
    close: "2:00pm",
  },
  fri: {
    open: "9:00am",
    close: "2:00pm",
  },
};

let objKey = Object.keys(restoreStatus);
let objValue = Object.values(restoreStatus);
let openDays = `we are open ${objKey.length} days: `;
for (const days of Object.keys(restoreStatus)) {
  openDays += `${days.toLocaleUpperCase()}, `;
}
console.log("element : ", openDays);
console.log("objValue : ", objValue);
