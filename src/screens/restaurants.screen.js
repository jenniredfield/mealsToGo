import React, { useState } from "react";
import { View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";

const RestaurantScreenContainer = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[2]};
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0}px;
`;

const SearchBarStyled = styled(Searchbar)`
  border-radius: 0px;
  margin-bottom: 10px;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <RestaurantScreenContainer>
      <View>
        <SearchBarStyled
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          icon="magnify"
        />
      </View>
      <RestaurantInfoCard />
    </RestaurantScreenContainer>
  );
};
