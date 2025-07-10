/* eslint-disable no-unused-vars */
import Wrapper from "../layout/wrapper";

function CurrentProjects() {
  return (
    <>
      <div
        className="relative bg-cover bg-center w-full text-white mt-[100px]"
        style={{ backgroundImage: "url('/mostProjects.png')" }}
      >
        <Wrapper>
          <div className="relative w-full h-screen">
            <h2 className="absolute top-[100px] md:left-[120px] text-[30px] md:text-[55px] lg:text-[65px] left-[20px]">
              Текущие проекты
            </h2>

            {/* <img
              src="/bigarrow.svg"
              alt="arrow"
              
            /> */}
            <div className="absolute top-1/2 right-[20px] md:right-[200px] transform -translate-y-1/2 w-[60px] md:w-[80px] lg:w-[100px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="127" height="127" viewBox="0 0 127 127" fill="none">
                <circle cx="63.5" cy="63.5" r="63" stroke="white" />
                <path d="M96.7071 64.7071C97.0976 64.3166 97.0976 63.6834 96.7071 63.2929L90.3431 56.9289C89.9526 56.5384 89.3195 56.5384 88.9289 56.9289C88.5384 57.3195 88.5384 57.9526 88.9289 58.3431L94.5858 64L88.9289 69.6569C88.5384 70.0474 88.5384 70.6805 88.9289 71.0711C89.3195 71.4616 89.9526 71.4616 90.3431 71.0711L96.7071 64.7071ZM31 64V65H96V64V63H31V64Z" fill="white" />
              </svg>
            </div>

            <div className="absolute bottom-[45px] left-0 right-0 px-6 md:px-12 flex justify-between text-[16px] md:text-[20px] lg:text-[25px]">
              <span>Махачкала</span>
              <span>100 м²</span>
              <span>инвестиции</span>
              <span>срок</span>
              <span>ROI</span>
            </div>
          </div>
        </Wrapper>
      </div>

      {/* <img src="/otel.png" className="w-full mt-[50px] md:mt-[100px]" /> */}
      {/* <img src="/Rectangle 14.png" className="w-full mt-[50px] md:mt-[100px]" /> */}
    </>
  );
}

export default CurrentProjects;
