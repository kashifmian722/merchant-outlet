import React from "react";

import { Column, Img, Row, Text } from "components";

const Sidebar = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-gray_50 justify-start lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] w-[100%]">
            <Img
              src="images/img_cimenualt05.svg"
              className="lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[19%]"
              alt="cimenualtFive"
            />
            <Row className="items-center justify-center ml-[4px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[97%]">
              <Img
                src="images/img_home.svg"
                className="lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] w-[18%]"
                alt="home"
              />
              <Text
                className="font-poppins lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] not-italic text-bluegray_700 w-[auto]"
                as="h6"
                variant="h6"
              >
                Dashboard
              </Text>
            </Row>
            <Row
              className="common-pointer items-center ml-[3px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[85%]"
              onClick={props?.onrowcalendarClick}
            >
              <Img
                src="images/img_calendar.svg"
                className="lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:w-[20px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                alt="calendar"
              />
              <Text
                className="font-poppins lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] not-italic text-bluegray_700 w-[auto]"
                as="h6"
                variant="h6"
              >
                Products
              </Text>
            </Row>
            <Row
              className="common-pointer items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[71%]"
              onClick={props?.onrowfolderClick}
            >
              <Img
                src="images/img_folder.svg"
                className="trendingdown"
                alt="folder"
              />
              <Text
                className="font-poppins lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] mt-[2px] not-italic text-bluegray_700 w-[auto]"
                as="h6"
                variant="h6"
              >
                Orders
              </Text>
            </Row>
            <Row
              className="common-pointer items-center ml-[2px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[85%]"
              onClick={props?.onrowinfoClick}
            >
              <Img
                src="images/img_info_33X35.svg"
                className="lg:h-[24px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[26%]"
                alt="info"
              />
              <Text
                className="font-poppins lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] not-italic text-black_902 w-[auto]"
                as="h6"
                variant="h6"
              >
                Account
              </Text>
            </Row>
            <Row className="items-end ml-[3px] lg:mt-[218px] xl:mt-[273px] 2xl:mt-[307px] 3xl:mt-[368px] w-[86%]">
              <Img
                src="images/img_user_27X27.svg"
                className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:w-[19px] xl:w-[24px] 2xl:w-[27px] 3xl:w-[32px]"
                alt="user"
              />
              <Text
                className="font-poppins lg:ml-[26px] xl:ml-[32px] 2xl:ml-[37px] 3xl:ml-[44px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic text-bluegray_700 w-[auto]"
                as="h6"
                variant="h6"
              >
                Support
              </Text>
            </Row>
            <Row
              className="common-pointer items-end lg:mb-[24px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[40px] ml-[2px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[85%]"
              onClick={props?.onrowmobileClick}
            >
              <Img
                src="images/img_mobile.svg"
                className="lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                alt="mobile"
              />
              <Text
                className="font-poppins mb-[4px] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic text-bluegray_700 w-[auto]"
                as="h6"
                variant="h6"
              >
                Log Out
              </Text>
            </Row>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
