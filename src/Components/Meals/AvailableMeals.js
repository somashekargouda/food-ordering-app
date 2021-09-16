import React from "react";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealItem from "./Meal Item/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pulav",
    description: "Finest Pulav available",
    price: 50,
  },
  {
    id: "m2",
    name: "Bisi bele bath",
    description: "A Karnataka's specialty!",
    price: 70.5,
  },
  {
    id: "m3",
    name: "Paneer Butter Masala",
    description: "Kitchen's best seller",
    price: 150,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 100,
  },
];

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
