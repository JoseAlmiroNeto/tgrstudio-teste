interface Icon {
  icon: JSX.Element;
  title: string;
  description: string;
}

export function ServicesContainers({ icon, title, description }: Icon) {
  return (
    <div className="w-64 h-36 flex flex-col items-center space-y-3">
      <div className="h-10 w-10 lg:h-14 lg:w-14">{icon}</div>
      <div className="flex flex-col items-center space-y-1">
        <p className="text-base lg:text-xl font-bold">{title}</p>
        <p className="text-center text-xs lg:text-sm leading-relaxed :text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
