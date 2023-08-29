import { configureStore } from '@reduxjs/toolkit';

// Начальное состояние
const initialState = {
  elements: [
    {
      id: 1,
      backgroundColor: "rgb(112, 174, 228)",
      width: "234.98px",
      top: "calc(35vh + -50px)",
      link: "https://example.com/item1",
      cardScale: 1,
    },
    {
      id: 2,
      backgroundColor: "rgb(113, 19, 136)",
      width: "220.881px",
      top: "calc(35vh + -47px)",
      link: "https://example.com/item2",
      cardScale: 1.05,
    },
    {
      id: 3,
      backgroundColor: "rgb(169, 15, 116)",
      width: "206.782px",
      top: "calc(35vh + -44px)",
      link: "https://example.com/item3",
      cardScale: 1.1,
    },
    {
      id: 4,
      backgroundColor: "rgb(195, 25, 37)",
      width: "192.683px",
      top: "calc(35vh + -41px)",
      link: "https://example.com/item4",
      cardScale: 1.1500000000000001,
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
  ],
  selectedElement: null,
  cardScale: 1,
  maxCardScales: 1.2500000000000002,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARD_SCALE':
      return {
        ...state,
        cardScale: action.payload,
      };
    case 'INCREMENT_CARD_SCALE':
      return {
        ...state,
        cardScale: Math.min(state.cardScale + 0.05, state.maxCardScales),
      };
    case 'DECREMENT_CARD_SCALE':
      return {
        ...state,
        cardScale: Math.max(state.cardScale - 0.05, 1),
      };
    case 'SET_ELEMENT_CARD_SCALE':
      const updatedElements = state.elements.map((element) => {
        if (element.id === action.payload.elementId) {
          return {
            ...element,
            cardScale: action.payload.cardScale,
          };
        }
        return element;
      });
      return {
        ...state,
        elements: updatedElements,
      };
    default:
      return state;
  }
};


// Создание Redux store с помощью configureStore
const store = configureStore({
  reducer: reducer,
});

export default store;
