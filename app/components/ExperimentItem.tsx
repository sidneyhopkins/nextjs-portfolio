import Link from "next/link";

interface ExperimentItemProps {
  title: string;
  source?: string;
  url: string;
  desc: string[];
}

export const ExperimentItem: React.FC<ExperimentItemProps> = ({ title, source, url, desc }) => {
  return (
    <li>
      <Link href={url} className="hover:bg-orange-900 block p-4 text-xl" rel="noopener noreferrer">
        <p className="text-xs uppercase pb-2">{source}</p>
        <h2 className="pb-2 font-bold">{title}</h2>
        <p className="text-sm">{desc}</p>
      </Link>
    </li>
  )
}

export default ExperimentItem;