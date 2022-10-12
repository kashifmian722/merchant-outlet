import React from "react";

import { Column, Row, Img, Text, Stack, Line, Input, Button } from "components";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const HomeLoginPage = () => {
  const navigate = useNavigate();
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  function handleNavigate() {
    navigate("/dashboard");
  }
  function handleNavigate1() {
    navigate("/signup");
  }
  function handleNavigate9() {
    navigate("/signup");
  }

  return (
    <>
      <Column className="bg-cyan_50 font-poppins items-center justify-end mx-[auto] lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] w-[100%]">
        <Row className="items-start justify-between w-[100%]">
          <Column className="justify-start w-[43%]">
            <Img
              src="images/img_orkiyalogopng.png"
              className="lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] w-[17%]"
              alt="orkiyalogopng"
            />
            <Column className="justify-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[110px] xl:mt-[137px] 2xl:mt-[155px] 3xl:mt-[186px] w-[94%]">
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
            <Text
              className="common-pointer bg-orange_400 font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[39px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] not-italic lg:pb-[17px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] lg:pt-[20px] xl:pt-[25px] 2xl:pt-[29px] 3xl:pt-[34px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] rounded-radius10 text-teal_900 w-[589px]"
              as="h4"
              variant="h4"
              onClick={handleNavigate9}
            >
              List your business
            </Text>
          </Column>
          <Column className="border border-bluegray_50 border-solid font-inter items-center justify-start lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius12 w-[45%]">
            <Column className="items-center justify-start w-[21%]">
              <Text className="columnlogin" as="h2" variant="h2">
                Login
              </Text>
            </Column>
            <Column className="items-center justify-start lg:mb-[100px] xl:mb-[126px] 2xl:mb-[142px] 3xl:mb-[170px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[97%]">
              <Row className="items-center justify-between w-[100%]">
                <Row
                  className="common-pointer bg-white_A700 border border-bluegray_50 border-solid items-center justify-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius6 w-[49%]"
                  onClick={googleSignIn}
                >
                  <Stack className="lg:ml-[56px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] px-[4px] trendingdown">
                    <Img
                      src="images/img_google1.png"
                      className="absolute lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] inset-[0] justify-center m-[auto] lg:w-[11px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                      alt="googleOne"
                    />
                  </Stack>
                  <Text
                    className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] 3xl:mr-[105px] lg:mr-[62px] xl:mr-[78px] 2xl:mr-[88px] text-black_900 tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    Google
                  </Text>
                </Row>
                <Row className="bg-white_A700 border border-bluegray_50 border-solid items-center justify-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius6 w-[49%]">
                  <Img
                    src="images/img_facebook.svg"
                    className="lg:ml-[50px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] trendingdown"
                    alt="facebook"
                  />
                  <Text
                    className="font-medium lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mr-[56px] xl:mr-[70px] 2xl:mr-[79px] 3xl:mr-[94px] text-black_900 tracking-ls1 w-[auto]"
                    variant="body3"
                  >
                    Facebook
                  </Text>
                </Row>
              </Row>
              <Row className="items-start justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Line className="bg-gray_100 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[43%]" />
                <Column className="items-center justify-end lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[6%]">
                  <Text
                    className="flex font-normal items-center mt-[1px] not-italic text-gray_600 tracking-ls1 w-[auto]"
                    variant="body4"
                  >
                    or
                  </Text>
                </Column>
                <Line className="bg-gray_100 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[43%]" />
              </Row>
              <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Column className="justify-start pr-[4px] py-[4px] w-[100%]">
                  <Text className="Label" variant="body3">
                    Email address
                  </Text>
                </Column>
                <Input
                  className="placeholder:text-bluegray_200 ContainerInp"
                  wrapClassName="flex mt-[4px] w-[100%]"
                  name="ContainerInp"
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
                  name="ContainerInp One"
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
              <Button
                className="common-pointer font-medium lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center tracking-ls1 w-[100%]"
                onClick={handleNavigate}
                shape="RoundedBorder6"
                variant="FillTeal900"
              >
                Login
              </Button>
              <Row className="items-center justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[39%]">
                <Text className="rowconfirmation" variant="body3">
                  Don’t have an account?
                </Text>
                <Column
                  className="common-pointer items-center ml-[4px] p-[4px] rounded-radius6 w-[29%]"
                  onClick={handleNavigate1}
                >
                  <Text className="Link" variant="body3">
                    Register
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

export default HomeLoginPage;
