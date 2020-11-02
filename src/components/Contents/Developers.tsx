import React from "react";
import styled from "styled-components";
import { h3, hover, p } from "./styles";

const DevelopersWrapper = styled.div`
  padding: 32px 35px;
  white-space: nowrap;
  .primary {
    display: flex;
    > span {
      display: inline-block;
      width: 17px;
      height: 17px;
      margin-right: 12px;
      background: #505e7d;
      border-radius: 3.5px;
    }
    > div {
      > h3 {
        ${h3}
        ${hover}
      }
      > p {
        ${p}
        margin-top: 16.7px;
      }
      > div {
        margin-top: 35px;
        display: flex;
        align-items: center;
        > ul + ul {
          margin-left: 41px;
        }
        > ul li {
          ${hover}
          color: #424770;
          h4 {
            color: #8898aa;
            text-transform: uppercase;
          }
          & + li {
            margin-top: 13px;
          }
        }
      }
    }
  }
  .secondary {
    margin-top: 69px;
    li {
      ${hover}
      ${h3}
      display: flex;
      align-items: center;
      & + li {
        margin-top: 21px;
      }
    }
    span {
      display: inline-block;
      width: 17px;
      height: 17px;
      margin-right: 12px;
      border-radius: 3.5px;
      background: #505e7d;
      &.api-reference {
        border-radius: 0;
        background: repeating-linear-gradient(
          rgba(0, 0, 0, 0),
          #000 0.001px,
          #000 2.125px,
          #fff 2.126px,
          #fff 4.25px
        );
      }
    }
  }
`;

function Developers() {
  return (
    <DevelopersWrapper>
      <div className="primary">
        <span className="documentation" />
        <div>
          <h3>Documentation</h3>
          <p>Start integrating Stripe&rsquo;s products and tools</p>
          <div>
            <ul>
              <li>
                <h4>Get Started</h4>
              </li>
              <li>Elements</li>
              <li>Checkout</li>
              <li>Mobile apps</li>
            </ul>
            <ul>
              <li>
                <h4>Popular Topics</h4>
              </li>
              <li>Apple Pay</li>
              <li>Testing</li>
              <li>Launch Checklist</li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="secondary">
        <li>
          <span className="api-reference" />
          Full API Reference
        </li>
        <li>
          <span />
          API Status
        </li>
        <li>
          <span />
          Open Source
        </li>
      </ul>
    </DevelopersWrapper>
  );
}

export default Developers;
