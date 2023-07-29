import { FC } from "react";

interface HeadingProps {
  title: string;
  isCentered?: boolean;
}

const Heading: FC<HeadingProps> = ({ title, isCentered }) => {
  return (
    <h1
      className={`${
        isCentered && "text-center"
      } bg-clip-text text-transparent bg-gradient-to-tr from-sky-200 via-sky-500 to-sky-200 font-extrabold text-3xl sm:text-4xl lg:text-5xl`}
    >
      {title}
    </h1>
  );
};

export default Heading;
