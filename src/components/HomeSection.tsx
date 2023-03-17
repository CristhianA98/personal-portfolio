import contentimage from "../assets/content.jpg";

export const HomeSection = () => {
  const stats = [
    { name: "Offices worldwide", value: "12" },
    { name: "Full-time colleagues", value: "300+" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-3 gap-3 h-screen">
      {/* First Column */}
      <div className="flex flex-col justify-center items-center bg-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-main sm:text-6xl">
              Work with us
            </h2>
            <p className="mt-6 text-lg leading-8 text-main">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-main">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-second">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* Second Column */}
      <div className="flex flex-col justify-center items-center bg-transparent">
        hola
      </div>
    </div>
  );
};
