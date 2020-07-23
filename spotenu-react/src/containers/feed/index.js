import React, { useEffect } from "react";
import {
  FeedWrapper,
  WrapperPrincipalInfo,
  WrapperSecondaryInfo,
  WrapperMusic,
} from "./styled";
import Header from "../../components/header/";
import Footer from "../../components/footer";
import { useDispatch, useSelector } from "react-redux";
import PermanentDrawerLeft from "../../components/drawerLateral";
import { push } from "connected-react-router";
import { routes } from "../../router";

const Feed = () => {
  const dispatch = useDispatch();
  const allMusics = useSelector((state) => state.ReducerMusics.musics);
  //const AllGenres = useSelector((state) => state.ReducerGenres.genres);
  const token = localStorage.getItem("token");
  console.log(allMusics);
  useEffect(() => {
    if (!token) {
      dispatch(push(routes.login));
    } else {
    }
  }, [dispatch, token]);

  return (
    <div>
      <Header />
      <FeedWrapper>
        <PermanentDrawerLeft />
        <WrapperPrincipalInfo>
          {allMusics.map((el) => {
            return (
              <WrapperMusic key={el.id}>
                <p>Musica :{el.name}</p>
                <p>Album : {el.album_name}</p>
              </WrapperMusic>
            );
          })}
        </WrapperPrincipalInfo>
        <WrapperSecondaryInfo />
      </FeedWrapper>
      <Footer />
    </div>
  );
};

export default Feed;
