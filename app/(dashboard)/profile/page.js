
'use client';

import { useState } from "react";

function Profile() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChange1 = (e) => {
    setPassword(e.target.value);
  };

  const handleChange2 = (e) => {
    setNewPassword(e.target.value);
  };


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
          value={password}
          onChange={handleChange1}
        />
        <input
          type="password"
          name="new"
          placeholder="Confirm Password"
          value={newPassword}
          onChange={handleChange2}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Profile;
