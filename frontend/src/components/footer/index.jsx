import React from "react";
import ios from "/img/logo/app_store.png";
import android from "/img/logo/google_play.png";
import ViewFooter from "../../views/footer";
function Footer() {
  const about = [
    "About Karcis.com",
    "How it works",
    "Careers",
    "Press",
    "Blog",
    "Forum",
  ];
  const partner = [
    "Partnership programs",
    "Affiliate Program",
    "Connectivity Partners",
    "Promotions and events",
    "Integrations",
    "Community",
    "Loyalty program",
  ];
  const support = [
    "Help center",
    "Contact us",
    "Privacy policy",
    "Terms of services",
    "Trust and safety",
    "Accessibility",
  ];
  const app = ["Karcis.com for Android", "Karcis.com for iOS", "Mobile site"];
  return (
    <ViewFooter
      about={about}
      partner={partner}
      support={support}
      app={app}
      android={android}
      ios={ios}
    />
  );
}

export default Footer;
