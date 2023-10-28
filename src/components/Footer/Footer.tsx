import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <footer>
      <Card>
        <Card.Header>Footer</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              ¡Mantente conectado con nosotros para más productos y juegos!{" "}
            </p>
            <footer className="blockquote-footer">
              Comentá y mirá los nuevos desarrollos en nuestro{" "}
              <a
                href="https://github.com/expositoleo"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </footer>
  );
};

export default Footer;
