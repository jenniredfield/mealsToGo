import React, { useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../features/restaurants/restaurant-info-card.component";
import styled from "styled-components";
import { SafeAreaContainer } from "../components/safe-area.componet";

const SearchBarStyled = styled(Searchbar)`
  border-radius: 0px;
  margin-bottom: 10px;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaContainer>
      <View>
        <SearchBarStyled
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          icon="magnify"
        />
      </View>
      <RestaurantInfoCard />
    </SafeAreaContainer>
  );
};
