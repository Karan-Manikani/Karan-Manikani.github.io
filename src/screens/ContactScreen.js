import React from "react";
import Form from "../components/Form";
import Info from "../components/Info";
import PageHeading from "../components/PageHeading";

function ContactScreen() {
  return (
    <div className="flex flex-row mt-20 w-2/3 mx-auto justify-center fadein">
      <div className=" basis-2/5">
        <div>
          <PageHeading title="Contact" subtitle="Looking forward to hearing from you" />
        </div>
        <div>
          <div className="mb-4">
            <Info title="Phone" value="+91 9769098446" />
          </div>
          <div>
            <Info title="Email" value="karan.manikani@gmail.com" />
          </div>
        </div>
      </div>
      <div className=" basis-2/5">
        <Form />
      </div>
    </div>
  );
}

export default ContactScreen;
