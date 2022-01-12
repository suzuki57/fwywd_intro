import React from 'react'; 
import Image from 'next/image';

class FUTURE extends React.Component {
  render() {
    return (
      <div>
        <div className="text-text-black absolute -top-96">
          <div className="tracking-widest flex">
            <div className="flex-1">
              <div className="mt-5 font-semibold flex">
                <h2 className="tracking-[0.2em] flex-2 ml-60 mb-12 text-3xl">3年後にやりたいこと</h2>
                <p className=" text-text-green flex-1 pl-1 pt-1 text-lg">&nbsp;FUTURE</p>
              </div>
                <p className="tracking-[0.2em] ml-60 leading-7">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className="flex-1 mx-5 text-left">
              <Image
                src="/images/future.png"
                alt="value3"
                width={570}
                height={300}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FUTURE;
