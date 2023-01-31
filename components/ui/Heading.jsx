const styles = {
  h1: "text-[26px] lg:text-[40px] tracking-wide	leading-tight	font-bold uppercase my-8 text-center",
  h2: "text-[24px] lg:text-[36px] tracking-wide	leading-tight	font-bold uppercase my-8",
  h3: "text-[18px] lg:text-[30px] text-center my-8",
  h4: "text-[14px] lg:text-[24px] text-center my-8",
  span: "font-bold text-[20px] lg:text-[28px] text-center",
};

const Heading = ({ children, tag, classNames = "" }) => {
  const Tag = tag || "h1";
  return (
    <Tag className={`text-center ${styles[tag]} ${classNames}`}>{children}</Tag>
  );
};

export default Heading;
