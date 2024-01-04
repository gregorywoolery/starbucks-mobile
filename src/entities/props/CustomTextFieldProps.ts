import { KeyboardTypeOptions, ViewStyle } from 'react-native';

export type CustomTextFieldProps = {
  value: string;
  placeholder: string;
  handleChange: {
    /** Classic React change handler, keyed by input name */
    (e: React.ChangeEvent<unknown>): void;
    /** Preact-like linkState. Will return a handleChange function.  */
    <T = string | React.ChangeEvent<unknown>>(
      field: T
    ): T extends React.ChangeEvent<unknown>
      ? void
      : (e: string | React.ChangeEvent<unknown>) => void;
  };
  handleBlur: {
    /** Classic React blur handler, keyed by input name */
    (e: React.FocusEvent<unknown>): void;
    /** Preact-like linkState. Will return a handleBlur function. */
    <T = string | unknown>(fieldOrEvent: T): T extends string
      ? (e: unknown) => void
      : void;
  };
  fieldErrors: string | undefined;
  fieldTouched: boolean | undefined;
  fieldWidth?: string;
  isPasswordField?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  hideError?: boolean;
  textInputStyles?: ViewStyle | ViewStyle[];
  keyboardType?: KeyboardTypeOptions;
};
