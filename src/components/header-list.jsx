import React from 'react';
import 'tailwindcss/tailwind.css'

class HeaderList extends React.Component {
  render() {
    return (
      <div>
        <ul className="text-text-green font-semibold tracking-widest float-right my-10 text-lg">
          <li className="inline-block mr-10">ABOUT</li>
          <li className="inline-block mr-10">SKILLS</li>
          <li className="inline-block mr-10">VALUES</li>
          <li className="inline-block mr-5">FUTURE</li>
        </ul>
      </div>
    );
  }
}

export default HeaderList;