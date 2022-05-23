import React, { useEffect, createContext, useState, useContext } from "react";

import { LocationContext } from "../location/location.context";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext("restaurants");

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const { location } = useContext(LocationContext);

  const retriveRestaurants = (loc) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setHasError(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setHasError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retriveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, hasError, isLoading }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
