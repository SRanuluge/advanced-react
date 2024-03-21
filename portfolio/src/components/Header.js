import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [posision, setPosision] = useState({
    y: 0,
    lastY: 0,
  });
  const [show, setShow] = useState(false);

  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setPosision((prevState) => {
        return { y: window.scrollY, lastY: prevState.y };
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (posision.lastY < posision.y) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [posision]);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform="auto"
      translateY={show ? "-200px" : "0px"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map(({ icon, url }) => {
                return (
                  <a href={url}>
                    <FontAwesomeIcon icon={icon} size="2x" />
                  </a>
                );
              })}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("projects")}
              >
                Projects
              </a>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => handleClick("contactme")}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

// useEffect(() => {
//   let prevScrollPos = window.scrollY;

//   const handleScroll = () => {
//     const currentScrollPos = window.scrollY;
//     const headerElement = headerRef.current;
//     if (!headerElement) {
//       return;
//     }
//     if (prevScrollPos > currentScrollPos) {
//       headerElement.style.transform = "translateY(0)";
//     } else {
//       headerElement.style.transform = "translateY(-200px)";
//     }
//     prevScrollPos = currentScrollPos;
//   }

//   window.addEventListener('scroll', handleScroll)

//   return () => {
//     window.removeEventListener('scroll', handleScroll)
//   }
// }, []);

// …
//   return (
//     <Box
//       position="fixed"
//       top={0}
//       left={0}
//       right={0}
//       translateY={0}
//       transitionProperty="transform"
//       transitionDuration=".3s"
//       transitionTimingFunction="ease-in-out"
//       backgroundColor="#18181b"
//       ref={headerRef}
//     >
//      …
//     </Box>
//   );