import React, { Component } from 'react';
import './layout.css';
// import { styles } from'./styles';
import styled from 'styled-components';
import { AiOutlineAntDesign } from 'react-icons/ai'
import { GrPlan } from 'react-icons/gr';
import { IoMdAnalytics } from 'react-icons/io';
import Image from '../img/min.png';

// const Button = styled.button`
//   font-size: 1.3rem;
//   border: none;
//   border-radius: 5px;
//   background: ${props => props.primary ? 'red' : 'green'};
//   color: #fff;
//   padding: 1rem;
//   &:hover{
//     background: purple;
//   }
// `
// const SmallButton = styled.button`
//   font-size: 0.7rem;
// `

const Container = styled.div`
  background: #f4f4f4;
  padding: 0 2rem;
  font-family: Arial, Helvetica, sans-serif;
`
const Left = styled.div`
  flex: 40%;
  margin-left: 4rem;
`

export class Layout extends Component {
  render() {
    return (
      <Container>
        <header className='header'>
          <Left>
              <img src={Image} alt="" />
          </Left>
          <div className='right'>
            <h3>ABOUT US</h3>
              <h1>BRANDING & DESIGN AGENCY</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis tempore voluptatem quasi ducimus. Deserunt.</p>
              <button>MORE</button>
          </div>
        </header>
        <section className='displayBoxes'>
          <div className='analysisBox'>
            < IoMdAnalytics />
            <h2>Analysis</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus odit adipisci, veritatis voluptate maiores pariatur quos animi iste a nulla, rerum porro! Provident, sunt quos corrupti rerum voluptatem omnis?</p>
            <button>MORE</button>
          </div>
          <div className='planningBox'>
            <GrPlan />
            <h2>Planning</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus odit adipisci, veritatis voluptate maiores pariatur quos animi iste a nulla, rerum porro! Provident, sunt quos corrupti rerum voluptatem omnis?</p>
            <button>MORE</button>
          </div>
          <div className='designBox'>
            <AiOutlineAntDesign />
            <h2>Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus odit adipisci, veritatis voluptate maiores pariatur quos animi iste a nulla, rerum porro! Provident, sunt quos corrupti rerum voluptatem omnis?</p>
            <button>MORE</button>
          </div>
        </section>
      </Container>
      )
    }
}

export default Layout;