import React from "react";

import { Row, Column, Text, Button, List, Img, Line } from "components";
import Sidebar from "components/Sidebar/Sidebar";

const OrderDetailsPage = () => {
  return (
    <>
      <Row className="bg-cyan_51 font-poppins items-start mx-[auto] xl:pr-[11px] 2xl:pr-[13px] 3xl:pr-[15px] lg:pr-[9px] shadow-bs2 w-[100%]">
        <Sidebar className="w-[15%]" />
        <Column className="font-inter items-center justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[84%]">
          <Row className="items-start justify-between w-[100%]">
            <Column className="justify-start w-[70%]">
              <Column className="justify-start lg:ml-[31px] xl:ml-[39px] 2xl:ml-[44px] 3xl:ml-[52px] w-[48%]">
                <Row className="items-start w-[100%]">
                  <Text
                    className="font-normal mt-[1px] text-black_902 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Order{" "}
                  </Text>
                  <Text
                    className="font-medium lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] mt-[1px] text-black_902 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    #10002
                  </Text>
                  <Button
                    className="font-medium lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:text-[17px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center text-orange_400 w-[26%]"
                    shape="CircleBorder19"
                    size="sm"
                    variant="FillWhiteA700"
                  >
                    Paid
                  </Button>
                </Row>
                <Text
                  className="font-medium lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-black_902 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Here Are the details of this order
                </Text>
              </Column>
              <Row className="font-roboto items-start justify-evenly lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]">
                <Column className="items-center justify-start rotate-[180deg] w-[1%]">
                  <div className="bg-cyan_200 lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rotate-[180deg] rounded-bl-[10px] rounded-br-[0] rounded-tl-[10px] rounded-tr-[0] w-[100%]"></div>
                </Column>
                <Column className="items-center justify-start w-[7%]">
                  <Button
                    className="font-medium lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_902 text-center w-[100%]"
                    size="xl"
                  >
                    Sr#
                  </Button>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      1
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      2
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      3
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      4
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[23%]">
                  <Button
                    className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_902 text-center w-[100%]"
                    size="xl"
                  >
                    Products
                  </Button>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      Product 1
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      Product 2
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      Product 3
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      Product 4
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      Subtotal
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      Tax
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      Grand Total
                    </Text>
                  </Column>
                </Column>
                <List
                  className="gap-[0] grid grid-cols-2 min-h-[auto] w-[45%]"
                  orientation="horizontal"
                >
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_902 text-center w-[100%]"
                      size="xl"
                    >
                      Price
                    </Button>
                    <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                      <Text className="columnone" variant="body2">
                        1000
                      </Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                      <Text className="columnone" variant="body2">
                        850
                      </Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                      <Text className="columnone" variant="body2">
                        950
                      </Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                      <Text className="columnone" variant="body2">
                        1575
                      </Text>
                    </Column>
                  </Column>
                  <Column className="items-center justify-start w-[100%]">
                    <Button
                      className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_902 text-center w-[100%]"
                      size="xl"
                    >
                      Item Count
                    </Button>
                    <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                      <Text className="columnone" variant="body2">
                        1
                      </Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                      <Text className="columnone" variant="body2">
                        2
                      </Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                      <Text className="columnone" variant="body2">
                        2
                      </Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                      <Text className="columnone" variant="body2">
                        5
                      </Text>
                    </Column>
                  </Column>
                </List>
                <Column className="items-center justify-start w-[23%]">
                  <Column className="bg-cyan_200 items-center justify-start lg:p-[12px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] w-[100%]">
                    <Text
                      className="text-shadow-ts columntopselling"
                      variant="body2"
                    >
                      Total
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      1000
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      1700
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      1900
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnone" variant="body2">
                      3150
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnzipcode_five" variant="body2">
                      7750
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnzipcode_five" variant="body2">
                      542
                    </Text>
                  </Column>
                  <Column className="font-poppins items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] w-[100%]">
                    <Text className="columnzipcode_five" variant="body2">
                      8292 Pkr
                    </Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[1%]">
                  <div className="bg-cyan_200 lg:h-[40px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] rounded-bl-[0] rounded-br-[10px] rounded-tl-[0] rounded-tr-[10px] w-[100%]"></div>
                </Column>
              </Row>
            </Column>
            <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[29%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-center justify-end ml-[auto] w-[41%]">
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
                <Column className="bg-white_A700 items-center justify-start lg:mt-[33px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius12 w-[100%]">
                  <Column className="justify-start lg:mb-[12px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mt-[3px] w-[98%]">
                    <Text
                      className="lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] columntopselling"
                      as="h5"
                      variant="h5"
                    >
                      Address
                    </Text>
                    <Line className="bg-black_902 h-[1px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[98%]" />
                    <Text
                      className="font-medium xl:leading-[12px] 2xl:leading-[14px] 3xl:leading-[16px] lg:leading-[9px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] text-black_902 w-[71%]"
                      as="h5"
                      variant="h5"
                    >
                      Muhammad Kashif Imran
                      <br />
                      <br />
                      Test Address
                      <br />
                      <br />
                      54800 Lahore Pakistan
                    </Text>
                    <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[96%]">
                      <Text className="columntopselling" as="h5" variant="h5">
                        Phone Number:
                      </Text>
                      <Text
                        className="font-medium text-black_902 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        03131234567
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius12 w-[100%]">
                <Column className="justify-start mr-[1px] mt-[2px] w-[99%]">
                  <Text
                    className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] columntopselling"
                    as="h5"
                    variant="h5"
                  >
                    Order Instructions
                  </Text>
                  <Line className="bg-black_902 h-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]" />
                </Column>
                <Text
                  className="2xl:mb-[106px] 3xl:mb-[127px] lg:mb-[75px] xl:mb-[94px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] Row4"
                  as="h5"
                  variant="h5"
                >
                  Lorem Ipsum
                </Text>
              </Column>
              <Row className="font-poppins items-center justify-between lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                <Column className="items-center w-[78%]">
                  <Text
                    className="bg-cyan_600 border border-cyan_601 border-solid font-semibold lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[7px] xl:py-[9px] rounded-radius10 text-black_902 w-[265px]"
                    as="h4"
                    variant="h4"
                  >
                    Paid
                  </Text>
                  <Text
                    className="bg-cyan_600 border border-cyan_601 border-solid font-semibold lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:pb-[5px] xl:pb-[7px] 2xl:pb-[8px] 3xl:pb-[9px] lg:pt-[10px] xl:pt-[13px] 2xl:pt-[15px] 3xl:pt-[18px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] rounded-radius10 text-black_902 w-[265px]"
                    as="h4"
                    variant="h4"
                  >
                    Completed
                  </Text>
                </Column>
                <Img
                  src="images/img_bag_53X52.svg"
                  className="lg:h-[38px] xl:h-[48px] 2xl:h-[54px] 3xl:h-[64px] w-[15%]"
                  alt="bag"
                />
              </Row>
            </Column>
          </Row>
        </Column>
      </Row>
    </>
  );
};

export default OrderDetailsPage;
