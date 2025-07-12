import React from 'react';

const FruitList = () => {
  const fruits = ['りんご', 'みかん', 'バナナ'];

  return (
  <ul className="max-w-sm mx-auto bg-green-100 rounded shadow-md p-4">
    {fruits.map((fruit, index) => (
        <li key={index} className="border-b py-2 text-gray-800">
          {fruit}
        </li>
    ))}
  </ul>
  );
};

export default FruitList;