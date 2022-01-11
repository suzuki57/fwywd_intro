import React from 'react';
import Image from 'next/image';

class FooterIcon1 extends React.Component {
  render() {
    return (
      <div>
        <Image src={this.props.image} alt="fwywd" width={85} height={100}/>
      </div>
    );
  }
}

export default FooterIcon1;