
interface FeatureBoxProps {
  _imageSrc?: string;
  title: string;
  description: string;
}

export default function FeatureBox({ title, description }: FeatureBoxProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2 w-60">{title}</h3>
      <p className="text-gray-400 w-90">{description}</p>
    </div>
  );
}
