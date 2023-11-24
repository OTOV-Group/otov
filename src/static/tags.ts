import { styled } from "@mui/material/styles";

export const HtmlHeader = styled("header")(() => ({
  width: "100%",
  height: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 2.5rem",
}));

export const Main = styled("main")(() => ({
  backgroundColor: "transparent", //#e0e0e0
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Section = styled("section")(() => ({}));

export const Image = styled("img")(() => ({}));

export const Form = styled("form")(() => ({
  width: " 550px",
  height: "auto",
}));

export const Container = styled("div")(() => ({
  maxWidth: "1300px",
  height: "100vh",
  margin: "0 auto",
  padding: " 0 16px",
}));

export const Space = styled("div")(() => ({
  width: "100%",
  height: "20px",
}));

export const RowBlock = styled("div")(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const Title = styled("h1")(() => ({
  fontSize: "1.4993rem",
  fontWeight: 600,
  letterSpacing: "0.18px",
}));

export const Description = styled("p")(() => ({
  fontWeight: 400,
  fontSize: "0.875rem",
  lineHeight: 1.429,
  letterSpacing: "0.15px",
}));