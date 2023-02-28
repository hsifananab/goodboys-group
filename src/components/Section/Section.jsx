import React from 'react';
import Logo from '../../assets/images/svg/logo.svg';

import './Section.scss';

const Section = ({
  title = '',
  children,
  heightFull = false,
  sm = false,
  id,
}) => {
  return (
    <div
      className="section"
      style={{ height: heightFull ? '100vh' : '' }}
      id={id}
    >
      <aside className="section__aside">
        {title.length === 0 ? (
          <img src={Logo} />
        ) : (
          <h2
            style={{
              fontSize: sm ? '40px' : '',
              paddingRight: sm ? '22px' : '',
            }}
          >
            {title}
          </h2>
        )}
      </aside>
      <div className="section__content">{children}</div>
    </div>
  );
};

export default Section;
