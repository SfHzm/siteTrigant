export default function Timeline({ h, p }) {
  const getCircleClass = (index) => {
    const isOddLength = h.length % 2 !== 0;

    if (isOddLength) {
      // h impair
      return index % 2 === 0
        ? "bg-accent-gold" // pair full
        : "border-2 border-accent-gold"; // impair border
    } else {
      // h pair
      return index === 0 || index === h.length - 1
        ? "bg-accent-gold" // premier et dernier full
        : "border-2 border-accent-gold"; // les autres border
    }
  };

  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-80 md:w-[39.7vw]">
      <li>
        <div className="timeline-middle border-2 border-accent-gold rounded-full w-2.5 h-2.5 mx-1.25 md:w-3.5 md:h-3.5 md:mx-0.75"></div>
        <div className="timeline-start h-18"></div>
        <hr className="bg-accent-gold" style={{ width: "2.5px" }} />
      </li>
      {h.map((header, i) => (
        <li key={i}>
          <div
            className={`timeline-middle rounded-full w-5 h-5 ${getCircleClass(
              i
            )}`}
          ></div>
          <div
            className={`timeline-end mt-0 md:mb-10 ${
              i !== h.length - 1 ? "h-fit min-h-20" : "min-h-25 h-fit"
            } flex flex-col text-justify gap-2 px-2`}
          >
            <div className="text-lg text-black-accent md:text-[1.4rem] leading-none md:pb-1" style={{fontFamily: "var(--font-artemisia)"}}>{header}</div>
            <p className="pb-7 text-title md:text-[1.04rem]" style={{fontFamily: "var(--font-inter)"}}>{p[i]}</p>
            
          </div>
          <hr className="bg-accent-gold" style={{ width: "2.5px" }} />
        </li>
      ))}
      <li>
        <div className="timeline-middle border-2 border-accent-gold rounded-full w-2.5 h-2.5 mx-1.25 md:w-3.5 md:h-3.5 md:mx-0.75"></div>
      </li>
    </ul>
  );
}
