import { TocModal } from "./TocModal";
import { useModal } from "./hooks/useModal";
import { ListIcon } from "./ListIcon";

interface TocTopBarProps {
  /**
   * A string that represents the title of the TOC (Table of Contents).
   * This is used to display a heading above the modal content.
   */
  title: string;

  /**
   * CSS class applied to the container of the TOC top bar.
   */
  topBarClassName?: string;

  /**
   * CSS class applied to the title of the TOC top bar.
   */
  topBarTitleClassName?: string;

  /**
   * CSS class applied to the list icon.
   */
  listIconClassName?: string;

  /**
   * CSS class applied to the background of the TOC modal.
   */
  modalBackgroundClassName?: string;

  /**
   * CSS class applied to the container of the TOC modal.
   */
  modalClassName?: string;

  /**
   * CSS class applied to the header of the TOC modal.
   */
  modalHeaderClassName?: string;

  /**
   * CSS class applied to the title of the TOC modal.
   */
  modalTitleClassName?: string;

  /**
   * CSS class applied to the content of the TOC modal.
   */
  modalContentClassName?: string;

  /**
   * CSS class applied to the close icon.
   */
  closeIconClassName?: string;

  /**
   * CSS class applied to all `<ul>` elements in the TOC.
   */
  listClassName?: string;

  /**
   * CSS class applied to all `<a>` links.
   */
  linkClassName?: string;

  /**
   * Additional CSS class applied to the active link.
   */
  activeClassName?: string;

  /**
   * Vertical offset applied when scrolling to a heading.
   *
   * default: 30
   */
  offsetTop?: number;

  /**
   * Horizontal scroll offset when navigating to a heading.
   *
   * default: 0
   */
  offsetLeft?: number;

  /**
   * Determines whether scrolling is instant or animates smoothly.
   *
   * default: "smooth"
   */
  scrollBehavior?: ScrollBehavior;

  /**
   * If true, always show all nested levels. If false, only expand the branch containing the active heading.
   *
   * default: false
   */
  expandAll?: boolean;

  /**
   * Always expand TOC up to this depth (1 = H2, 2 = H3, etc.).
   *
   * default: 1
   */
  expandDepth?: 1 | 2 | 3 | 4 | 5;
}

export const TocTopBar = ({
  title,
  topBarClassName,
  topBarTitleClassName,
  listIconClassName,
  modalBackgroundClassName,
  modalClassName,
  modalHeaderClassName,
  modalTitleClassName,
  modalContentClassName,
  closeIconClassName,
  listClassName,
  linkClassName,
  activeClassName,
  offsetTop = 30,
  offsetLeft = 0,
  scrollBehavior = "smooth",
  expandAll = false,
  expandDepth = 1,
}: TocTopBarProps) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <div className={["react-toc-top-bar", topBarClassName].join(" ")}>
        <div
          className={["react-toc-top-bar-title", topBarTitleClassName].join(
            " ",
          )}
        >
          {title}
        </div>
        <button onClick={openModal}>
          <ListIcon
            className={["react-toc-list-icon", listIconClassName].join(" ")}
          />
        </button>
      </div>
      <TocModal
        title={title}
        isOpen={isOpen}
        modalBackgroundClassName={modalBackgroundClassName}
        modalClassName={modalClassName}
        modalHeaderClassName={modalHeaderClassName}
        modalTitleClassName={modalTitleClassName}
        modalContentClassName={modalContentClassName}
        closeIconClassName={closeIconClassName}
        listClassName={listClassName}
        linkClassName={linkClassName}
        activeClassName={activeClassName}
        offsetTop={offsetTop}
        offsetLeft={offsetLeft}
        scrollBehavior={scrollBehavior}
        expandAll={expandAll}
        expandDepth={expandDepth}
        closeModal={closeModal}
      />
    </>
  );
};
