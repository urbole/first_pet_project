import React from "react";
import { NavLink } from 'react-router-dom';
import '../App.scss';


export const Header = () => {
  return (
    <header className='App__header'>
      <NavLink exact to='/first_pet_project/'>
        <svg version={1.0} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1em" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
          <path d="M63.42,30.568c0,0-20.002-20.004-20.039-20.039l-9.955-9.955c-0.391-0.391-0.902-0.586-1.414-0.586	s-1.023,0.195-1.414,0.586l-8.602,9.436V6.011c0-1.105-0.895-2-2-2h-7.998c-1.105,0-2,0.895-2,2v15.997l-9.432,9.998 c-0.781,0.783-0.742,2.008,0.039,2.788c0.783,0.783,1.927,0.9,2.71,0.117l2.683-2.905v27.995c0,2.208,1.791,3.999,4,3.999H53.99	c2.209,0,3.999-1.791,3.999-3.999V30.793l2.635,2.635c0.781,0.781,1.974,0.711,2.757-0.07C64.162,32.576,64.203,31.35,63.42,30.568z	M17.997,8.01v5.999l-4,4V8.01H17.997z M35.993,60.001h-7.998V44.004h7.998V60.001z M53.99,58.001c0,1.105-0.895,2-2,2H39.993	V42.004c0-1.105-0.895-2-2-2H25.995c-1.104,0-1.999,0.895-1.999,2v17.997H11.998c-1.105,0-2-0.895-2-2V28.007L32.012,4.817	L53.99,26.794V58.001z" />
        </svg>
      </NavLink>
      <NavLink exact to='/first_pet_project/gallery'>
        <svg version={1.0} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1em" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
          <g>
            <path d="M20,12c-4.418,0-8,3.582-8,8s3.582,8,8,8s8-3.582,8-8S24.418,12,20,12z M20,24c-2.209,0-4-1.791-4-4		s1.791-4,4-4s4,1.791,4,4S22.209,24,20,24z" />            <path d="M60,0H4C1.789,0,0,1.789,0,4v56c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V4C64,1.789,62.211,0,60,0z		 M4,58c0,0.555,0.227,1.055,0.59,1.418C4.225,59.055,4,58.555,4,58z M60,58c0,1.105-0.895,2-2,2H6c-0.551,0-1.049-0.223-1.41-0.582		l14.002-14.002c0.781-0.781,2.047-0.781,2.828,0c0,0,1.662,1.662,3.758,3.76c2.096,2.094,3.529,2.125,5.656,0		c2.127-2.129,11.758-11.76,11.758-11.76c0.781-0.781,2.047-0.781,2.828,0L60,51.996V58z M60,46.34L46.834,33.176		c-1.562-1.566-4.094-1.566-5.656,0l-13.172,13.17l-5.172-5.17c-1.562-1.566-4.094-1.566-5.656,0L4,54.352V6c0-1.105,0.895-2,2-2h52		c1.105,0,2,0.895,2,2V46.34z" />
          </g>
        </svg>
      </NavLink>
      <NavLink exact to='/first_pet_project/location'>
        <svg version={1.0} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1em" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
          <g>
            <path d="M32,0C18.744,0,8,10.746,8,24c0,3.631,0.906,7.844,2.463,10.418c0.057,0.26,20.326,28.744,20.326,28.744		C31.164,63.688,31.77,64,32.416,64c0.006,0,0.014,0,0.02,0c0.652-0.006,1.262-0.332,1.631-0.869c0,0,19.24-28.162,19.279-28.242		C55.166,31.732,56,27.871,56,24C56,10.746,45.256,0,32,0z M49.943,32.869L32.381,58.512L14.043,32.838		C12.594,30.469,12,27.113,12,24c0-11.047,8.955-20,20-20s20,8.953,20,20C52,27.113,51.406,30.5,49.943,32.869z" />
            <path d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,32	c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z" />
          </g>
        </svg>
      </NavLink>
      <NavLink exact to='/first_pet_project/contacts'>
        <svg version={1.0} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1em" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
          <path d="M60,8H4c-2.211,0-4,1.789-4,4v40c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V12C64,9.789,62.211,8,60,8z	 M6,12h52c1.084,0,1.953,0.863,1.988,1.938L32,35.396L4.012,13.938C4.047,12.863,4.916,12,6,12z M58,52H6	c-0.949,0-1.707-0.674-1.912-1.561l15.193-10.902c0.848-0.707,0.963-1.969,0.256-2.818s-1.967-0.961-2.818-0.256L4,45.334V19.133	l26.719,20.404C31.09,39.846,31.545,40,32,40s0.91-0.154,1.281-0.463L60,19.133v25.912l-12.719-8.582	c-0.852-0.705-2.111-0.594-2.818,0.256s-0.592,2.111,0.256,2.818l15.244,10.646C59.867,51.197,59.041,52,58,52z" /> </svg>
      </NavLink>
    </header>
  )
}