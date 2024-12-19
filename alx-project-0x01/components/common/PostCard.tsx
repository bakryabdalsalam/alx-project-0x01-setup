import React from 'react';

const PostCard: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-semibold text-gray-800">Post Title</h2>
      <p className="text-gray-600 mt-2">This is a placeholder for Post content.</p>
    </div>
  );
};

export default PostCard;
