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
  modalBackgroundClassName?: string;
  modalClassName?: string;
  modalHeaderClassName?: string;
  modalTitleClassName?: string;
  modalContentClassName?: string;
  closeIconClassName?: string;
  listClassName?: string;
  linkClassName?: string;
  activeClassName?: string;
  offsetTop?: number;
  offsetLeft?: number;
  scrollBehavior?: ScrollBehavior;
  expandAll?: boolean;
  expandDepth: 1 | 2 | 3 | 4 | 5;
  closeModal: () => void;
}

export const TocModal = ({
  title,
  isOpen,
  modalBackgroundClassName,
  modalClassName,
  modalHeaderClassName,
  modalTitleClassName,
  modalContentClassName,
  closeIconClassName,
  listClassName,
  linkClassName,
  activeClassName,
  offsetTop,
  offsetLeft,
  scrollBehavior,
  expandAll,
  expandDepth,
  closeModal,
}: TocModalProps) => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const { activeId, tocItemList } = useContext(TocContext);

  useModalBackHandler(isOpen, closeModal);
  usePreventBodyScroll(isOpen);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className={["react-toc-modal-background", modalBackgroundClassName].join(
        " ",
      )}
      ref={backgroundRef}
      onClick={(e) => {
        if (e.target === backgroundRef.current) {
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
        <nav
          className={["react-toc-modal-content", modalContentClassName].join(
            " ",
          )}
        >
          <ul className={["react-toc-list", listClassName].join(" ")}>
            {tocItemList.map((tocItem) => (
              <TocList
                key={tocItem.id}
                activeId={activeId}
                tocItem={tocItem}
                listClassName={listClassName}
                linkClassName={linkClassName}
                activeClassName={activeClassName}
                offsetTop={offsetTop}
                offsetLeft={offsetLeft}
                scrollBehavior={scrollBehavior}
                expandAll={expandAll}
                expandDepth={expandDepth}
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
