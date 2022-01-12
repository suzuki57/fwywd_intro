import React from 'react'; 
import FooterIcon1 from './footer-icon1';
// import FooterIcon2 from './footer-icon2';
import Image from 'next/image';

class Footer extends React.Component{
  render(){
    const footericon1 = [
      {image:'/images/logo_white.png'},
    ];
    // const footericon2 = [
    //   {id:1,image:'/images/twitter.png'},
    //   {id:2,image:'/images/facebook.png'}
    // ];
    return(  
      <div>
        <footer className="text-white bg-[#262c3a] tracking-widest text-center text-xs h-full">
          <div className="font-bold flex py-12">
            <h2 className="flex-1 py-1 text-xs text-right">CREATE BY</h2>
            <p className="flex-1 text-left text-lg">&nbsp;名前&nbsp;太郎</p>
          </div>
            <div>
              {footericon1.map((icon) => {
                return(
                  <FooterIcon1 key = {icon.image} image = {icon.image}/>
                )
              })}
            </div>
            <div>
              <ul className="mt-12">
                <li className="inline-block mx-2">
                  <Image src='/images/twitter.png' alt='twitter' width={20} height={17}/>
                </li>
                <li className="inline-block mx-2">
                  <Image src='/images/facebook.png' alt='facebook' width={20} height={20}/>
                </li>
              </ul>
            </div>
          <p className="py-10">©︎&nbsp;2021&nbsp;KIKAGAKU</p>
        </footer>
      </div>
    );
  } 
}

export default Footer;


// propsで使うかも
{/* <div classNmae='f-icon2'>
  {footericon2.map((icon) => {
    return(
      <FooterIcon2
        key = {icon.id}
        image = {icon.image}
      />
    )
  }
  )
  }
</div> */}