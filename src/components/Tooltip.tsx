import React from "react";
import styled from "styled-components";

const Tooltip = () => {
  return (
    <StyledWrapper>
      <ul className="example-2">
        <li className="icon-content">
          <a href="https://linkedin.com/" aria-label="LinkedIn" data-social="linkedin">
            <div className="filled" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 
                1.146v13.708c0 .633-.526 1.146-1.175 
                1.146H1.175C.526 16 0 15.487 0 
                14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 
                0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 
                3.226 2.4 3.934c0 .694.521 1.248 
                1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 
                1.232-.878.869 0 1.216.662 1.216 
                1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 
                0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 
                0 7.225 0 7.225z" />
            </svg>
          </a>
          <div className="tooltip">LinkedIn</div>
        </li>

        <li className="icon-content">
          <a href="https://www.github.com/" aria-label="GitHub" data-social="github">
            <div className="filled" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 
                8c0 3.54 2.29 6.53 5.47 
                7.59.4.07.55-.17.55-.38 
                0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
                1.08.58 1.23.82.72 1.21 1.87.87 
                2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
                0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 
                0 0 .67-.21 2.2.82.64-.18 
                1.32-.27 2-.27s1.36.09 
                2 .27c1.53-1.04 2.2-.82 
                2.2-.82.44 1.1.16 1.92.08 
                2.12.51.56.82 1.27.82 
                2.15 0 3.07-1.87 3.75-3.65 
                3.95.29.25.54.73.54 
                1.48 0 1.07-.01 1.93-.01 
                2.2 0 .21.15.46.55.38A8.01 
                8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
          <div className="tooltip">GitHub</div>
        </li>

        <li className="icon-content">
          <a href="https://discord.com/" aria-label="Discord" data-social="discord">
            <div className="filled" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-discord"
              viewBox="0 0 16 16"
            >
              <path d="M13.545 2.907a13.227 
                13.227 0 0 0-3.257-1.011.05.05 
                0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 
                12.19 0 0 0-3.658 
                0 8.258 8.258 0 0 0-.412-.833.051.051 
                0 0 0-.052-.025c-1.125.194-2.22.534-3.257 
                1.011a.041.041 0 0 0-.021.018C.356 
                6.024-.213 9.047.066 12.032a.05.05 
                0 0 0 .019.033c1.373 1.005 2.708 
                1.608 4.028 2.013a.05.05 
                0 0 0 .053-.019c.309-.42.582-.863.818-1.329a.05.05 
                0 0 0-.027-.07 8.875 8.875 0 0 
                1-1.248-.595.05.05 0 0 1-.02-.066.051.051 
                0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 
                0 0 1 .051-.007c2.619 1.196 5.454 
                1.196 8.041 0a.052.052 0 0 1 .053.007c.081.066.164.132.248.195a.051.051 
                0 0 1-.004.085 8.254 8.254 
                0 0 1-1.249.594.05.05 
                0 0 0-.028.071c.24.465.514.908.817 
                1.329a.05.05 0 0 0 .054.019c1.32-.405 
                2.655-1.008 4.028-2.013a.05.05 
                0 0 0 .019-.033c.334-3.451-.559-6.449-2.366-9.107a.04.04 
                0 0 0-.02-.019ZM5.337 
                10.281c-.789 0-1.438-.724-1.438-1.615 
                0-.89.637-1.614 1.438-1.614.807 
                0 1.45.73 1.438 1.615 0 
                .89-.637 1.614-1.438 
                1.614Zm5.326 0c-.788 0-1.438-.724-1.438-1.615 
                0-.89.637-1.614 1.438-1.614.807 
                0 1.451.73 1.438 1.615 0 
                .89-.631 1.614-1.438 1.614Z" />
            </svg>
          </a>
          <div className="tooltip">Discord</div>
        </li>

        <li className="icon-content">
          <a href="https://x.com/" aria-label="X" data-social="x">
            <div className="filled" />
            <img src="/assets/logo-black.png" className="icon-img black" alt="X Black" />
            <img src="/assets/logo-white.png" className="icon-img white" alt="X White" />
          </a>
          <div className="tooltip">X</div>
        </li>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }

  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .example-2 .icon-content {
    margin: 0 10px;
    position: relative;
  }
  .example-2 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -50px;
  }
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
  }
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }

  /* X.com specific */
  .example-2 .icon-content a[data-social="x"] .icon-img {
    width: 22px;
    height: 22px;
    position: absolute;
    transition: opacity 0.3s ease-in-out;
  }
  .example-2 .icon-content a[data-social="x"] .white {
    opacity: 0;
  }
  .example-2 .icon-content a[data-social="x"]:hover .black {
    opacity: 0;
  }
  .example-2 .icon-content a[data-social="x"]:hover .white {
    opacity: 1;
  }

  /* LinkedIn */
  .example-2 .icon-content a[data-social="linkedin"] .filled,
  .example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
    background-color: #0274b3;
  }

  /* GitHub */
  .example-2 .icon-content a[data-social="github"] .filled,
  .example-2 .icon-content a[data-social="github"] ~ .tooltip {
    background-color: #24262a;
  }

  /* Discord */
  .example-2 .icon-content a[data-social="discord"] .filled,
  .example-2 .icon-content a[data-social="discord"] ~ .tooltip {
    background-color: #5865f2;
  }
`;

export default Tooltip;
