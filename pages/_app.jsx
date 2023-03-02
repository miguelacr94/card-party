import "../styles/globals.css";
import "aos/dist/aos.css";
import CardContext from "../core/providers/products/context";
import UserContext from "../core/providers/user/context";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <UserContext>
        <CardContext>
          <Component {...pageProps} />;
        </CardContext>
      </UserContext>


    </div>
  )
};

export default App;
