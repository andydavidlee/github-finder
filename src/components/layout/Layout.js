import React, { Component } from 'react'
import './layout.css'
import { containerStyle, box1, box2, box3 } from './styles'

export class Layout extends Component {
  render() {
    return (
      <div style= { containerStyle }>
        <header>
          <div>
              <img src="" alt="" />
          </div>
          <div>
            <h3>ABOUT US</h3>
              <h1>BRANDING & DESIGN AGENCY</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis tempore voluptatem quasi ducimus. Deserunt.</p>
              <button>MORE</button>
          </div>
        </header>
        <section>
          <div style= { box1 }>
            <h2>Analysis</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus odit adipisci, veritatis voluptate maiores pariatur quos animi iste a nulla, rerum porro! Provident, sunt quos corrupti rerum voluptatem omnis?</p>
            <button>MORE</button>
          </div>
          <div style= { box2 }>
            <h2>Planning</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus odit adipisci, veritatis voluptate maiores pariatur quos animi iste a nulla, rerum porro! Provident, sunt quos corrupti rerum voluptatem omnis?</p>
            <button>MORE</button>
          </div>
          <div style= { box3 }>
            <h2>Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus odit adipisci, veritatis voluptate maiores pariatur quos animi iste a nulla, rerum porro! Provident, sunt quos corrupti rerum voluptatem omnis?</p>
            <button>MORE</button>
          </div>
        </section>
      </div>
      )
    }
}

export default Layout;