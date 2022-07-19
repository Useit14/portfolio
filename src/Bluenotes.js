import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header.js';

import a from './Bluenotes/1.png';
import b from './Bluenotes/2.png';
import c from './Bluenotes/3.png';
import e from './Bluenotes/5.png';
import f from './Bluenotes/6.png';
import g from './Bluenotes/7.png';
import h from './Bluenotes/8.png';
import i from './Bluenotes/9.png';
import j from './Bluenotes/10.png';
import k from './Bluenotes/11.png';
import l from './Bluenotes/12.png';
import m from './Bluenotes/13.png';
import n from './Bluenotes/14.png';
import o from './Bluenotes/15.png';
import p from './Bluenotes/16.png';
import q from './Bluenotes/17.png';
import r from './Bluenotes/18.png';
import s from './Bluenotes/19.png';
import t from './Bluenotes/20.png';
import u from './Bluenotes/21.png';
import bluenotes from './Bluenotes/bluenotes.png';

function Bluenotes(props) {
  return (
        <div className="project-page">
        <div className="navigation black links">
          <NavLink basename={process.env.PUBLIC_URL} exact to="/" className="link" activeClassName="selected">PROJECTS</NavLink>
          <NavLink basename={process.env.PUBLIC_URL} exact to="/about" className="link" activeClassName="selected">ABOUT</NavLink>
        </div>

        <Header
        image={bluenotes}
        title='Bluenotes'
        tagline='Supporting new students at Brown as they adjust to campus life'
        role='Product designer'
        timeline='1 week (Design Challenge)'
        />

        <div className='img-container' id='bluenotes'>
        <img src={t} alt=''/>
        <img src={b} alt=''/>
        <img src={a} alt=''/>
        <img src={c} alt=''/>
        <img src={e} alt=''/>
        <img src={f} alt=''/>
        <img src={g} alt=''/>
        <img src={h} alt=''/>
        <img src={i} alt=''/>
        <img src={j} alt=''/>
        <img src={k} alt=''/>
        <img src={l} alt=''/>
        <img src={m} alt=''/>
        <img src={n} alt=''/>
        <img src={o} alt=''/>
        <img src={p} alt=''/>
        <img src={q} alt=''/>
        <img src={r} alt=''/>
        <img src={s} alt=''/>
        <img src={t} alt=''/>
        <img src={u} alt=''/>
        </div>

        </div>
  )
}

export default Bluenotes;
