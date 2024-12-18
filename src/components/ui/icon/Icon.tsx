export default function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt={name}
      className={className}
      width="24"
      height="24"
    />
  );
}
