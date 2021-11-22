const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
  button {
    background: white;
    color: black;
    border: 0;
    padding-right: 15px;
    padding-top: 5px;
    margin-bottom: 15px;
  }
  
  .main-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    /* grid-gap: 5px; */
    height: 100vh;
  }

  .header-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  
  .logo {
    background:white url(../images/solvingzero-logo.jpeg);
    background-size: contain;
    background-repeat: no-repeat;
    padding: 10px;
    margin-left:19px;
    margin-top: 10px;
    max-width: 140px;
    min-height: 5vh;
    height: 3vmax;
    max-height: 6vh;
  }
  
  .nav.nav-bar {
    display: flex;
    flex-flow: flex-end;
  }
  
  .nav-bar ul {
    display: flex;
    justify-content: flex-end;
    flex-flow: center;
    padding-top: 4px;
    column-gap: 30px;
    list-style: none;
    padding-inline-start: 0px;
    margin-right: 20px;
    margin-bottom: 5px;
  }
  
  .nav-bar a {
    display: block;
    font-weight: 800;
    text-decoration: none;
    padding: 10px;
    max-width: 100px;
    text-align: center;
    color: black;
    text-transform: uppercase;
    font-size: 16px;
  }
  
  [aria-controls="nav-list"] {
    display: none;
    margin: 0;
  }

  
  @media (max-width: 700px) {
    .logo {
      margin-top: 15px;
    }
  
    .nav-bar {
      max-width: 180px;
      perspective: 800px;
      display: grid;
      justify-self: end;
    }
  
    [aria-controls="nav-list"] {
      display: block;
      margin-bottom: 0;
    }
  
    .nav-bar ul {
      max-height: 0;
      overflow: hidden;
      max-width: 140px;
      margin-top: 5px;
      margin-right: 10px;
      margin-bottom: 0;
    }
  
    .nav-bar li {
      overflow: hidden;
    }
  
    button {
      padding: 30px;
      padding-top: 15px;
      padding-bottom: 2px;
      padding-right: 30px;
      margin: 0;
      border: 0;
    }
  
    button > .open {
      margin: 0px;
      padding: 0px;
      font-size: 300%;
      max-width: 200px;
    }
  
    button > .close {
      margin: 0px;
      margin-right: 0px;
      padding: 0px;
      font-size: 200%;
      max-width: 180px;
    }
  
    .nav-bar button {
      display: flex;
      justify-self: flex-end;
      max-width: 200px;
      margin: 0px;
    }
  
    [aria-expanded="true"] ~ ul {
      display: grid;
      max-height: 150px;
      transform: rotateX(0);
    }
  
    [aria-expanded="false"] .close {
      display: none;
    }
  
    [aria-expanded="true"] .close {
      display: inline-block;
    }
  
    [aria-expanded="true"] .open {
      display: none;
    }
  
  }
  
  @media (max-width: 320px) {
    .logo {
      margin-top: 20px;
    }
  }
  </style>
  <script type="text/javascript" src="../script.js"></script>
  <div class="main-container">
    <header class = "header-container">
        <a href="../index.html" class ="logo"></a>  
        <nav class = "nav-bar">
        <button aria-expanded="false" aria-controls="nav-list">
            <a href="index.html" class="close">
            &#88;
            </a>
            <span class="open">
            &#9776;
            </span>
        </button>
        <ul id="nav-list">
            <li>
            <a href="blog/index.html">Blog</a>
            </li>
            <li>
            <a href="about/index.html">About</a>
            </li>
            <li>
            <a href="contact/index.html">Contact</a>
            </li>
        </ul>
        </nav>
    </header>
  </div>
    <script>

    </script>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);