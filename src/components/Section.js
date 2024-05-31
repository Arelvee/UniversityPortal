import React, { useState } from 'react';

function Section() {
  const [searchTerm, setSearchTerm] = useState('');
  const sectionList = ['Section A', 'Section B', 'Section C'];

  const filteredSections = sectionList.filter(section =>
    section.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Sections</h1>
      <input
        type="text"
        placeholder="Search Sections"
        className="p-2 border border-gray-300 rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="list-disc list-inside">
        {filteredSections.map((section, index) => (
          <li key={index} className="text-lg">{section}</li>
        ))}
      </ul>
    </div>
  );
}

export default Section;
