import styled, { css } from "styled-components";

const COLORS = {
  facebook: css`
    background: hsl(208, 82%, 53%);
    /* background: hsl(203, 89%, 53%); */
  `,
  instagram: css`
    background: linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
  `,
  twitter: css`
    background: hsl(195, 100%, 50%);
  `,
  youtube: css`
    background: hsl(348, 97%, 39%);
  `,
};

export const CardStyled = styled.div`
  position: relative;
  padding: 1.25rem;
  background: var(--color-element);
  border-radius: var(--border-radius-default);
  overflow: hidden;
  cursor: pointer;
  transition: background 300ms ease;
  &:hover,
  &:active {
    background: var(--color-element-hover);
  }
  @media screen and (max-width: 576px) {
    margin: 0 1rem;
  }
`;

export const CardHeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 5px; */
  .social-icon ~ .social-link {
    margin-left: 0.5rem;
  }
  .social-link {
    color: var(--color-text-variation);
    font-weight: 700;
    font-size: 0.75rem;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    ${({ topLine }) => COLORS[topLine]}
  }
`;

export const CardBodyStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1.25rem 0;
  .stat-number {
    color: var(--color-text);
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1;
  }
  .stat-caption {
    color: var(--color-text-variation);
    text-transform: uppercase;
    font-size: 0.75rem; // 12px
    font-weight: 400;
    line-height: 2;
    letter-spacing: 6px;
  }
  @media screen and (min-width: 576px) and (max-width: 826px) {
    .stat-number {
      font-size: 2.5rem;
    }
    .stat-caption {
      color: var(--color-text-variation);
      font-size: 0.5rem;
    }
  }
`;

export const CardFooterStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  .growth {
    &-caption {
      color: var(--color-text);
      font-size: 0.75rem;
      font-weight: 700;
    }
    &-indicator {
      width: 0.5rem;
      margin-right: 0.25rem;
    }
  }
  &.increase {
    .growth {
      &-indicator,
      &-caption {
        color: var(--color-lime-green);
      }
    }
  }
  &.decrease {
    .growth {
      &-indicator,
      &-caption {
        color: var(--color-bright-red);
      }
    }
  }
`;
