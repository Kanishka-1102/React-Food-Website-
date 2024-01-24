import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      {!process.env.REACT_APP_API ? (
        <p>Reload</p>
      ) : (
        <>
          <Search />
          <Category />
          <Pages />
        </>
      )}
    </div>
  );
};

export default App;
