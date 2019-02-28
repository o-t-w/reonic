import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import {
  IonApp,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent
} from "@ionic/react";
import React, { Component } from "react";

import Avatar from "./Avatar";
import Icons from "./Icons";
import ThemePicker from "./ThemePicker";

class App extends Component<{}, { brand: string }> {
  constructor(props: any) {
    super(props);
    this.state = { brand: "" };
  }

  componentDidMount() {
    let brand = window.localStorage.getItem("brand");
    if (brand !== null) {
      document.body.setAttribute("brand", brand);
      this.setState({
        brand: brand
      });
    }
  }

  handleBrandChange = (event: any) => {
    if (event.target instanceof HTMLElement) {
      const brand = event.target.value;
      document.body.setAttribute("brand", brand);
      window.localStorage.setItem("brand", brand);
      this.setState({
        brand: brand
      });
    }
  };

  render() {
    return (
      <IonApp>
        <IonContent>
          <div className="constrain-width-wide center">
            <ThemePicker
              brand={this.state.brand}
              handleBrandChange={this.handleBrandChange}
            />
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
                <IonCardTitle>Running on React</IonCardTitle>
              </IonCardHeader>
            </IonCard>

            <Avatar />

            <Icons />

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus quaerat itaque vel rem. Illo, cum. Eius nihil
              voluptatum exercitationem numquam voluptas explicabo architecto at
              ipsum sequi qui, fuga nam consequuntur quidem nisi esse rerum.
              Consequuntur at alias illum dolores error! Earum, repellat ea iure
              maxime eum praesentium itaque harum vero nisi nostrum alias
              doloribus, accusamus expedita sunt voluptas amet, natus ad
              molestiae aliquid quisquam hic numquam enim. Et delectus similique
              non harum voluptates, consectetur quaerat aspernatur repellat
              obcaecati possimus esse enim quidem aperiam vitae assumenda
              accusamus provident sint architecto. Veritatis autem eveniet,
              accusantium quia illum eos exercitationem iusto molestias, nobis
              soluta quod, hic at voluptas mollitia laboriosam commodi ea ab a
              praesentium dolorum optio beatae. Accusantium ea fugit autem sint
              minus sapiente distinctio ullam suscipit vitae quis? Tempore
              repudiandae dignissimos molestiae voluptates, recusandae,
              cupiditate perferendis voluptatum cumque fugiat voluptatibus
              explicabo minus sequi quis modi numquam. Pariatur, sapiente.
              Cupiditate exercitationem possimus at nobis nemo neque placeat
              ipsum debitis soluta, nihil, corrupti omnis iure, accusamus
              voluptate rerum consectetur accusantium! Exercitationem maiores
              voluptas nesciunt praesentium vel modi eaque autem cum, incidunt
              ab vero ipsa numquam accusantium ullam illo minima. Assumenda
              laudantium odit sapiente architecto aliquam, ipsam ullam magni
              similique molestias quo. Numquam, corporis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              error delectus! Perspiciatis qui amet dolorum laborum ut, dolores,
              aperiam obcaecati sit modi quis corporis asperiores eligendi atque
              voluptatibus officia repellendus illum vero ea doloribus
              perferendis, magnam beatae? Non laudantium, quisquam repudiandae
              cupiditate inventore facere accusamus dolore iste praesentium!
              Atque quam consectetur tenetur ea facere sit vel esse, odio non
              corrupti soluta adipisci asperiores rem eum. Totam nam,
              repudiandae soluta iste repellat ad culpa odio voluptatem ipsum?
              Alias unde corporis, ex necessitatibus sit vel? Tenetur ad culpa,
              ullam accusamus aliquam pariatur esse similique hic aliquid
              assumenda, ea maiores quos molestias possimus!
            </p>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium sunt unde id cumque similique, minus suscipit numquam
              quis dolorem sed ut itaque pariatur qui sapiente est reiciendis
              eaque praesentium deserunt.
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam sunt
              quia commodi perferendis voluptates nostrum debitis, odit tempora
              excepturi rem quasi exercitationem explicabo amet. Quasi
              consectetur vero fugiat explicabo quidem.
            </p>
          </div>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
