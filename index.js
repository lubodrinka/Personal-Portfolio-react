import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import {
  Button,
  Nav,
  MenuItem,
  NavItem,
  Navbar,
  NavDropdown,
  Col,
  Row,
  Grid
} from "react-bootstrap";
import Parser from "html-react-parser";
const Component = React.Component;

const textSk =
  "Začal som programovať, pretože nám zamŕzal monitoring, ktorý by nikdy nemal prestať pracovať. Urobil som to v Autoite. " +
  " <br> V roku 2012 som chcel, aby dokumentácia údržby bola elektronická, žiadny program však nemal požadovaný ISO výstup na tlačiareň," +
  "takže cez vb.net som to naprogramoval a publikoval. Dva roky skúseností s vb.Net. Bola škoda, že séria Tomáša Hercoga sa neobjavila skôr. " +
  "<br> Objavili sa google.sites. Publikujem na download.com a registrujem program na appvisor. " +
  "Opravoval som jednu bakalárku a chýbalo v nej veľa čiarok, uvedomil som si ako sa to dá naprogramovať. " +
  "Je to veľmi rozsiahly projekt, obsahuje tri jazyky, dva syntetické: slovenský a český jazyk s veľkými slovníkmi a analytickým anglickým jazykom. Trvalo to 3 roky. " +
  "V týchto projektoch som získal skúsenosti so šifrovaním MS crypto a GS. " +
  "V projekte sqlDB som zistil, ako používať bluetooth ako port-com a keď scanujete kódy cez Android aplikáciu a nachádzate sa v dosahu v počítača, spáruje sa skenovaný kód so zariadením zo zoznamu a zobrazuje všetky údaje k danému zariadeniu. " +
  " <br> som navštívil codecon 2015, nachádzam leták MS azure. Mám svoju vlastnú webovú stránku Application-page v ASP.net, preklopiť desktopovú aplikáciu do online trvalo iba niekoľko hodín " +
  "Google nechápe, prečo inzerujem stránku bez obsahu napriek tomu, že vyzerá ako Google translator. Mám veľa práce v práci, končím. IT." +
  "V práci som po 12 rokoch povedal, že sa chystám skončiť. Hľadám prácu v oblasti IT." +
  " Ukončil som 6 zo 6 certifikátov freecodecamp" +
  "Expierencing VB.net od roku 2012 a intezívne JS od 02 / 2018";

const textEn =
  "I started programming because of the freezing monitoring that should never had to fail. I did it in the Autoit. " +
  "<br> In 2012 I wanted the paper maintenance to become electronic, none had the required ISO output" +
  " on the printer, so through vb.net I programmed one and publishing.Two years of Expierencing with .Net. " +
  "It was a pity that Tomáš Hercog's series did not appear  earlier. " +
  "<br> I discovered google.sites.I publishing to download.com and registering programs on appvisor. " +
  "I corrected one baccalaureate and there missing many commas, I realized how it should be " +
  "programmed. It is very large project, it is includes three languages, two syntetic: slovak and czech " +
  "languages with large dictionaries and analytic an english language. It takes 3 years. " +
  "It these project I Expierencing with ciphers adn MS and GS crypto. In project sqlDB I found how to use bluetooth as com port and connecting with android application for EAN Scanning. " +
  "I implemented that in ryder, so if you scan the codes by android app and you are in a range on the PC is pairing scanned code with device from list and it show all data. " +
  "<br> I visited codecon 2015, I find a azure leaflet about trial clouds.I have my own website App - page. " +
  "The Google have not understand why is advertising a page with no content even it's like Google !. I have a lot of work at work, I terminate IT. At work, after 12 years, I was said I was going to end. " +
  "I'm looking for a job in IT. I'am finished the 6 of 6 freecodecamp certifications.< br > Expierencing VB.net from 2012 and intesive JS from 02 / 2018";
