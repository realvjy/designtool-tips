import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { EmailIcon, TwitterIcon, LinkedIcon, DesignLetterIcon } from "./icons";
import Script from "next/script";

const Subscribe = () => {
  return (
    <FormWrapper>
      <DesignLetterIcon className="logo" height={20} width={118} />
      <ConvertKitForm>
        <div className="subtitle">
          <h3>Subscribe to weekly newsletter</h3>
        </div>
        <div className="ck-form">
          {/* here connvertkit */}
          <Script src="https://f.convertkit.com/ckjs/ck.5.js"></Script>
          <form
            action="https://app.convertkit.com/forms/5376206/subscriptions"
            method="post"
            data-sv-form="5376206"
            data-uid="0341728a5f"
            data-format="inline"
            data-version="6"
            data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":" Thanks for subscribing! Next designletter coming soon"},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"6"}'
            // eslint-disable-next-line react/no-unknown-property
            min-width="400 500 600 700 800"
          >
            <div data-style="clean">
              <ul
                className="formkit-alert formkit-alert-error"
                data-element="errors"
                data-group="alert"
              ></ul>
              <div
                data-element="fields"
                data-stacked="false"
                className="seva-fields formkit-fields dl-style"
              >
                <div className="formkit-field inputbox">
                  <input
                    className="formkit-input email"
                    name="email_address"
                    aria-label="Your Email Address"
                    placeholder="Your Email Address"
                    required
                    type="email"
                    // style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227); border-radius: 4px; font-weight: 400;"
                  />
                </div>
                <div className="sub-action">
                  <button
                    data-element="submit"
                    className="formkit-submit formkit-submit sub-button"
                    // style="color: rgb(255, 255, 255); background-color: rgb(22, 119, 190); border-radius: 4px; font-weight: 400;"
                  >
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span className="">Subscribe</span>
                  </button>
                </div>
              </div>
              <div className="formkit-powered-by-convertkit-container"></div>
            </div>
          </form>
        </div>
      </ConvertKitForm>
    </FormWrapper>
  );
};

export default Subscribe;

const FromSection = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

const FormWrapper = styled.div`
  background: var(--dl-bg);
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  gap: 12px;
  .up {
    transition: all 333ms ease 0s;
    opacity: 0;
    transform: scale(0.7);
  }
  &:hover {
    .up {
      transform: scale(1);
      opacity: 1;
    }
  }
  .tag {
    display: flex;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    opacity: 0.3;
  }
  h3 {
    margin: 2px 0;
    font-size: 22px;
    font-weight: 300;
    line-height: 120%;
    letter-spacing: -0.3px;
    font-family: var(--font-secondary);
    @media screen and (max-width: 768px) {
      font-size: 24px;
      letter-spacing: var(--lspace-16);
    }
    .new-up {
      margin-top: 2px;
      transform: scale(0.8);
    }
  }
  img {
    border-radius: 2px;
  }
  p {
    font-size: 16px;
    letter-spacing: var(--lspace-15);
    margin: 2px 0;
    padding-top: 4px;
    opacity: 0.7;
    font-weight: 400;
    line-height: 24px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.05px;
      margin: 8px 0;
    }
  }
  h4 {
    font-size: 12px;
    font-weight: 500;
    line-height: 120%;
    margin: 2px 0;
    opacity: 0.3;
    @media screen and (max-width: 768px) {
      font-size: 12px;
      letter-spacing: var(--lspace-12);
    }
  }
  .logo {
    margin-bottom: 6px;
    margin-top: 12px;
  }
  @media screen and (max-width: 600px) {
    overflow: hidden;
  }
`;

const Links = styled.div`
  display: flex;
  margin-top: 12px;
  svg {
    margin-right: 6px;
  }

  .email-icon path {
    fill: var(--sky-3c);
  }
  .tw-icon path {
    fill: var(--sky-3c);
  }
  a {
    margin-right: 24px;
    cursor: pointer;
    font-size: 18px;
    letter-spacing: var(--lspace-20);
    font-weight: 500;
    display: flex;
    align-items: center;
    @media screen and (max-width: 600px) {
      font-size: 16px;
      svg {
        margin-right: 4px;
        transform: scale(0.9);
      }
    }
  }
`;

const ConvertKitForm = styled.div`
  .ck-form {
    padding: 0;
    min-width: 320px;
    @media screen and (max-width: 600px) {
      min-width: 100%;
    }
    .dl-style {
      display: flex;
      margin-top: 16px;
      gap: 12px;
      margin-bottom: 12px;
      @media (max-width: 624px) {
        flex-direction: column;
        gap: 2px;
      }
      .inputbox {
        min-width: 240px;
        display: flex;
        height: 40px;
        @media (max-width: 624px) {
          width: 100%;
          min-width: 100%;
        }
        .email {
          padding: 10px 12px;
          font-weight: 500;
          font-size: 15px;
          letter-spacing: var(--lsapce-15);
          line-height: 20px !important;
          border: 1px solid transparent;
          border-radius: 20px;
          resize: vertical;
          width: 100%;
          flex-grow: 1;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          background: transparent;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          outline: none;
          -webkit-transition: all ease 0.2s;
          -moz-transition: all ease 0.2s;
          -ms-transition: all ease 0.2s;
          -o-transition: all ease 0.2s;
          transition: all ease 0.2s;
          &::placeholder {
            opacity: 0.8;
          }
          &:hover,
          &:active {
            outline: none;
            border: 1px solid $light-blue;
            -moz-box-shadow: 0 0 0 1px rgba(121, 151, 255, 0.3);
            -webkit-box-shadow: 0 0 0 1px rgba(121, 151, 255, 0.3);
            box-shadow: 0 0 0 1px rgba(121, 151, 255, 0.3);
          }
          &:focus-within::placeholder {
            opacity: 0.4;
          }
        }
      }
      .sub-action {
        display: block;
        @media (max-width: 600px) {
          width: 100%;
        }
        .sub-button {
          padding: 11px 24px;
          font-weight: 600;
          font-size: 15px;
          min-height: 40px;

          letter-spacing: var(-lsapce-15);
          line-height: 100% !important;
          width: 100%;
          background: linear-gradient(
              0deg,
              rgba(107, 117, 119, 0.07),
              rgba(94, 94, 94, 0.08)
            ),
            rgba(255, 255, 255, 0.08);
          background-blend-mode: color-dodge, lighten;
          color: var(--white);

          border: 0px solid transparent;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          cursor: pointer;
          border-radius: 20px;
          @media (max-width: 600px) {
            margin-top: 10px;
            margin-bottom: 8px;
          }
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
`;
