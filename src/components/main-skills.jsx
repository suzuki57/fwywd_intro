import React from 'react'; 
import Image from 'next/image';

class SKILLS extends React.Component {
  render() {
    return (
      <div>
        <div className="text-text-black w-9/12 absolute top-10 left-40">
          <div className="flex">
            <div className="pt-14 flex-1">
              <Image src="/images/skill.png" alt="skills" width={600} height={400} />
            </div>
            <div className="tracking-widest flex-1">
              <div className="font-semibold flex pb-5">
                <h2 className="text-3xl">スキル</h2>
                <p className=" text-text-green pl-1 pt-1 text-lg">&nbsp;SKILLS</p>
              </div>
              <p className="tracking-[0.2em] leading-7">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              <div className="bg-white text-text-green rounded-md font-semibold text-lg mt-5 mr-2 px-10 py-5">
                <p>SKILLSKILL</p>
                <div className="flex">
                  <div className="w-10/12 mr-5">
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-[1.25rem] mb-5 text-xs flex rounded-md bg-progress-pale">
                        <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progress-deep"></div>
                      </div>
                    </div>
                  </div>
                  <p className="font-normal">40%</p>
                </div>
                <p>SKILLSKILL</p>
                <div className="flex">
                  <div className="w-10/12 mr-5">
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-[1.25rem] mb-4 text-xs flex rounded-md bg-progress-pale">
                        <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progress-deep"></div>
                      </div>
                    </div>
                  </div>
                  <p className="font-normal">40%</p>
                </div>
                <p>SKILLSKILL</p>
                <div className="flex">
                  <div className="w-10/12 mr-5">
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-[1.25rem] mb-4 text-xs flex rounded-md bg-progress-pale">
                        <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progress-deep"></div>
                      </div>
                    </div>
                  </div>
                  <p className="font-normal">40%</p>
                </div>
                <p>SKILLSKILL</p>
                <div className="flex">
                  <div className="w-10/12 mr-5">
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-[1.25rem] mb-4 text-xs flex rounded-md bg-progress-pale">
                        <div style={{ width: '40%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-progress-deep"></div>
                      </div>
                    </div>
                  </div>
                  <p className="font-normal">40%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SKILLS;
