export function Location({ data }: any) {
  const { location } = data;

  return (
    <div className="mt-3 md:mt-3" id="locations">
      <div className="relative w-[calc(100%-1rem)] mx-auto max-w-375">
        <h2 className="text-6xl md:text-8xl font-grandHotel text-white">
          {location.title}
        </h2>

        <iframe
          className="w-full rounded-4xl"
          src={location.map.embedUrl}
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
