import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import { log } from "util";
import UserList from "./components/UserList";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import Layout from "./components/Layout";
import UserItemPage from "./components/UserItemPage";

const App = () => {
  // const users: IUser[] = [
  //   {
  //     id: 1,
  //     name: "Nik",
  //     email: "zelenkov",
  //     address: { city: "Tayshet", street: "Lenina", zipcode: "123" },
  //   },
  //   {
  //     id: 2,
  //     name: "Anton",
  //     email: "tosha",
  //     address: { city: "Moscow", street: "Gagarina", zipcode: "658" },
  //   },
  // ];
  return (
    // <div>
    //   <EventsExample />
    //   <Card width="200px" height="200px" variant={CardVariant.outlined}>
    //     <button>Нажать</button>
    //   </Card>
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/users" element={<UserPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
