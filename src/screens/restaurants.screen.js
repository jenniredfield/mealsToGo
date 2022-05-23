import React, { useContext } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components";

import { RestaurantInfoCard } from "../features/restaurants/restaurant-info-card.component";
import { SafeAreaContainer } from "../components/safe-area.component";
import { RestaurantsContext } from "../services/restaurants/restaurants.context";
import { Spacer } from "../components/spacer/spacer.component";
import { ActivityIndicatorWrapper } from "../components/activity-indicator-wrapper.component";

import { Search } from "../features/restaurants/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, hasError } = useContext(RestaurantsContext);

  if (hasError) {
    return (
      <SafeAreaContainer>
        <Text>Sorry, could not retrive this location!</Text>
      </SafeAreaContainer>
    );
  }

  const handlePress = (restaurant) => {
    navigation.navigate("RestaurantDetails", {
      restaurant,
    });
  };

  return (
    <SafeAreaContainer>
      <View>
        <Search />
      </View>
      {isLoading ? (
        <SafeAreaContainer>
          <ActivityIndicatorWrapper>
            <ActivityIndicator color={Colors.lime800} />
          </ActivityIndicatorWrapper>
        </SafeAreaContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeAreaContainer>
  );
};
