import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const SocialIcons = () => {
  return (
    <>
      <IconButton>
        <Facebook color="primary" fontSize="small" />
      </IconButton>
      <IconButton>
        <Twitter color="primary" fontSize="small" sx={{ color: "#00ACEE" }} />
      </IconButton>
      <IconButton>
        <Instagram color="primary" fontSize="small" sx={{ color: "#E4405F" }} />
      </IconButton>
      <IconButton>
        <LinkedIn color="primary" sx={{ color: "#0072b1" }} />
      </IconButton>
      <IconButton>
        <WhatsApp color="primary" fontSize="small" sx={{ color: "#25d366" }} />
      </IconButton>
    </>
  );
};

export default SocialIcons;
