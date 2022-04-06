import React, { useState } from "react";
import { Card } from "react-native-paper";
import { Text } from "react-native";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import open from "../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.space[1]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.space[1]};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.text.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Row = styled.View`
  flex-direction: row;
  padding: ${(props) => props.theme.space[3]} 0;
`;

const Section = styled.View`
  flex-direction: row;
`;

const SectionEnd = styled(Section)`
  justify-content: flex-end;
  flex: 1;
`;

const Open = styled(SvgXml)`
  margin-left: 20px;
`;

const ClosedText = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
  align-items: center;
  justify-content: center;
`;

const IconImage = styled.Image`
  margin-left: 20px;
`;

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
        <Title>{name}</Title>
        <Row>
          <Section>
            {ratingArray.map((_, i) => (
              <SvgXml width="20" height="20" xml={star} key={`Star_${i}`} />
            ))}
          </Section>
          <SectionEnd>
            {isClosedTemporarily && <ClosedText>CLOSED TEMPORARILY</ClosedText>}
            {isOpenNow ? <Open width="20" height="20" xml={open} /> : null}
            <IconImage
              source={{
                uri: icon,
                width: 20,
                height: 20,
              }}
            />
          </SectionEnd>
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