let linksFrontend = [
  {
    href: "https://codepen.io/vanderdrilu/full/pVeXgw",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.pVeXgw.small.19b20b56-3393-45e4-b6c2-d63ea5901f4b.png",
    p: "IMDB Machine"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/yjbmyj",
    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.yjbmyj.small.3fb81b1e-6d6e-4aa3-9bd1-18b7661aa89b.png",
    p: "Weather APP"
  },

  {
    href: "https://codepen.io/vanderdrilu/full/VxMgVp",
    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.VxMgVp.small.778d1957-1455-4f4b-af59-6f7ef3db707d.png",
    p: "Wiki searching APP"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/xjXoop",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.xjXoop.small.4016d088-d457-4ea0-9d49-878b471fbc18.png",

    p: "Twitch APP"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/YLJZyM",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.YLJZyM.small.327f64fe-e6b7-4a31-a3b2-2a2c476a8526.png",

    p: "Calculator APP"
  },
  {
    href:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.YLJZyM.small.327f64fe-e6b7-4a31-a3b2-2a2c476a8526.png",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.ZoVpPa.small.7fb86e9d-d6e5-447c-aa31-16eb734dbf7c.png",

    p: "Pomodoro APP"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/NMJWaY",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.NMJWaY.small.e41aba25-0220-44f5-9daa-b9522becb984.png",

    p: "Tic-tac-toe APP"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/vjMdMw",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.vjMdMw.small.d90647d6-3da2-4252-a8a5-b1b21894c5e8.png",

    p: "Simon game"
  },

  {
    href: "https://codepen.io/vanderdrilu/full/wjLzPp",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.wjLzPp.small.46471a16-2b6e-46d7-b722-fd89e0d22c2e.png",

    p: "Leaderboard in Jquery"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/XYrOKQ",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.wjLzPp.small.46471a16-2b6e-46d7-b722-fd89e0d22c2e.png",

    p: "Leaderboard in REACT!"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/zjQawN",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.zjQawN.small.e9ff012b-0daf-4fd9-ad3f-7285fde1c28e.png",

    p: "Markdown previewer JQuery"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/RJbjry",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.RJbjry.small.34e27a3f-ecd8-43b7-b721-84addb63dca4.png",

    p: "Markdown previewer React"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/WYwvGZ",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.WYwvGZ.small.d771a0e1-6fef-488c-b572-fafde1502080.png",

    p: "Markdown previewer AngularJS"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/erqmRP",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.erqmRP.small.0e6d02c1-aaaa-4acc-93f7-7c80b276739b.png",

    p: "Recipe in Jquery"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/PerVyx",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.erqmRP.small.0e6d02c1-aaaa-4acc-93f7-7c80b276739b.png",

    p: "Recipe in ReactJS!"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/ZRYrzv",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.ZRYrzv.small.d97595c8-1a39-45d1-82bf-a271bf18dce2.png",

    p: "Game of life React!"
  },
  {
    href: "https://codesandbox.io/s/pj1xv59o10",

    src:
      "https://drive.google.com/uc?export=download&id=1FvhmPjz3grk19YgeaWLL_H20fvBXlvv2",

    p: "React Roguelike Dungeon Crawler"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/ZRXyWa",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.ZRXyWa.small.7bfa3e41-001c-4d4f-89b5-6a0f76198986.png",

    p: "Drum Machine"
  }
];

let linksAMP1 = [
  {
    href: "https://electric-preface.glitch.me/",
    p: "Timestamp Microservice"
  },
  {
    href: "https://sugar-hunter.glitch.me/",
    p: "Request Header Parser Microservice"
  },
  {
    href: "https://humorous-circle.glitch.me/",
    p: "URL Shortener Microservice"
  },
  {
    href: "https://mint-society.glitch.me",
    p: "Exercise Tracker"
  },
  {
    href: "https://amber-kite.glitch.me",
    p: "File Metadata Microservice"
  }
];

