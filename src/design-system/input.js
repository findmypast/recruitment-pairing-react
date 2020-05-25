import React from "react";
import styled, { css } from "styled-components";
import * as SS from "styled-system";
import { useId } from "@reach/auto-id";
import { Box } from "./box";
import { fromTheme } from "./theme-utils";

/** @type {import('styled-components').StyledComponent<'svg', import('styled-components').DefaultTheme, React.HTMLProps<SVGElement> & SS.ColorProps & SS.LayoutProps & SS.SpaceProps & SS.PositionProps & SS.ShadowProps & { size: SS.ResponsiveValue<SS.TLengthStyledSystem> }>} */
const IconWrapper = styled.svg(
  SS.color,
  SS.layout,
  SS.space,
  SS.position,
  SS.shadow,
  SS.system({
    size: {
      properties: ["width", "height"],
      scale: "space"
    }
  })
);
IconWrapper.defaultProps = {
  size: "1em"
};

const WarningIcon = props => (
  /**
   * Font Awesome Free 5.0.8 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL1.1, Code: MIT License)
   */
  <IconWrapper viewBox="0 0 576 512" {...props}>
    <path
      fill="currentColor"
      d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
    />
  </IconWrapper>
);

const CheckedIcon = props => (
  <IconWrapper viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M8.6 14.593l-3.8-3.871L2 13.574 8.6 20.5 22 6.852 19.2 4z"
    />
  </IconWrapper>
);

/** @type {import('styled-components').ThemedStyledFunction<"div", any, { spacing?: keyof spacing | number }>} */
const styledDivWithExtraProps = styled.div;
const BasicFlex = styledDivWithExtraProps`
  display: flex;
  > * + * {
    margin-left: ${({ spacing: key = "small" }) =>
      typeof key === "number" ? key + "rem" : fromTheme.space[key]};
  }
`;

const Stack = styledDivWithExtraProps`
  list-style: none;
  > * + * {
    ${props =>
      props.withDividers &&
      css`
        border-top: 1px solid ${fromTheme.colors.neutralMid};
        padding-top: ${({ spacing: key = "small" }) =>
          typeof key === "number" ? key + "rem" : fromTheme.space[key]};
      `}
    margin-top: ${({ spacing: key = "small" }) =>
      typeof key === "number" ? key + "rem" : fromTheme.space[key]}ß;
  }
`;

const StyledLabel = styled.label`
  display: block;
  input[disabled] ~ & {
    color: ${props => props.theme.colors.grey50};
  }
  input[type="checkbox"] ~ &,
  input[type="radio"] ~ & {
    cursor: pointer;
    display: inline-block;
    ${() => ButtonGroup} & {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
      height: 3rem;
      border-radius: 4px;
      box-shadow: inset 0 0 0 1px ${props => props.theme.colors.grey50};
      padding-left: 0.5rem;
    }
  }
  input[type="radio"]:checked ~ &,
  input[type="checkbox"]:checked ~ & {
    ${() => ButtonGroup} & {
      box-shadow: inset 0 0 0 2px ${props => props.theme.colors.button},
        ${props => props.theme.shadows.low};
      position: relative;
    }
  }
  ${() => Toggle} & {
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    width: 100%;
    padding: 0 1rem;
    ${props =>
      !props.theme.isNewBrand &&
      css`
        color: ${props => props.theme.colors.indigo};
      `}
  }
  ${() => Toggle} input:checked ~ & {
    ${props =>
      !props.theme.isNewBrand &&
      css`
        background-color: ${props => props.theme.colors.coral50};
        box-shadow: inset 0 0 0 1px ${props => props.theme.colors.button};
      `}
  }
  input[type="checkbox"].focus-visible ~ &,
  input[type="radio"].focus-visible ~ & {
    background: rgba(10, 10, 10, 0.05);
  }
`;

const placeholder = (...args) => css`
  ::-webkit-input-placeholder {
    ${css(...args)}
  }

  :-moz-placeholder {
    /* Firefox 18- */
    ${css(...args)}
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    ${css(...args)}
  }

  :-ms-input-placeholder {
    ${css(...args)}
  }
`;

