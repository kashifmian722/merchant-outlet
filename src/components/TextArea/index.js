import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineIndigo50: "bg-white_A700 border border-indigo_50 border-solid",
};
const shapes = { RoundedBorder8: "rounded-radius8" };
const sizes = {
  sm: "lg:pb-[24px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pt-[15px] xl:pt-[19px] pt-[22px] 3xl:pt-[26px] lg:px-[15px] xl:px-[19px] px-[22px] 3xl:px-[26px]",
};
const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["OutlineIndigo50"]),
  size: PropTypes.oneOf(["sm"]),
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "RoundedBorder8",
  variant: "OutlineIndigo50",
  size: "sm",
};
export { TextArea };
