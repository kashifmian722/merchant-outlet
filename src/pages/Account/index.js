import React from "react";

import {
  Column,
  Row,
  Line,
  List,
  Text,
  Img,
  Input,
  SelectBox,
  Button,
  Stack,
  Switch,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const navigate = useNavigate();

  function handleNavigate21() {
    navigate("/");
  }
  function handleNavigate29() {
    navigate("/products");
  }
  function handleNavigate30() {
    navigate("/orders");
  }

  return (
    <>
      <Column className="bg-cyan_51 font-poppins items-center justify-start mx-[auto] shadow-bs2 w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <Sidebar
            className="w-[16%]"
            onrowmobileClick={handleNavigate21}
            onrowcalendarClick={handleNavigate29}
            onrowfolderClick={handleNavigate30}
          />
          <Column className="font-roboto items-center w-[79%]">
            <Row className="items-start justify-between w-[100%]">
              <Column className="bg-white_A700 items-center justify-start lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius12 shadow-bs3 w-[86%]">
                <Column className="justify-start px-[2px] w-[94%]">
                  <Line className="bg-light_blue_A700 h-[4px] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] rotate-[180deg] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] w-[28%]" />
                  <List
                    className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] lg:gap-[8px] grid grid-cols-3 min-h-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="Content">
                      <Text
                        className="font-bold text-light_blue_A700 w-[auto]"
                        variant="body4"
                      >
                        Business Contact Information
                      </Text>
                    </Column>
                    <Column className="Content">
                      <Text className="iTem1" variant="body4">
                        Business Services And Legals
                      </Text>
                    </Column>
                    <Column className="Content">
                      <Text className="iTem1" variant="body4">
                        Media
                      </Text>
                    </Column>
                  </List>
                </Column>
              </Column>
              <Row className="items-center justify-between lg:mb-[28px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[48px] w-[13%]">
                <Img
                  src="images/img_notification.svg"
                  className="notification"
                  alt="notification"
                />
                <Img
                  src="images/img_orkiyalogopng.png"
                  className="orkiyalogopng4"
                  alt="orkiyalogopng"
                />
              </Row>
            </Row>
            <Row className="font-inter items-start justify-between lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]">
              <Column className="justify-start w-[64%]">
                <Row className="items-center justify-between w-[100%]">
                  <Column className="w-[43%]">
                    <Text className="Input" variant="body3">
                      Business Name
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_201 Input1"
                      wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                      type="text"
                      name="Input"
                      placeholder="Enter business name here"
                    ></Input>
                  </Column>
                  <Column className="w-[43%]">
                    <Text className="Input" variant="body3">
                      Business Registration Number
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_201 Input1"
                      wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] w-[100%] xl:mt-[9px]"
                      name="Input One"
                      placeholder="Enter businesss Registration No here"
                    ></Input>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                  <Column className="w-[43%]">
                    <Text className="Input" variant="body3">
                      Categories
                    </Text>
                    <SelectBox
                      className="font-normal lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_500 tracking-ls1 w-[100%]"
                      placeholderClassName="text-bluegray_500"
                      name="DropdownMenu"
                      placeholder="Select Category"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="lg:w-[17px] lg:h-[18px] lg:mr-[11px] xl:w-[21px] xl:h-[22px] xl:mr-[14px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[16px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[19px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </Column>
                  <Column className="w-[43%]">
                    <Text className="Input" variant="body3">
                      Longitude
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_201 Input1"
                      wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] w-[100%] xl:mt-[9px]"
                      name="Input Two"
                      placeholder="31.4818807"
                      variant="OutlineIndigo501_2"
                    ></Input>
                  </Column>
                </Row>
                <Img
                  src="images/img_arrowup.svg"
                  className="lg:ml-[338px] xl:ml-[423px] 2xl:ml-[476px] 3xl:ml-[571px] mt-[1px] trendingdown"
                  alt="arrowup"
                />
                <Row className="items-start justify-between mt-[1px] w-[100%]">
                  <Column className="justify-start mt-[4px] w-[43%]">
                    <Text className="Input" variant="body3">
                      Owner Name
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_201 Input1"
                      wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                      type="text"
                      name="Input Three"
                      placeholder="Enter owner’s name here"
                    ></Input>
                  </Column>
                  <Column className="justify-start mb-[4px] w-[43%]">
                    <Text className="Input" variant="body3">
                      Lattitude
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_201 Input1"
                      wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                      name="Input Four"
                      placeholder="74.3848524"
                      variant="OutlineIndigo501_2"
                    ></Input>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
                  <Column className="mt-[1px] w-[43%]">
                    <Text className="Input" variant="body3">
                      Phone Number
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_201 Input1"
                      wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                      type="number"
                      name="Input Five"
                      placeholder="Enter phone number"
                    ></Input>
                  </Column>
                  <Column className="w-[43%]">
                    <Text className="Input" variant="body3">
                      Delivery Area (KM)
                    </Text>
                    <Text
                      className="bg-white_A700 border border-indigo_50 border-solid font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius8 text-bluegray_201 tracking-ls1 w-[300px]"
                      variant="body3"
                    >
                      0
                    </Text>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                  <Column className="w-[43%]">
                    <Text className="Input" variant="body3">
                      Whatsapp Business Url
                    </Text>
                    <Row className="bg-white_A700 border border-indigo_50 border-solid items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] lg:pr-[131px] xl:pr-[164px] 2xl:pr-[185px] 3xl:pr-[222px] rounded-radius8 w-[100%]">
                      <Button
                        className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center tracking-ls1 w-[63%]"
                        shape="CustomBorderTL8"
                        size="lg"
                        variant="OutlineIndigo50"
                      >
                        http://
                      </Button>
                      <Text
                        className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic text-bluegray_201 tracking-ls1 w-[auto]"
                        variant="body3"
                      >
                        URL
                      </Text>
                    </Row>
                  </Column>
                  <Column className="mt-[1px] w-[43%]">
                    <Text className="Input" variant="body3">
                      Search Keywords
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_201 Input1"
                      wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] w-[100%] xl:mt-[9px]"
                      name="Input Seven"
                      placeholder="Enter Search Keywords"
                    ></Input>
                  </Column>
                </Row>
              </Column>
              <Column className="justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[30%]">
                <Stack
                  className="bg-cover bg-repeat lg:h-[197px] xl:h-[247px] 2xl:h-[278px] 3xl:h-[333px] lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] 2xl:px-[102px] 3xl:px-[122px] lg:px-[72px] xl:px-[90px] rounded-radius10 w-[91%]"
                  style={{ backgroundImage: "url('images/img_figmap.png')" }}
                >
                  <Img
                    src="images/img_defaultmarker.svg"
                    className="absolute bottom-[7%] 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] left-[0] rounded-radius161 w-[1%]"
                    alt="Defaultmarker"
                  />
                </Stack>
                <Row className="items-end lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[62%]">
                  <Switch value={true} className="w-[17%]" />
                  <Column className="items-center justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[93%]">
                    <Text
                      className="font-medium text-black_900 tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Publush your store on Orkiya
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Row>
            <Row className="items-start justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]">
              <Column className="font-inter justify-start w-[27%]">
                <Text className="Input" variant="body3">
                  Email Address
                </Text>
                <Input
                  className="placeholder:text-bluegray_201 Input1"
                  wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                  type="email"
                  name="Input Eight"
                  placeholder="Enter Email"
                ></Input>
              </Column>
              <Column className="font-inter justify-start mt-[1px] w-[27%]">
                <Text className="Input" variant="body3">
                  Seo Keywords
                </Text>
                <Input
                  className="placeholder:text-bluegray_201 Input1"
                  wrapClassName="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] w-[100%] xl:mt-[9px]"
                  name="Input Nine"
                  placeholder="Enter Seo Keywords"
                ></Input>
              </Column>
              <Text
                className="bg-cyan_600 border border-cyan_601 border-solid font-poppins font-semibold lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[7px] xl:py-[9px] rounded-radius10 text-black_902 w-[300px]"
                as="h4"
                variant="h4"
              >
                Save
              </Text>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AccountPage;
