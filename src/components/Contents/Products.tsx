import React from "react";
import styled from "styled-components";
import { h3, hover, p } from "./styles";

const ProductsWrapper = styled.div`
  padding: 32px 35px;
  white-space: nowrap;
  .primary {
    li {
      display: flex;
      align-items: center;
      div {
        ${hover}
        margin-left: 19px;
        h3 {
          ${h3}
        }
        p {
          ${p}
          margin-top: 10px;
        }
      }
      & + li {
        margin-top: 32px;
      }
      span {
        display: inline-block;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        &.payments {
          background: #80b9f9;
        }
        &.billing {
          background: #64e5a7;
        }
        &.connect {
          background: #55d3f5;
        }
      }
    }
  }
  .secondary {
    margin-top: 60px;
    li {
      ${hover}
      display: flex;
      & + li {
        margin-top: 28px;
      }
      h3 {
        ${h3}
        margin-left: 16px;
      }
      p {
        ${p}
        margin-left: 14px;
      }
      span {
        display: inline-block;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        &.sigma {
          background: #beaef0;
        }
        &.atlas {
          background: #ffd876;
        }
        &.radar {
          background: #fba2e8;
        }
        &.issuing {
          background: #80b9f9;
        }
        &.terminal {
          background: #5355ba;
        }
      }
    }
  }
`;

function Products() {
  return (
    <ProductsWrapper>
      <ul className="primary">
        <li>
          <span className="payments" />
          <div>
            <h3>Payments</h3>
            <p>A complete payments platform</p>
          </div>
        </li>
        <li>
          <span className="billing" />
          <div>
            <h3>Billing</h3>
            <p>Build and scale your recurring business model</p>
          </div>
        </li>
        <li>
          <span className="connect" />
          <div>
            <h3>Connect</h3>
            <p>Everything platforms need to get sellers paid</p>
          </div>
        </li>
      </ul>
      <ul className="secondary">
        <li>
          <span className="sigma" />
          <h3>Sigma</h3>
          <p>Your business data at your fingertips.</p>
        </li>
        <li>
          <span className="atlas" />
          <h3>Atlas</h3>
          <p>The best way to start an internet business.</p>
        </li>
        <li>
          <span className="radar" />
          <h3>Radar</h3>
          <p>Fight fraud with machine learning.</p>
        </li>
      </ul>
    </ProductsWrapper>
  );
}

export default Products;
