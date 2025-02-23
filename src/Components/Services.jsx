import { Box, Button, Divider, Image, Text, Border } from "@chakra-ui/react";
import { Component } from "react";

class Services extends Component {
  state = {};
  render() {
    return (
      <Box
        px={{ base: "20px", md: "30px", lg: "150px" }}
        py={{ base: "50px", md: "100px", lg: "100px" }}
        id="services"
      >
        <Box
          display={{ base: "column", md: "column", lg: "flex" }}
          alignItems="center"
          gap="150px"
        >
          <Box width={{ base: "100%", md: "100%", lg: "55%" }}>
            <Text
              fontSize="18px"
              fontWeight="700"
              fontFamily="syne"
              color="#FF9B05"
              // mb={{ base: "", md: "", lg: "-10px" }}
              textAlign={{ base: "center", md: "left", lg: "left" }}
            >
              Services
            </Text>
            <Text
              bgImage={{ base: "", md: "", lg: "ellipse2.png" }}
              backgroundPosition="left center"
              backgroundRepeat="no-repeat"
              fontSize="58px"
              fontWeight="700"
              fontFamily="syne"
              color="#14120F"
              textAlign={{ base: "center", md: "left", lg: "left" }}
              lineHeight={{ base: "60px", md: "", lg: "" }}
              mb={{ base: "10px", md: "10px", lg: "0" }}
            >
              My specialties
            </Text>
          </Box>
          <Box width={{ base: "100%", md: "100%", lg: "45%" }}>
            <Text
              fontSize="16px"
              fontWeight="400"
              fontFamily="DM Sans"
              color="#26221C"
              textAlign={{ base: "center", md: "left", lg: "left" }}
            >
              Efficiently craft dynamic and scalable front-end solutions using React.js 
              while maintaining seamless user experiences. Strategically optimize performance, integrate cutting-edge technologies, 
              and adapt to evolving frameworks for enhanced web development.
            </Text>
          </Box>
        </Box>
        <Box
          pt="50px"
          display={{ base: "column", md: "column", lg: "flex" }}
          gap="20px"
        >
          <Box w={{ base: "100%", md: "100%", lg: "65%" }}>
            <Box
              display={{ base: "column", md: "flex", lg: "flex" }}
              alignItems="center"
              gap="24px"
              // mb="24px"
            >
              <Box
                color="#14120F"
                bgColor="#F8F8F6"
                borderRadius="5px"
                padding="28px 16px 36px 24px"
                boxShadow="0px 36px 100px 0px rgba(8, 8, 8, 0.15)"
                cursor="pointer"
                // w="31%"
                w={{ base: "100%", md: "264px", lg: "264px" }}
                mb={{ base: "24px", md: "", lg: "" }}
                _hover={{
                  color: "#FFB646",
                  bgColor: "#FFFFFF", // Background color on hover
                }}
              >
                <Box>
                  <Image src="CustomWebsite.png" mb="30px" width="40px" height="40px"/>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="18px" fontWeight="700" fontFamily="Syne">
                  Custom Website <br></br> Development
                  </Text>

                  <Box>
                    <Image src="arrow7.png" />
                  </Box>
                </Box>
              </Box>
              <Box
                color="#14120F"
                bgColor="#F8F8F6"
                borderRadius="5px"
                padding="28px 16px 36px 24px"
                boxShadow="0px 36px 100px 0px rgba(8, 8, 8, 0.15)"
                cursor="pointer"
                // w="31%"
                w={{ base: "100%", md: "264px", lg: "264px" }}
                mb={{ base: "24px", md: "", lg: "" }}
                _hover={{
                  color: "#FFB646",
                  bgColor: "#FFFFFF", // Background color on hover
                }}
              >
                <Box>
                  <Image src="eCommerceWebsite.png" mb="30px" width="40px" height="40px" />
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="18px" fontWeight="700" fontFamily="Syne">
                  eCommerce Website <br></br> Development
                  </Text>
                  <Box>
                    {/* <Image src="arrow7.png" /> */}
                  </Box>
                </Box>
              </Box>
              <Box
                color="#14120F"
                bgColor="#F8F8F6"
                borderRadius="5px"
                padding="28px 16px 36px 24px"
                boxShadow="0px 36px 100px 0px rgba(8, 8, 8, 0.15)"
                cursor="pointer"
                // w="31%"
                w={{ base: "100%", md: "264px", lg: "264px" }}
                mb={{ base: "24px", md: "", lg: "" }}
                _hover={{
                  color: "#FFB646",
                  bgColor: "#FFFFFF", // Background color on hover
                }}
              >
                <Box>
                  <Image src="AdminDashboards 2.png" mb="30px" width="40px" height="40px" />
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="18px" fontWeight="700" fontFamily="Syne">
                  Admin Dashboards &<br></br> Applications
                  </Text>
                  <Box>
                    {/* <Image src="arrow7.png" /> */}
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              display={{ base: "column", md: "flex", lg: "flex" }}
              alignItems="center"
              gap="24px"
              mb={{ base: "0", md: "24px", lg: "0" }}
            >
              <Box
                color="#14120F"
                bgColor="#F8F8F6"
                borderRadius="5px"
                padding="28px 16px 36px 24px"
                boxShadow="0px 36px 100px 0px rgba(8, 8, 8, 0.15)"
                cursor="pointer"
                // w="31%"
                w={{ base: "100%", md: "264px", lg: "264px" }}
                mb={{ base: "24px", md: "0", lg: "0" }}
                _hover={{
                  color: "#FFB646",
                  bgColor: "#FFFFFF", // Background color on hover
                }}
              >
                <Box>
                  <Image src="API.png" mb="30px" width="40px" height="40px"/>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="18px" fontWeight="700" fontFamily="Syne">
                  API Integration & Backend Connectivity
                  </Text>
                  <Box>
                    {/* <Image src="arrow7.png" /> */}
                  </Box>
                </Box>
              </Box>
              <Box
                color="#14120F"
                bgColor="#F8F8F6"
                borderRadius="5px"
                padding="28px 16px 36px 24px"
                boxShadow="0px 36px 100px 0px rgba(8, 8, 8, 0.15)"
                cursor="pointer"
                // w="31%"
                w={{ base: "100%", md: "264px", lg: "264px" }}
                mb={{ base: "24px", md: "0", lg: "0" }}
                _hover={{
                  color: "#FFB646",
                  bgColor: "#FFFFFF", // Background color on hover
                }}
              >
                <Box>
                  <Image src="LandingPages.png" mb="30px" width="40px" height="40px"/>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="18px" fontWeight="700" fontFamily="Syne">
                  Landing Pages & Business Websites
                  </Text>
                  <Box>
                    {/* <Image src="arrow7.png" /> */}
                  </Box>
                </Box>
              </Box>
              <Box
                color="#14120F"
                bgColor="#F8F8F6"
                borderRadius="5px"
                padding="28px 16px 36px 24px"
                boxShadow="0px 36px 100px 0px rgba(8, 8, 8, 0.15)"
                cursor="pointer"
                // w="31%"
                w={{ base: "100%", md: "264px", lg: "264px" }}
                mb={{ base: "24px", md: "0", lg: "0" }}
                _hover={{
                  color: "#FFB646",
                  bgColor: "#FFFFFF", // Background color on hover
                }}
              >
                <Box>
                  <Image src="WebsiteDeployment.png" mb="30px" width="40px" height="40px" />
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="18px" fontWeight="700" fontFamily="Syne">
                  Website Deployment <br></br> Maintenance
                  </Text>
                  <Box>
                    {/* <Image src="arrow7.png" /> */}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            bgColor="#14120F"
            borderRadius="5px"
            // w="35%"
            // w="410px"
            p="30px 24px 30px 24px"
            h="435px"
          >
            <Box mb="315px">
              <Image src="arrow2.png" float="right" />
            </Box>

            <Text
              fontSize="16px"
              fontWeight="500"
              fontFamily="DM Sans"
              color="#FF9B05"
            >
              SAY HELLO!
            </Text>
            <Text
              fontSize={{ base: "21px", md: "", lg: "15px" }}
              fontWeight="700"
              fontFamily="Syne"
              color="#F8F8F6"
            >
              nomanramzan 1O8@gmail.com
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Services;
