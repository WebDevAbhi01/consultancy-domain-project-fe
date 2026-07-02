type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

export default function HeroServiceCard({
  title,
  description,
  image,
  reverse,
}: ServiceCardProps) {
  return (
    <div
      className={`grid gap-12 lg:grid-cols-2 lg:items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div>
        <img
          src={image}
          alt={title}
          className="h-[550px] w-full rounded-3xl object-cover shadow-xl"
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-3xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-6 text-lg leading-8 text-white/70">
          {description}
        </p>
      </div>
    </div>
  );
}