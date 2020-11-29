import React, { useState, useCallback, useContext, useMemo } from "react";

export type Option = Partial<{
  id: number;
  optionDimensions: any;
  optionCenterX: number;
  WrappedContent: React.ElementType;
  contentDimensions: { width: number; height: number };
}>;

type Options = Option[];

type Context = {
  options: Options;
  targetOption: Option;
  registerOptions: (args: Option) => void;
  updateOption: (id: number, option: Option) => void;
  targetId: number;
  setTargetId: React.Dispatch<React.SetStateAction<number>>;
} | null;

const DropdownContext = React.createContext<Context>(null);

function DropdownProvider<T>({ children }: React.PropsWithChildren<T>) {
  const [options, setOptions] = useState<Options>([]);
  const [targetId, setTargetId] = useState(-1);

  const registerOptions = useCallback(
    ({ id, optionDimensions, optionCenterX, WrappedContent }) => {
      setOptions((items) => [
        ...items,
        {
          id,
          optionDimensions,
          optionCenterX,
          WrappedContent,
        },
      ]);
    },
    [setOptions]
  );

  const updateOption = useCallback(
    (id: number, props: Option) => {
      setOptions((prevOptions) =>
        prevOptions.map((option) => {
          if (option.id === id) {
            return { ...option, ...props };
          }
          return option;
        })
      );
    },
    [setOptions]
  );

  const value = useMemo(
    () => ({
      options,
      targetOption: options.find((option) => option.id === targetId) as Option,
      registerOptions,
      updateOption,
      targetId,
      setTargetId,
    }),
    [options, registerOptions, targetId, updateOption]
  );

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
}

function useDropdown() {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("useDropdown must be used within [DropdownProvider]");
  }

  return context;
}

export { DropdownProvider, useDropdown };
