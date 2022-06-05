import { atom } from "recoil";
import { Output } from "@/types";

export type OutputStateType = {
  showModal: boolean;
  currentOutput: Output | null;
};

export const outputsState = atom<OutputStateType>({
  key: "outputs",
  default: {
    showModal: false,
    currentOutput: null,
  },
});
