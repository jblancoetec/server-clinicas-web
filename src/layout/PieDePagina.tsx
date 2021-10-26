import React from "react";
import { Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import {
  faGlobe,
  faHospitalUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

interface Link {
  href: string;
  icono: IconDefinition;
  texto: string;
}

const links: Link[] = [
  {
    href: "http://www.hospitaldeclinicas.uba.ar/",
    icono: faGlobe,
    texto: "Página oficial del Hospital de Clinicas",
  },
  {
    href: "https://www.instagram.com/hospitaldeclinicasok/",
    icono: faInstagram,
    texto: "Instagram oficial del Hospital de Clinicas",
  },
  {
    href: "https://www.google.com/maps/place/Hospital+de+Cl%C3%ADnicas+Jos%C3%A9+de+San+Mart%C3%ADn/@-34.5989536,-58.4021109,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcca9474de07c3:0x6d168bee0e66f0b5!8m2!3d-34.5989536!4d-58.3999222",
    icono: faMap,
    texto: "Av. Córdoba 2351 (C1120AAR) CABA",
  },
  {
    href: "tel:5950-8000",
    icono: faPhone,
    texto: "5950-8000 las 24 horas",
  },
  {
    href: "/login",
    icono: faHospitalUser,
    texto: "Uso interno - Hospital de Clinicas.",
  },
];

const convertirLinkParaRenderizar = (
  { href, icono, texto }: Link,
  index: number
): JSX.Element => {
  return (
    <Nav.Item key={index}>
      <Nav.Link href={href} style={{ color: "white" }}>
        <FontAwesomeIcon
          style={{
            marginRight: "1rem",
          }}
          icon={icono}
        />
        {texto}
      </Nav.Link>
    </Nav.Item>
  );
};
const linksARenderizar: JSX.Element[] = links.map(convertirLinkParaRenderizar);

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: "var(--violeta)" }}>
      
      <Container>
        <Nav className="justify-content-center">{linksARenderizar}</Nav>
      </Container>
    </footer>
  );
};

export default Footer;