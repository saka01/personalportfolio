import Image from "next/image";

const TechStack = () => {
  const techstack = ["Html", "js", "next", "nodejs", "python"];

  return (
    <>
      <h3 style={{ color: "#d0d8c2" }}>TECH STACK</h3>
      {techstack.map((data, index) => (
        <>
          <Image
            key={index}
            src={`/images/Icon=${data}.svg`}
            alt="Moshood Saka Profile pic"
            width={60}
            height={60}
            style={
              {
                // marginRight: "25px",
              }
            }
          />
          <span
            style={{
              marginRight: "25px",
            }}
            key={index}
            className="skills"
          >
            {data}
          </span>
        </>
      ))}
    </>
  );
};

export default TechStack;
