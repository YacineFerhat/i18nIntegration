import React, { Component, Suspense } from "react";
import "./App.scss";
import "./i18n";
import LanguageSelector from "./LanguageSelector";
import Container from "components/container";
import Header from "components/header";
import GridContainer from "components/gridContainer";
import Input from "components/input";
import Picture from "components/picture";
import Slider from "components/slider";
import { Icons } from "utils/icons";
import { Camera, Micro, Audio } from "utils/selectData";
import Button from "components/button";

const App = () => {

  return (
    <Suspense fallback="...loading">
      <div className="App">
        <div className="container">
          <Container>
            <LanguageSelector />
            <Header />
            <GridContainer>
              <Input
                title="camera"
                icon={Icons[2]}
                data={Camera}
                description="cameraLabel"
                placeholder="FaceTime HD Camera"
              />
              <Picture />
            </GridContainer>
            <div className="hLine" />
            <GridContainer>
              <Input
                title="camera"
                icon={Icons[3]}
                data={Micro}
                description="cameraLabel"
                placeholder="Micro intégré(Microphone iterne)"
              />
              <Slider title="niveauSon" subTitlte="volumeSon" />
            </GridContainer>
            <GridContainer>
              <Input
                title="volume"
                icon={Icons[4]}
                data={Audio}
                description="volumeLabel"
                placeholder="Enceinte intégré (microphone interne)"
              />
              <Slider title="niveauSortieSon" subTitlte="volumeSon" />
            </GridContainer>
            <Button label="labelButton" />
          </Container>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
