import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NetflixLogo from "../../assets/images/NetflixLogo.png";
import "./header.css";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function NavSection() {
  return (
    <Navbar collapseOnSelect expand="sm" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand className="navLink" href="#home">
              <img src={NetflixLogo} alt="Netflix Logo" width="90" />
            </Navbar.Brand>
            {/* <div className=" center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">TVShows</Nav.Link>
              <Nav.Link href="#Movies">Movies</Nav.Link>
              <Nav.Link href="#New&Popular">New & Popular</Nav.Link>
              <Nav.Link href="#MyList">My List</Nav.Link>
              <Nav.Link href="#BrowsebyLanguages">Browse by Languages</Nav.Link>
            </div> */}
            {/* drop-down */}
            <div className=" DropDown ">
              <NavDropdown title="Browse" id="basic-nav-dropdown">
              {/* <NavDropdown
                // title={`Browse ${<ArrowDropDownIcon/>}`}

                id="basic-nav-dropdown"
              > */}
                <div className="DropDownContent">
                  <NavDropdown.Item href="/home">
                    <p>Home </p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/tvshow">
                    <p>TVShows</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/movies">
                    <p>Movies</p>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="/new&popular">
                    <p> New & Popular</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mylist">
                    <p>My List</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/browsebylanguages">
                    <p>Browse by Languages</p>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavSection;
