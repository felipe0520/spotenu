import styled from "styled-components";
import { Box } from "@material-ui/core";
import orange from "@material-ui/core/colors/orange";

export const FooterWrapper = styled(Box)`
  background-color: orange;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgLogo = styled.img`
  width: 3vw;
`;

export const SocialnetworksDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 15vw;
`;
