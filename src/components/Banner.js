import React from "react";
import styled from "styled-components";
import banner from "../images/banner.webp";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
} from "@material-ui/core";

const Section = styled.section`
  width: 100%;
  height: auto;
  padding: 4rem 2rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Feature = styled.div`
  padding: 4rem 2rem;
  height: auto;
  width: 80%;
  margin: 0 auto;
  position: relative;
  top: -40px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 18px;
    font-weight: lighter;
    margin-top: 10px;
  }
  span {
    font-weight: 900;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    h1 {
      font-size: 25px;
    }
  }
`;
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const RightContent = styled.div``;

const api = axios.create({
  baseURL: "https://ecotopo.herokuapp.com/?search=",
});

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      clientInfo: [],
      error: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var search = this.state.value;
    try {
      if (search) {
        api.get("https://ecotopo.herokuapp.com/?search=" + search).then(res => {
          this.setState({
            clientInfo: res.data,
          });
        });
      }
    } catch (err) {
      console.log("api unavaible");
    }
  }
  render() {
    var clientInfo = this.state.clientInfo;

    return (
      <Section id='Banner'>
        <Container>
          <img src={banner} alt='Topographie' />
          <Feature>
            <LeftContent>
              <form onSubmit={this.handleSubmit}>
                <FormControl>
                  <InputLabel>Suivre votre projet</InputLabel>
                  <Input
                    onChange={this.handleChange}
                    type='text'
                    name='Cin'
                    placeholder='Entrez votre CIN'
                  />
                </FormControl>
                <br></br>
                <br></br>
                <Button type='submit' variant='contained' color='#0D435A'>
                  Valider
                </Button>
              </form>
            </LeftContent>
            {clientInfo.map(project => {
              return (
                <RightContent key='clientInfo'>
                  <h1 data-aos='fade-up' key='nom'>
                    Client :{" "}
                    <span>
                      {project.Nom} {project.Prenom}
                    </span>
                  </h1>

                  <h1 data-aos='fade-up' data-aos-delay='400' key='status'>
                    Status :<span> {project.status}</span>
                  </h1>
                </RightContent>
              );
            })}
          </Feature>
        </Container>
      </Section>
    );
  }
}

export default Banner;