let linksAMP2 = [
  {
    href: "https://kaput-liquid.glitch.me",
    p: "Metric Imperial Converter"
  },
  {
    href: "https://kindly-friday.glitch.me/",
    p: "Issue Tracker"
  },
  {
    href: "https://candle-trowel.glitch.me/",
    p: "Personal Library"
  },
  {
    href: "https://caramel-textbook.glitch.me",
    p: "Stock Price Checker"
  },
  {
    href: "https://same-quit.glitch.me/",
    p: "Anonymous Message Board"
  }
];

let linkscomma = [
  {
    href: "https://sites.google.com/site/ryderhelp/comma",
    src:
      "https://drive.google.com/uc?export=download&id=1GB8olP-GYJbtuIzN7uJ3-wpPFkB2fXn_",

    p: "comma"
  },
  {
    href: "http://commacheck.azurewebsites.net/",
    src: "http://commacheck.azurewebsites.net/images/webcomma.JPG",
    p: "webcomma"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/rKyqxv",
    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.rKyqxv.small.7fb2519a-7867-4dbf-a363-99a8a64192bf.png",
    p: "Product Landing Page"
  }
];

let linkrest = [
  {
    href: "https://sites.google.com/site/ryderhelp/com-port-monitoring",

    src:
      "https://drive.google.com/uc?export=download&id=1x_o29Nag4EwVMMDAPv3lXz9uIv4Hc9uK",

    p: "com port monitoring"
  },
  {
    href: "https://sites.google.com/site/ryderhelp/home2",

    src:
      "https://drive.google.com/uc?export=download&id=1GqkyAxB53ylEC0tfOC56jgX4GPMR9Jjc",

    p: "ryder"
  },
  {
    href: "https://sites.google.com/site/ryderhelp/dbb",

    src:
      "https://drive.google.com/uc?export=download&id=1StLpsa5t-e3yVrTxuq36bmSKuzp_EFkO",

    p: "SQL DB"
  }
];

let linksd3 = [
  {
    href: "https://codepen.io/vanderdrilu/full/RJeLOO",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.RJeLOO.small.b5d4937c-29db-4121-aa67-1143fb89b151.png",
    p: "D3: Bar Chart USA Debt"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/aKPRPp",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.aKPRPp.small.aa5699b8-16c9-40ff-b6a0-0bb042869344.png",

    p: "D3: Scatter Plot"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/MXLYpQ",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.MXLYpQ.small.1bda6f5b-fa5c-4c03-90fc-2a831dca11ee.png",

    p: "D3: Heat map"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/NzmoeX",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.NzmoeX.small.16075f36-46c8-41b0-b709-82dde5029bf7.png",

    p: "D3: Choropleth Map"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/vroBwY",
    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.vroBwY.small.bdf02593-f99f-4fc2-a79f-3fa392d92a4a.png",

    p: "D3: Treemap Diagram"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/xaELja",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.xaELja.small.afe63ecb-0b86-4105-b0c1-68b9e8aa26b2.png",

    p: "D3: Force Directed Graph"
  },
  {
    href: "https://codepen.io/vanderdrilu/full/eLzwJm/",

    src:
      "https://s3-us-west-2.amazonaws.com/i.cdpn.io/1879200.eLzwJm.small.970a4576-8290-41c2-9517-54ba27842cbf.png",

    p: "D3: Bubble Map across globe"
  }
];

let linksLang = [
  {
    src:
      "https://drive.google.com/uc?export=download&id=1KKefr4gOOOS_SOWGEkPziRUmYjTnt9D2",
    alt: "HTML"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1THUAQIusSoi2Jk2-5cfYu4eJQaMeR7tR",
    alt: "CSS3"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1jgPoM2kVeg9wUYIVuVgTTu8NvuG0Wx9r",
    alt: "JS"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1FkJStt7f9EqyvY-GBnBtATYk-1X985yS",
    alt: "Jquery"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1wbD9F7JnleFQPnA_WmlJavmeQrpSUyIL",
    alt: "react"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1mwK6kWV5_3Teew7HWF0KQ9ubDhwkieH5",
    alt: "d3"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1tCT-scwj6xkGAoh1-C6jn60xtKZ_hCbS",
    alt: "MongoDB"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=12uRtVaiuaXJw5dRvn-cgf4LpLW8j_TgO",
    alt: "Mongoose"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1okmcxgjyTWAflIKUVRi6ZE_6Kx2IaCBq",
    alt: "NodeJS"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1byJkCwONtVt9OHhSSqPWSEmgC5lmgddX",
    alt: "AJAX"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1WRlTfYpfP3xJgYifDNcqvKy9_IPo_8cu",
    alt: ".NET"
  }
];

