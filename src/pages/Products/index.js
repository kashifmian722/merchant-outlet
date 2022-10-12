import React from "react";

import {
  Column,
  Row,
  Img,
  Stack,
  Text,
  List,
  Button,
  Switch,
  Input,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const navigate = useNavigate();

  function handleNavigate22() {
    navigate("/orders");
  }
  function handleNavigate23() {
    navigate("/account");
  }
  function handleNavigate24() {
    navigate("/");
  }

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-cyan_51 font-poppins items-center justify-start mx-[auto] shadow-bs2 w-[100%]">
        <Row className="items-end justify-between w-[97%]">
          <Sidebar
            className="lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[16%]"
            onrowfolderClick={handleNavigate22}
            onrowinfoClick={handleNavigate23}
            onrowmobileClick={handleNavigate24}
          />
          <Column className="font-inter justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[81%]">
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
            <Stack className="lg:h-[470px] xl:h-[588px] 2xl:h-[661px] 3xl:h-[793px] xl:mr-[11px] 2xl:mr-[13px] 3xl:mr-[15px] lg:mr-[9px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] w-[99%]">
              <Column className="absolute justify-start lg:p-[16px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] rounded-radius12 top-[3%] w-[100%]">
                <Row className="items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] pb-[1px] rounded-radius6 w-[99%]">
                  <Column className="items-center mt-[1px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0] w-[20%]">
                    <Text className="ProductName" variant="body3">
                      Product Name
                    </Text>
                    <Column className="items-center justify-start 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[85%]">
                      <Row className="items-center lg:pr-[43px] xl:pr-[54px] 2xl:pr-[61px] 3xl:pr-[73px] w-[100%]">
                        <Img
                          src="images/img_ellipse12.png"
                          className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                          alt="EllipseTwelve"
                        />
                        <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[52%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            Product 1
                          </Text>
                        </Column>
                      </Row>
                      <List
                        className="gap-[0] min-h-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="listellipsetwelve_one">
                          <Img
                            src="images/img_ellipse12_40X40.png"
                            className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            alt="EllipseTwelve One"
                          />
                          <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[62%]">
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              variant="body3"
                            >
                              Giana Herwitz
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] lg:pr-[16px] xl:pr-[20px] 2xl:pr-[23px] 3xl:pr-[27px] w-[100%]">
                          <Img
                            src="images/img_ellipse12_1.png"
                            className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            alt="EllipseTwelve Two"
                          />
                          <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[63%]">
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              variant="body3"
                            >
                              Charlie Calzoni
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] lg:pr-[17px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] w-[100%]">
                          <Img
                            src="images/img_ellipse12_2.png"
                            className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            alt="EllipseTwelve Three"
                          />
                          <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[63%]">
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              variant="body3"
                            >
                              Ruben Stanton
                            </Text>
                          </Column>
                        </Row>
                      </List>
                      <Row className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:pr-[43px] xl:pr-[54px] 2xl:pr-[61px] 3xl:pr-[73px] w-[100%]">
                        <Img
                          src="images/img_ellipse12.png"
                          className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                          alt="EllipseTwelve Four"
                        />
                        <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[52%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            Product 1
                          </Text>
                        </Column>
                      </Row>
                      <List
                        className="gap-[0] min-h-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="listellipsetwelve_one">
                          <Img
                            src="images/img_ellipse12_40X40.png"
                            className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            alt="EllipseTwelve Five"
                          />
                          <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[62%]">
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              variant="body3"
                            >
                              Giana Herwitz
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] lg:pr-[16px] xl:pr-[20px] 2xl:pr-[23px] 3xl:pr-[27px] w-[100%]">
                          <Img
                            src="images/img_ellipse12_1.png"
                            className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            alt="EllipseTwelve Six"
                          />
                          <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[63%]">
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              variant="body3"
                            >
                              Charlie Calzoni
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] lg:pr-[17px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] w-[100%]">
                          <Img
                            src="images/img_ellipse12_2.png"
                            className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            alt="EllipseTwelve Seven"
                          />
                          <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[63%]">
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              variant="body3"
                            >
                              Ruben Stanton
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center xl:my-[2px] lg:my-[2px] 3xl:my-[3px] 2xl:my-[3px] lg:pr-[16px] xl:pr-[20px] 2xl:pr-[23px] 3xl:pr-[27px] w-[100%]">
                          <Img
                            src="images/img_ellipse12_1.png"
                            className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            alt="EllipseTwelve Eight"
                          />
                          <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[63%]">
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              variant="body3"
                            >
                              Charlie Calzoni
                            </Text>
                          </Column>
                        </Row>
                      </List>
                      <Row className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:pr-[17px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] w-[100%]">
                        <Img
                          src="images/img_ellipse12_2.png"
                          className="lg:h-[25px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] rounded-radius50 w-[26%]"
                          alt="EllipseTwelve Nine"
                        />
                        <Column className="items-center lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[63%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            variant="body3"
                          >
                            Ruben Stanton
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="items-center mb-[1px] w-[23%]">
                    <Text
                      className="bg-cyan_200 font-medium lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[8px] text-bluegray_900 w-[250px]"
                      variant="body3"
                    >
                      Description
                    </Text>
                    <Column className="justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="columnjaydonherwitz" variant="body3">
                        Lorem Ipsum, Lorem Isum...
                      </Text>
                    </Column>
                    <Column className="justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="columnjaydonherwitz" variant="body3">
                        Lorem Ipsum, Lorem Isum...
                      </Text>
                    </Column>
                    <Column className="justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="columnjaydonherwitz" variant="body3">
                        Lorem Ipsum, Lorem Isum...
                      </Text>
                    </Column>
                    <Column className="justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="columnjaydonherwitz" variant="body3">
                        Lorem Ipsum, Lorem Isum...
                      </Text>
                    </Column>
                    <Column className="justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="columnjaydonherwitz" variant="body3">
                        Lorem Ipsum, Lorem Isum...
                      </Text>
                    </Column>
                    <Column className="justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="columnjaydonherwitz" variant="body3">
                        Lorem Ipsum, Lorem Isum...
                      </Text>
                    </Column>
                    <Column className="justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="columnjaydonherwitz" variant="body3">
                        Lorem Ipsum, Lorem Isum...
                      </Text>
                    </Column>
                    <Column className="justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="columnjaydonherwitz" variant="body3">
                        Lorem Ipsum, Lorem Isum...
                      </Text>
                    </Column>
                    <Column className="justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="columnjaydonherwitz" variant="body3">
                        Lorem Ipsum, Lorem Isum...
                      </Text>
                    </Column>
                    <Column className="justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="columnjaydonherwitz" variant="body3">
                        Lorem Ipsum, Lorem Isum...
                      </Text>
                    </Column>
                  </Column>
                  <Column className="items-center w-[14%]">
                    <Button className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_900 text-center w-[100%]">
                      Status
                    </Button>
                    <Column className="items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[23%]">
                      <Switch value={true} className="w-[100%]" />
                      <Switch
                        value={true}
                        className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]"
                      />
                      <Switch
                        value={true}
                        className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]"
                      />
                      <Switch
                        value={true}
                        className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]"
                      />
                      <Switch
                        value={true}
                        className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]"
                      />
                      <Switch
                        value={true}
                        className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]"
                      />
                      <Switch
                        value={true}
                        className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]"
                      />
                      <Switch
                        value={true}
                        className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]"
                      />
                      <Switch
                        value={true}
                        className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]"
                      />
                      <Switch
                        value={true}
                        className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[100%]"
                      />
                    </Column>
                  </Column>
                  <Column className="items-center mt-[1px] w-[14%]">
                    <Text
                      className="bg-cyan_200 font-medium lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] xl:py-[11px] 2xl:py-[13px] 3xl:py-[15px] lg:py-[9px] text-bluegray_900 w-[151px]"
                      variant="body3"
                    >
                      Price
                    </Text>
                    <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                      <Text className="columnproductcounter" variant="body3">
                        1700
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                      <Text className="columnproductcounter" variant="body3">
                        1300
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                      <Text className="columnproductcounter" variant="body3">
                        2500
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                      <Text className="columnproductcounter" variant="body3">
                        1750
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                      <Text className="columnproductcounter" variant="body3">
                        1700
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                      <Text className="columnproductcounter" variant="body3">
                        1300
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                      <Text className="columnproductcounter" variant="body3">
                        2500
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                      <Text className="columnproductcounter" variant="body3">
                        1750
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                      <Text className="columnproductcounter" variant="body3">
                        2500
                      </Text>
                    </Column>
                    <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                      <Text className="columnproductcounter" variant="body3">
                        1750
                      </Text>
                    </Column>
                  </Column>
                  <Column className="w-[14%]">
                    <Text
                      className="bg-cyan_200 font-medium lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] lg:pr-[24px] xl:pr-[31px] 2xl:pr-[35px] 3xl:pr-[42px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[8px] text-bluegray_900 w-[151px]"
                      variant="body3"
                    >
                      Ratings
                    </Text>
                    <Column className="items-center justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[56%]">
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
                      <Img
                        src="images/img_bag.svg"
                        className="bag_One"
                        alt="bag Five"
                      />
                      <Img
                        src="images/img_bag.svg"
                        className="bag_One"
                        alt="bag Six"
                      />
                      <Img
                        src="images/img_bag.svg"
                        className="bag_One"
                        alt="bag Seven"
                      />
                      <Img
                        src="images/img_bag.svg"
                        className="bag_One"
                        alt="bag Eight"
                      />
                      <Img
                        src="images/img_bag.svg"
                        className="bag_One"
                        alt="bag Nine"
                      />
                    </Column>
                  </Column>
                  <Column className="items-center mt-[1px] w-[14%]">
                    <Button
                      className="font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_900 text-center w-[100%]"
                      shape="CustomBorderLR8"
                    >
                      Actions
                    </Button>
                    <Column className="font-poppins items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="Row6">Update</Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="Row6">Update</Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="Row6">Update</Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="Row6">Update</Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="Row6">Update</Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="Row6">Update</Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="Row6">Update</Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="Row6">Update</Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="Row6">Update</Text>
                    </Column>
                    <Column className="font-poppins items-center justify-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                      <Text className="Row6">Update</Text>
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[26%]">
                  <Button
                    className="font-normal font-roboto lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="RoundedBorder15"
                    variant="FillRed600"
                  >
                    1
                  </Button>
                  <Button
                    className="font-normal font-roboto lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_902 text-center lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="RoundedBorder15"
                    variant="FillWhiteA700"
                  >
                    2
                  </Button>
                  <Button
                    className="font-normal font-poppins lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_903 text-center lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="RoundedBorder15"
                    variant="FillWhiteA700"
                  >
                    ...
                  </Button>
                  <Button
                    className="font-normal font-roboto lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_902 text-center lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="RoundedBorder15"
                    variant="FillWhiteA700"
                  >
                    9
                  </Button>
                  <Button
                    className="font-normal font-roboto lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_902 text-center lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="RoundedBorder15"
                    variant="FillWhiteA700"
                  >
                    10
                  </Button>
                  <Button
                    className="flex lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                    shape="icbCircleBorder16"
                    size="mdIcn"
                    variant="icbFillWhiteA700"
                  >
                    <Img
                      src="images/img_arrowright.svg"
                      className="flex items-center justify-center lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                      alt="arrowright"
                    />
                  </Button>
                </Row>
              </Column>
              <Text
                className="absolute left-[3%] not-italic text-bluegray_900 top-[1%] w-[auto]"
                as="h6"
                variant="h6"
              >
                Products
              </Text>
              <Row className="absolute items-center justify-center right-[2%] top-[0] w-[55%]">
                <Input
                  value={inputvalue}
                  onChange={(e) => setInputvalue(e?.target?.value)}
                  className="font-normal not-italic p-[0] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] placeholder:text-bluegray_703 text-bluegray_703 w-[100%]"
                  wrapClassName="flex w-[48%]"
                  name="FrameSix"
                  placeholder="Search Product"
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer ml-[2px] lg:w-[11px] lg:h-[12px] lg:mr-[5px] xl:w-[14px] xl:h-[15px] xl:mr-[7px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[8px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[9px] my-[auto]"
                      alt="search"
                    />
                  }
                  suffix={
                    inputvalue?.length > 0 ? (
                      <CloseSVG
                        color="#4b5563"
                        className="cursor-pointer lg:w-[11px] lg:h-[12px] lg:ml-[7px] lg:mr-[15px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                        onClick={() => setInputvalue("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcRoundedBorder8"
                  size="smSrc"
                  variant="srcOutlineIndigo50"
                ></Input>
                <Button
                  className="2xl:ml-[16px] 3xl:ml-[19px] flex items-center justify-center lg:ml-[11px] text-center w-[23%] xl:ml-[14px]"
                  rightIcon={
                    <Img
                      src="images/img_volume.svg"
                      className="text-center lg:w-[11px] lg:h-[12px] lg:ml-[7px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[10px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[12px]"
                      alt="volume"
                    />
                  }
                  shape="RoundedBorder6"
                  variant="OutlineCyan200"
                >
                  <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_902">
                    Import CSV
                  </div>
                </Button>
                <Button
                  className="2xl:ml-[16px] 3xl:ml-[19px] flex items-center justify-center lg:ml-[11px] text-center w-[24%] xl:ml-[14px]"
                  rightIcon={
                    <Img
                      src="images/img_plus.svg"
                      className="text-center lg:w-[11px] lg:h-[12px] lg:ml-[7px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[10px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[12px]"
                      alt="plus"
                    />
                  }
                  shape="RoundedBorder6"
                >
                  <div className="bg-transparent font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_902">
                    Add Product
                  </div>
                </Button>
              </Row>
            </Stack>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ProductsPage;
