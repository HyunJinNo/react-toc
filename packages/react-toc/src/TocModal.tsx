import { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import { useModalBackHandler } from "./hooks/useModalBackHandler";
import { usePreventBodyScroll } from "./hooks/usePreventBodyScroll";
import { CloseIcon } from "./CloseIcon";
import { TocContext } from "./TocContext";
import { TocList } from "./TocList";

interface TocModalProps {
  title: string;
  isOpen: boolean;
  className?: string;
  modalClassName?: string;
  modalHeaderClassName?: string;
  modalTitleClassName?: string;
  closeIconClassName?: string;
  listClassName?: string;
  linkClassName?: string;
  activeClassName?: string;
  closeModal: () => void;
}

export const TocModal = ({
  title,
  isOpen,
  className,
  modalClassName,
  modalHeaderClassName,
  modalTitleClassName,
  closeIconClassName,
  listClassName,
  linkClassName,
  activeClassName,
  closeModal,
}: TocModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { activeId, tocItemList } = useContext(TocContext);

  useModalBackHandler(isOpen, closeModal);
  usePreventBodyScroll(isOpen);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className={["react-toc-modal-wrapper", className].join(" ")}
      ref={ref}
      onClick={(e) => {
        if (e.target === ref.current) {
          window.history.back();
          closeModal();
        }
      }}
    >
      <section className={["react-toc-modal", modalClassName].join(" ")}>
        <header
          className={["react-toc-modal-header", modalHeaderClassName].join(" ")}
        >
          <div
            className={["react-toc-modal-title", modalTitleClassName].join(" ")}
          >
            {title}
          </div>
          <button onClick={closeModal}>
            <CloseIcon
              className={["react-toc-close-icon", closeIconClassName].join(" ")}
            />
          </button>
        </header>
        <nav className="react-toc-modal-content">
          <ul className="react-toc-list">
            {tocItemList.map((tocItem) => (
              <TocList
                key={tocItem.id}
                activeId={activeId}
                tocItem={tocItem}
                listClassName={listClassName}
                linkClassName={linkClassName}
                activeClassName={activeClassName}
                offsetTop={30}
                offsetLeft={0}
                scrollBehavior="smooth"
                expandAll={true}
                expandDepth={1}
                depth={1}
              />
            ))}
          </ul>
        </nav>
      </section>
    </div>,
    document.getElementById("react-toc-modal-root")!,
  );
};
