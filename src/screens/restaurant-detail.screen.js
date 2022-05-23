import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaContainer } from "../components/safe-area.component";
import { MenuListAccodion } from "../features/list-accordion-component";
import { RestaurantInfoCard } from "../features/restaurants/restaurant-info-card.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeAreaContainer>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <MenuListAccodion />
      </ScrollView>
    </SafeAreaContainer>
  );
};
