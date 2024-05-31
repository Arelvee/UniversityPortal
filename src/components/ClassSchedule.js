import React, { useState } from 'react';

function ClassSchedule() {
  const [searchTerm, setSearchTerm] = useState('');
  const scheduleList = ['Monday 10am - 12pm', 'Wednesday 2pm - 4pm', 'Friday 9am - 11am'];

  const filteredSchedules = scheduleList.filter(schedule =>
    schedule.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Class Schedule</h1>
      <input
        type="text"
        placeholder="Search Schedules"
        className="p-2 border border-gray-300 rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-disc list-inside">
        {filteredSchedules.map((schedule, index) => (
          <li key={index} className="text-lg">{schedule}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClassSchedule;
