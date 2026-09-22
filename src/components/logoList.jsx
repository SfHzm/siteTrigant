export default function LogoList({ texts, logos }) {
  return (
    <>
      <div className="grid md:grid-cols-2 md:p-[4vw] md:gap-x-[1.5vw] gap-y-[1vw]">
        {logos.map((Icon, i) => (
          <div
            className="flex mini-text gap-x-[3vw] md:gap-x-[1vw] items-center "
            key={i}
          >
            <Icon
              size={24}
              color="var(--color-accent-gold)"
              className="shrink-0"
            />
            <div className="text-left">{texts[i]}</div>
          </div>
        ))}
      </div>
    </>
  );
}
