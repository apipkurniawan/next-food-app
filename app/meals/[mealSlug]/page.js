export default function MealDetailsPage({ params }) {
  return (
    <main>
      <h1>Meal Item</h1>
      <p>{params.mealSlug}</p>
    </main>
  );
}
