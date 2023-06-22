interface Icon {
  icon: JSX.Element;
  title: string;
  description: string;
}

export function ServicesContainers({ icon, title, description }: Icon) {
  return (
    <div className="w-64 h-36 flex flex-col items-center justify-start space-y-3 fullHD:h-44">
      {icon}
      <div className="flex flex-col items-center space-y-1">
        <p className="text-xl font-bold fullHD:text-2xl">{title}</p>
        <p className="text-center text-sm leading-relaxed fullHD:text-lg">{description}</p>
      </div>
    </div>
  );
}
