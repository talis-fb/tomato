import Icon from "../Icon";

const RenderIcon = (props) => {
  let style = {
    style: {
      strokeWidth: "2px",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
  };

  return (
    <Icon {...style} {...props}>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
      <line x1="9" y1="9" x2="9.01" y2="9"></line>
      <line x1="15" y1="9" x2="15.01" y2="9"></line>
    </Icon>
  );
};

export default RenderIcon;
