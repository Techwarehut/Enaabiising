const alternatingContent = [
  {
    imgSrc: "/assets/images/left-img.png",
    title: "Click Get Started!",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    imgSrc: "/assets/images/right-img.png",
    title: "Continue with Forms",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    imgSrc: "/assets/images/left-img.png",
    title: "Use Word Bank",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    imgSrc: "/assets/images/right-img.png",
    title: "Get Results & Export",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
];

const Instructions = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {alternatingContent.map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="flex-1 p-4">
              <img
                src={item.imgSrc}
                alt={item.title}
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-4">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-gray-700">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructions;
