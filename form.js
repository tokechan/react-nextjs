import React, { useState } from 'react';

const InputDisplay = () => {
  // ここにstateを定義してください
  const [text, setText] = useState('');

  return (
    <div className="">
      <input 
        type="text"
        value={text}
        placeholder="入力してください"
        onChange={(e) => setText(e.target.value)}
        className="p-3 m-3 border rounded-md"

      />
      <p className="p-3 m-3 text-lg">
      {text}
      </p>
      </div>
  );
};

export default InputDisplay;