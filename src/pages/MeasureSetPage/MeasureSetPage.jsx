
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const MeasureSetPage = () => {
  const elements = useSelector((state) => state.elements);
  const cardScale = useSelector((state) => state.cardScale);
  const dispatch = useDispatch();

  // const selectedElement = useSelector(
  //   (state) =>
  //     state.elements[Math.min(Math.floor(cardScale) - 1, state.elements.length - 1)]
  // );

  const activeIndex = Math.min(Math.floor(cardScale) - 1, elements.length - 1);


  const handleTouchStart = (index) => (event) => {
    const touchStartY = event.touches[0].clientY;

    const handleTouchMove = (event) => {
      const touchCurrentY = event.touches[0].clientY;
      const touchDiffY = touchCurrentY - touchStartY;

      if (touchDiffY > 0) {
        const updatedElements = [...elements];
        updatedElements[index].top = `calc(35vh + ${touchDiffY - 50}px)`;
        // Нужно использовать dispatch, чтобы обновить состояние
        dispatch({ type: 'UPDATE_ELEMENTS', payload: updatedElements });
      }
    };

    const handleTouchEnd = () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };

    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);
  };

  const handleTouchEnd = (index) => () => {
    const updatedElements = [...elements];
    updatedElements.splice(index, 1);
    // Нужно использовать dispatch, чтобы обновить состояние
    dispatch({ type: 'UPDATE_ELEMENTS', payload: updatedElements });
  };

  const selectedElement = elements[activeIndex];

  return (
    <div id="app" className="relative">
      <div
        data-v-5f8b795e=""
        data-v-f8a94688=""
        className="logo flex justify-center logo flex-grow-0"
        style={{ top: 36, width: 120 }}
      >
        <picture>
          <source
            srcSet="https://www.mysize-measure.com/my-size_logo.webp"
            type="image/webp"
          />{" "}
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
        className="p-4 page flex-grow flex flex-col justify-between items-center landscape:block"
      >
        <div className="draggable__bounds">
          {elements.map((element, index) => (
            <div
              key={element.id}
              className={`draggable ${index === Math.floor(cardScale) - 1 ? 'active' : ''}`}
              onTouchStart={handleTouchStart(index)}
              onTouchEnd={handleTouchEnd(index)}
            >
              <div
                className="penis"
                style={{
                  backgroundColor: element.backgroundColor,
                  width: element.width,
                  top: element.top,
                }}
              />
            </div>
          ))}
        </div>
        <Link to={`/item/${selectedElement.id}`} className="link-button">
          Ok
        </Link>
        <div className="indicator">
          <img
            alt="" src="data:image/svg+xml;base64,PHN2ZyBpZD0iZG93biIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNDIuODkiIGhlaWdodD0iNjUuMDYiIHZpZXdCb3g9IjAgMCA0Mi44OSA2NS4wNiI+CiAgPHBvbHlnb24gcG9pbnRzPSIzMi4zMSA0My42MiAzMi4zMSAwIDEwLjU4IDAgMTAuNTggNDMuNjIgMCA0My42MiAyMS40NSA2NS4wNiA0Mi44OSA0My42MiAzMi4zMSA0My42MiIgc3R5bGU9ImZpbGw6ICNGRkYiLz4KICB0ZXN0Cjwvc3ZnPg=="
          />
          <span data-v-484e4e21="" className="text-darkblue" />
        </div>
      </div>
    </div>
  )
}
