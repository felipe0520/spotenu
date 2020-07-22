import React, { useEffect } from "react";
import { FeedWrapper, Test } from "./styled";
import Header from "../../components/header/";
import Footer from "../../components/footer";
import { useDispatch } from "react-redux";
import PermanentDrawerLeft from "../../components/drawerLateral";
import { push } from "connected-react-router";
import { routes } from "../../router";

const Feed = () => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      dispatch(push(routes.login));
    }
  }, []);

  return (
    <div>
      <Header />
      <FeedWrapper>
        <PermanentDrawerLeft />
        <Test />
        <Test />
      </FeedWrapper>
      <Footer />
    </div>
  );
};

export default Feed;
