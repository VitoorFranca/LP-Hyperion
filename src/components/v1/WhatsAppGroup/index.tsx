

import FloatButton from "../FloatButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppGroup = () => {
  return (
    <FloatButton
      style={{ backgroundColor: "#128c7e", bottom: 16, left: 16, borderRadius: "50px", width: "10px", margin: 0, padding: 10 }}
      props={{
        variant: "outlined",
      }}
    >
      <a
        target="_blank"
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER}`}
        rel="noreferrer"
        style={{ color: "white" }}
      >
      <WhatsAppIcon fontSize="large" htmlColor="white" />
      </a>
    </FloatButton>
  );
};

export default WhatsAppGroup;