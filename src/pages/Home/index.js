import React from "react";

import Page from "~/components/Page";
import Search from "~/components/UI/Input/Search";

import "./styles.scss";

function Home() {
  return (
    <Page title="Escolha uma área">
      <Search />
    </Page>
  );
}

export default Home;
