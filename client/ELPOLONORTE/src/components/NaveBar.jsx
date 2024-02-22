import { BsBasket3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


function Navbar() {
 
  const [windowsUpdate, setWindows] = useState({
    windowUpdate: window.innerWidth,
  });
  const [menuResize, setmenuResize] = useState(true);
  const [menuArrow, setmenuArrow] = useState(true);
  const handleClickOne = () => {
    setmenuResize(false);
  };
  const handleClickTow = () => {
    setmenuResize(true);
  };
  const handleClickArrowOne = () => {
    setmenuArrow(true);
  };
  const handleClickArrowTow = () => {
    setmenuArrow(false);
  };
  useEffect(() => {
    const handleWindos = () => {
      setWindows({ windowUpdate: window.innerWidth });
    };
    window.addEventListener("resize", handleWindos);
  }, [windowsUpdate.windowUpdate]);

  return (
    <header className="z-20 bg-black/80 flex justify-between fixed w-full py-6 px-[80px] items-center ">
      <span className=" text-white border-[3px] px-4 py-1 text-[22px]  lg:text-white	lg:border-[3px] lg:border-current lg:px-5 lg:py-1 lg:text-[37px]">
        <Link to="#">ELPOLONORTE</Link>
      </span>

      {windowsUpdate.windowUpdate > 1050 ? (
        <div>
          <ul className="text-gray-500	font-medium  text-[17px]  flex  items-center font-principal gap-16 ">
            <li>
              <Link to="/login">INICIO</Link>
            </li>
            <li>
              <Link to="#">COMPRAR </Link>
            </li>

            <li>
              <Link to="#">SOBRE NOSOTROS</Link>
            </li>

            <li>
              <Link to="#">CONTACTO</Link>
            </li>
            <li className="flex gap-3">
              <BsBasket3 className="text-xl" />
              <span className="text-base">0</span>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          {menuResize ? (
            <button onClick={handleClickOne}>
              <AiOutlineMenu className="text-white text-4xl " />
            </button>
          ) : (
            <button onClick={handleClickTow} className="relative z-50">
              <MdClose className="text-white text-4xl" />
            </button>
          )}
        </div>
      )}
      {menuResize || windowsUpdate.windowUpdate > 1050 ? (
        <div className="hidden"></div>
      ) : (
        <div className=" text-white   bg-black/50 flex z-40   absolute  left-[50%] top-[10px] w-full  -mx-[50%] h-[100vh] ">
          <ul className=" text-center   text-3xl relative mx-auto top-[30%]">
            <li className="border-b-[1px] border-zinc-500	">
              <Link to="/login">INICIO</Link>
            </li>

            <li className="border-b-[1px] border-zinc-500	justify-center  items-center ">
              <Link>COMPRAR </Link>
              {menuArrow ? (
                <>
                  <button onClick={handleClickArrowTow}>
                    <IoIosArrowUp />
                  </button>

                  <ul className="text-2xl">
                    <li>
                      <Link>Mochila de viaje</Link>
                    </li>
                    <li>
                      <Link>Mochila de lona</Link>
                    </li>
                    <li>
                      <Link>Bolsas de Lona</Link>
                    </li>
                  </ul>
                </>
              ) : (
                <button onClick={handleClickArrowOne}>
                  <IoIosArrowDown />
                </button>
              )}
            </li>

            <li className="border-b-[1px] border-zinc-500	">
              <Link>SOBRE NOSOTROS</Link>
            </li>

            <li className="">
              <Link>CONTACTO</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
