export default function Hero({ title, h2, h3 }) {
  return (
    <div className="p-4 pt-8 w-full text-center">
      <h1 className="text-4xl md:text-7xl">{title}</h1>
      {h2 && <p className="text-md md:text-xl">{h2}</p>}
      {h3 && <p className="text-sm italic">{h3}</p>}
    </div>
  );
}