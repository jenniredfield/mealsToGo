import React, { useContext, useState } from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../features/restaurants/restaurant-info-card.component";
import styled from "styled-components";
import { SafeAreaContainer } from "../components/safe-area.componet";
import { RestaurantsContext } from "../services/restaurants/restaurants.context";
import { Spacer } from "../components/spacer/spacer.component";

const SearchBarStyled = styled(Searchbar)`
  border-radius: 0px;
  margin-bottom: 10px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const restaurantContext = useContext(RestaurantsContext);

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
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaContainer>
  );
};
