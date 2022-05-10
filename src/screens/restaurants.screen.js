import React, { useContext, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../features/restaurants/restaurant-info-card.component";
import styled from "styled-components";
import { SafeAreaContainer } from "../components/safe-area.component";
import { RestaurantsContext } from "../services/restaurants/restaurants.context";
import { Spacer } from "../components/spacer/spacer.component";
import { ActivityIndicator, Colors } from "react-native-paper";
import { ActivityIndicatorWrapper } from "../components/activity-indicator-wrapper.component";

const SearchBarStyled = styled(Searchbar)`
  border-radius: 0px;
  margin-bottom: 10px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
})``;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const { restaurants, isLoading, hasError } = useContext(RestaurantsContext);

  if (isLoading) {
    return (
      <SafeAreaContainer>
        <ActivityIndicatorWrapper>
          <ActivityIndicator color={Colors.lime800} />
        </ActivityIndicatorWrapper>
      </SafeAreaContainer>
    );
  }

  if (hasError) {
    return (
      <SafeAreaContainer>
        <Text>Sorry, could not retrive this location!</Text>
      </SafeAreaContainer>
    );
  }

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
        data={restaurants}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaContainer>
  );
};
