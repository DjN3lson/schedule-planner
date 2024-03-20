import React from "react";

function Calendar() {
  // Function to get days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to generate array of days in a month
  const generateDaysArray = (year, month) => {
    const numDays = getDaysInMonth(year, month);
    return Array.from({ length: numDays }, (_, index) => index + 1);
  };

  // Function to get current year and month
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  // Generate array of days in current month
  const daysArray = generateDaysArray(currentYear, currentMonth);

  // Generate array of weekdays
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <table className="calendar">
      <thead>
        <tr>
          {weekdays.map((weekday) => (
            <th key={weekday}>{weekday}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {daysArray.map((day) => (
          <tr key={day}>
            <td>{day}</td>
            {/* You can add additional logic here to display events or tasks for each day */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Calendar;
