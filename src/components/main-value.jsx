import React from 'react'; 
import Image from 'next/image';

class VALUE extends React.Component {
  render() {
    return (
      <div>
        <div className=" bg-white text-text-black w-[70%] h-[530px] rounded-xl tracking-widest text-center absolute top-10 left-60">
          <div className="font-semibold flex">
            <h2 className="tracking-[0.2em] flex-1 mb-10 text-right text-3xl">価値観</h2>
            <p className=" text-text-green flex-1 pl-1 pt-1 text-left text-lg">&nbsp;VALUES</p>
          </div>
          <div className="flex">
            <div className="flex-1">
              <Image src="/images/value1.png" alt="value1" width={200} height={200} />
              <h2 className="font-semibold text-xl my-5">価値観01</h2>
              <p className="tracking-[0.2em] mx-10 text-left leading-7">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className="flex-1 border-r-2 border-l-2 border-border-green border-semisolid">
              <Image src="/images/value2.png" alt="value2" width={200} height={200} />
              <h2 className="font-semibold text-xl my-5">価値観02</h2>
              <p className="tracking-[0.2em] mx-10 text-left leading-7">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className="flex-1">
              <Image src="/images/value3.png" alt="value3" width={200} height={200} />
              <h2 className="font-semibold text-xl my-5">価値観03</h2>
              <p className="tracking-[0.2em] mx-10 text-left leading-7">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default VALUE;
