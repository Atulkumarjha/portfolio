import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';
import { GiMoneyStack } from 'react-icons/gi';

const FavouriteTools = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div
          data-text="Github"
          style={{ '--r': '-15' } as React.CSSProperties}
          className="glass"
        >
          <FaGithub size={50} />
        </div>
        <div
          data-text="Code"
          style={{ '--r': '5' } as React.CSSProperties}
          className="glass"
        >
          <SiCodewars size={50} />
        </div>
        <div
          data-text="Earn"
          style={{ '--r': '25' } as React.CSSProperties}
          className="glass"
        >
          <GiMoneyStack size={50} />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .glass {
    position: relative;
    width: 180px;
    height: 200px;
    background: linear-gradient(#fff2, transparent);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    border-radius: 10px;
    margin: 0 -45px;
    backdrop-filter: blur(10px);
    transform: rotate(calc(var(--r) * 1deg));
  }

  .container:hover .glass {
    transform: rotate(0deg);
    margin: 0 10px;
  }

  .container .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .container .glass svg {
    color: #fff;
  }
`;

export default FavouriteTools;
