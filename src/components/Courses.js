import React, { useState } from 'react';

function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const courseList = ['Math 101', 'Physics 201', 'Chemistry 301'];

  const filteredCourses = courseList.filter(course =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      <input
        type="text"
        placeholder="Search Courses"
        className="p-2 border border-gray-300 rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-disc list-inside">
        {filteredCourses.map((course, index) => (
          <li key={index} className="text-lg">{course}</li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
