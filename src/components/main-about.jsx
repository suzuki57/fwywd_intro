import React from 'react'; 
import Image from 'next/image';

class ABOUT extends React.Component {
  render() {
    return (
      <div>
        <div className="text-text-black tracking-widest w-9/12 text-center absolute top-20 left-52">
        <div className="font-semibold flex ml-24">
          <h2 className="flex-1 mb-14 text-right text-3xl tracking-[0.2em]">私について</h2>
          <p className=" text-text-green flex-1 pl-1 pt-1 text-left text-lg">&nbsp;ABOUT</p>
        </div>
        <div className="flex">
          <div className="flex-1">
            <Image src="/images/about-1.png" alt="about-1" width={250} height={200} />
              <h2 className="font-semibold  text-text-green text-2xl my-5">趣味</h2>
              <p className="mx-8 text-left tracking-[0.2em] leading-7">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <div className="flex-1">
            <Image src="/images/about-2.png" alt="about-2" width={250} height={200} />
            <h2 className="font-semibold  text-text-green text-2xl my-5">好きな食べ物</h2>
            <p className="mx-8 text-left tracking-[0.2em] leading-7">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <div className="flex-1">
            <Image src="/images/about-3.png" alt="about-3" width={300} height={200} />
            <h2 className="font-semibold  text-text-green text-2xl my-5">性格</h2>
            <p className="mx-8 text-left tracking-[0.2em] leading-7">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default ABOUT;
