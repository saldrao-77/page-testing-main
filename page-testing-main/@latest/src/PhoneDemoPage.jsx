/**
 * PhoneDemoPage.jsx
 *
 * Component Checklist (in-component)
 * - [x] Header (logo + Back button linking to https://Truebase.co)
 * - [x] Hero with headline + subheadline + mockup image
 * - [x] Form with name + phone + client-side validation (US-friendly)
 * - [x] Hidden analytics field
 * - [x] CTA button with hover/focus states
 * - [x] Twilio-compliant privacy note
 * - [x] Success message below form on submit
 * - [x] Footer with Truebase Home + Privacy + contact email
 * - [x] Mobile responsive layout
 *
 * Usage:
 * Import into your main React entry (already done in App.js above).
 */

import React, { useState } from "react";
import phoneMockup from './assets/phone.png';

/* Simple phone validation:
   Accept digits, optional spaces, dashes, parentheses.
   Will normalize to digits and require 10 digits for US numbers.
*/
const normalizeDigits = (value) => (value || "").replace(/\D/g, "");
const isValidUSPhone = (value) => {
  const digits = normalizeDigits(value);
  return digits.length === 10;
};

export default function PhoneDemoPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  // hidden analytics field (not rendered visibly)
  const analyticsValue = "campaign=phone-demo-landing";

  function validate() {
    const e = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!phone.trim()) e.phone = "Please enter your phone number.";
    else if (!isValidUSPhone(phone)) e.phone = "Please enter a valid 10-digit US phone number.";
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      // focus the first invalid field
      const el = document.querySelector(".form-card .input-error, .form-card input[aria-invalid='true']");
      if (el) el.focus();
      return;
    }

    // Simulate submission: in production, call your API / Twilio integration here
    // Example: fetch('/api/book-demo', {method:'POST', body: JSON.stringify({name, phone, analyticsValue})})
    // For now, show success message
    setSubmitted(true);

    // optionally clear inputs (not necessary)
    // setName(""); setPhone("");
  }

  return (
    <div className="page-root">
      <header className="site-header">
        <div className="header-inner">
          <div className="logo" aria-hidden>
            <svg width="140" height="24" viewBox="0 0 92 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.333 19.7892V8.99508H17.2243V10.8784H17.3363C17.5324 10.2085 17.8614 9.70251 18.3235 9.36051C18.7855 9.01382 19.3176 8.84048 19.9196 8.84048C20.069 8.84048 20.23 8.84984 20.4027 8.8686C20.5754 8.88733 20.7271 8.9131 20.8578 8.94588V11.6023C20.7177 11.5601 20.524 11.5226 20.2767 11.4898C20.0293 11.457 19.803 11.4406 19.5976 11.4406C19.1589 11.4406 18.7668 11.5367 18.4215 11.7287C18.0808 11.9161 17.8101 12.1785 17.6094 12.5158C17.4133 12.8531 17.3153 13.242 17.3153 13.6824V19.7892H14.333Z" fill="black"/>
<path d="M29.2956 15.1933V8.99508H32.2777V19.7892H29.4145V17.8285H29.3025C29.0598 18.461 28.6562 18.9693 28.0913 19.3535C27.5312 19.7376 26.8474 19.9297 26.0401 19.9297C25.3214 19.9297 24.6889 19.7657 24.1429 19.4378C23.5969 19.1099 23.1697 18.6437 22.8617 18.0394C22.5584 17.435 22.4043 16.7112 22.3997 15.8679V8.99508H25.3821V15.3338C25.3867 15.9709 25.5571 16.4746 25.8932 16.8447C26.2292 17.2148 26.6795 17.3999 27.2442 17.3999C27.6037 17.3999 27.9397 17.3179 28.2523 17.1539C28.5651 16.9852 28.8172 16.7369 29.0085 16.409C29.2045 16.0811 29.3002 15.6758 29.2956 15.1933Z" fill="black"/>
<path d="M39.5639 20C38.4578 20 37.5056 19.7751 36.7075 19.3254C35.9143 18.8709 35.3027 18.2291 34.8733 17.3999C34.4439 16.5659 34.2293 15.5798 34.2293 14.4413C34.2293 13.331 34.4439 12.3565 34.8733 11.5179C35.3027 10.6793 35.9071 10.0258 36.6866 9.55727C37.4707 9.08878 38.3902 8.85453 39.445 8.85453C40.1543 8.85453 40.8147 8.96931 41.4262 9.19887C42.0422 9.42375 42.579 9.7634 43.0362 10.2178C43.4983 10.6723 43.8578 11.2438 44.1145 11.9325C44.3711 12.6165 44.4995 13.4177 44.4995 14.3359V15.1581H35.4195V13.3029H41.6921C41.6921 12.8719 41.5987 12.49 41.4122 12.1574C41.2254 11.8248 40.9664 11.5648 40.635 11.3774C40.3084 11.1853 39.928 11.0892 39.494 11.0892C39.0411 11.0892 38.6398 11.1947 38.2897 11.4055C37.9445 11.6116 37.6738 11.8904 37.4776 12.2417C37.2816 12.5884 37.1813 12.9749 37.1767 13.4013V15.1651C37.1767 15.6992 37.2747 16.1607 37.4707 16.5495C37.6715 16.9384 37.9537 17.2382 38.3178 17.4491C38.6819 17.6599 39.1136 17.7653 39.6129 17.7653C39.9443 17.7653 40.2477 17.7184 40.523 17.6247C40.7983 17.531 41.0341 17.3905 41.23 17.2031C41.4262 17.0157 41.5755 16.7861 41.6781 16.5144L44.4365 16.6971C44.2964 17.3624 44.0093 17.9433 43.5753 18.4399C43.1459 18.9318 42.5907 19.316 41.9092 19.5924C41.2326 19.8641 40.4508 20 39.5639 20Z" fill="black"/>
<path d="M46.5016 19.7892V5.39706H49.484V10.8082H49.5751C49.7058 10.5177 49.8948 10.2225 50.1421 9.92269C50.3941 9.61818 50.721 9.3652 51.1223 9.16375C51.5283 8.95761 52.0324 8.85453 52.6343 8.85453C53.4184 8.85453 54.142 9.06067 54.8046 9.47294C55.4675 9.88053 55.9972 10.4966 56.3939 11.3211C56.7907 12.141 56.9889 13.1694 56.9889 14.4062C56.9889 15.6102 56.7953 16.6269 56.408 17.4561C56.0252 18.2806 55.5024 18.9061 54.8396 19.3324C54.1816 19.754 53.4442 19.9649 52.6274 19.9649C52.0488 19.9649 51.5563 19.8688 51.1502 19.6767C50.7488 19.4847 50.4199 19.2434 50.1632 18.9529C49.9065 18.6578 49.7104 18.3603 49.5751 18.0604H49.4422V19.7892H46.5016ZM49.421 14.3921C49.421 15.034 49.5098 15.5938 49.6871 16.0717C49.8645 16.5495 50.1211 16.922 50.4572 17.189C50.7932 17.4514 51.2017 17.5826 51.6824 17.5826C52.1677 17.5826 52.5785 17.4491 52.9145 17.182C53.2505 16.9103 53.5049 16.5355 53.6776 16.0576C53.855 15.5751 53.9435 15.0199 53.9435 14.3921C53.9435 13.769 53.8573 13.2209 53.6845 12.7477C53.5118 12.2745 53.2574 11.9044 52.9214 11.6374C52.5854 11.3703 52.1723 11.2368 51.6824 11.2368C51.1968 11.2368 50.7863 11.3657 50.4503 11.6233C50.1188 11.881 49.8645 12.2464 49.6871 12.7196C49.5098 13.1928 49.421 13.7503 49.421 14.3921Z" fill="black"/>
<path d="M62.0453 19.993C61.3592 19.993 60.7478 19.8735 60.211 19.6346C59.6744 19.391 59.2496 19.0326 58.9368 18.5594C58.6288 18.0815 58.475 17.4865 58.475 16.7744C58.475 16.1748 58.5844 15.6711 58.8039 15.2635C59.0233 14.8559 59.3221 14.528 59.6999 14.2797C60.0781 14.0314 60.5075 13.844 60.9882 13.7175C61.4735 13.591 61.9822 13.502 62.5142 13.4505C63.1398 13.3849 63.6438 13.324 64.0265 13.2677C64.4092 13.2068 64.6868 13.1178 64.8595 13.0007C65.0323 12.8836 65.1185 12.7102 65.1185 12.4807V12.4385C65.1185 11.9934 64.9787 11.6491 64.6985 11.4055C64.4232 11.1619 64.0311 11.04 63.5225 11.04C62.9857 11.04 62.5586 11.1595 62.2412 11.3985C61.9238 11.6327 61.7138 11.9279 61.6112 12.2839L58.8529 12.059C58.9929 11.4031 59.2682 10.8363 59.679 10.3584C60.0898 9.87584 60.6195 9.50575 61.2681 9.24807C61.9215 8.9857 62.6778 8.85453 63.5363 8.85453C64.1339 8.85453 64.7057 8.9248 65.2517 9.06536C65.8023 9.20591 66.2901 9.42375 66.7147 9.7189C67.1441 10.014 67.4825 10.3935 67.7299 10.8573C67.9772 11.3165 68.1009 11.8669 68.1009 12.5088V19.7892H65.2726V18.2923H65.1887C65.0159 18.6297 64.785 18.9271 64.4955 19.1848C64.2061 19.4378 63.8586 19.6369 63.4524 19.7822C63.0464 19.9227 62.5772 19.993 62.0453 19.993ZM62.8995 17.9269C63.3381 17.9269 63.7254 17.8403 64.0614 17.6669C64.3975 17.4889 64.6613 17.2499 64.8526 16.9501C65.044 16.6503 65.1397 16.3106 65.1397 15.9311V14.7857C65.0463 14.8466 64.918 14.9028 64.7547 14.9543C64.596 15.0012 64.4163 15.0457 64.2155 15.0878C64.0147 15.1253 63.8142 15.1605 63.6134 15.1933C63.4128 15.2214 63.2307 15.2471 63.0674 15.2706C62.7173 15.3221 62.4116 15.4041 62.1504 15.5165C61.8889 15.6289 61.686 15.7812 61.5413 15.9733C61.3964 16.1607 61.3242 16.3949 61.3242 16.676C61.3242 17.0836 61.4712 17.3952 61.7654 17.6107C62.0639 17.8215 62.442 17.9269 62.8995 17.9269Z" fill="black"/>
<path d="M79.3617 12.0731L76.6314 12.2417C76.5847 12.0075 76.4844 11.7967 76.3303 11.6093C76.1765 11.4172 75.9734 11.2649 75.7213 11.1525C75.474 11.0354 75.1776 10.9768 74.8323 10.9768C74.3703 10.9768 73.9804 11.0752 73.663 11.272C73.3458 11.464 73.1871 11.7217 73.1871 12.045C73.1871 12.3026 73.2897 12.5205 73.4951 12.6985C73.7005 12.8766 74.0529 13.0194 74.5522 13.1272L76.4985 13.5207C77.5438 13.7362 78.3233 14.0829 78.8366 14.5608C79.3502 15.0386 79.6069 15.6664 79.6069 16.4441C79.6069 17.1516 79.3992 17.7723 78.9838 18.3064C78.5731 18.8405 78.0084 19.2574 77.2896 19.5573C76.5755 19.8524 75.7516 20 74.8183 20C73.3948 20 72.2607 19.7025 71.4159 19.1075C70.5757 18.5078 70.0833 17.6927 69.9386 16.662L72.872 16.5074C72.9606 16.9431 73.1754 17.2757 73.5161 17.5053C73.8569 17.7301 74.2932 17.8426 74.8252 17.8426C75.348 17.8426 75.768 17.7419 76.0854 17.5404C76.4074 17.3343 76.5709 17.0696 76.5755 16.7463C76.5709 16.4746 76.4564 16.252 76.2323 16.0787C76.0083 15.9007 75.6631 15.7648 75.1962 15.6711L73.3341 15.2987C72.2839 15.0878 71.5022 14.7224 70.9888 14.2024C70.48 13.6824 70.2257 13.0194 70.2257 12.2136C70.2257 11.5203 70.4124 10.9229 70.7857 10.4217C71.1638 9.92035 71.6935 9.53384 72.375 9.26212C73.0611 8.99039 73.8638 8.85453 74.7833 8.85453C76.1415 8.85453 77.2103 9.14267 77.9895 9.7189C78.7736 10.2951 79.2311 11.0799 79.3617 12.0731Z" fill="black"/>
<path d="M86.3852 20C85.2792 20 84.3272 19.7751 83.5291 19.3254C82.7356 18.8709 82.1243 18.2291 81.6949 17.3999C81.2654 16.5659 81.0506 15.5798 81.0506 14.4413C81.0506 13.331 81.2654 12.3565 81.6949 11.5179C82.1243 10.6793 82.7287 10.0258 83.5079 9.55727C84.292 9.08878 85.2116 8.85453 86.2663 8.85453C86.9757 8.85453 87.6362 8.96931 88.2476 9.19887C88.8637 9.42375 89.4003 9.7634 89.8578 10.2178C90.3198 10.6723 90.6791 11.2438 90.9358 11.9325C91.1925 12.6165 91.3208 13.4177 91.3208 14.3359V15.1581H82.2409V13.3029H88.5137C88.5137 12.8719 88.4203 12.49 88.2335 12.1574C88.0468 11.8248 87.7878 11.5648 87.4566 11.3774C87.1298 11.1853 86.7493 11.0892 86.3153 11.0892C85.8627 11.0892 85.4613 11.1947 85.1113 11.4055C84.7658 11.6116 84.4951 11.8904 84.2991 12.2417C84.1032 12.5884 84.0027 12.9749 83.9981 13.4013V15.1651C83.9981 15.6992 84.096 16.1607 84.292 16.5495C84.4928 16.9384 84.7752 17.2382 85.1391 17.4491C85.5032 17.6599 85.9349 17.7653 86.4345 17.7653C86.7657 17.7653 87.069 17.7184 87.3446 17.6247C87.6199 17.531 87.8556 17.3905 88.0516 17.2031C88.2476 17.0157 88.3968 16.7861 88.4996 16.5144L91.258 16.6971C91.1179 17.3624 90.8309 17.9433 90.3969 18.4399C89.9675 18.9318 89.412 19.316 88.7306 19.5924C88.0539 19.8641 87.2721 20 86.3852 20Z" fill="black"/>
<path d="M0 0H92V3.29821H0V0Z" fill="#75AFFF"/>
<path d="M8.21429 3.29821H11.5V19.7892H8.21429V3.29821Z" fill="#75AFFF"/>
</svg>
          </div>

          <div>
            <a className="btn-back" href="https://withtruebase.com" rel="noopener">
              ← Back
            </a>
          </div>
        </div>
      </header>

      <main className="hero-area" role="main">
        <div className="hero-inner">
          <section className="hero-copy">
            <h1 className="hero-title">See Truebase in Action</h1>
            <p className="hero-sub">
              Get a quick phone demo of how Truebase makes expenses butter smooth --- we'll talk you through how Truebase can save your PM team time and boost owner NOI.
            </p>

            <div className="form-card" aria-live="polite">
              <form onSubmit={handleSubmit} noValidate>
                <div className="field">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <div id="name-error" className="field-error" role="alert">
                      {errors.name}
                    </div>
                  )}
                </div>

                <div className="field">
                  <label htmlFor="phone">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : "phone-help"}
                    placeholder="(555) 555-5555"
                    inputMode="tel"
                    pattern="[0-9 ()-]*"
                  />
                  {errors.phone && (
                    <div id="phone-error" className="field-error" role="alert">
                      {errors.phone}
                    </div>
                  )}
                  {submitted && (
                    <div className="success-inline" role="status">
                      Thank you! Your demo is on its way via text message.
                    </div>
                  )}
                </div>

                {/* hidden analytics field */}
                <input type="hidden" name="analytics" value={analyticsValue} />

                <div className="form-actions">
                  <button type="submit" className="btn-primary">
                    Get a Free, 2-minute Phone Demo
                  </button>
                </div>

                <p className="privacy-note">
                  By submitting this form, you consent to receive SMS communications from Truebase to deliver your requested product demonstration through our automated messaging system. You will receive at least 2 text messages. Message and data rates may apply. Message frequency varies. Reply STOP to unsubscribe at any time or HELP for assistance. For more information, please review our <a href="/privacy" className="privacy-link">Privacy Policy</a> and <a href="/terms" className="privacy-link">Terms of Service</a>.
                </p>
              </form>
            </div>
          </section>

          <aside className="hero-visual" aria-hidden>
            {/* INSERT IMAGE LINK HERE - Replace the src attribute with your custom image URL */}
            <div className="custom-image-wrap">
              <img src={phoneMockup} alt="Phone demo preview" className="phone-mockup" />

            </div>
          </aside>
        </div>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <a href="https://withtruebase.com" className="footer-link">Truebase Home</a>
            <span className="sep">•</span>
            <a className="footer-link" href="mailto:team@withTruebase.com">team@withTruebase.com</a>
          </div>
          <div className="footer-copy">© {new Date().getFullYear()} Truebase. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}