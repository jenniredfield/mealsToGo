import React, { useEffect, createContext, useState } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext("location");

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("san francisco");

  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return;
    }
    setIsLoading(true);
    locationRequest(keyword.toLocaleLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setHasError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        hasError,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
