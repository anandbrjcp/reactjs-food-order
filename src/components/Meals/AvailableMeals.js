import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Indian',
    description: 'Rice and Curry',
    price: 20,
  },
  {
    id: 'm2',
    name: 'South Indian',
    description: 'Idli and Vada',
    price: 10,
  },
  {
    id: 'm3',
    name: 'German',
    description: 'Beer',
    price: 0.99,
  },
  {
    id: 'm4',
    name: 'North Indian',
    description: 'Nothing',
    price: 0.00,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
