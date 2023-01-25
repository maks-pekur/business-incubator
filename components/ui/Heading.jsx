const styles = {
  h1: "lg:text-[40px] tracking-wide	leading-tight	font-bold uppercase my-8 text-center",
  h2: "lg:text-[36px] tracking-wide	leading-tight	font-bold uppercase my-8",
  h3: "md:text-[30px] text-center my-8",
};

const Heading = ({ children, tag, classNames = "" }) => {
  const Tag = tag || "h1";
  return (
    <Tag className={`text-center ${styles[tag]} ${classNames}`}>{children}</Tag>
  );
};

export default Heading;
