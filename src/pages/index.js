import React from 'react';
import "./index.css"

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import Scroll from '../components/Scroll';


const sections = [
  { id: 'portfolio', name: 'Formación académica' },
  { id: 'about', name: 'Experiencia laboral' },
  { id: 'ao', name: 'Programación' },
  { id: 'al', name: 'Idiomas' },
  { id: 'smr', name: 'Ejemplos de páginas hechas' },
  { id: 'ro', name: 'Aptitudes' },
  

];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              CRISTINA BECERRA MORENO
              <br />
              
            </h2>
            
            <p>
               
              
            </p>
            
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Saber más
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>FORMACIÓN ACADÉMICA </h2>
          </header>
          
          <br></br>
          <p>
          Certificado de Profesionalidad de DESARROLLO DE APLICACIONES CON TECNOLOGÍA WEB (IFCD0210) (2023-2024)
            </p>
            
            <p>
            Bachillerato de ciencias 
            </p>
            

        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>EXPERIENCIA LABORAL</h2>
          </header>

          
           <p>
          <h3 style={{color:`#e2bb8f`}}>Desarrollo web para Patrimonio Nacional (1 año) desarrollando aplicaciones y páginas web </h3>            
            </p>
            <p>
            Aprovisionamiento y reposición en el departamento de logística de Ikea (4 meses)
            </p>
            <p>
            Dependienta en Primark de Gran Vía (3 meses). 
            </p>
            <p>
            Monitora de gimnasio y recepcionista en el Holiday Gym (6 meses).
            </p>
            <p>
            Croupier en El casino Gran Vía de Madrid (6 meses).
            </p>
            <p>
            Secretaria para la empresa de limpieza Marber (3 meses).
            </p>
            <p>
            Profesora particular de clases de matemáticas, física, química y dibujo técnico de nivel ESO y bachiller. 
            </p>
        </div>
      </section>

      

      <section id="ao" className="three">
        <div className="container">
          <header>
            <h2>PROGRAMACIÓN </h2>
          </header>

          
          <p>
          TECNOLOGÍAS Y LENGUAJES DE PROGRAMACIÓN: HTML, CSS, JS, PHP, MySQL, Json, Markdown, xml, graphql.
          </p>
            <p>
            HERRAMIENTAS DE DESARROLLO Y GESTIÓN DE PROYECTOS : VSCode, Git, Github, Figma, FileZilla, Netlify. 
            </p>
            <p>
            LIBRERÍAS Y FRAMEWORKS: Bootstrap, Gatsby, Wordpress, React. 
            </p>
            
        </div>
      </section>
      
      <section id="al" className="three">
        <div className="container">
          <header>
            <h2>IDIOMAS </h2>
          </header>

          
          <p>
          Inglés B1
          </p>
            
            
        </div>
      </section>
      
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
