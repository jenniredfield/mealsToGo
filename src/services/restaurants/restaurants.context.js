import React, { useEffect, createContext, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext("restaurants");

export const ContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider value={{ restaurants: [1, 2, 3, 4, 5] }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
