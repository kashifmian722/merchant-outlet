import React from "react";

import { Column, Row, Img, Text, Input, CheckBox, Button } from "components";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  function handleNavigate31() {
    navigate("/dashboard");
  }
  function handleNavigate32() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-cyan_50 font-poppins items-center justify-start mx-[auto] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
        <Row className="items-start justify-between lg:mb-[24px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[99%]">
          <Column className="justify-start w-[42%]">
            <Img
              src="images/img_orkiyalogopng.png"
              className="lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] w-[17%]"
              alt="orkiyalogopng"
            />
            <Column className="justify-start xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] lg:mt-[116px] xl:mt-[145px] 2xl:mt-[164px] 3xl:mt-[196px] w-[98%]">
              <Text
                className="leading-[normal] text-gray_800 w-[85%]"
                as="h1"
                variant="h1"
              >
                Amplify your reach,
                <br />
                Simplify your cost{" "}
              </Text>
              <Text
                className="font-normal leading-[normal] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic text-gray_800_7f w-[100%]"
                as="h4"
                variant="h4"
              >
                Reach out to millions of potential customers by <br />
                becoming an Orkiya merchant partner.
              </Text>
            </Column>
          </Column>
          <Column className="border border-bluegray_50 border-solid font-inter items-center justify-start 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[84px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius12 w-[39%]">
            <Column className="items-center justify-start w-[78%]">
              <Text className="columnlogin" as="h2" variant="h2">
                Become Partner
              </Text>
            </Column>
            <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[97%]">
              <Column className="items-center justify-start w-[100%]">
                <Column className="justify-start pr-[4px] py-[4px] w-[100%]">
                  <Text className="Label" variant="body3">
                    Business Name
                  </Text>
                </Column>
                <Input
                  className="placeholder:text-bluegray_200 ContainerInp"
                  wrapClassName="flex mt-[4px] w-[100%]"
                  type="text"
                  name="ContainerInp"
                  placeholder="First and last name"
                  prefix={
                    <Img
                      src="images/img_user.svg"
                      className="ml-[4px] lg:w-[17px] lg:h-[18px] lg:mr-[5px] xl:w-[21px] xl:h-[22px] xl:mr-[7px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[8px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[9px] my-[auto]"
                      alt="user"
                    />
                  }
                  variant="OutlineBluegray50"
                ></Input>
              </Column>
              <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Column className="justify-start pr-[4px] py-[4px] w-[100%]">
                  <Text className="Label" variant="body3">
                    Email address
                  </Text>
                </Column>
                <Input
                  className="placeholder:text-bluegray_200 ContainerInp"
                  wrapClassName="flex mt-[4px] w-[100%]"
                  name="ContainerInp One"
                  placeholder="Placeholder"
                  prefix={
                    <Img
                      src="images/img_line_business_mailline.svg"
                      className="ml-[4px] lg:w-[17px] lg:h-[18px] lg:mr-[5px] xl:w-[21px] xl:h-[22px] xl:mr-[7px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[8px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[9px] my-[auto]"
                      alt="line/business/mail-line"
                    />
                  }
                  variant="OutlineBluegray50"
                ></Input>
              </Column>
              <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Column className="justify-start pr-[4px] py-[4px] w-[100%]">
                  <Text className="Label" variant="body3">
                    Password
                  </Text>
                </Column>
                <Input
                  className="placeholder:text-bluegray_200 ContainerInp"
                  wrapClassName="flex mt-[4px] w-[100%]"
                  name="ContainerInp Two"
                  placeholder="Placeholder"
                  prefix={
                    <Img
                      src="images/img_lock.svg"
                      className="ml-[4px] lg:w-[17px] lg:h-[18px] lg:mr-[5px] xl:w-[21px] xl:h-[22px] xl:mr-[7px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[8px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[9px] my-[auto]"
                      alt="lock"
                    />
                  }
                  variant="OutlineBluegray50"
                ></Input>
              </Column>
              <Row className="items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[64%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                  alt="checkmark"
                />
                <Text
                  className="font-normal lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic text-bluegray_900 w-[auto]"
                  variant="body4"
                >
                  I have read the agreement on the use of my data
                </Text>
              </Row>
              <CheckBox
                className="font-normal lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_900"
                inputClassName="mr-[5px] w-[undefinedpx]"
                name="Multiselectch One"
                label="I accept the terms of services"
              ></CheckBox>
              <Button
                className="common-pointer font-medium lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center tracking-ls1 w-[100%]"
                onClick={handleNavigate31}
                shape="RoundedBorder6"
                size="lg"
                variant="FillTeal900"
              >
                List Business
              </Button>
              <Row className="items-center justify-center xl:ml-[109px] 2xl:ml-[123px] 3xl:ml-[147px] lg:ml-[87px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[47%]">
                <Text className="rowconfirmation" variant="body3">
                  Already have an account?
                </Text>
                <Column
                  className="common-pointer items-center ml-[4px] p-[4px] rounded-radius6 w-[21%]"
                  onClick={handleNavigate32}
                >
                  <Text className="Link" variant="body3">
                    Login
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SignupPage;