let linksleafs = [
  {
    src:
      "https://drive.google.com/uc?export=download&id=1zrIRHnNMWY-m1kdD54kIuFDKOv80H650"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1bq-sFnxIPCyJAgg__QHOqDCmqpEAXJGU"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1Ve3vS5ehm-NEQ97l2smqDMEzFUmEkF2m"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1KBCucpjvyed73fIS3Isz2XhwaY3d7CiD"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1UNaUXQx_uYp_GiaU09ShJxGuhHOMsqrH"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1wEHuyZTSL0f-xS-9Huph14leKWv4xuwr"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=1UMlBVex0Y-RiNiUzy6se4ggLPqXnzioG"
  },
  {
    src:
      "https://drive.google.com/uc?export=download&id=17AX5u8cIJb03jx7WYDIYaCUjdB5t1-tY"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: textEn };
    // This binding is necessary to make `this` work in the callback
    this.lang = this.lang.bind(this);
  }
  componentDidMount() {
    var language = window.navigator.userLanguage || window.navigator.language;
    console.log(language);
    language.includes("sk")
      ? this.setState({ text: textSk })
      : this.setState({ text: textEn });
  }

  lang = e => {
    switch (e.target.id) {
      case "flagSk":
        this.setState({ text: textSk });
        console.log("this is:", e.target.id);
        break;

      default:
        this.setState({ text: textEn });
        console.log("this is:", e.target.id);
        break;
    }
  };
  render() {
    return (
      <div className="App">
        <NavB />

        <Bgrid />

        <br />

        <footer>
          <div className=" center">
            <br />
            <div className="card shadowbox">
              <div className="  center">
                <img
                  id="imgMe"
                  className=" shadowbox card-img-top "
                  src="https://drive.google.com/uc?export=download&id=1LUDJSA2Pq45x96J83k3e0cjNZPBhjgJU"
                  alt="me"
                />
                <h2 id="about" className="gradienttext">
                  {" "}
                  -Autor-{" "}
                </h2>
                <b className="gradienttext card-title">Ľubomír Drinka</b>
                <div className="rounded w3-animate-left logos shadowbox  ">
                  {linksLang.map(element => (
                    <img
                      key={element.alt}
                      src={element.src}
                      className="logo"
                      alt={element.alt}
                    />
                  ))}
                  <a className="fa fa-bar-chart" href="#graph">
                    {" "}
                  </a>
                </div>{" "}
              </div>
              <blockquote>
                <p id="blockquote-text" className="card-text">
                  {Parser(this.state.text)}
                </p>

                <img
                  id="flagEn"
                  src="blank.gif"
                  className="flag flag-england"
                  alt="english"
                  onClick={e => this.lang(e)}
                />
                <img
                  src="blank.gif"
                  className="flag flag-sk"
                  alt="Slovak"
                  id="flagSk"
                  onClick={e => this.lang(e)}
                />
              </blockquote>
              <iframe
                title="Gform"
                src="https://docs.google.com/forms/d/e/1FAIpQLScdWEawVnUXNZLTjiXXFz7mQoba0d-HvCqv7EkazxBRfLQhEg/viewform"
                frameBorder="0"
              />
            </div>
            <span id="fall-container">
              {linksleafs.map((element, i) => (
                <img
                  id={"leaf" + (i + 1)}
                  key={"leaf" + (i + 1)}
                  src={element.src}
                  className="leaf"
                  alt={"leaf" + (i + 1)}
                />
              ))}
            </span>
          </div>
        </footer>
        <NavBottom />
      </div>
    );
  }
}

