import { SequenceStatus } from "../../configs";
import { Completed, Error, Queued, Pending } from "./icons";

const statusVariant = {
  [SequenceStatus.PENDING]: {
    info: "Pending...",
    icon: Pending
  },
  [SequenceStatus.ERROR]: {
    info: (
      <>
        An error occured, <span>click here to see build logs.</span>
      </>
    ),
    icon: Error
  },
  [SequenceStatus.QUEUED]: {
    info: "Queued",
    icon: Queued
  },
  [SequenceStatus.COMPLETED]: {
    info: "Completed",
    icon: Completed
  }
};
export default statusVariant;
