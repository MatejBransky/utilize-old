import React from 'react';
import { Routes, Route } from '@utilize/react-router-dom';

export const App: React.FC = (props) => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/test" element={<div>Test</div>} />
      </Routes>
    </div>
  );
};
