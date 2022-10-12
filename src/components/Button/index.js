import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder15: "rounded-radius15",
  RoundedBorder6: "rounded-radius6",
  CustomBorderTL8:
    "rounded-bl-[8px] rounded-br-[0] rounded-tl-[8px] rounded-tr-[0]",
  CircleBorder24: "rounded-radius24",
  CustomBorderLR8:
    "rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px]",
  CircleBorder19: "rounded-radius19",
  icbCircleBorder16: "rounded-radius16",
};
const variants = {
  FillWhiteA700: "bg-white_A700",
  FillTeal900: "bg-teal_900 text-white_A700",
  FillCyan200: "bg-cyan_200",
  OutlineCyan200: "border border-cyan_200 border-solid",
  OutlineOrange400: "border border-orange_400 border-solid text-orange_400",
  OutlineIndigo50:
    "bg-gray_51 border border-indigo_50 border-solid text-bluegray_201",
  FillRedA400: "bg-red_A400 text-black_902",
  FillRed600: "bg-red_600 text-white_A700",
  icbFillWhiteA700: "bg-white_A700",
  icbFillCyan200: "bg-cyan_200",
};
const sizes = {
  sm: "3xl:p-[10px] lg:p-[6px] xl:p-[8px] p-[9px]",
  md: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[8px]",
  lg: "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  xl: "lg:p-[14px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
  smIcn: "lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px]",
  mdIcn: "3xl:p-[10px] lg:p-[6px] xl:p-[8px] p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder15",
    "RoundedBorder6",
    "CustomBorderTL8",
    "CircleBorder24",
    "CustomBorderLR8",
    "CircleBorder19",
    "icbCircleBorder16",
  ]),
  variant: PropTypes.oneOf([
    "FillWhiteA700",
    "FillTeal900",
    "FillCyan200",
    "OutlineCyan200",
    "OutlineOrange400",
    "OutlineIndigo50",
    "FillRedA400",
    "FillRed600",
    "icbFillWhiteA700",
    "icbFillCyan200",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "FillCyan200",
  size: "md",
};

export { Button };
