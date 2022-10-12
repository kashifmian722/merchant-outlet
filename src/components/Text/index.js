import React from "react";
const variantClasses = {
  h1: "font-semibold lg:text-[34px] xl:text-[42px] text-[48px] 3xl:text-[57px]",
  h2: "font-medium lg:text-[28px] xl:text-[35px] text-[40px] 3xl:text-[48px]",
  h3: "lg:text-[22px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  h4: "lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h5: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  h6: "font-normal lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body1:
    "font-bold lg:text-[12px] xl:text-[15px] text-[17.16px] 2xl:text-[17px] 3xl:text-[20px]",
  body2: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body3: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body4: "xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
  body5:
    "font-normal xl:text-[10px] text-[11.44px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
