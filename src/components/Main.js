import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GhostContentAPI from "@tryghost/content-api";

import ProductHero from "./ProductHero";
import ProductGrid from "./ProductGrid";

function Main(props) {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            {props.data[0] ? (
              <main className="c-main-grid">
                <ProductHero
                  content={props.data}
                  title={props.data[0].title}
                  excerpt={props.data[0].excerpt}
                  feature_image={props.data[0].feature_image}
                />
                <ProductGrid
                  content={props.data}
                  title={props.data[0].title}
                  excerpt={props.data[0].excerpt}
                  feature_image={props.data[0].feature_image}
                  html={props.data[0].html}
                  icons={props.data[0].tags}
                />
              </main>
            ) : (
              <main>Loading</main>
            )}
          </Route>

          <Route path={"/" + props.data[1].slug}>
            <main className="c-main-grid">
              <ProductHero
                content={props.data}
                title={props.data[1].title}
                excerpt={props.data[1].excerpt}
                feature_image={props.data[1].feature_image}
              />
              <ProductGrid
                content={props.data}
                title={props.data[1].title}
                excerpt={props.data[1].excerpt}
                feature_image={props.data[1].feature_image}
                html={props.data[1].html}
                icons={props.data[1].tags}
              />
            </main>
          </Route>
          <Route path={"/" + props.data[2].slug}>
            <main className="c-main-grid">
              <ProductHero
                content={props.data}
                title={props.data[2].title}
                excerpt={props.data[2].excerpt}
                feature_image={props.data[2].feature_image}
              />
              <ProductGrid
                content={props.data}
                title={props.data[2].title}
                excerpt={props.data[2].excerpt}
                feature_image={props.data[2].feature_image}
                html={props.data[2].html}
                icons={props.data[2].tags}
              />
            </main>
          </Route>
          <Route path={"/" + props.data[3].slug}>
            <main className="c-main-grid">
              <ProductHero
                content={props.data}
                title={props.data[3].title}
                excerpt={props.data[3].excerpt}
                feature_image={props.data[3].feature_image}
              />
              <ProductGrid
                content={props.data}
                title={props.data[3].title}
                excerpt={props.data[3].excerpt}
                feature_image={props.data[3].feature_image}
                icons={props.data[3].tags}
                html={props.data[3].tags}
              />
            </main>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default Main;
