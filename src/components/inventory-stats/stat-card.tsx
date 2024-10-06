interface IStatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

export default function StatCard(props: IStatCardProps) {
  return (
    <div className="bg-green-100 flex gap-4 px-4 py-6 rounded-lg flex-1">
      <div className="">{props.icon}</div>
      <div>
        <div>{props.title}</div>

        <div className="text-3xl">{props.value}</div>
      </div>
    </div>
  );
}
