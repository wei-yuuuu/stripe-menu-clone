import React, { useState, useCallback, useContext, useMemo } from "react";

type Option = {
  id: number;
  optionDimensions: any;
  optionCenterX: number;
  WrappedContent: React.ReactNode;
  contentDimensions?: { width: number; height: number };
};

type Options = Option[];

type Context = {
  options: Options;
  targetOption: Option;
  registerOptions: (args: Option) => void;
  updateOptions: (id: number, options: any) => void;
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

  const updateOptions = useCallback(
    (id, props) => {
      setOptions((items) =>
        items.map((item) => {
          if (item.id === id) {
            item = { ...item, ...props };
          }
          return item;
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
      updateOptions,
      targetId,
      setTargetId,
    }),
    [options, registerOptions, targetId, updateOptions]
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
