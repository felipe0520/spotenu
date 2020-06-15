import React from "react";
import { FooterWrapper, ImgLogo, SocialnetworksDiv } from "./styled";
import Link from "@material-ui/core/Link";
import github from "../../imagens/github.png";
import instagram from "../../imagens/instagram.png";
import linkedin from "../../imagens/linkedin.png";
import { Typography } from "@material-ui/core";
const Footer = () => {
  return (
    <FooterWrapper color="primary">
      <Typography variant="body2" color="textSecondary">
        {"Copyright © "}
        {new Date().getFullYear()}{" "}
      </Typography>
      <Typography>Desenvolvido por Felipe Ferraz</Typography>
      <SocialnetworksDiv>
        <Link href="https://material-ui.com/">
          <ImgLogo src={github}></ImgLogo>
        </Link>
        <Link href="https://material-ui.com/">
          <ImgLogo src={instagram}></ImgLogo>
        </Link>
        <Link href="https://material-ui.com/">
          <ImgLogo src={linkedin}></ImgLogo>
        </Link>
      </SocialnetworksDiv>
    </FooterWrapper>
  );
};

export default Footer;
