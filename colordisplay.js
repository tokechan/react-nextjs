import React, { useState } from 'react';

function ColorDisplay() {
  const [color, setColor] = useState('');


  return (
  <div className="p-4">
    <input 
     type="text"
     value={color}
     onChange={(e) => setColor(e.target.value)}
     placeholder="カラーコードを入力"
     className="border p-3 mb-4"
    />

    <div
     className="w-35 h-35 "
     style={{ backgroundColor: color || 'transparent'}}
    >
    </div>
  </div>
  )
}

export default ColorDisplay;