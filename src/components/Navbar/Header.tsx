import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    // Use the navigate function to navigate to the specified path
    navigate(path);
  };

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => handleNavigation("/")}>
            GAMES
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavigation("/home")}>
              Inicio
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigation("/componentes")}>
              Componentes
            </Nav.Link>
            <Nav.Link onClick={() => handleNavigation("/administracion")}>
              Administración
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
