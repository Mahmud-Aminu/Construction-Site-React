import {
  LocationOnTwoTone,
  MailOutlineTwoTone,
  PhoneInTalkTwoTone,
} from "@mui/icons-material";
import SocialIcons from "../UI/SocialIcons";
import classes from "./Contact.module.css";
import ContactForm from "../UI/ContactForm";

const Contact = (props) => {
  return (
    <>
      <div className={classes.contact} ref={props.cRef}>
        <div className={classes.contact_Header}>
          <h3>
            What ever you have in mind, let us know your vision and we would be
            pleased to find a way to bring it to reality.
          </h3>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.contents}>
            <h1>Contact Info</h1>
            <p>
              <PhoneInTalkTwoTone fontSize="small" />
              +234 (0), 8030441981, 8074642426
            </p>
            <p>
              <MailOutlineTwoTone fontSize="small" />
              mantsolhaassociatesconcept@gmail.com
            </p>
            <p>
              <span style={{ paddingLeft: "30px" }}>Head Office</span>
              <br />
              <LocationOnTwoTone fontSize="small" />
              No A3 Mogadishu City Centre, Kaduna North, Kaduna State
            </p>
            <p>
              <span style={{ paddingLeft: "30px" }}>Branch Office</span>
              <br />
              <LocationOnTwoTone fontSize="small" /> Yahaya Madaki, Tudun
              Matawalle, Katsina, Katsina State
            </p>
            <SocialIcons />
          </div>
          <hr />
          <div className={classes.formWrapper}>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
