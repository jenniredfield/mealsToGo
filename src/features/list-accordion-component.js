import React from "react";
import { List } from "react-native-paper";

const MENU = [
  {
    title: "Breakfast",
    icon: "bread-slice",
    expanded: true,
    items: [
      {
        item: "coffee",
        price: 199,
      },
      {
        item: "eggs on toats",
        price: 199,
      },
      {
        item: "mushroom on toast",
        price: 199,
      },
    ],
  },
  {
    title: "Lunch",
    icon: "hamburger",
    expanded: false,
    items: [
      {
        item: "Rice and Beans",
        price: 199,
      },
      {
        item: "Curry",
        price: 199,
      },
      {
        item: "Spaghetti",
        price: 199,
      },
    ],
  },
  {
    title: "Dinner",
    icon: "bread-slice",
    expanded: false,
    items: [
      {
        item: "Rice and Beans",
        price: 199,
      },
      {
        item: "Curry",
        price: 199,
      },
      {
        item: "Spaghetti",
        price: 199,
      },
    ],
  },
];

const expandMenu = (prevMenuSection, sectionTitle) => {
  return prevMenuSection.map((menuSection) => {
    return menuSection.title === sectionTitle
      ? {
          ...menuSection,
          expanded: !menuSection.expanded,
        }
      : menuSection;
  });
};
// Should prob use repeated List.Accordion items here
// Should use FlatList?
export const MenuListAccodion = () => {
  const [menuState, setMenuState] = React.useState(MENU);

  const handleSectionExpansion = (sectionTitle) => {
    setMenuState((prevState) => expandMenu(prevState, sectionTitle));
  };

  return (
    <List.Section title="Accordions">
      {menuState.map((menuSection) => {
        return (
          <List.Accordion
            title={menuSection.title}
            left={(props) => <List.Icon {...props} icon={menuSection.icon} />}
            expanded={menuSection.expanded}
            onPress={() => handleSectionExpansion(menuSection.title)}
            key={menuSection.title}
          >
            {menuSection.items.map((menuSectionItem) => {
              return (
                <List.Item
                  title={menuSectionItem.item}
                  key={menuSectionItem.item}
                />
              );
            })}
          </List.Accordion>
        );
      })}
    </List.Section>
  );
};
