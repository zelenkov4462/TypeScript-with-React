import React, { FC, useEffect, useState } from "react";
import { ITodo, IUser } from "../types/types";
import axios from "axios";
import UserItem from "./UserItem";
import List from "./List";
import { useNavigate } from "react-router-dom";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  const navigate = useNavigate();
  const handlItem = (user: IUser) => {
    navigate("/users/" + user.id);
  };

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem onClick={handlItem} user={user} key={user.id} />
      )}
    />
  );
};

export default UserPage;
