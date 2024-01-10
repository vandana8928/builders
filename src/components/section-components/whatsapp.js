
const Whatsapp = () => {
  let publicUrl = process.env.PUBLIC_URL + "/";
  return (
    <div className="whatsapp_float">
      <a
        href="https://wa.me/8928358012"
        target="_blank"
        rel="noreferrer"
      >
        <img src={publicUrl + "assets/img/others/whatsapp.png"} alt="WhatsApp Button"  className="whatsapp_float_btn"/>
      </a>
    </div>
  );
};
export default Whatsapp;
