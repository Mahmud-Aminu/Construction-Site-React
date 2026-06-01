import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const SocialIcons = () => {
  return (
    <>
      <a
        href="https://facebook.com/D9icedesignbuild"
        target="_blank"
        rel="noreferrer"
        style={{ padding: "5px" }}
      >
        <Facebook color="primary" fontSize="small" />
      </a>
      <a
        href="https://twitter/manstolha?s=21&t=_d6q65GB0GOqkwNwnUV5hw"
        target="_blank"
        rel="noreferrer"
        style={{ padding: "5px" }}
      >
        <Twitter color="primary" fontSize="small" sx={{ color: "#00ACEE" }} />
      </a>
      <Link to="/" style={{ padding: "5px" }}>
        <Instagram color="primary" fontSize="small" sx={{ color: "#E4405F" }} />
      </Link>
      <a
        href="https://linkedin.com/company/mantsolha-associates-concept/"
        target="_blank"
        rel="noreferrer"
        style={{ padding: "5px" }}
      >
        <LinkedIn color="primary" fontSize="small" sx={{ color: "#03472c" }} />
      </a>
      <a
        href="https://wa.me/message/5VYNMLCEJALFN1"
        target="_blank"
        rel="noreferrer"
        style={{ padding: "5px" }}
      >
        <WhatsApp color="primary" fontSize="small" sx={{ color: "#25d366" }} />
      </a>
    </>
  );
};

export default SocialIcons;
