import { Overlay } from "@/components/Overlay";
import { Transition } from "@/components/Transition";
import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  show: boolean;
  children?: ReactNode;
}

export function ModalFrame(props: Props) {
  return (
    <Transition
      className="fixed inset-0 z-[9999]"
      animation="none"
      show={props.show}
    >
      <Overlay>
        <Transition
          isChild
          className="flex h-full w-full items-center justify-center"
          animation="slide-up"
        >
          {props.children}
        </Transition>
      </Overlay>
    </Transition>
  );
}

export function Modal(props: Props) {
  return createPortal(
    <ModalFrame show={props.show}>{props.children}</ModalFrame>,
    document.body
  );
}

export function ModalCard(props: { children?: ReactNode }) {
  return (
    <div className="relative mx-2 max-w-[600px] overflow-hidden rounded-lg bg-denim-200 px-10 py-10">
      {props.children}
    </div>
  );
}
