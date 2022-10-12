import React from "react";

import {
  Column,
  Row,
  Line,
  List,
  Text,
  Img,
  Grid,
  Stack,
  Switch,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const LegalsPage = () => {
  const navigate = useNavigate();

  function handleNavigate26() {
    navigate("/orders");
  }
  function handleNavigate27() {
    navigate("/account");
  }
  function handleNavigate28() {
    navigate("/");
  }
  function handleNavigate33() {
    navigate("/products");
  }

  return (
    <>
      <Column className="bg-cyan_51 font-poppins items-center justify-start mx-[auto] shadow-bs2 w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <Sidebar
            className="w-[16%]"
            onrowfolderClick={handleNavigate26}
            onrowinfoClick={handleNavigate27}
            onrowmobileClick={handleNavigate28}
            onrowcalendarClick={handleNavigate33}
          />
          <Column className="font-roboto items-center w-[79%]">
            <Row className="items-start justify-between w-[100%]">
              <Column className="bg-white_A700 items-center justify-start lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius12 shadow-bs3 w-[86%]">
                <Column className="items-center justify-start px-[2px] w-[94%]">
                  <Line className="bg-light_blue_A700 h-[4px] rotate-[180deg] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] w-[28%]" />
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
                      <Text
                        className="font-bold text-light_blue_A700 w-[auto]"
                        variant="body4"
                      >
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
            <Row className="font-inter items-start justify-between lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[99%]">
              <Column className="items-center justify-start mt-[4px] w-[64%]">
                <Grid className="2xl:gap-[100px] 3xl:gap-[120px] lg:gap-[71px] xl:gap-[88px] grid grid-cols-2 w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Text className="Input" variant="body3">
                      Opening hours
                    </Text>
                    <Column className="bg-white_A700 border border-indigo_50 border-solid items-end justify-end 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]">
                      <Text className="columnloremipsumis" variant="body3">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                      <Img
                        src="images/img_signal.svg"
                        className="signal"
                        alt="signal"
                      />
                    </Column>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Text className="Input" variant="body3">
                      Terms & Conditions
                    </Text>
                    <Column className="bg-white_A700 border border-indigo_50 border-solid items-end justify-end xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]">
                      <Text className="columnloremipsumis" variant="body3">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                      <Img
                        src="images/img_signal.svg"
                        className="signal"
                        alt="signal One"
                      />
                    </Column>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Text className="Input" variant="body3">
                      Business description
                    </Text>
                    <Column className="bg-white_A700 border border-indigo_50 border-solid items-end justify-end 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]">
                      <Text className="columnloremipsumis" variant="body3">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                      <Img
                        src="images/img_signal.svg"
                        className="signal"
                        alt="signal Two"
                      />
                    </Column>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Text className="Input" variant="body3">
                      Return & Exchange Policy
                    </Text>
                    <Column className="bg-white_A700 border border-indigo_50 border-solid items-end justify-end 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]">
                      <Text className="columnloremipsumis" variant="body3">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                      <Img
                        src="images/img_signal.svg"
                        className="signal"
                        alt="signal Three"
                      />
                    </Column>
                  </Column>
                </Grid>
                <Row className="items-center justify-between lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]">
                  <Column className="w-[43%]">
                    <Text className="Input" variant="body3">
                      Imprint (trade name)
                    </Text>
                    <Stack className="bg-white_A700 border border-indigo_50 border-solid xl:h-[100px] 2xl:h-[113px] 3xl:h-[135px] lg:h-[80px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rounded-radius8 w-[100%]">
                      <Column className="absolute bottom-[14%] inset-x-[0] items-end justify-start mx-[auto] w-[89%]">
                        <Text
                          className="font-normal lg:leading-[17px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] mr-[3px] not-italic text-bluegray_500 tracking-ls1 w-[99%]"
                          variant="body3"
                        >
                          Lorem ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </Text>
                        <Img
                          src="images/img_signal.svg"
                          className="signal"
                          alt="signal Four"
                        />
                      </Column>
                      <Column className="absolute bg-white_A700 border border-indigo_50 border-solid items-end justify-end lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]">
                        <Text className="columnloremipsumis" variant="body3">
                          Lorem ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </Text>
                        <Img
                          src="images/img_signal.svg"
                          className="signal"
                          alt="signal Five"
                        />
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="mt-[1px] w-[43%]">
                    <Text className="Input" variant="body3">
                      Privacy Policy
                    </Text>
                    <Column className="bg-white_A700 border border-indigo_50 border-solid items-end justify-end 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]">
                      <Text className="columnloremipsumis" variant="body3">
                        Lorem ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </Text>
                      <Img
                        src="images/img_signal.svg"
                        className="signal"
                        alt="signal Six"
                      />
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Column className="justify-start w-[27%]">
                <Column className="font-inter justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[84%]">
                  <Column className="justify-end pr-[3px] py-[3px] w-[77%]">
                    <Text
                      className="font-normal mt-[1px] not-italic text-black_900 tracking-ls1 w-[auto]"
                      variant="body3"
                    >
                      Services
                    </Text>
                  </Column>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="items-start justify-between lg:my-[20px] xl:my-[25px] 2xl:my-[28px] 3xl:my-[34px] w-[100%]">
                      <Switch value={true} className="w-[17%]" />
                      <Column className="justify-end pr-[1px] py-[1px] w-[77%]">
                        <Text className="Label3" variant="body3">
                          Delivery
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-start justify-between lg:my-[20px] xl:my-[25px] 2xl:my-[28px] 3xl:my-[34px] w-[100%]">
                      <Switch value={true} className="w-[17%]" />
                      <Column className="justify-end pr-[1px] py-[1px] w-[77%]">
                        <Text className="Label3" variant="body3">
                          Pickup
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-start justify-between lg:my-[20px] xl:my-[25px] 2xl:my-[28px] 3xl:my-[34px] w-[100%]">
                      <Switch value={true} className="w-[17%]" />
                      <Column className="justify-end pr-[1px] py-[1px] w-[77%]">
                        <Text className="Label3" variant="body3">
                          Shipping
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-start justify-between lg:my-[20px] xl:my-[25px] 2xl:my-[28px] 3xl:my-[34px] w-[100%]">
                      <Switch value={true} className="w-[17%]" />
                      <Column className="justify-end pr-[1px] py-[1px] w-[77%]">
                        <Text className="Label3" variant="body3">
                          Remote consulting
                        </Text>
                      </Column>
                    </Row>
                  </List>
                </Column>
                <Text
                  className="bg-cyan_600 border border-cyan_601 border-solid font-poppins font-semibold lg:mt-[155px] xl:mt-[194px] 2xl:mt-[219px] 3xl:mt-[262px] lg:px-[24px] xl:px-[31px] 2xl:px-[35px] 3xl:px-[42px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[7px] xl:py-[9px] rounded-radius10 text-black_902 w-[300px]"
                  as="h4"
                  variant="h4"
                >
                  Save
                </Text>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default LegalsPage;
