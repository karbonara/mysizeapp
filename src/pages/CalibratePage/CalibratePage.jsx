import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
export const CalibratePage = () => {
  const dispatch = useDispatch();
  const cardScale = useSelector(state => state.cardScale);

  const handleMinusClick = () => {
    dispatch({ type: 'DECREMENT_CARD_SCALE' });
  };

  const handlePlusClick = () => {
    dispatch({ type: 'INCREMENT_CARD_SCALE' });
  };

  return (
    <div id="app" className="overflow-hidden relative" data-v-0b575bfc="">
      <div
        className="logo flex justify-center flex-grow-0"
        data-v-5f8b795e=""
        data-v-0b575bfc=""
        style={{ top: 36, width: 120 }}
      >
        <picture data-v-5f8b795e="">
          <source
            srcSet="https://www.mysize-measure.com/my-size_logo.webp"
            type="image/webp"
            data-v-5f8b795e=""
          />
          <img
            src="https://www.mysize-measure.com/my-size_logo.webp"
            alt="MY.SIZE logo"
            width={229}
            height={230}
            type="image/png"
            data-v-5f8b795e=""
          />
        </picture>
      </div>
      <div
        data-v-ab0c6790=""
        data-v-0b575bfc=""
        className="calibrator flex-grow flex flex-col items-center p-4 page"
        style={{ opacity: 1 }}
      >
        <div data-v-ab0c6790="" className="flex-grow relative w-full">
          <div data-v-ab0c6790="">
            <img
              src="https://www.mysize-measure.com/_nuxt/img/CreditCard.fbef755.png"
              alt="credit card"
              className={`card ${cardScale > 1 ? 'large' : ''}`}
              style={{
                transform: `scale(${cardScale}) translateX(22%)`,
                transformOrigin: '230% 50%',
                transition: 'transform 0.3s ease-out',
                rotate: 'none'
              }}

            />
          </div>
          <div className="slider"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '40px',
            }}
          >
            <div
              className="slider__index slider__index--minus flex items-center"
              onClick={handleMinusClick}
            >
              <img
                style={{
                  display: 'block',
                  width: '20px',
                  opacity: '.5',
                  left: '20px',
                  position: 'absolute',
                }}
                src="data:image/svg+xml;base64,PHN2ZyBpZD0ibWludXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjYuMzUiIGhlaWdodD0iNi4zNSIgdmlld0JveD0iMCAwIDYuMzUgNi4zNSI+CjxwYXRoIGQ9Ik0wLDMuOTRWMi40MUg2LjM1VjMuOTRaIiBzdHlsZT0iZmlsbDogI0ZGRiIvPgo8L3N2Zz4="
                alt=""
              />
            </div>
            <div
              onClick={handlePlusClick}
              className="slider__index slider__index--plus flex items-center"
            >
              <img
                style={{
                  display: 'block',
                  width: '20px',
                  opacity: '.5',
                  right: '20px',
                  position: 'absolute',
                }}
                src="data:image/svg+xml;base64,PHN2ZyBpZD0icGx1cyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNi4zNSIgaGVpZ2h0PSI2LjM1IiB2aWV3Qm94PSIwIDAgNi4zNSA2LjM1Ij4KPHBhdGggZD0iTTMuOTQsMy45M1Y2LjM1SDIuNFYzLjkzSDBWMi40SDIuNFYwSDMuOTRWMi40SDYuMzVWMy45M1oiIHN0eWxlPSJmaWxsOiAjRkZGIi8+Cjwvc3ZnPg=="
                alt=""
              />
            </div>
          </div>
          <div
            data-v-ab0c6790=""
            className="flex justify-center absolute bottom-0 w-full"
            style={{ zIndex: 1 }}
          >
            <Link
              to="/measure"
              className="button rounded-full flex items-center justify-center flex-shrink-0 relative button--circle"
            >
              <div className="button__bg bg-green" /> {/**/}{" "}
              <span className="button__text relative uppercase font-semibold text-lg">
                OK
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
