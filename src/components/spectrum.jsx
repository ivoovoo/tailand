import Wrapper from "../layout/wrapper";

function Spectrum() {
  return (
    <div
      style={{ backgroundImage: `url("/spectrum.png")` }}
      className="bg-cover bg-center py-[100px] mt-[80px] relative px-[20px] xl:px-0"
    >
      <Wrapper>
        <div className="flex flex-col md:items-end relative">
          <div className="font-inter text-white flex flex-col items-end max-w-[500px] justify-end">
            <h2 className="font-inter text-[30px] md:text-[40px] font-[600] md:leading-[45px]">
              SPECTRUM — это архитектурное бюро полного цикла
            </h2>
            <p className="font-inter text-[20px] font-[500] mt-[20px] border-b-[2px] border-b-[white] py-5">
              Фирма, базирующаяся в Тбилиси, Грузия, предоставляет следующие
              услуги:
            </p>
            <div className="flex items-start gap-10 pt-7">
              <ul>
                <li className="font-inter text-[20px] font-[500] list-disc">
                  Архитектура
                </li>
                <li className="font-inter text-[20px] font-[500] list-disc">
                  Дизайн интерьера
                </li>
                <li className="font-inter text-[20px] font-[500] list-disc">
                  Ландшафтный дизайн
                </li>
                <li className="font-inter text-[20px] font-[500] list-disc">
                  Управление строительством
                </li>
              </ul>
              <ul>
                <li className="font-inter text-[20px] font-[500] list-disc">
                  Строительство
                </li>
                <li className="font-inter text-[20px] font-[500] list-disc">
                  Энергоаудит
                </li>
                <li className="font-inter text-[20px] font-[500] list-disc">
                  Биофильный дизайн
                </li>
                <li className="font-inter text-[20px] font-[500] list-disc">
                  Закупка планирование
                </li>
              </ul>
            </div>
            <p className="font-inter text-[18px] font-[500] mt-[100px]">
              Мы разрабатываем и строим уникальные проекты на заказ для
              коммерческого и жилого секторов по всему миру. Наша команда
              состоит из более чем 75 штатных специалистов. Разнообразный
              местный и международный опыт нашей команды, ответственное и
              высокопрофессиональное отношение к делу являются отправной точкой
              для успешной реализации проектов.
            </p>
          </div>
        <div className="md:absolute bottom-0 right-[550px] mx-auto">
          <div className="bg-[#F4F4F4] rounded-[30px] w-full mt-[40px] md:mt-0 md:max-w-[295px] px-[20px] py-[10px]">
            <div className="flex flex-col">
              <span className="text-[#22549F] text-[40px] font-inter font-[600]">
                4+
              </span>
              <span className="text-[#22549F] text-[18px] font-inter font-[500]">
                Международных наград
              </span>
            </div>
            <div className="w-full h-[1px] bg-[#22549F] opacity-[0.2] my-2"></div>
            <div className="flex flex-col">
              <span className="text-[#22549F] text-[40px] font-inter font-[600]">
                75+
              </span>
              <span className="text-[#22549F] text-[18px] font-inter font-[500]">
                Квалифицированных сотрудников в штате
              </span>
            </div>
            <div className="w-full h-[1px] bg-[#22549F] opacity-[0.2] my-2"></div>
            <div className="flex flex-col">
              <span className="text-[#22549F] text-[40px] font-inter font-[600]">
                50+
              </span>
              <span className="text-[#22549F] text-[18px] font-inter font-[500]">
                Инновационных архитектурных решений
              </span>
            </div>
          </div>
        </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Spectrum;
