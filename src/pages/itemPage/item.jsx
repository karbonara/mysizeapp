import React from 'react';
import AsNavFor from '../../widgets/Slider/Slider';
import { Link } from 'react-router-dom';

export const ItemPage = () => {
  return (
    <div id="app" className="overflow-hidden relative">
      <AsNavFor />
      <div className="flex justify-center mt-6"
        style={{
          position: 'absolute',
          width: '90%',
          bottom: '40px',
          left: '50%',
          right: '50%',
          transform: 'translate(-50%, 0)'
        }}
      >
        <Link
          className="block w-full button rounded-full flex items-center justify-center flex-shrink-0 relative"
          to="/store-locator"
        >
          <div className="button__bg bg-blue" /> {/**/}{" "}
          <span className="button__text relative uppercase font-semibold text-lg">
            Şimdi satın al
          </span>
        </Link>
      </div>
    </div>
  );
};

