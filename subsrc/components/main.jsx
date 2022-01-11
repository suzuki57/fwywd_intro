import React from 'react'; 
import Image from 'next/image';
import ABOUT from './main-about';
import SKILLS from './main-skills';
import VALUE  from './main-value';
import image from 'next/image';
import FUTURE from './main-future';


class Main extends React.Component{
  render(){
    return(  
      <div>
        <main>
          <div className="bg-bg-green flex tracking-[0.2em] h-[600px]">
            <div className="text-white font-semibold pt-60 pl-40 flex-1">
              <h1 className="text-5xl">メインタイトル</h1>
              <p className="text-3xl mt-5 opacity-70">サブタイトル</p>
            </div>
            <div className="flex-1 m-10 text-center">
              <Image src='/images/hero.png' alt="hero" width={600} height={500} />
            </div>
          </div>
          <div className="relative">
            <ABOUT />
          </div>
          <div>
            <div className="bg-about bg-cover h-[800px] w-full -mt-1"></div>
              <div className="relative">
                <SKILLS />
              </div>
            <div className="bg-skills bg-cover h-[800px] w-full -mt-32"></div>
              <div className="relative">
                <VALUE />
              </div>
            <div className="bg-future bg-cover h-[750px] w-full mt-64"></div>
              <div className="relative">
                <FUTURE />
              </div>
          </div>
        </main>
      </div>
    );
  } 
}

export default Main;