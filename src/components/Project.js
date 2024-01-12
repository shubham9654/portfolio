import { memo } from "react";
import react_admin_panel from "../assets/react_admin_panel.png";
import nextjs_store from "../assets/nextjs_store.png";
import nodejs_banner from "../assets/nodejs_banner.jpg";

const Project = memo(() => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p className="heading-text">You will find a little intro about me</p>
      <div className="grid">
        <div className="project">
          <div className="project-img">
            <img src={nextjs_store} alt="project-cover" />
          </div>
          <div className="project-details">
            <span className="project-feature-tag">Feature Project</span>
            <a
              className="project-title"
              target="_blank"
              rel="noreferrer"
              href="https://ecommerce-store-beryl-six.vercel.app/"
            >
              Nextjs Marvel Store
            </a>
            <div className="project-description">
              A fully functional e-commerce store has been developed using
              Next.js, with MySQL serving as the database and Stripe integrated
              for payment processing.
            </div>
            <div className="project-skills">
              <span>Nextjs</span>
              <span>Reactjs</span>
              <span>Mysql</span>
              <span>Stripe</span>
              <span>Typescript</span>
              <span>Tailwind</span>
            </div>
            <div className="project-head">
              <div className="icon-container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/shubhamsarkar2587/ecommerce-store"
                >
                  <svg
                    className="icon-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://ecommerce-store-beryl-six.vercel.app/"
                >
                  {" "}
                  <svg
                    className="icon-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="project-details project-details-left">
            <span className="project-feature-tag">Feature Project</span>
            <a
              className="project-title"
              target="_blank"
              rel="noreferrer"
              href="https://admin-panel2-terraform.vercel.app/"
            >
              React Admin Panel
            </a>
            <div className="project-description project-description-left">
              A feature-rich React dashboard that seamlessly integrates
              beautifully designed Tailwind CSS components such as tables,
              sidebars, popups, dialogs, and progress bars.
            </div>
            <div className="project-skills">
              <span>React JS</span>
              <span>Redux</span>
              <span>Redux Saga</span>
              <span>Tailwind</span>
            </div>
            <div className="project-head">
              <div className="icon-container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/shubhamsarkar2587/admin-panel2"
                >
                  <svg
                    className="icon-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://admin-panel2-terraform.vercel.app/"
                >
                  <svg
                    className="icon-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="project-img">
            <img src={react_admin_panel} alt="project cover4" />
          </div>
        </div>

        <div className="project">
          <div className="project-img">
            <img src={nodejs_banner} alt="project cover 3" />
          </div>
          <div className="project-details">
            <span className="project-feature-tag">Feature Project</span>
            <a
              className="project-title"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/shubhamsarkar2587/social-media-rest-api"
            >
              Nodejs Social Media REST API 
            </a>
            <div className="project-description">
              A backend REST API for a social media platform built using
              Node.js, Express, and MongoDB. It provides API endpoints to
              perform basic CRUD operations on user profiles and posts.
            </div>
            <div className="project-skills">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
            </div>
            <div className="project-head">
              <div className="icon-container">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/shubhamsarkar2587/social-media-rest-api"
                >
                  <svg
                    className="icon-secondary"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Project;
