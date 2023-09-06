import "./profile.css";
function Profile() {
  return (
    <div className="profile__container container">
      <div className="profile__left">
        <div className="profile__img__container">
          <img
            className="profile__img
          "
            src="https://media.licdn.com/dms/image/C5603AQFCcPfbKQeK0Q/profile-displayphoto-shrink_200_200/0/1653356700477?e=1699488000&v=beta&t=3u2UYletRKxkmhozBfE9lF34hVMhGY44coiHqpt66dY"
          />
        </div>
        <div className="profile__text__container">
          <h1>Manage Profile</h1>
          <p>
            Commodo ut eu est sit id ullamco ad aliquip.Ullamco ipsum ex duis
            magna velit.Ipsum laborum mollit deserunt in eiusmod do.
          </p>
        </div>
      </div>
      <div className="profile__right">right</div>
    </div>
  );
}

export default Profile;
