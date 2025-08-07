type Props = {
    title: string,
    description: string
}

const Hero = ({title, description}: Props) => {
    return (
      <div className="hero flex flex-col text-center items-center h-[350px] pt-[38px]">
        <div className="w-[80%] lg:max-w-3xl flex flex-col text-center items-center">
          <div>
            <div className="flex justify-center items-center">
                <div className="bg-[#33C36C40] w-fit text-lg lg:text-2xl font-medium h-[60px] px-[70px] flex justify-center items-center rounded-[15px] text-[#33C36C]">
                  HackJos
                </div>
            </div>
            <h1 className="text-[32px] lg:text-[45px] leading-[55px] font-medium pt-5">
              {title}
            </h1>
          </div>
          <p className="text-[#000000BF] text-lg lg:text-2xl pt-[18px]">
            {description}
          </p>
        </div>
      </div>
    );
}
 
export default Hero;