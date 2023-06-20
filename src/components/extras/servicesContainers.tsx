interface Icon {
  icon: JSX.Element;
  title: string;
  description: string;
}

export function ServicesContainers({ icon, title, description }: Icon) {
  return (
    <div className="w-64 flex flex-col items-center space-y-3">
      {icon}
      <div className="flex flex-col items-center space-y-1">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-center text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
