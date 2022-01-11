import React from 'react'; 
import HeaderList from './header-list';
import Image from 'next/image';

class Header extends React.Component{
  render(){
    return(
      <div>
        <header className="flex h-24">
          <div className="flex-1">
            <Image src="/images/logo.png" alt="fwywd" width={200} height={100}/>
          </div>
          <div className="flex-1">
            <HeaderList />
          </div>   
        </header>
      </div>
    );
  }
}

export default Header;
