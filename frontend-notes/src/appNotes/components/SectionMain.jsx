import React from 'react';
import { useSelector } from 'react-redux';

export const SectionMain = () => {
  const valueInput = useSelector((state) => state.notes.valueInput);

  return (
    <div>
      <p>{valueInput}</p>
    </div>
  );
};
