'use client';
import React, { useState } from 'react';

const TailwindDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="max-w-sm mx-auto p-4">
      {/* 접근성을 위한 label */}
      <label
        htmlFor="dropdown"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        옵션 선택:
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">옵션을 선택하세요</option>
        <option value="option1">옵션 1</option>
        <option value="option2">옵션 2</option>
        <option value="option3">옵션 3</option>
      </select>

      {selectedOption && (
        <p className="mt-4 text-gray-800">
          선택된 옵션: <span className="font-semibold">{selectedOption}</span>
        </p>
      )}
    </div>
  );
};

export default TailwindDropdown;
