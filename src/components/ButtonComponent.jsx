export const ButtonComponent = ({
   onClick,
   text,
   width,
   height,
   classname,
   id,
}) => {
   return (
      <button
         id={id}
         onClick={onClick}
         style={{
            width: width,
            height: height,
         }}
         className={`px-4 group flex gap-2 items-center justify-center bg-[#f1f1f1] text-xl text-slate-950 font-[880] drop-shadow-md rounded-full z-10 cursor-pointer relative button-hidden ${classname}`}
      >
         <div className="w-10 h-10 bg-sky-600 rounded-full transition-all duration-[0.6s] group-hover:w-full group-hover:h-full absolute left-[10%] group-hover:left-0 group-hover:border group-hover:drop-shadow-xl group-hover:z-0" />
         <div className="pl-6 transition-all duration-[0.4s] group-hover:pl-0 group-hover:text-[#f1f1f1] group-hover:z-10 uppercase text-nowrap drop-shadow-md group-hover:drop-shadow-sm">
            {text}
         </div>
      </button>
   );
};
