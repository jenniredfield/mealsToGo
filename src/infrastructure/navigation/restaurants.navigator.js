import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
      />

      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
