import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Input,
  SelectBox,
  TextArea,
  Line,
  Button,
  Switch,
} from "components";
import { useNavigate } from "react-router-dom";

const UpdateProductPage = () => {
  const navigate = useNavigate();

  function handleNavigate10() {
    navigate("/account");
  }
  function handleNavigate11() {
    navigate("/");
  }
  function handleNavigate19() {
    navigate("/products");
  }
  function handleNavigate20() {
    navigate("/orders");
  }

  return (
    <>
      <Column className="bg-cyan_51 font-poppins items-center justify-start mx-[auto] lg:pb-[23px] xl:pb-[29px] 2xl:pb-[33px] 3xl:pb-[39px] lg:pr-[23px] xl:pr-[29px] 2xl:pr-[33px] 3xl:pr-[39px] shadow-bs2 w-[100%]">
        <Row className="items-start justify-between w-[100%]">
          <aside className="w-[16%]">
            <div className="">
              <Column className="justify-start lg:mb-[46px] xl:mb-[57px] 2xl:mb-[65px] 3xl:mb-[78px] lg:mt-[39px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] mx-[auto] w-[71%]">
                <Img
                  src="images/img_cimenualt05.svg"
                  className="lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] ml-[4px] w-[19%]"
                  alt="cimenualtFive"
                />
                <Row className="items-center ml-[2px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[99%]">
                  <Img
                    src="images/img_home.svg"
                    className="lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] w-[18%]"
                    alt="home"
                  />
                  <Text
                    className="lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] not-italic text-bluegray_700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Dashboard
                  </Text>
                </Row>
                <Row
                  className="common-pointer items-center ml-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[86%]"
                  onClick={handleNavigate19}
                >
                  <Img
                    src="images/img_calendar_29X29.svg"
                    className="lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:w-[20px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                    alt="calendar"
                  />
                  <Text
                    className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] not-italic text-black_902 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Products
                  </Text>
                </Row>
                <Row
                  className="common-pointer items-start ml-[4px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[72%]"
                  onClick={handleNavigate20}
                >
                  <Img
                    src="images/img_folder.svg"
                    className="trendingdown"
                    alt="folder"
                  />
                  <Text
                    className="lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] mt-[2px] not-italic text-bluegray_700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Orders
                  </Text>
                </Row>
                <Row
                  className="common-pointer items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[86%]"
                  onClick={handleNavigate10}
                >
                  <Img
                    src="images/img_info_1.svg"
                    className="lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[26%]"
                    alt="info"
                  />
                  <Text
                    className="lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] not-italic text-bluegray_700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Account
                  </Text>
                </Row>
                <Row className="items-end ml-[1px] lg:mt-[218px] xl:mt-[273px] 2xl:mt-[307px] 3xl:mt-[368px] w-[87%]">
                  <Img
                    src="images/img_user_27X27.svg"
                    className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                    alt="user"
                  />
                  <Text
                    className="lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-bluegray_700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Support
                  </Text>
                </Row>
                <Row
                  className="common-pointer items-end lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[87%]"
                  onClick={handleNavigate11}
                >
                  <Img
                    src="images/img_mobile.svg"
                    className="lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                    alt="mobile"
                  />
                  <Text
                    className="mb-[4px] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic text-bluegray_700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Log Out
                  </Text>
                </Row>
              </Column>
            </div>
          </aside>
          <Column className="font-inter items-center justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[79%]">
            <Row className="items-start justify-between w-[100%]">
              <Column className="items-center justify-start xl:mt-[116px] 2xl:mt-[131px] 3xl:mt-[157px] lg:mt-[93px] w-[27%]">
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
                    placeholder="Desi, Spicy"
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
              <Column className="items-end justify-start lg:mb-[25px] xl:mb-[32px] 2xl:mb-[36px] 3xl:mb-[43px] w-[64%]">
                <Row className="items-center justify-end ml-[auto] w-[20%]">
                  <Img
                    src="images/img_notification.svg"
                    className="notification"
                    alt="notification"
                  />
                  <Img
                    src="images/img_orkiyalogopng.png"
                    className="orkiyalogopng3"
                    alt="orkiyalogopng"
                  />
                </Row>
                <Column className="justify-start lg:mt-[54px] xl:mt-[67px] 2xl:mt-[76px] 3xl:mt-[91px] w-[100%]">
                  <Text className="Input" variant="body3">
                    Product Description
                  </Text>
                  <Column className="bg-white_A700 border border-indigo_50 border-solid justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]">
                    <Text
                      className="font-normal lg:mr-[130px] xl:mr-[163px] 2xl:mr-[184px] 3xl:mr-[220px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic text-bluegray_500 tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                    <Img
                      src="images/img_signal.svg"
                      className="lg:mb-[17px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] lg:ml-[469px] xl:ml-[587px] 2xl:ml-[660px] 3xl:ml-[792px] signal"
                      alt="signal"
                    />
                  </Column>
                </Column>
              </Column>
            </Row>
            <Row className="items-center justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <Column className="items-center mt-[1px] w-[64%]">
                <Row className="items-center justify-between w-[99%]">
                  <Column className="w-[42%]">
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
                  <Column className="mt-[1px] w-[42%]">
                    <Text className="Input" variant="body3">
                      Purchase Price
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_201 Input1"
                      wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                      type="text"
                      name="Input Two"
                      placeholder="Enter Product Name"
                    ></Input>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]">
                  <Column className="w-[42%]">
                    <Text className="Input" variant="body3">
                      List Price
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_201 Input1"
                      wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                      type="text"
                      name="Input Three"
                      placeholder="Enter Product Name"
                    ></Input>
                  </Column>
                  <Column className="w-[42%]">
                    <Text className="Input" variant="body3">
                      Tax
                    </Text>
                    <SelectBox
                      className="font-normal 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_902 tracking-ls1 w-[100%]"
                      placeholderClassName="text-bluegray_902"
                      name="DropdownMenu One"
                      placeholder="7% Standard"
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
                </Row>
                <Row className="items-center justify-between lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Column className="mt-[1px] w-[42%]">
                    <Text className="Input" variant="body3">
                      Stock
                    </Text>
                    <Input
                      className="placeholder:text-bluegray_201 Input1"
                      wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%] xl:mt-[11px]"
                      name="Input Four"
                      placeholder="Enter Stock"
                    ></Input>
                  </Column>
                  <Column className="mb-[1px] w-[43%]">
                    <Text className="Input" variant="body3">
                      Available Stock
                    </Text>
                    <Text
                      className="bg-white_A700 border border-indigo_50 border-solid font-normal xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius8 text-bluegray_201 tracking-ls1 w-[300px]"
                      variant="body3"
                    >
                      0
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="items-center w-[27%]">
                <Column className="justify-start w-[100%]">
                  <Text className="Input" variant="body3">
                    Search Keywords
                  </Text>
                  <TextArea
                    className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-bluegray_201 text-bluegray_201 tracking-ls1 w-[100%]"
                    name="Textboxes"
                    placeholder="Food,American Food, Burgers"
                  ></TextArea>
                </Column>
                <Column className="justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[100%]">
                  <Text className="Input" variant="body3">
                    Seo Keywords
                  </Text>
                  <Column className="bg-white_A700 border border-indigo_50 border-solid justify-end 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]">
                    <Text
                      className="font-normal lg:mr-[54px] xl:mr-[67px] 2xl:mr-[76px] 3xl:mr-[91px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic text-bluegray_201 tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Food,American Food, Burgers
                    </Text>
                    <Img
                      src="images/img_signal.svg"
                      className="lg:ml-[184px] xl:ml-[231px] 2xl:ml-[260px] 3xl:ml-[312px] signal"
                      alt="signal Two"
                    />
                  </Column>
                </Column>
              </Column>
            </Row>
            <Column className="justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[99%]">
              <Text className="Input" variant="body3">
                Product Images
              </Text>
              <Column className="bg-white_A700 justify-start mt-[2px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 shadow-bs4 w-[100%]">
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
                <Row className="bg-gray_101 items-center justify-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_upload.svg"
                    className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:ml-[110px] xl:ml-[137px] 2xl:ml-[155px] 3xl:ml-[186px] w-[10%]"
                    alt="upload"
                  />
                  <Img
                    src="images/img_group.svg"
                    className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] my-[2px] w-[24%]"
                    alt="Group"
                  />
                  <Img
                    src="images/img_upload.svg"
                    className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[10%]"
                    alt="upload One"
                  />
                  <Img
                    src="images/img_group.svg"
                    className="lg:h-[43px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 2xl:mr-[106px] 3xl:mr-[127px] lg:mr-[75px] xl:mr-[94px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[24%]"
                    alt="Group One"
                  />
                </Row>
                <Text
                  className="font-inter font-normal lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic text-bluegray_902 tracking-ls1 w-[93%]"
                  variant="body2"
                >
                  <span className="text-bluegray_902 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Product image resolution should be 470X720. File types
                    supported: Jpeg. Png, Webp.{" "}
                  </span>
                  <span className="text-red_800 lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                    Upload PNG,WEbp with transparent background for consistency
                    of experiance.
                  </span>
                </Text>
                <Column className="font-inter items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[11%]">
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
            <Row className="items-start justify-between lg:mt-[37px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] w-[99%]">
              <Row className="font-inter items-start justify-between w-[23%]">
                <Switch value={true} className="w-[17%]" />
                <Column className="justify-end pr-[3px] py-[3px] w-[77%]">
                  <Text className="Label4" variant="body3">
                    Product Status
                  </Text>
                </Column>
              </Row>
              <Text
                className="bg-cyan_600 border border-cyan_601 border-solid font-poppins font-semibold mt-[2px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[7px] xl:py-[9px] rounded-radius10 text-black_902 w-[300px]"
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

export default UpdateProductPage;
