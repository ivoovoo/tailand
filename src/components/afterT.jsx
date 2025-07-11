import Wrapper from "../layout/wrapper";

function AfterT() {
  return (
    <>
      <div
        style={{ backgroundImage: `url("/image2052.png")` }}
        className="bg-cover bg-center h-[40vh] sm:h-[60vh] xl:h-screen mt-[80px] text-white relative px-[20px] xl:px-0"
      >
        <Wrapper>
          <div className="flex flex-col">
            <h2 className="text-[30px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] xl:leading-[80px] font-[600] tracking-[0.6px] pt-[80px] font-inter">
              Резорт отель 4*
            </h2>
            <p className="text-[25px] md:text-[40px] lg:text-[50px]  font-[600] tracking-[0.6px] pt-[20px]  font-inter max-w-[700px] lg:leading-[50px]">
              Отель на первой береговой линии в Каспийске
            </p>
          </div>
        </Wrapper>
      </div>
        <img src="/Rectangle14.png" className="mt-[80px] w-full hidden md:block" />
    </>
  );
}

export default AfterT;
