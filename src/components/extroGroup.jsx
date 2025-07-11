import Wrapper from "../layout/wrapper";

function ExtroGroup() {
  return (
    <>
      <div
        style={{ backgroundImage: `url("/samurGroupBG.png")` }}
        className="bg-cover bg-center h-[40vh] sm:h-[60vh] xl:h-screen text-white fill-[#22549F] bg-[#22549F] relative px-[20px] xl:px-0"
      >
        <Wrapper>
          <div>
            <img src="/samurGrLogo.svg" className="w-[200px] pt-[100px]" />
            <h2 className="uppercase h-[40vh] sm:h-[60vh] xl:h-screen flex items-center text-[30px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] xl:leading-[80px] font-[600] font-inter max-w-[300px]">
              ОПЕРАЦИОННОЕ УПРАВЛЕНИЕ ОТЕЛЯМИ
            </h2>
          </div>
        </Wrapper>
      </div>
      <div
        style={{ backgroundImage: `url("/uproGroup.png")` }}
        className="bg-cover bg-center h-[60vh] sm:h-[60vh] xl:h-screen my-[80px] text-white relative px-[20px] xl:px-0"
      >
        <Wrapper>
          <div className="flex flex-col items-start justify-center gap-[30px] h-[40vh] sm:h-[60vh] xl:h-screen">
            <img src="/uproGroupLogo.svg" className="w-[250px]" />
            <h2 className="text-[30px] md:text-[50px] lg:text-[60px] 2xl:text-[70px] xl:leading-[60px] font-[600] leading-[45px] font-inter max-w-[300px] md:max-w-[400px]">
              Гостиничная управляющая компания
            </h2>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default ExtroGroup;
