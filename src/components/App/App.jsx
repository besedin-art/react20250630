import { restaurants } from "../../constants/mock";
import { Layout } from "../Layout/Layout";
import { Restaurants } from "../Restaurants/Restaurants";

const App = () => {
  return (
    <Layout>
      <h1>Restaurants</h1>
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
}

export default App;