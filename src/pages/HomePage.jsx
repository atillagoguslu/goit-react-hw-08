import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <h1>Welcome to Your Digital Address Book</h1>
      <p>
        Keep your connections close, your memories closer. Start organizing your
        contacts in a smarter way today.
      </p>
    </div>
  );
};

export default HomePage;
