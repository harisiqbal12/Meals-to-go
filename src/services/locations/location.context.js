import React, { useState, createContext } from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [keyword, setKeyword] = useState('San Francisco');

  const onSearch = async (searchkeyWord) => {
    setKeyword(searchkeyWord);
    setIsLoading(true);
    if (!searchkeyWord.length) {
      // Don't do anything
      return;
    }
    try {
      const res = locationTransform(
        await locationRequest(searchkeyWord.toLowerCase())
      );
      setLocation(res);
      console.log(res);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
