import Carousel from "react-bootstrap/Carousel";

const CarouselHome = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/assets/images/imagenprincipal.png"
          alt="Main image"
        />
        <Carousel.Caption>
          <h5
            style={{
              textShadow: "0 0 2px orange",
              color: "orange",
              fontSize: 84,
            }}
          >
            Conocé los mejores juegos indie para Halloween
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/assets/images/hollowknight.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 style={{ textShadow: "0 0 2px orange", color: "white" }}>
            Hollow Knight
          </h5>
          <p style={{ textShadow: "0 0 2px orange", color: "white" }}>
            Un juego de aventuras y acción en plataformas desarrollado por Team
            Cherry. Ambientado en un oscuro y atmosférico mundo subterráneo, el
            juego sigue las peripecias de un caballero insecto en su búsqueda
            para descubrir misterios y desafiar a poderosos enemigos. Con un
            estilo de arte cautivador, jugabilidad desafiante y una narrativa
            sutil, "Hollow Knight" ha ganado elogios por su profundidad y
            atmósfera envolvente.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/assets/images/darkestdungeon.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 style={{ textShadow: "0 0 2px orange", color: "white" }}>
            Darkest Dungeon
          </h5>
          <p style={{ textShadow: "0 0 2px orange", color: "white" }}>
            Un juego de rol táctico desarrollado por Red Hook Studios. Situado
            en un sombrío y gótico mundo, los jugadores lideran un grupo de
            héroes en una lucha desesperada contra criaturas sobrenaturales y el
            estrés psicológico. Con mecánicas únicas de gestión del estrés y un
            estilo artístico oscuro y envolvente, "Darkest Dungeon" desafía a
            los jugadores a enfrentarse tanto a los horrores del inframundo como
            a las tensiones emocionales de sus propios personajes.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/src/assets/images/dontstarvetogether.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 style={{ textShadow: "0 0 2px orange", color: "white" }}>
            Don't Starve Together
          </h5>
          <p style={{ textShadow: "0 0 2px orange", color: "white" }}>
            Un juego de supervivencia cooperativo desarrollado por Klei
            Entertainment. Ambientado en un mundo surrealista y oscuro, los
            jugadores deben colaborar para explorar, recolectar recursos y
            enfrentarse a criaturas extrañas para sobrevivir. Con un estilo de
            arte único y desafiante, el juego presenta una experiencia de
            supervivencia única donde la cooperación es esencial para resistir
            amenazas crecientes, desde el hambre hasta las criaturas fantásticas
            que acechan en la oscuridad.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
