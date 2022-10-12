import React from "react";

import { Column, Row, Img, Line, List, Text, Stack, Button } from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const AccountInfoPage = () => {
  const navigate = useNavigate();

  function handleNavigate16() {
    navigate("/orders");
  }
  function handleNavigate17() {
    navigate("/account");
  }
  function handleNavigate18() {
    navigate("/");
  }
  function handleNavigate25() {
    navigate("/products");
  }

  return (
    <>
      <Column className="bg-cyan_51 font-poppins items-center justify-start mx-[auto] shadow-bs2 w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <Sidebar
            className="w-[16%]"
            onrowfolderClick={handleNavigate16}
            onrowinfoClick={handleNavigate17}
            onrowmobileClick={handleNavigate18}
            onrowcalendarClick={handleNavigate25}
          />
          <Column className="items-end w-[79%]">
            <Row className="items-center justify-end ml-[auto] w-[13%]">
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
            <Column className="justify-start mt-[4px] w-[100%]">
              <Column className="bg-white_A700 font-roboto items-center justify-start lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius12 shadow-bs3 w-[86%]">
                <Column className="justify-start px-[2px] w-[94%]">
                  <Line className="bg-light_blue_A700 h-[4px] lg:ml-[435px] xl:ml-[544px] 2xl:ml-[612px] 3xl:ml-[734px] rotate-[180deg] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] w-[28%]" />
                  <List
                    className="xl:gap-[10px] 2xl:gap-[12px] 3xl:gap-[14px] lg:gap-[8px] grid grid-cols-3 min-h-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="Content">
                      <Text className="iTem1" variant="body4">
                        Business Contact Information
                      </Text>
                    </Column>
                    <Column className="Content">
                      <Text className="iTem1" variant="body4">
                        Services And Legals
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
              <Column className="bg-white_A700 justify-start lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius16 shadow-bs4 w-[40%]">
                <Row className="font-dmsans items-end justify-between w-[100%]">
                  <Text className="rowuploadcoverim" as="h5" variant="h5">
                    Upload Image
                  </Text>
                  <Img
                    src="images/img_close.svg"
                    className="close"
                    alt="close"
                  />
                </Row>
                <Line className="bg-indigo_50 h-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius05 w-[100%]" />
                <Stack className="bg-gray_101 lg:h-[170px] xl:h-[213px] 2xl:h-[240px] 3xl:h-[287px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] 2xl:px-[103px] 3xl:px-[123px] lg:px-[73px] xl:px-[91px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_upload.svg"
                    className="absolute lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] inset-[0] justify-center m-[auto] lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                    alt="upload"
                  />
                </Stack>
                <Text
                  className="font-inter font-normal lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic text-bluegray_902 tracking-ls1 w-[auto]"
                  variant="body2"
                >
                  Product image resolution should be 470X720
                </Text>
                <Column className="font-inter items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[31%]">
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
              <Text
                className="bg-cyan_600 border border-cyan_601 border-solid font-poppins font-semibold lg:ml-[572px] xl:ml-[716px] 2xl:ml-[805px] 3xl:ml-[966px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[7px] xl:py-[9px] rounded-radius10 text-black_902 w-[300px]"
                as="h4"
                variant="h4"
              >
                Save
              </Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AccountInfoPage;
