import Image from 'next/image';

interface FeatureBoxProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function FeatureBox({ imageSrc, title, description }: FeatureBoxProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-transparent rounded-lg shadow-lg">
      <div className="relative w-[400px] h-[300px] mb-4">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
