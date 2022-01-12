// header.jsxとfooter.jsxの読み込み
import React from 'react'; 
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

class Home extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Main />
        <Footer />
    </div>
    )
  }
};

export default Home;

