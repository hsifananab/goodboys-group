import React from 'react';
import CasesSlider from './CasesSlider';
import ThumbsSlider from './ThumbsSlider';

import { useStateContext } from '../../context/ContextProvider';
import './Cases.scss';

const Cases = () => {
  const { activeThumb } = useStateContext();
  return (
    <div className="cases__wrapper" id="cases">
      <ThumbsSlider />
      <CasesSlider index={activeThumb} />
    </div>
  );
};

export default Cases;
