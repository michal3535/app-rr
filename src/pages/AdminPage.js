import React from "react";
import { Route, Redirect } from "react-router-dom";

const permission = false;

const AdminPage = () => {
  return (
    <Route
      render={() =>
        permission ? (
          <h3>Witamy w panelu admina</h3>
        ) : (
          <Redirect to="/admin/login" />
        )
      }
    />
  );
};

export default AdminPage;
