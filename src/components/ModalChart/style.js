import styled from "styled-components";

export const ModalChartStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1000px;
  width: 85vw;
  border-radius: var(--border-radius-large);
  overflow: hidden;
  background: var(--color-background-variation);
  @media screen and (max-width: 826px) {
    max-height: 90vh;
    overflow-y: scroll;
  }
`;

export const ModalChartWrapperStyled = styled.div`
  display: ${(props) => (props.opened ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  &:before {
    content: "";
    background: black;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export const ModalChartCloseIcon = styled.span`
  font-family: sans-serif;
  cursor: pointer;
  position: sticky;
  z-index: 99;
  width: fit-content;
  top: 2rem;
  right: 2rem;
  line-height: 1;
`;

export const ModalChartHeaderStyled = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem 4rem;
  background: var(--color-background-variation);
  .social-icon ~ .social-link {
    margin-left: 0.5rem;
  }
  .social-link {
    color: var(--color-text-variation);
    font-weight: 700;
    font-size: 0.75rem;
  }
  .stat {
    &-caption {
      color: var(--color-text);
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.25;
    }
    &-number {
      color: var(--color-text);
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1;
      margin-right: 1rem;
    }
    &-indicator {
      width: 0.625rem;
      margin-right: 0.5rem;
    }
    &-indicator,
    &-number {
      &.increase {
        color: var(--color-lime-green);
      }
      &.decrease {
        color: var(--color-bright-red);
      }
    }
  }
  @media screen and (max-width: 826px) {
    .stat-number {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 576px) {
    padding: 2rem;
  }
`;

export const ModalChartBodyStyled = styled.div`
  max-width: 100%;
  padding: 2rem 4rem;
  background: var(--color-background);
  border-radius: var(--border-radius-large) var(--border-radius-large) 0 0;
  .date-range-title {
    margin-bottom: 2rem;
    color: var(--color-text-variation);
  }
  .recharts-cartesian-grid {
    opacity: 0.3;
  }
  .recharts-cartesian-grid,
  .recharts-layer.recharts-cartesian-axis.recharts-xAxis.xAxis,
  .recharts-layer.recharts-cartesian-axis.recharts-yAxis.yAxis {
    line {
      fill: var(--color-text-variation);
      stroke: var(--color-text-variation);
    }
  }
  .recharts-wrapper {
    width: 100%;
    text,
    tspan {
      font-size: 12px;
      font-weight: 400;
      fill: var(--color-text-variation);
    }
    .recharts-layer {
      &.recharts-line-dots circle {
        r: 5;
        fill: var(--color-background);
        stroke-width: 2;
      }
      &.recharts-active-dot circle {
        r: 5;
        fill: var(--color-desaturated-purple);
        stroke: var(--color-desaturated-purple);
        stroke-width: 2;
      }
      &.recharts-line .recharts-curve.recharts-line-curve {
        stroke-width: 2;
      }
    }
    .recharts-tooltip-wrapper {
      .recharts-default-tooltip {
        background: var(--color-background) !important;
        border: 1px solid var(--color-desaturated-purple) !important;
        padding: 0 1rem !important;
      }
      .recharts-tooltip-label {
        display: none !important;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 2rem 0.25rem;
    .date-range-title {
      padding: 0 2rem;
    }
    .recharts-wrapper {
      overflow-x: scroll;
      max-width: 100%;
    }
  }
`;
