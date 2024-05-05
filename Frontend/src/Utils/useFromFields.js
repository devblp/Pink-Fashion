import { useState } from "react";

const userFromFields = () => {
  const [users, setUsers] = useState({});
  const handelCheng = (e) => {
    let { target } = e;
    setUsers({
      ...users,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(users);
  };
  return [users, handelCheng, handleSubmit];
};

export default userFromFields;
