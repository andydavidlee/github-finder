import React, { Component } from 'react'
import {containerStyle, box1, box2, box3, headerBox} from './Styles'
import './layout.css'
import styled from 'styled-components'
import image from '../../min.png'

const Button = styled.button`
font-size: 1.3rem;
border: none;
border-radius: 5px;
background: ${props => props.primary ? 'red' : 'green'};
color: #fff;
&:hover{
  background: purple;
}
`

export class Layout extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <header style={{display: 'grid', gridTemplateColumns: '30% 60%'}}>
          <div className= 'grid-item'>
              <img src={image} alt="lady" style={{width: '60%'}} />
          </div>
          <div className= 'grid-item' style= {headerBox}>
            <h3>ABOUT US</h3>
              <h1 style={{color: 'orange'}}>BRANDING & DESIGN AGENCY</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis tempore voluptatem quasi ducimus. Deserunt.</p>
              <button style={{background: 'orange', border: 'none', padding: '5px', fontSize: '12px'}}>Read More</button>
          </div>
        </header>
        <section style={{display: 'grid', gridTemplateColumns: '30% 30% 30%'}}>
          <div style= {box1} className='grid-item'>
            <h2>Analysis</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus odit adipisci, veritatis voluptate maiores pariatur quos animi iste a nulla, rerum porro! Provident, sunt quos corrupti rerum voluptatem omnis?</p>
            <Button>MORE</Button>
          </div>
          <div style= {box2} className='grid-item'>
            <h2>Planning</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus odit adipisci, veritatis voluptate maiores pariatur quos animi iste a nulla, rerum porro! Provident, sunt quos corrupti rerum voluptatem omnis?</p>
            <Button>MORE</Button>
          </div>
          <div style= {box3} className='grid-item'>
            <h2>Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus odit adipisci, veritatis voluptate maiores pariatur quos animi iste a nulla, rerum porro! Provident, sunt quos corrupti rerum voluptatem omnis?</p>
            <Button>MORE</Button>
          </div>
        </section>
      </div>
      )
    }
}

export default Layout;