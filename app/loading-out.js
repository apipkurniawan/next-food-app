// not used, using suspense
import classes from "./loading.module.css";

export default function MealLoading() {
  return <p className={classes.loading}>Fetching meals...</p>;
}