const chevronIcon = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="292.4" height="292.4">
  <path fill="currentColor" d="M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z"/>
</svg>
`);

const StyledInput = styled.input`
  &[type='email'],
  &[type='number'],
  &[type='password'],
  &[type='search'],
  &[type='tel'],
  &[type='text'],
  &[type='url'],
  select& {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    height: 2.5rem;
    padding: 0 0.5rem;
    width: 100%;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px ${props => props.theme.colors.grey50};
    border: none;
    font-size: ${props => props.theme.fontSizes.small};
    &.focus-visible {
      outline: none;
      box-shadow: inset 0 0 0 2px ${props =>
        props.theme.colors.grey50}, ${props => props.theme.shadows.low};
    }
  ${props =>
    props.invalid &&
    css`
      box-shadow: inset 0 0 0 2px ${props => props.theme.colors.error};
    `}
  }
  select& {
    background: white;
    background-image: url('data:image/svg+xml;charset=US-ASCII,${chevronIcon}');
    background-repeat: no-repeat;
    background-position: right 0.7em top 50%;
    background-size: 0.65em auto;
  }
  &[type='checkbox'], &[type='radio'] {
    opacity: 0;
    position: absolute;
    width: 0;
  }
  ${placeholder`color: ${props => props.theme.colors.grey50};`}
`;

const ValidationError = styled(BasicFlex)`
  color: ${props => props.theme.colors.error};
  font-size: ${props => props.theme.fontSizes.small};
  align-items: center;
`;
const FieldsetValidationError = styled(ValidationError)`
  margin-top: 0.25em;
`;

const CheckboxDisplayBox = styled.div`
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 4px;
  box-shadow: 0 0 0 1px ${props => props.theme.colors.grey50};
  input:checked ~ label & {
    box-shadow: 0 0 0 1px ${props => props.theme.colors.button};
  }
  border: none;
  position: relative;
  overflow: hidden;
  margin-right: 0.5rem;
  vertical-align: text-top;
`;

const CheckboxDisplayChecked = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.button};
  overflow: hidden;
  height: 24px;
  width: 24px;
  transform: translate(-12px, -12px);
  border: 12px solid white;
  transition: border 0.2s ease-in-out;
  input:disabled ~ label & {
    border-color: ${fromTheme.colors.cream};
  }
  input:checked ~ label & {
    border: 0px solid white;
  }
`;

const CheckboxDisplay = props => {
  return (
    <CheckboxDisplayBox role="presentation" {...props}>
      <CheckboxDisplayChecked>
        <CheckedIcon
          css={css`
            color: ${props => props.theme.colors.white};
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -0.5em;
          `}
        />
      </CheckboxDisplayChecked>
    </CheckboxDisplayBox>
  );
};

const RadioDisplayBox = styled.div`
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  box-shadow: 0 0 0 1px ${props => props.theme.colors.grey50};
  border: none;
  background: white;
  position: relative;
  overflow: hidden;
  margin-right: 0.5rem;
  vertical-align: text-top;
  transition: box-shadow 0.2s ease-in-out;
  ${() => Toggle} & {
    display: none;
  }
  input:checked ~ label & {
    box-shadow: 0 0 0 2px ${props => props.theme.colors.button};
  }
`;

const RadioDisplayChecked = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.button};
  overflow: hidden;
  height: 8px;
  width: 8px;
  transform: translate(-4px, -4px);
  border: 4px solid white;
  transition: border 0.2s ease-in-out;
  input:checked ~ label & {
    border: 0px solid white;
  }
`;

const RadioDisplay = props => {
  return (
    <RadioDisplayBox role="presentation" {...props}>
      <RadioDisplayChecked />
    </RadioDisplayBox>
  );
};

const InputWrapper = styled(Stack)`
  ${() => Toggle} & {
    flex: 1 1 0px;
    box-shadow: inset 0 0 0 1px ${props => props.theme.colors.button};
    position: relative;
    overflow: hidden;
    display: block;
    :first-child {
      border-radius: ${props => props.theme.radii.button} 0 0
        ${props => props.theme.radii.button};
    }
    :last-child {
      border-radius: 0 ${props => props.theme.radii.button}
        ${props => props.theme.radii.button} 0;
    }
    & + & {
      border-left-style: none;
    }
    > * {
      margin-top: 0 !important;
    }
  }
