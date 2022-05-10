import React, { useEffect, createContext, useMemo, useState } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext("restaurants");

export const ContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const retriveRestaurants = () => {
    setTimeout(() => {
      setIsLoading(true);
      restaurantsRequest()
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setHasError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retriveRestaurants();
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, hasError, isLoading }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
