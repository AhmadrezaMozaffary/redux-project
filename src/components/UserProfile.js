import classes from './UserProfile.module.css';

const UserProfile = () => {
  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <h4>(some-email@xyz.com)</h4>
    </main>
  );
};

export default UserProfile;
