import React, { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const incrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="p-4">
      <p className="mb-2">いいね数: {likes}</p>
      <button onClick={incrementLikes} className="bg-blue-500 text-white px-4 py-2 rounded">
        いいね！
      </button>
    </div>
  );
}

export default LikeButton;