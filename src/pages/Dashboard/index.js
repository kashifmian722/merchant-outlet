import React from "react";

import {
  Column,
  Row,
  Img,
  Button,
  Text,
  List,
  Stack,
  Input,
  Line,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  function handleNavigate12() {
    navigate("/products");
  }
  function handleNavigate13() {
    navigate("/orders");
  }
  function handleNavigate14() {
    navigate("/account");
  }
  function handleNavigate15() {
    navigate("/");
  }

  return (
    <>
      <Column className="bg-cyan_50 font-poppins items-center justify-end mx-[auto] lg:pr-[26px] xl:pr-[32px] 2xl:pr-[37px] 3xl:pr-[44px] w-[100%]">
        <Row className="items-start justify-between w-[100%]">
          <Sidebar
            className="w-[16%]"
            onrowcalendarClick={handleNavigate12}
            onrowfolderClick={handleNavigate13}
            onrowinfoClick={handleNavigate14}
            onrowmobileClick={handleNavigate15}
          />
          <Column className="font-inter justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[79%]">
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
            <Row className="items-start justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[95%]">
              <Column className="bg-cyan_200 justify-start 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius20 w-[27%]">
                <Column className="justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[78%]">
                  <Row className="items-start justify-between ml-[4px] w-[98%]">
                    <Column className="bg-white_A700 items-center justify-start mt-[3px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius2707 w-[27%]">
                      <Button
                        className="flex lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] items-center justify-center mb-[1px] lg:w-[23px] xl:w-[29px] 2xl:w-[33px] 3xl:w-[39px]"
                        size="smIcn"
                        variant="icbFillWhiteA700"
                      >
                        <Img
                          src="images/img_fire.svg"
                          className="flex items-center justify-center"
                          alt="fire"
                        />
                      </Button>
                    </Column>
                    <Row className="items-start justify-between w-[29%]">
                      <Text
                        className="mt-[4px] tracking-ls1 columntopselling"
                        variant="body3"
                      >
                        Today
                      </Text>
                      <Button
                        className="flex lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] items-center justify-center rotate-[90deg] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px] lg:w-[9px]"
                        size="smIcn"
                        variant="icbFillCyan200"
                      >
                        <Img
                          src="images/img_arrowleft.svg"
                          className="flex items-center justify-center"
                          alt="arrowleft"
                        />
                      </Button>
                    </Row>
                  </Row>
                  <Text
                    className="ml-[4px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] tracking-ls1 columntopselling"
                    variant="body2"
                  >
                    Turnover
                  </Text>
                  <Text
                    className="font-normal lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] text-teal_900 tracking-ls1 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    <span className="text-black_902 font-inter lg:text-[22px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px]">
                      4,509
                    </span>
                    <span className="text-black_902 font-inter not-italic lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      PKR
                    </span>
                  </Text>
                  <Row className="items-end justify-between ml-[4px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[96%]">
                    <div className="bg-black_902 lg:h-[28px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] rounded-radius338 w-[3%]"></div>
                    <div className="bg-black_902 lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] rounded-radius338 w-[3%]"></div>
                    <div className="bg-black_902 lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rounded-radius338 w-[3%]"></div>
                    <div className="bg-black_902 lg:h-[28px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] rounded-radius338 w-[3%]"></div>
                    <div className="bg-black_902 lg:h-[42px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] rounded-radius338 w-[3%]"></div>
                    <div className="bg-black_902 3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] rounded-radius338 w-[3%]"></div>
                    <div className="bg-black_902 lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rounded-radius338 w-[3%]"></div>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-cyan_200 font-poppins justify-start p-[4px] rounded-radius24 shadow-bs w-[40%]">
                <Column className="justify-start lg:mb-[17px] xl:mb-[21px] 2xl:mb-[24px] 3xl:mb-[28px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[86%]">
                  <Row className="items-center w-[96%]">
                    <Column className="items-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[31%]">
                      <Text
                        className="font-normal my-[3px] not-italic text-bluegray_901 w-[auto]"
                        variant="body2"
                      >
                        Statistics
                      </Text>
                    </Column>
                    <Img
                      src="images/img_user_24X24.svg"
                      className="lg:ml-[150px] xl:ml-[188px] 2xl:ml-[212px] 3xl:ml-[254px] trendingdown"
                      alt="user One"
                    />
                  </Row>
                  <List
                    className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-2 min-h-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="border border-cyan_300 border-solid items-end justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius24 w-[100%]">
                      <Button
                        className="flex lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center rounded-radius50 lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                        size="mdIcn"
                        variant="icbFillWhiteA700"
                      >
                        <Img
                          src="images/img_vector.svg"
                          className="flex items-center justify-center lg:h-[10px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px]"
                          alt="Vector"
                        />
                      </Button>
                      <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pr-[1px] py-[1px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_400 w-[auto]"
                          variant="body4"
                        >
                          New
                        </Text>
                        <Row className="items-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[47%]">
                          <Text className="wrap" as="h3" variant="h3">
                            32
                          </Text>
                          <Img
                            src="images/img_checkmark_24X24.svg"
                            className="ml-[4px] mt-[4px] trendingdown"
                            alt="checkmark"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="border border-cyan_300 border-solid justify-start lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius24 w-[100%]">
                      <Button
                        className="flex lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] items-center justify-center rounded-radius50 lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                        size="mdIcn"
                        variant="icbFillWhiteA700"
                      >
                        <Img
                          src="images/img_user_32X32.svg"
                          className="flex items-center justify-center lg:h-[8px] xl:h-[9px] 2xl:h-[11px] 3xl:h-[13px]"
                          alt="user Two"
                        />
                      </Button>
                      <Column className="justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pb-[4px] w-[56%]">
                        <Text
                          className="font-medium text-bluegray_400 w-[auto]"
                          variant="body4"
                        >
                          Returning
                        </Text>
                        <Row className="items-center justify-evenly mt-[3px] w-[100%]">
                          <Text className="wrap" as="h3" variant="h3">
                            128
                          </Text>
                          <Img
                            src="images/img_trendingdown.svg"
                            className="trendingdown"
                            alt="trendingdown"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </List>
                </Column>
              </Column>
              <Stack className="font-inter lg:h-[210px] xl:h-[262px] 2xl:h-[295px] 3xl:h-[354px] w-[27%]">
                <Row className="absolute bg-cyan_200 bottom-[2%] items-start lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius20 shadow-bs1 w-[100%]">
                  <Stack className="lg:h-[112px] xl:h-[140px] 2xl:h-[158px] 3xl:h-[189px] 3xl:mb-[117px] lg:mb-[69px] xl:mb-[87px] 2xl:mb-[98px] w-[56%]">
                    <Column className="absolute bg-red_A400 bottom-[0] lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] items-center justify-end lg:px-[37px] xl:px-[47px] 2xl:px-[53px] 3xl:px-[63px] rounded-radius50 w-[100%]">
                      <Column className="items-center justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[55%]">
                        <Text
                          className="text-black_902 tracking-ls1 w-[auto]"
                          variant="body1"
                        >
                          79
                        </Text>
                        <Text
                          className="mt-[4px] not-italic text-black_902 tracking-ls1 w-[auto]"
                          variant="body5"
                        >
                          Total
                        </Text>
                      </Column>
                    </Column>
                    <Text
                      className="absolute left-[13%] top-[0] tracking-ls1 columntopselling"
                      variant="body2"
                    >
                      Orders{" "}
                    </Text>
                  </Stack>
                  <Column className="bg-purple_700 2xl:h-[101px] 3xl:h-[121px] lg:h-[72px] xl:h-[89px] items-center justify-start ml-[3px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:px-[19px] xl:px-[24px] 2xl:px-[28px] 3xl:px-[33px] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[71px] xl:w-[88px]">
                    <Column className="items-center justify-start mb-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[93%]">
                      <Text
                        className="text-black_902 tracking-ls1 w-[auto]"
                        variant="body1"
                      >
                        25
                      </Text>
                      <Text
                        className="lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-black_902 tracking-ls1 w-[auto]"
                        variant="body5"
                      >
                        Delivery
                      </Text>
                    </Column>
                  </Column>
                </Row>
                <Column className="absolute bg-pink_100 bottom-[0] lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] inset-x-[0] items-center justify-end mx-[auto] lg:px-[34px] xl:px-[43px] 2xl:px-[49px] 3xl:px-[58px] rounded-radius50 lg:w-[106px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]">
                  <Column className="items-center justify-start mb-[4px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[96%]">
                    <Text
                      className="text-black_902 tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      54
                    </Text>
                    <Text
                      className="mt-[4px] not-italic text-black_902 tracking-ls1 w-[auto]"
                      variant="body5"
                    >
                      Deliveries
                    </Text>
                  </Column>
                </Column>
              </Stack>
            </Row>
            <Row className="font-poppins items-start lg:mr-[34px] xl:mr-[42px] 2xl:mr-[48px] 3xl:mr-[57px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[96%]">
              <Stack className="lg:h-[229px] xl:h-[287px] 2xl:h-[323px] 3xl:h-[387px] w-[72%]">
                <Column className="absolute items-center justify-end p-[3px] rounded-radius12 top-[2%] w-[100%]">
                  <Row className="bg-white_A700_1c items-center 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius6 w-[98%]">
                    <Column className="items-center rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[27%]">
                      <Input
                        className="font-medium p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-black_902 text-black_902 w-[100%]"
                        wrapClassName="w-[100%]"
                        name="Row"
                        placeholder="Date & Time"
                        shape="CustomBorderTL8"
                        size="sm"
                        variant="FillCyan200"
                      ></Input>
                      <Column className="font-inter justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                        <Text className="columnjaydonherwitz" variant="body3">
                          20 Sep 2022, 00:55:53
                        </Text>
                      </Column>
                      <Column className="font-inter justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                        <Text className="columnjaydonherwitz" variant="body3">
                          19 Sep 2022, 00:18:15
                        </Text>
                      </Column>
                      <Column className="font-inter justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                        <Text className="columnjaydonherwitz" variant="body3">
                          22 Sep 2022, 12:10:56
                          <br />
                        </Text>
                      </Column>
                      <Column className="font-inter justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                        <Text className="columnjaydonherwitz" variant="body3">
                          26 Sep 2022, 13:02:51
                        </Text>
                      </Column>
                      <Column className="font-inter justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                        <Text className="columnjaydonherwitz" variant="body3">
                          26 Sep 2022, 13:02:51
                        </Text>
                      </Column>
                    </Column>
                    <List
                      className="gap-[0] grid grid-cols-3 min-h-[auto] w-[57%]"
                      orientation="horizontal"
                    >
                      <Column className="items-center justify-start w-[100%]">
                        <Button className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_902 text-center w-[100%]">
                          Order#
                        </Button>
                        <Column className="font-inter items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            10003
                          </Text>
                        </Column>
                        <Column className="font-inter items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            10002
                          </Text>
                        </Column>
                        <Column className="font-inter items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            10007
                          </Text>
                        </Column>
                        <Column className="font-inter items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            10011
                          </Text>
                        </Column>
                        <Column className="font-inter items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            10011
                          </Text>
                        </Column>
                      </Column>
                      <Line className="self-center w-[48%] rounded-tl-[4px] rounded-tr-[0] rounded-bl-[0] rounded-br-[0] justify-start items-center" />
                      <Column className="font-inter items-center justify-start w-[100%]">
                        <Text className="Column" variant="body2">
                          Status
                        </Text>
                        <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                          <Text
                            className="font-medium text-black_902 w-[auto]"
                            variant="body3"
                          >
                            Delivered
                          </Text>
                        </Column>
                        <Column className="items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Text
                            className="font-medium mt-[1px] text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            Open
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            Cancelled
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            Paid
                          </Text>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            Paid
                          </Text>
                        </Column>
                      </Column>
                      <Line className="self-center w-[48%] rounded-tl-[4px] rounded-tr-[0] rounded-bl-[0] rounded-br-[0] justify-start items-center" />
                      <Column className="font-inter items-center justify-start w-[100%]">
                        <Text className="Column" variant="body2">
                          Total
                        </Text>
                        <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Text className="Row4" variant="body3">
                            1985 PKR
                          </Text>
                        </Column>
                        <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Text className="Row4" variant="body3">
                            6140 PKR
                          </Text>
                        </Column>
                        <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Text className="Row4" variant="body3">
                            2175 PKR
                          </Text>
                        </Column>
                        <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Text className="Row4" variant="body3">
                            1960 PKR
                          </Text>
                        </Column>
                        <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                          <Text className="Row4" variant="body3">
                            1960 PKR
                          </Text>
                        </Column>
                      </Column>
                    </List>
                    <Column className="font-inter items-center ml-[1px] w-[16%]">
                      <Text
                        className="rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] Column"
                        variant="body2"
                      >
                        Actions
                      </Text>
                      <Column className="font-poppins items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[85%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Button
                            className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-cyan_200 w-[100%]"
                            shape="RoundedBorder6"
                            size="sm"
                            variant="OutlineCyan200"
                          >
                            View
                          </Button>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                          <Button
                            className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                            shape="RoundedBorder6"
                            size="sm"
                            variant="OutlineOrange400"
                          >
                            Update
                          </Button>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                          <Button
                            className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center text-cyan_200 w-[100%]"
                            shape="RoundedBorder6"
                            size="sm"
                            variant="OutlineCyan200"
                          >
                            View
                          </Button>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                          <Button
                            className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                            shape="RoundedBorder6"
                            size="sm"
                            variant="OutlineOrange400"
                          >
                            Update
                          </Button>
                        </Column>
                        <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                          <Button
                            className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                            shape="RoundedBorder6"
                            size="sm"
                            variant="OutlineOrange400"
                          >
                            Update
                          </Button>
                        </Column>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Text
                  className="absolute left-[2%] top-[0] columntopselling"
                  as="h4"
                  variant="h4"
                >
                  Last Orders
                </Text>
              </Stack>
              <Column className="justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[2px] w-[27%]">
                <Text className="columntopselling" as="h4" variant="h4">
                  Top Selling
                </Text>
                <Row className="font-inter items-start justify-evenly ml-[2px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:pb-[104px] 2xl:pb-[118px] 3xl:pb-[141px] lg:pb-[83px] w-[99%]">
                  <List
                    className="gap-[0] grid grid-cols-2 min-h-[auto] w-[57%]"
                    orientation="horizontal"
                  >
                    <Column className="items-center justify-start rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[100%]">
                      <Text
                        className="bg-cyan_200 font-normal lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:pr-[19px] xl:pr-[24px] 2xl:pr-[28px] 3xl:pr-[33px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] lg:py-[9px] rounded-bl-[8px] rounded-br-[0] rounded-tl-[8px] rounded-tr-[0] text-bluegray_900 w-[98px]"
                        variant="body3"
                      >
                        Product{" "}
                      </Text>
                      <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                        <Text className="columnproductcounter" variant="body3">
                          Product 1
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body3"
                        >
                          Product 2
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body3"
                        >
                          Product 3
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body3"
                        >
                          Product 4
                        </Text>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_900 w-[auto]"
                          variant="body3"
                        >
                          Product 5
                        </Text>
                      </Column>
                    </Column>
                    <Column className="items-center justify-start w-[100%]">
                      <Button className="font-normal xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_900 text-center w-[100%]">
                        Sold
                      </Button>
                      <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                        <Text
                          className="flex items-center columnproductcounter"
                          variant="body3"
                        >
                          15
                        </Text>
                      </Column>
                      <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                        <Text className="columnproductcounter" variant="body3">
                          7
                        </Text>
                      </Column>
                      <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                        <Text className="columnproductcounter" variant="body3">
                          25
                        </Text>
                      </Column>
                      <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                        <Text className="columnproductcounter" variant="body3">
                          5
                        </Text>
                      </Column>
                      <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                        <Text className="columnproductcounter" variant="body3">
                          3
                        </Text>
                      </Column>
                    </Column>
                  </List>
                  <Column className="items-center justify-start w-[43%]">
                    <Text
                      className="bg-cyan_200 font-normal lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[8px] rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] text-bluegray_900 w-[119px]"
                      variant="body3"
                    >
                      Ratings
                    </Text>
                    <Column className="items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[71%]">
                      <Img src="images/img_bag.svg" className="bag" alt="bag" />
                      <Img
                        src="images/img_bag.svg"
                        className="bag_One"
                        alt="bag One"
                      />
                      <Img
                        src="images/img_bag.svg"
                        className="bag_One"
                        alt="bag Two"
                      />
                      <Img
                        src="images/img_bag.svg"
                        className="bag_One"
                        alt="bag Three"
                      />
                      <Img
                        src="images/img_bag.svg"
                        className="bag_One"
                        alt="bag Four"
                      />
                    </Column>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardPage;
