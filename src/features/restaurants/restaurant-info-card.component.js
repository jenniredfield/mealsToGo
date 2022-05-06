import React from "react";

import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer } from "../../components/spacer/spacer.component";
import { Text } from "../../components/typography/text.component";
import {
  Address,
  ClosedText,
  Icon,
  Info,
  RestaurantCard,
  RestaurantCardCover,
  Row,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Row>
          <Section>
            {ratingArray.map((_, i) => (
              <SvgXml width="20" height="20" xml={star} key={`Star_${i}`} />
            ))}
          </Section>
          <SectionEnd>
            {isClosedTemporarily && <ClosedText>CLOSED TEMPORARILY</ClosedText>}
            <Spacer position="left" size="large" />
            {isOpenNow ? <SvgXml width="20" height="20" xml={open} /> : null}
            <Spacer position="left" size="large" />
            <Icon
              source={{
                uri: icon,
              }}
            />
          </SectionEnd>
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
