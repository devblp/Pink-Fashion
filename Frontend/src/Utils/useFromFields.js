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
  return [users, handelCheng];
};

export default userFromFields;
