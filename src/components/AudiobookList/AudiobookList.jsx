import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AudiobookList = () => {
  const [subject, setSubject] = useState(''); 
  const [results, setResults] = useState([]); 

  useEffect(() => {
    //retrieve audiobooks by subject
    const fetchAudiobooksBySubject = async () => {
      try {
        const response = await axios.get(
          `https://archive.org/advancedsearch.php?q=${subject}&format=json&mediatype=audio`
        );

        
        const audiobooks = response.data.response.docs;

        
        setResults(audiobooks);
      } catch (error) {
        console.error('Error fetching audiobooks:', error);
      }
    };

    if (subject) {
      fetchAudiobooksBySubject();
    }
  }, [subject]);

  return (
    <div>
      <h2>Search Audiobooks</h2>
      <input
        type="text"
        placeholder="Enter A Subject Keyword"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      {results.length > 0 && (
        <ul>
          {results.map((audiobook) => (
            <li key={audiobook.identifier}>
              <a
                href={`https://archive.org/details/${audiobook.identifier}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {audiobook.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AudiobookList;