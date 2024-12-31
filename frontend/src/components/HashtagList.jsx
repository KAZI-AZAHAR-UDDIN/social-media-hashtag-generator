import React from 'react';

const HashtagList = ({ hashtags }) => {
  const handleCopy = (tag) => {
    navigator.clipboard.writeText(tag);
    alert(`Copied: ${tag}`);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Generated Hashtags</h2>
      {hashtags.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-center">
          {hashtags.map((tag, index) => (
            <span
              key={index}
              onClick={() => handleCopy(tag)}
              className="bg-gray-100 hover:bg-blue-100 text-gray-800 hover:text-blue-600 font-medium px-4 py-2 rounded-lg cursor-pointer transition duration-200"
              title="Click to copy"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No hashtags generated yet. Enter text to generate hashtags.</p>
      )}
    </div>
  );
};

export default HashtagList;
