import TitleRed from "../../images/who-we-are/title-bg.svg";
import TrainerBox from "./TrainerBox";
import TestiImg from "../../images/testimonials/main.jpg";

function Trainers() {
  return (
    <>
      <section className="trainers-section">
        <div className="container page-padding py-[12rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative">
            <p className="text-white relative z-10 text-[16px] uppercase font-bold mb-10">
              gym trainers
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[18%] absolute -top-[6px] left-[48rem] "
            />

            <h2 className="text-[3.4rem] font-bold mb-4">
              Team Of Expert Coaches
            </h2>
            <p className="text-[#646464] font-medium text-[15px] ">
              Expert team of coaches helps you succeed in any goal,
              <br /> personalized guidance and motivation provided!
            </p>
          </div>

          {/* trainers div -- */}
          <div className="flex mt-14">
            <TrainerBox />
          </div>

          {/* trainers testimonials -- */}
          <div className="flex mt-[18rem]">
            {/* img side */}
            <div className="">
              <div className="">
                <img src={TestiImg} alt="testimonials_img" />
              </div>
            </div>
            {/* testimonials side */}
            <div className="bg-[#ff0336] w-[56%]"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainers;