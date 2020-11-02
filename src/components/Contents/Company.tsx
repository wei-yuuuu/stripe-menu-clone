import React from "react";
import styled from "styled-components";
import { h3, hover } from "./styles";

const CompanyWrapper = styled.div`
  padding: 32px 35px;
  white-space: nowrap;
  .primary {
    > li {
      ${h3}
      ${hover}
      display: flex;
      align-items: center;
      & + li {
        margin-top: 22px;
      }
      > span {
        display: inline-block;
        width: 17px;
        height: 17px;
        border-radius: 3.5px;
        background: #505e7d;
        margin-right: 13px;
      }
    }
  }
  .secondary {
    margin-top: 64.5px;
    li {
      display: flex;
      align-items: center;
      &:not(.title) {
        ${hover}
        margin-top: 21px;
        margin-left: 30px;
        color: #424770;
        .new-tag {
          text-transform: uppercase;
          font-size: 10px;
          background: #646ddf;
          border-radius: 6px;
          padding: 2px 4.5px;
          color: #fff;
          margin-left: 6px;
        }
        .arrow {
          margin-left: 6px;
          font-weight: bold;
          transform: scaleX(0.7) scaleY(1.1);
        }
      }
      &:nth-child(2) {
        margin-top: 30.2px;
        font-weight: 500;
      }
    }
    li.title {
      ${h3}
      .title-icon {
        display: inline-block;
        width: 17px;
        height: 17px;
        border-radius: 3.5px;
        margin-right: 13px;
        background: #505e7d;
      }
    }
  }
`;

function Company() {
  return (
    <CompanyWrapper>
      <ul className="primary">
        <li>
          <span />
          About Stripe
        </li>
        <li>
          <span />
          Customers
        </li>
        <li>
          <span />
          Jobs
        </li>
        <li>
          <span />
          Environment
        </li>
      </ul>
      <ul className="secondary">
        <li className="title">
          <span className="title-icon" />
          From the Blog
        </li>
        <li>
          Payouts with no code required
          <span className="new-tag">Stripe Atlas</span>
          <span className="arrow">{">"}</span>
        </li>
        <li>
          Stripe Home
          <span className="arrow">{">"}</span>
        </li>
        <li>
          Improved Fraud Detection
          <span className="arrow">{">"}</span>
        </li>
      </ul>
    </CompanyWrapper>
  );
}

export default Company;
