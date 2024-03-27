function Profile() {
    return (
      <div>
        <div>
          <p>
            Name: <strong>John</strong>
          </p>
          <p>
            Surename: <strong>Doe</strong>
          </p>
        </div>
        <p>
          Email: <strong>John.Doe@Gmail.com</strong>
        </p>
        <form action="">
          <input
            type="password"
            name="current"
            placeholder="Password"
            id=""
          />
          <input
            type="password"
            name="new"
            placeholder="Confirm Password"
            id=""
          />
          <button
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
   
  export default Profile;