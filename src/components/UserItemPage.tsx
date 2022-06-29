import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();

  useEffect(() => {
    fetchUser();
    console.log(params);
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/users", { replace: true });
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>{user?.name}</div>
    </div>
  );
};

export default UserItemPage;
