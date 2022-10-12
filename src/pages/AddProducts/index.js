import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Input,
  SelectBox,
  Line,
  Stack,
  Button,
  Switch,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const AddProductsPage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/products");
  }
  function handleNavigate6() {
    navigate("/orders");
  }
  function handleNavigate7() {
    navigate("/account");
  }
  function handleNavigate8() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-cyan_51 font-poppins items-center justify-start mx-[auto] shadow-bs2 w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <Sidebar
            className="w-[16%]"
            onrowcalendarClick={handleNavigate5}
            onrowfolderClick={handleNavigate6}
            onrowinfoClick={handleNavigate7}
            onrowmobileClick={handleNavigate8}
          />
          <Column className="font-inter w-[79%]">
            <Row className="items-center justify-between w-[100%]">
              <Text
                className="not-italic text-bluegray_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Add Product
              </Text>
              <Row className="items-center justify-between w-[13%]">
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
            <Row className="items-center lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[94%]">
              <Column className="items-center w-[28%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="Input" variant="body3">
                      Product Name
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_201 Input1"
                      wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                      type="text"
                      name="Input"
                      placeholder="Enter business name here"
                    ></Input>
                  </Column>
                  <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
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
                  <Column className="justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                    <Text className="Input" variant="body3">
                      Price
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_201 Input1"
                      wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                      name="Input One"
                      placeholder="Enter Gross Price"
                    ></Input>
                  </Column>
                  <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]">
                    <Text className="Input" variant="body3">
                      Stock
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_201 Input1"
                      wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                      name="Input Two"
                      placeholder="Enter Stock"
                    ></Input>
                  </Column>
                </Column>
                <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                  <Text className="Input" variant="body3">
                    Tax
                  </Text>
                  <SelectBox
                    className="font-normal 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_500 tracking-ls1 w-[100%]"
                    placeholderClassName="text-bluegray_500"
                    name="DropdownMenu One"
                    placeholder="Select Tax %"
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
              </Column>
              <Column className="items-center 2xl:ml-[104px] 3xl:ml-[124px] lg:ml-[73px] xl:ml-[92px] mt-[1px] w-[62%]">
                <Column className="justify-start w-[100%]">
                  <Text className="Input" variant="body3">
                    Product Description
                  </Text>
                  <Column className="bg-white_A700 border border-indigo_50 border-solid justify-end 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]">
                    <Text
                      className="font-normal xl:mr-[109px] 2xl:mr-[123px] 3xl:mr-[147px] lg:mr-[87px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic text-bluegray_500 tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                    <Img
                      src="images/img_signal.svg"
                      className="lg:ml-[425px] xl:ml-[532px] 2xl:ml-[599px] 3xl:ml-[719px] signal"
                      alt="signal"
                    />
                  </Column>
                </Column>
                <Column className="justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                  <Text className="Input" variant="body3">
                    Product Images
                  </Text>
                  <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 shadow-bs4 w-[100%]">
                    <Row className="font-dmsans items-end justify-between w-[100%]">
                      <Text className="rowuploadcoverim" as="h5" variant="h5">
                        Upload Images
                      </Text>
                      <Img
                        src="images/img_close.svg"
                        className="close"
                        alt="close"
                      />
                    </Row>
                    <Line className="bg-indigo_50 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius05 w-[100%]" />
                    <Stack className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <div className="absolute bg-gray_101 lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] rounded-radius10 top-[10%] w-[100%]"></div>
                      <Row className="absolute inset-x-[32%] items-center justify-center w-[36%]">
                        <Img
                          src="images/img_upload.svg"
                          className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] w-[27%]"
                          alt="upload"
                        />
                        <Img
                          src="images/img_group.svg"
                          className="lg:h-[37px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[68%]"
                          alt="Group"
                        />
                      </Row>
                    </Stack>
                    <Text
                      className="font-inter font-normal lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic text-bluegray_902 tracking-ls1 w-[93%]"
                      variant="body2"
                    >
                      <span className="text-bluegray_902 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        Product image resolution should be 470X720. File types
                        supported: Jpeg. Png, Webp.{" "}
                      </span>
                      <span className="text-red_800 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                        Upload PNG,WEbp with transparent background for
                        consistency of experiance.
                      </span>
                    </Text>
                    <Column className="font-inter items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[20%]">
                      <Button
                        className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center tracking-ls1 w-[100%]"
                        shape="CircleBorder24"
                        size="lg"
                        variant="FillRedA400"
                      >
                        Upload
                      </Button>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Row>
            <Row className="items-start ml-[3px] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[94%]">
              <Row className="font-inter items-start justify-between w-[24%]">
                <Switch value={true} className="w-[17%]" />
                <Column className="justify-end pr-[3px] py-[3px] w-[77%]">
                  <Text className="Label4" variant="body3">
                    Product Status
                  </Text>
                </Column>
              </Row>
              <Text
                className="bg-cyan_600 border border-cyan_601 border-solid font-poppins font-semibold lg:ml-[342px] xl:ml-[427px] 2xl:ml-[481px] 3xl:ml-[577px] mt-[3px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[7px] xl:py-[9px] rounded-radius10 text-black_902 w-[300px]"
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

export default AddProductsPage;
