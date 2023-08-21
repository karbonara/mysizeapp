
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const MeasureSetPage = () => {
  const [elements, setElements] = useState([
    {
      id: 1,
      backgroundColor: "rgb(112, 174, 228)",
      width: "234.98px",
      top: "calc(35vh + -50px)",
      link: "https://example.com/item1"
    },
    {
      id: 2,
      backgroundColor: "rgb(113, 19, 136)",
      width: "220.881px",
      top: "calc(35vh + -47px)",
      link: "https://example.com/item2"
    },
    {
      id: 3,
      backgroundColor: "rgb(169, 15, 116)",
      width: "206.782px",
      top: "calc(35vh + -44px)",
      link: "https://example.com/item3"
    },
    {
      id: 4,
      backgroundColor: "rgb(195, 25, 37)",
      width: "192.683px",
      top: "calc(35vh + -41px)",
      link: "https://example.com/item4"
    },
    {
      id: 5,
      backgroundColor: "rgb(211, 127, 40)",
      width: "178.584px",
      top: "calc(35vh + -38px)"
    },
    {
      id: 6,
      backgroundColor: "rgb(232, 197, 37)",
      width: "169.185px",
      top: "calc(35vh + -36px)",
      link: "https://example.com/item6"
    },
    {
      id: 7,
      backgroundColor: "rgb(199, 216, 48)",
      width: "159.786px",
      top: "calc(35vh + -34px)",
      link: "https://example.com/item7"
    },
    {
      id: 8,
      backgroundColor: "rgb(116, 179, 67)",
      width: "150.387px",
      top: "calc(35vh + -32px)",
      link: "https://example.com/item8"
    },
    {
      id: 9,
      backgroundColor: "rgb(37, 160, 137)",
      width: "140.988px",
      top: "calc(35vh + -30px)",
      touchAction: "pan-x",
      link: "https://example.com/item9"
    }
  ]);

  const [deletedElements, setDeletedElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const handleSwipe = (id) => {
    const deletedElement = elements.find((element) => element.id === id);
    const updatedElements = elements.filter((element) => element.id !== id);

    setDeletedElements([...deletedElements, deletedElement]);
    setElements(updatedElements);
    setSelectedElement(null);
  };

  const handleTouchStart = (index) => {
    return (event) => {
      const touchStartX = event.touches[0].clientX;
      const touchStartY = event.touches[0].clientY;

      const handleTouchMove = (event) => {
        const touchCurrentX = event.touches[0].clientX;
        const touchCurrentY = event.touches[0].clientY;
        const touchDiffY = touchCurrentY - touchStartY;

        if (touchDiffY > 0) {
          const updatedElements = [...elements];
          updatedElements[index].top = `calc(35vh + ${touchDiffY - 50}px)`;
          setElements(updatedElements);
        }
      };

      const handleTouchEnd = () => {
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };

      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    };
  };
  const handleTouchEnd = (index) => {
    return () => {
      const updatedElements = [...elements];
      updatedElements.splice(index, 1);
      setElements(updatedElements);
      setSelectedElement(updatedElements[0]); // Устанавливаем выбранный элемент после удаления
    };
  };

  const handleUndo = () => {
    if (deletedElements.length > 0) {
      const lastDeletedElement = deletedElements[deletedElements.length - 1];
      const updatedDeletedElements = deletedElements.slice(0, -1);
      setDeletedElements(updatedDeletedElements);
      setElements([...elements, lastDeletedElement]);
      setSelectedElement(lastDeletedElement); // Устанавливаем выбранный элемент после отмены удаления
    }
  };

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
              className="draggable"
              onTouchStart={handleTouchStart(index)}
              onTouchEnd={handleTouchEnd(index)}
            >
              <div
                className="penis"
                style={{
                  backgroundColor: element.backgroundColor,
                  width: element.width,
                  top: element.top
                }}
              />
              {/* {element.id && (
                <Link to={`/item/${element.id}`} className="link-button">
                  Ok
                </Link>
              )} */}
            </div>
          ))}
        </div>
        <Link to={`/item/1`} className="link-button">
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
