import React, { useState } from 'react';
import HashtagList from './components/HashtagList';
import InputForm from './components/InputForm';
import "./index.css";

const App = () => {
  const [hashtags, setHashtags] = useState([]);

  const handleGenerate = async (text) => {
    try {
      const response = await fetch('http://localhost:5000/api/hashtags/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate hashtags');
      }

      const data = await response.json();
      setHashtags(data.hashtags);
    } catch (error) {
      console.error('Error generating hashtags:', error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">Social Media Hashtag Generator</h1>
      <InputForm onGenerate={handleGenerate} />
      <HashtagList hashtags={hashtags} />
    </div>
  );
};

export default App;

