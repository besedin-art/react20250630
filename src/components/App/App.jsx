import { restaurants } from "../../constants/mock";
import { Layout } from "../Layout/Layout";
import { Restaurants } from "../Restaurants/Restaurants";
import { ScrollProgressBar } from "../ScrollProgressBar/ScrollProgressBar";

const App = () => {
  return (
    <Layout>
      <ScrollProgressBar />
      <h1>Restaurants</h1>
      <Restaurants restaurants={restaurants} />
    </Layout>
  );
}

export default App;