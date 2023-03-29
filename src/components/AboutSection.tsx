import { Title } from "./ui/Title";

export const AboutSection = () => {

  return (
    <div className="h-4/5">
      <Title title={"About me"} subtitle={"Who am I"} />

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-3 lg:gap-5 py-10 h-full bg-main">
        <div className="col-span-1 bg-second">
          <div className="flex flex-row justify-center items-center p-2 h-full">
            <div className="h-72 w-72 lg:h-2/3 lg:w-2/3 bg-main">Hola</div>
          </div>
        </div>
        <div className="pb-3 lg:pb-0 col-span-2 bg-second">
          <div className="flex flex-col mx-10 lg:mx-20 justify-center h-full">
            <div className="bg-main my-5">
              <h2 className="p-5 text-center">ABOUT ME</h2>
            </div>
            <div className="bg-main">
              <p className="p-5 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                eius ad tempore, reprehenderit hic excepturi, officia sit
                corporis dolor veniam quibusdam perspiciatis adipisci totam
                officiis, ullam cupiditate ex voluptatum similique. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quaerat placeat
                delectus deleniti, fuga eveniet rerum corporis vel doloremque
                quas, iusto distinctio, et velit ad perspiciatis dolore
                consectetur enim minus nemo! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. At eius ad tempore, reprehenderit
                hic excepturi, officia sit corporis dolor veniam quibusdam
                perspiciatis adipisci totam officiis, ullam cupiditate ex
                voluptatum similique. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quaerat placeat delectus deleniti, fuga
                eveniet rerum corporis vel doloremque quas, iusto distinctio, et
                velit ad perspiciatis dolore consectetur enim minus nemo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
