import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const FooterWrapper = styled.div`
  background-color: orange;
  display: flex;
  width: 100vw;
  height: 10vh;
`;

export const ImgLogo = styled.img`
  width: 3vw;
`;

export const TypographyFooter = styled(Typography)`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
`;

export const SocialnetworksDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 15vw;
`;
