import { HomeSection } from "./components/HomeSection";
import Navbar from "./components/Navbar";
import iconWhite from "./assets/iconWhite.png";
import { Title } from "./components/ui/Title";

export const Portfolio = () => {
  return (
    <>
      <div className="static h-screen bg-content-image bg-cover">
        {/* Navbar */}
        <Navbar />

        {/* Home Section */}
        <HomeSection />

        {/* About me Section */}
        <div className="h-5/6 bg-gray-600">
          <Title title={"About me"} subtitle={"Who am I"} />

          <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-5 py-10 h-full bg-main">
            <div className="col-span-1 bg-second">Aquí irá una imagen</div>
            <div className="col-span-2 bg-second">
              <div className="flex">
                <h1>Acerca de Mi</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
