import Button from "./Button";
import { Link } from "react-router-dom";

type HeaderProps = {
  logged: boolean;
};

const Header = ({ logged }: HeaderProps) => {
  return (
    <div className="flex">
      {/* Main Content & Background */}
      <div className="flex h-screen w-full">
        {/* Main Content */}
        <div className="xmd:w-1/3 w-full h-screen sm:px-1 px-2 flex flex-col xmd:pt-[17%] xmd:justify-normal justify-center">
          {" "}
          <div className="w-full text-center">
            <p className="text-[52px] font-crimson  font-light">
              Be your own Chef
            </p>
            {!logged && (
              <>
                <p className="text-[22px] font-crimson px-[0px] text-[#585147] ">
                  Create recipes with ingredients you have at home, access our
                  AI recipe maker
                </p>
                <div className="flex justify-center mt-[50px] space-x-9">
                  <Button
                    className="rounded-[30px] border-black border w-[148px] h-[41px]"
                    text="Learn more"
                  />
                  <Link to="/login">
                    <Button
                      className="bg-[#EE4C0C] rounded-[30px] w-[148px] h-[41px] text-stone-50 font-medium"
                      text="Login"
                    />
                  </Link>
                </div>
              </>
            )}
            {logged && (
              <>
                <p className="text-[22px] font-crimson px-[0px] text-[#585147]">
                  Type in your ingredients to discover new recipes
                </p>

                <div className="flex justify-center mt-[40px]">
                  <div className="flex items-center bg-[#EEA47F] rounded-full px-4 py-2 w-full max-w-[500px]">
                    <button className="text-black"></button>
                    <input
                      type="text"
                      placeholder="Search for ingredients"
                      className="bg-transparent outline-none text-[#34322F] pl-6 flex-grow placeholder:text-[#504535] placeholder:font-light text-[15px]"
                    />
                    <button className="text-black ">
                      <img src="../src/assets/icons/search.png" alt="" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-center mt-[40px] space-x-9">
                  <Link to="/id">
                    <Button
                      className="rounded-[30px] border-black border w-[148px] h-[41px]"
                      text="Submit"
                    />
                  </Link>
                  <Link to="/login">
                    <Button
                      className="bg-[#EE4C0C] rounded-[30px] w-[148px] h-[41px] text-stone-50 font-medium"
                      text="OpenAI"
                    />
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Background Image */}
        <div
          className="h-screen xmd:w-2/3 bg-[url('../src/assets/bg_chef_red2.png')] xmd:block hidden bg-right-top bg-no-repeat bg-contain"
          id="home"
        ></div>
      </div>
    </div>
  );
};
export default Header;
