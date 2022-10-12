import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineIndigo50: "bg-white_A700 border border-indigo_50 border-solid",
  OutlineBluegray50:
    "bg-white_A700 outline outline-[0.5px] outline-bluegray_50",
  FillCyan200: "bg-cyan_200",
  OutlineIndigo501_2: "bg-bluegray_51 border border-indigo_50 border-solid",
  srcOutlineIndigo50: "bg-white_A700 border border-indigo_50 border-solid",
};
const shapes = {
  RoundedBorder6: "rounded-radius6",
  CustomBorderTL8:
    "rounded-bl-[8px] rounded-br-[0] rounded-tl-[8px] rounded-tr-[0]",
  srcRoundedBorder8: "rounded-radius8",
};
const sizes = {
  sm: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[8px]",
  md: "lg:p-[11px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  smSrc: "xl:p-[12px] p-[14px] 3xl:p-[16px] lg:p-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "CustomBorderTL8",
    "srcRoundedBorder8",
  ]),
  variant: PropTypes.oneOf([
    "OutlineIndigo50",
    "OutlineBluegray50",
    "FillCyan200",
    "OutlineIndigo501_2",
    "srcOutlineIndigo50",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder6",
  variant: "OutlineIndigo50",
  size: "md",
};

export { Input };