class Bgrid extends Component {
  render() {
    let left1 = linksFrontend.map((element, i) => (
      <Aelement key={element + i} name={element} />
    ));
    let left2 = linksAMP1.map((element, i) => (
      <Aelement key={element + i} name={element} />
    ));
    let left3 = linksAMP2.map((element, i) => (
      <Aelement key={element + i} name={element} />
    ));
    let rigth1 = linkscomma.map((element, i) => (
      <Aelement key={element + i} name={element} />
    ));
    let rigth2 = linkrest.map((element, i) => (
      <Aelement key={element + i} name={element} />
    ));
    let rigth3 = linksd3.map((element, i) => (
      <Aelement key={element + i} name={element} />
    ));

    return (
      <div>
        <Row className="show-grid">
          <Col xs={6} md={6}>
            <div id="left-well">
              <h4 className="shadowspecial1 text-center fontstyle2">
                Code pen project
              </h4>
              {left1}
            </div>
            <div id="AMP">
              <h4 className="shadowspecial1 fontstyle2 text-center">
                APIs and Microservices Projects
              </h4>
              {left2}
              <h4 className="shadowspecial1 fontstyle2 text-center">
                Information Security and Quality Assurance Projects
              </h4>
              {left3}
            </div>
          </Col>
          <Col xs={6} md={6}>
            <div id="right-well target">
              <div id="comma-well">
                <h4 className="shadowspecial1 fontstyle2 text-center">
                  comma group .NET
                </h4>
                {rigth1}
              </div>
              <h4 className="shadowspecial1 fontstyle2 text-center">
                <p>.NET rest</p>
              </h4>
              {rigth2}
              <h4 id="graph" className="shadowspecial1 fontstyle2 text-center">
                D3 chart
              </h4>
              {rigth3}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

function NavB() {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <div id="myProfile">
            My profile<i className="fa fa-free-code-camp" />
          </div>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav>
        <NavItem className="menuitems" href="#home1" eventKey={1}>
          Home
        </NavItem>
        <NavItem className="menuitems" eventKey={2} href="#about">
          about
        </NavItem>
        <NavItem className="menuitems" eventKey={3} href="#left-well">
          portfolio
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Link Right
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link Right
        </NavItem>
      </Nav>
    </Navbar>
  );
}
function NavBottom() {
  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <div id="myProfile">
            My profile<i className="fa fa-free-code-camp" />
          </div>
        </Navbar.Brand>
      </Navbar.Header>

      <Nav>
        <NavItem className="menuitems" href="#home1" eventKey={1}>
          Home
        </NavItem>
        <NavItem className="menuitems" eventKey={2} href="#about">
          about
        </NavItem>
        <NavItem className="menuitems" eventKey={3} href="#left-well">
          portfolio
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="https://www.facebook.com/lubomir.drinka">
          <button type="button" className="shadowbox fa fa-facebook-square">
            FACEBOOK
          </button>
        </NavItem>
        <NavItem eventKey={2} href="https://twitter.com/LubomirDrinka">
          <button type="button" className="shadowbox fa fa-twitter-square">
            TWITTER
          </button>
        </NavItem>
        <NavItem
          eventKey={3}
          href="https://www.linkedin.com/in/%C4%BEubom%C3%ADr-drinka-3a44417b/"
        >
          <button type="button" className="shadowbox fa fa-linkedin-square">
            Linkend-in
          </button>
        </NavItem>
        <NavItem
          eventKey={4}
          href="https://aboutme.google.com/u/0/?referer=gplus"
        >
          <button type="button" className="shadowbox  fa fa-google-plus-square">
            Gplus
          </button>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
class Aelement extends Component {
  render() {
    return (
      <a
        rel="noopener noreferrer"
        href={this.props.name.href}
        className="btn btn-default target fontstyle"
      >
        <img src={this.props.name.src} alt="" />

        <p>{this.props.name.p}</p>
      </a>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
