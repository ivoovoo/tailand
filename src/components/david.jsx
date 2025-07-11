import Wrapper from "../layout/wrapper";

function David() {
  return (
    <>
      <div className="david mt-[80px] py-[100px] relative px-[20px] xl:px-0">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-start gap-[30px] justify-between w-full relative z-[2]">
            {/* <div className="max-w-[450px]">
              <img src="/david_person.png" className="w-[250px] lg:w-[300px]" />
              <h3 className="font-inter text-[#22549F] text-[30px] md:text-[40px] mt-8">
                Давид Никурадзе
              </h3>
              <h4 className="font-inter text-[#22549F] text-[20px] md:text-[25px] uppercase tracking-[2px] md:tracking-[3px]">
                Управляющий партнер Spectrum
              </h4>
              <p className="font-inter text-[#6D6D6D] text-[20px] mt-8">
                Международный опыт в строительстве, глубокие технические,
                договорные и эксплуатационные знания по всем аспектам
                строительного процесса, прогнозному анализу и оптимизации
                стоимости
              </p>
            </div> */}
            <div className="flex gap-[20px] w-full">
              <div className="w-1/2">
                <img src="/david_hotel1.png" className="w-full" />
                <p className="text-[#6D6D6D] text-[18px] font-inter max-w-[200px] ">
                  Лексингтон авеню, 610, Нью-Йорк
                </p>
              </div>
              <div className="w-[90%]">
                <img src="/david_hotel2.png" className="w-full" />
                <p className="text-[#6D6D6D] text-[18px] font-inter max-w-[200px] ">
                  Улица Мерсер, 40, Нью-Йорк
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
        {/* <img
          src="/david_bg.png"
          className="absolute hidden lg:block h-full top-0 right-0 z-[1]"
        /> */}
      </div>

      <div className="second_david py-[100px] mt-[80px] px-[20px] xl:px-0">
        <Wrapper>
          <div className="flex flex-col md:flex-row gap-[15px]">
            <div className="flex flex-col">
              <img src="/hotel1_2.png" alt="" />
              <h3 className="text-[#EBEBEB] font-inter text-[25px] md:text-[35px] font-[600]">
                Башни «этитад тауэрс»
              </h3>
              <h5 className="text-[#EBEBEB] text-[18px] md:text-[20px] font-inter font-[500]">
                Абу-Даби, ОАЭ
              </h5>
            </div>
            <div className="flex flex-col">
              <img src="/hotel2_2.png" alt="" />

              <h3 className="text-[#EBEBEB] font-inter text-[25px] md:text-[35px] font-[600]">
                «Полумесяц»
              </h3>
              <h5 className="text-[#EBEBEB] text-[18px] md:text-[20px] font-inter font-[500]">
                Баку, Азербайджан
              </h5>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default David;
