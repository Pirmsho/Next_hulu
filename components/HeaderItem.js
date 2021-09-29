function HeaderItem({ Icon, title }) {
  return (
    <div className="group mx-2 flex items-center cursor-pointer w-12 sm:w-20 hover:text-white flex-col">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default HeaderItem;
