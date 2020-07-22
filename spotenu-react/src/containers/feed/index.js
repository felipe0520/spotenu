import React, { useEffect } from "react";
import { FeedWrapper, Test } from "./styled";
import Header from "../../components/header/";
import Footer from "../../components/footer";
import PermanentDrawerLeft from "../../components/drawerLateral";
const Feed = () => {
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