`;

const InputLabelGroup = styled.div`
  ${props => {
    // eslint-disable-next-line
    switch (props.type) {
      case "email":
      case "number":
      case "password":
      case "search":
      case "tel":
      case "text":
      case "url":
      case "select":
        return css`
          display: flex;
          flex-direction: column-reverse;
          & label {
            margin-bottom: 0.25rem;
          }
        `;
    }
  }}
`;

/**
 * @typedef {
   'text' |
   'email' |
   'number' |
   'password' |
   'tel' |
   'search' |
   'url' |
   'radio' |
   'checkbox' |
   'select'
  } ExtendedInputType
 */

/**
 * @typedef {object} InputProps
 * @property {string} label
 * The field label. Required even if it's not going to be shown (see `hideLabel`)
 * @property {ExtendedInputType} [type="text"]
 * The input type. These are HTML input types, with the addition of "select" for
 * dropdown selector inputs.
 * @property {string} [id]
 * The HTML id for the field. If not provided, one will be auto-generated.
 * @property {boolean} [hideLabel]
 * Whether to hide the label visually (it will still be read out by screen readers)
 * @property {string} [errorMessage]
 * Error message to display under the input. Usually comes from form validation.
 * @property {string[] | { value: string | number, text: string }[]} [optionList]
 * List of possible options in text (typeahead) or select inputs.
 */

/** @type {React.FunctionComponent<InputProps & React.HTMLProps<HTMLInputElement>>} */
export const Input = React.forwardRef(
  (
    {
      label,
      id: userProvidedId,
      className,
      hideLabel,
      errorMessage,
      optionList = [],
      type = "text",
      ...props
    },
    ref
  ) => {
    const { placeholder, defaultValue } = props;
    const isSelect = type === "select";
    const autoGeneratedId = useId();
    const id = userProvidedId || autoGeneratedId;
    const options = optionList.map(option => (
      <option key={option.value || option} value={option.value || option}>
        {option.text || option}
      </option>
    ));
    return (
      <InputWrapper spacing={1 / 4} className={className}>
        <InputLabelGroup type={type}>
          {isSelect ? (
            <StyledInput
              as="select"
              invalid={!!errorMessage}
              id={id}
              ref={ref}
              {...props}
              defaultValue={defaultValue || (placeholder && "")}
            >
              {placeholder && (
                <option value="" disabled>
                  {placeholder}
                </option>
              )}
              {options}
            </StyledInput>
          ) : (
            <StyledInput
              type={type}
              list={optionList && id + "-options"}
              invalid={!!errorMessage}
              id={id}
              ref={ref}
              {...props}
            />
          )}
          <StyledLabel htmlFor={id} data-visually-hidden={hideLabel}>
            {type === "checkbox" && <CheckboxDisplay />}
            {type === "radio" && <RadioDisplay />}
            {label}
          </StyledLabel>
        </InputLabelGroup>
        {errorMessage && type !== "radio" && (
          <ValidationError spacing={1 / 4}>
            <WarningIcon />
            <span>{errorMessage}</span>
          </ValidationError>
        )}
        {options.length > 0 && !isSelect && (
          <datalist id={id + "-options"}>{options}</datalist>
        )}
      </InputWrapper>
    );
  }
);

export const Fieldset = ({
  legend,
  children,
  hideLegend,
  errorMessage,
  ...props
}) => {
  return (
    <>
      <Box as="fieldset" {...props}>
        <legend
          data-visually-hidden={hideLegend}
          css={css`
            margin-bottom: 0.25rem;
          `}
        >
          {legend}
        </legend>
        <FieldsWrapper>{children}</FieldsWrapper>
      </Box>
      {errorMessage && (
        <FieldsetValidationError spacing={1 / 4}>
          <WarningIcon />
          <span>{errorMessage}</span>
        </FieldsetValidationError>
      )}
    </>
  );
};

const FieldsWrapper = styled.div`
  ${() => Toggle} > & {
    display: flex;
  }
`;

export const Toggle = styled(Fieldset)``;

export const ButtonGroup = styled(Fieldset)``;
