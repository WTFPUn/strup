import Link from 'next/link';

function MainButton({color,text, linkto}) {
  return(
    <button className={`font-thin  bg-${color} rounded-full justify-center medium-tablet:p-2 medium-tablet:px-2 big-device:p-2 big-device:px-10 mt-2 text-white`}>
      <Link className="font-body medium-tablet:text-xl big-device:text-3xl mobile:text-lg" href={linkto}>
        {text}
      </Link>
    </button>
  );
};

export default MainButton;